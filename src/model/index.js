const sequelize = require("sequelize");

const db = new sequelize({
    database: 'realworlddb',
    username: 'realworlduser',
    password: 'realworldpass',
    dialect: 'mysql'
});

//models that are require
const Users  = db.define('user',{
    email:{
        type: sequelize.STRING,
        validate:{
            isEmail:true
        },
        uique: true,
        allowNull: false
    },
    username: {
        type: sequelize.STRING,
        primaryKey: true
    },
    bio: sequelize.STRING,
    image:
    {
        type: sequelize.STRING,
        allowNull: true,
        validate:{
            isUrl: true
        }
    }
});

const Articles = db.define('article', {
    "slug": {
      type: sequelize.STRING,
      primaryKey: true
    },
    "title": {
      type: sequelize.STRING(50),
      allowNull: false
    },
    "description": {
      type: sequelize.STRING(100),
    },
    "body": sequelize.STRING,
  })
  
  const Comments = db.define('comment', {
    body: {
      type: sequelize.STRING,
      allowNull: false
    }
  })
  
  const Tags = db.define('tag', {
    name: {
      type: sequelize.STRING,
      primaryKey: true
    }
  })
  
  Comments.belongsTo(Articles)
  Articles.hasMany(Comments)
  
  Comments.belongsTo(Users, { as: 'author' })
  
  Articles.belongsTo(Users, { as: 'author' })
  Users.hasMany(Articles)
  
  Articles.belongsToMany(Users, { through: 'favourites' })
  Users.belongsToMany(Articles, { through: 'favourites' })
  
  Articles.belongsToMany(Tags, { through: 'article_tags' })
  Tags.belongsToMany(Articles, { through: 'article_tags' })
  
  
  module.exports = {
    db,
    Users, Articles, Comments, Tags
  }
