const Post = require('./post');
const Interest = require('./interest');

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('PostInterest', {
            post_id: {
                type: DataTypes.INTEGER,
                reference: {
                    model: Post,
                    key: 'id',
                }
            },
            interest_id: {
                type: DataTypes.INTEGER,
                reference: {
                    model: Interest,
                    key: 'id',
                }
            },
        }, {
            //모델의 옵션들을 지정하는곳
            freezeTableName: true, //모든 TableName을 복수형이 아닌 Model을 설정할때 이름 그대로 사용하게, 모델명과 DB 테이블 이름을 동일하게 설정해줌
            timestamps: true, // 자동으로 CreatedAt, UpdatedAt
            underscored: true, //스네이크 케이스(created_at)로 변경됨
        }
    )
};