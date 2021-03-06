module.exports = (sequelize, dataTypes) => { 

    let alias = 'Restriction'; 
    //----------------------------------------
    let cols = { 
        id: { 
            type: dataTypes.BIGINT(10).UNSIGNED, 
            primaryKey: true, 
            allowNull: false, 
            autoIncrement: true
        }, 
        name: {
            type: dataTypes.STRING(100), 
            allowNull: false
        }

    }; 
    //----------------------------------------
    let config = {
        timestamps: false, 
        tableName: 'restrictions'
    };
    //----------------------------------------

    const Restriction = sequelize.define(alias, cols, config); 

    //Creacion de relaciones 

    Restriction.association = function(models) {
        Restriction.hasMany(models.Movie,{
            as: "movie",
            foreignKey: "restriction_id"
        })
    }




    return Restriction;
}