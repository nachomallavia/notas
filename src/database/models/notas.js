let modelo = function(sequelize, dataTypes){
    let alias = "Nota";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            notNull: true,
            primaryKey: true,
            autoIncrement: true,
        },
        title:{
            type: dataTypes.STRING,
            notNull: true
        },
        content:{
            type: dataTypes.STRING,
            notNull: true
        }
    }
    let config = {
        tableName: "notas",
        timeStamps: true
    }
    let Notas = sequelize.define( alias, cols, config );
    return Notas;
}
module.exports = modelo;