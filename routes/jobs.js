const express = require('express')
const router = express.Router()
const Job = require('../models/Job')

// rota de teste
router.get('/test', (req, res) => {
    res.send('deu certo')
})

// detalhe da vaga
router.get('/view/:id', (req, res) => {
    Job.findByPk(req.params.id)
        .then(job => {
            if (!job) {
                return res.status(404).send('Vaga não encontrada.')
            }

            res.render('view', {
                job
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).send('Erro ao buscar a vaga.')
        })
})

// form da rota de envio
router.get('/add', (req, res) => {
    res.render('add')
})

// add job via post
router.post('/add', (req, res) => {
    let { title, salary, company, description, email } = req.body;

    const campos = [title, salary, company, description, email]

    if (!campos.every(campo => typeof campo === 'string' && campo.trim())) {
        return res.status(400).send('Preencha todos os campos corretamente.')
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
        return res.status(400).send('Informe um e-mail válido.')
    }

    Job.create({
        title: title.trim(),
        description: description.trim(),
        salary: salary.trim(),
        company: company.trim(),
        email: email.trim(),
        new_job: 1
    })
        .then(() => res.redirect('/'))
        .catch(err => {
            console.log(err)
            res.status(500).send('Erro ao cadastrar a vaga.')
        })
});

module.exports = router