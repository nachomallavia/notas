const path = require ('path');
const db = require('../database/models/index.js')
const controller = {
        main:(req,res)=>{
        db.Nota.findAll().then(function (notas){
            res.render('../views/index.ejs',{notas:notas})
        })
        
        },
    detail:(req,res)=>{
        db.Nota.findByPk(req.params.id)
        .then(function (nota){
            res.render('../views/detail.ejs',{nota:nota})
        })
    },
    create:(req,res)=>{
        
        db.Nota.create({
            title: req.body.title,
            content: req.body.content
        }).then(function(){
            res.redirect('/')
        })
    },update:(req,res)=>{
        db.Nota.update({
            title: req.body.title,
            content: req.body.content
        },{
            where:{id: req.params.id}

        }).then(function(){
            res.redirect('/');
        })
    },
    delete:(req,res)=>{
        db.Nota.destroy({
            where: {id: req.params.id}
        }).then(function (){
            res.redirect('/');
        })
    }



} // cierra el controller

module.exports = controller;