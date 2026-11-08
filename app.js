const express = require('express')
const { engine } = require('express-handlebars')
const app = express();
const path = require('path')
const db = require('./db/connection')
const bodyParser = require('body-parser')
const Job = require('./models/Job')
const Sequelize = require('sequelize');
const { serialize } = require('v8');
const Op = Sequelize.Op

const PORT = 3000;

// body parser
app.use(bodyParser.urlencoded({ extended: false }))

// handle bars
app.set('views', path.join(__dirname, 'views'))
app.engine('handlebars', engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//static folder
app.use(express.static(path.join(__dirname, 'public')));

// db connection
db.authenticate()
    .then(() => {
        console.log('Conectou ao banco de dados com sucesso')

        app.listen(PORT, function () {
            console.log(`O Express está rodando na porta ${PORT}`)
        })
    })
    .catch(err => {
        console.log('Ocorreu um erro ao conectar', err)
    })

// routes
app.get('/', (req, res) => {
    let search = req.query.job
    let query = '%' + search + '%'

    const options = {
        order: [['createdAt', 'DESC']]
    }

    if (search) {
        options.where = {
            title: { [Op.like]: query }
        }
    }

    Job.findAll(options)
        .then(jobs => {
            jobs = jobs.map(job => {
                const idade = Date.now() - new Date(job.createdAt).getTime()

                job.dataValues.new_job = idade >= 0 && idade <= 7 * 24 * 60 * 60 * 1000

                return job
            })

            res.render('index', {
                jobs,
                search
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).send('Erro ao carregar as vagas.')
        })
})

// jobs routes
app.use('/jobs', require('./routes/jobs'))