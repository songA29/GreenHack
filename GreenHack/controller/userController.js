// const crypto = require('crypto');
// const util = require('../modules/util');
// const responseMessage = require('../modules/responseMessage');
// const statusCode = require('../modules/statusCode');
// const { User } = require('../models'); //models/index가 정의된 상대경로
//
//
// module.exports = {
//     signup : async (req, res) => {
//         const { email, password, nickName } = req.body;
//
//         //2. request data 확인하기, email, password, userName data가 없다면 NullValue 반환
//         if(!email || !password || !nickName){
//             console.log('필요한 값이 없습니다');
//             return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
//         }
//
//         try{
//             //3. 존재하는 이메일인지 확인하기. 이미 존재하는 이메일면 ALREADY ID 반환
//             const alreadyEmail = await User.findOne({
//                 where: {
//                     email: email,
//                 }
//             });
//             if(alreadyEmail) {
//                 console.log('이미 존재하는 이메일 입니다.');
//                 return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.ALREADY_ID));
//             }
//             //4. salt 생성
//             const salt = crypto.randomBytes(64).toString('base64');
//
//             //5. 2차 세미나때 배웠던 pbkdf2 방식으로 (비밀번호 + salt) => 암호화된 password
//             const hashedPassword = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('base64');
//
//             //6. User email, 암호화된 password, salt, userName 생성!
//             const user = await User.create({
//                 email: email,
//                 password: hashedPassword,
//                 nickName: nickName,
//                 salt: salt,
//             });
//             console.log(user);
//
//             //7. status: 200 message: SING_UP_SUCCESS, data: id, email, userName 반환! (비밀번호, salt 반환 금지!!)
//             return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.SIGN_UP_SUCCESS, { id: user.id, email, nickName }));
//         } catch(error) {
//
//             console.error(error);
//             return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.SIGN_UP_FAIL));
//
//         }
//
//     },
//     signin : async (req, res) => {
//
//     }
// }