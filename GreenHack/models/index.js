const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// user 모델 연결
db.User = require('./user')(sequelize, Sequelize);
// interest 모델 연결
db.Interest = require('./interest')(sequelize, Sequelize);
// post 모델 연결
db.Post = require('./post')(sequelize, Sequelize);


//User:Post => 1:N
db.User.hasMany(db.Post, {foreignKey: user_id});
db.Post.belongsTo(db.User, {foreignKey: user_id});


//N:M
//User:Interest => user_interest
db.User.belongsToMany(db.Interest, {through: 'UserInterest', as: 'Chosen', foreignKey: 'user_id'});
db.Interest.belongsToMany(db.User, {through: 'UserInterest', as: 'Chooser', foreignKey: 'interest_id'});

//Post:Interest => post_interest
db.Post.belongsToMany(db.Interest, {through: 'PostInterest', as: 'Done', foreignKey: 'post_id'});
db.Interest.belongsToMany(db.Post, {through: 'PostInterest', as: 'Doer', foreignKey: 'interest_id'});

//User:Post => scrap
db.User.belongsToMany(db.Post, {through: 'Scrap', as: 'Scraped', foreignKey: 'user_id'});
db.Post.belongsToMany(db.User,  {through: 'Scrap', as: 'Scraper', foreignKey: 'post_id'});

module.exports = db;