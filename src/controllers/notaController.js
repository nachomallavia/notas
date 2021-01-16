const path = require ('path');
const controller = {
    main: function (req,res){
        res.render ('../views/index.ejs');
    },
    detail:(req,res)=>{
        res.render('../views/detail.ejs');
    }
}

module.exports = controller;