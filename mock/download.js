import mockjs from 'mockjs';
const Random = mockjs.Random;


module.exports = {

  'GET /api/downloadPage/downloadInfo':(req, res) => {
    res.send({
      status_code: 200,
      code: 200,
      data:{
        iconUrl:'',
        name:'Muaskin智慧美妆',
        downloads: 26598,
        size: 49.8,
        versionCode: '1.0.0',
        updateTime : '2018年11月14日',
        description: '<div>muaskin智慧美妆是一款基于检测为基础，根据用户的皮肤状况进行“量身定做”的专业护'
      }
    })
  },



}
