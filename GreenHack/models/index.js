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

// 모델 연결
db.User = require('./user')(sequelize, Sequelize);
db.Interest = require('./interest')(sequelize, Sequelize);
db.Post = require('./post')(sequelize, Sequelize);
db.PostInterest = require('./post_interest')(sequelize, Sequelize);
db.UserInterest = require('./user_interest')(sequelize, Sequelize);
db.Emissions = require('./emissions')(sequelize, Sequelize);
db.RecyclingStatus = require('./recycling_status')(sequelize, Sequelize);

module.exports = db;