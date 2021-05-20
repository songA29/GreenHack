module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Post', {
            title: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            content: {
                type: DataTypes.STRING(500),
                allowNull: false,
            },
            img: { // 수정하기!
                type: DataTypes.STRING(200),
                allowNull: true,
            },
        }, {
            //모델의 옵션들을 지정하는곳
            freezeTableName: true, //모든 TableName을 복수형이 아닌 Model을 설정할때 이름 그대로 사용하게, 모델명과 DB 테이블 이름을 동일하게 설정해줌
            timestamps: true, // 자동으로 CreatedAt, UpdatedAt
            paranoid: true, //true로 설정하면 deletedAt 이라는 컬럼이 생김, 로우를 삭제하게되면 실제 데이터는 삭제되지 않고 deletedAt 컬럼에 지운 시간이 기록됨. 그리고 deletedAt 컬럼에 시간이 기록되면 Select할때는 집계되지 않음.
            underscored: true, //스네이크 케이스(created_at)로 변경됨
        }
    )
};