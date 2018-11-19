import mockjs from 'mockjs';
const Random = mockjs.Random;


module.exports = {

  'GET /api/gw/expore/home':(req, res) => {
      res.send({
          status: 'success',
          code: 200,
          message: '成功',
          data: {
            informationList: [
              {
                id: '0001',
                image:'https://img.xiaopiu.com/userImages/img1472163deb24498.png',
                title:'补水保湿滋润001',
                content:'SPF指数主要是防止UVB，但并不会是 越高越好，过高的SPF指数会带来皮肤 刺激',
                stats:{
                  icon: 'https://img.xiaopiu.com/userImages/img2558163f2b57f78.png',
                  record:11111,
                },
                route:'/explore/consultantDetail',
              },
              {
                id: '0002',
                image:'https://img.xiaopiu.com/userImages/img1472163deb24498.png',
                title:'补水保湿滋润002',
                content:'SPF指数主要是防止UVB，但并不会是 越高越好，过高的SPF指数会带来皮肤 刺激',
                stats:{
                  icon: 'https://img.xiaopiu.com/userImages/img2558163f2b57f78.png',
                  record:22222,
                },
                route:'/explore/consultantDetail',
              },
              {
                id: '0003',
                image:'https://img.xiaopiu.com/userImages/img1472163deb24498.png',
                title:'补水保湿滋润003',
                content:'SPF指数主要是防止UVB，但并不会是 越高越好，过高的SPF指数会带来皮肤 刺激',
                stats:{
                  icon: 'https://img.xiaopiu.com/userImages/img2558163f2b57f78.png',
                  record:3333,
                },
                route:'/explore/consultantDetail',
              },
            ],

            logList:[
              {
                id:'111',
                icon: 'https://img.xiaopiu.com/userImages/img9159694579f0.jpeg',
                name: '若寒',
                subtitle:'今天10:39',
                content: '她们都是从小“美”到大的美人胚子，很多人的美，从小就注定。你知道吗？最近一个8岁...',
                lives: [
                    {
                      url: 'https://img.xiaopiu.com/userImages/img8159694579f0.jpeg',
                    },
                    {
                      url: 'https://img.xiaopiu.com/userImages/img10159694579f0.jpeg',
                    },
                    {
                      url: 'https://img.xiaopiu.com/userImages/img11159694579f0.jpg',
                    }
                ],
                tags:[
                    {
                      tagName: '#美白#',
                    },
                    {
                      tagName: '#祛痘#',
                    },
                    {
                      tagName: '#润湿护肤#'
                    }
                ],
                stats:[
                    {
                      icon: 'https://img.xiaopiu.com/userImages/img2558163f2b57f78.png',
                      record: 22222
                    },
                    {
                      icon:'https://img.xiaopiu.com/userImages/img2558163f2b57f78.png',
                      record: 336555
                    }
                ],
                route: '/explore/diaryDetail'
              }
            ],
            sampleList: [
              {
                id:'001',
                title: '补水保湿滋润',
                cover: 'https://img.xiaopiu.com/userImages/img7116347d58288.png'
              }
            ],
            tagList:[
              {
                'name': '美白天然去痘',
              },
              {
                'name': '抗皱',
              },
              {
                'name': '抗皱',
              }
            ],
          }
      });

  },
  'GET /api/gw/expore/consultantDetail/*':(req, res) => {
    res.send({
        status: 'success',
        code: 200,
        message: '成功',
        data: {
          stockId: '3222',
          stockType: 'consultant',
          title:'油性皮肤怎么改善 6招让肌肤变清爽',
          subtitle: '今天 16:32',
          content: '<div style="width: 100%;height: 375px;background-position: center center;background-repeat:no-repeat;background-size: cover;\
          background-image: url(https://img.xiaopiu.com/userImages/img8159694579f0.jpeg)"></div>\
          <p>ss你知道吗？最近一个8岁小女孩在网上走红，8岁伊朗小女孩马蒂（Mahdis）， 因其拥有超的高颜值，被国外媒体封为“全球最美女孩”。</p>',
          commentNumber: '999',
          likeNumber:'856',
          commentList: [
            {
              id: '00001',
              icon: 'https://img.xiaopiu.com/userImages/img115969455ab0.jpg',
              name: '若寒',
              commentName: '',
              content: '设计费号待审核分开连锁店GV地方GV看是',
              API: '',
              subtitle:'7-20 17:20'
            },
            {
              id: '00001',
              icon: 'https://img.xiaopiu.com/userImages/img11159694579f0.jpg',
              name: '若寒',
              commentName: '李斯',
              content: '设计费号待审核分开连锁店GV地方GV看是',
              API: '',
              subtitle:'7-20 17:20'
            }
          ],
          likeList:[
            {
              id:'001',
              icon: 'https://img.xiaopiu.com/userImages/img11159694579f0.jpg',
              title: 'administrator',
              content: '2018-8-9 16:36'
            },
            {
              id:'002',
              icon: 'https://img.xiaopiu.com/userImages/img11159694579f0.jpg',
              title: 'administrator',
              content: '2018-8-9 16:36'
            }
          ],
          recommendList:[
            {
              id:'001',
              title: '祛痘消炎祛痘消炎祛痘消炎祛痘消炎祛痘消炎祛痘消炎祛痘消炎祛痘消炎祛痘消炎祛痘消炎',
              subtitle:'280.00',
              icon: 'https://img.xiaopiu.com/userImages/img5065164ee03dd20.png'
            },
            {
              id:'002',
              title: '祛痘消炎祛痘消炎祛痘消炎祛痘消炎',
              subtitle:'280.00',
              icon: 'https://img.xiaopiu.com/userImages/img5067164ee040c00.png'
            },
            {
              id:'003',
              title: '祛痘消炎祛痘消炎祛痘消炎祛痘消炎祛痘消炎祛痘消炎祛痘消炎祛痘消炎祛痘消炎祛痘消炎',
              subtitle:'280.00',
              icon: 'https://img.xiaopiu.com/userImages/img5065164ee03dd20.png'
            }
          ]
        }

    })
  },

  'GET /api/gw/expore/diaryDetail/*':(req, res) => {
    res.send({
      status: 'success',
      code: 200,
      message: '成功',
      data:{
        stockId: '1111222333',
        stockType: 'log',
        name:'若寒',
        avatar: 'https://img.xiaopiu.com/userImages/img115969455ab0.jpg',
        subtitle: '今天 16:19',
        commentNumber: '66',
        likeNumber: '77',
        imageCarouselList: [
          {
            url:"https://img.xiaopiu.com/userImages/img8159694579f0.jpeg"
          }
        ],
        content: '<p>她们都是从小“美”到大的美人胚子，很多人的美，从小就注定。 你知道吗？最近一个8岁小女孩在网上走红</p>',
        tagList: ['美白天然去痘','抗皱','抗斑'],
        commentList: [
          {
            id: '00001',
            icon: 'https://img.xiaopiu.com/userImages/img115969455ab0.jpg',
            name: '若寒',
            commentName: '',
            content: '设计费号待审核分开连锁店GV地方GV看是',
            API: '',
            subtitle:'7-20 17:20'
          },
          {
            id: '00001',
            icon: 'https://img.xiaopiu.com/userImages/img11159694579f0.jpg',
            name: '若寒',
            commentName: '李斯',
            content: '设计费号待审核分开连锁店GV地方GV看是',
            API: '',
            subtitle:'7-20 17:20'
          }
        ],
        likeList:[
          {
            id:'001',
            icon: 'https://img.xiaopiu.com/userImages/img11159694579f0.jpg',
            title: 'administrator',
            content: '2018-8-9 16:36'
          },
          {
            id:'002',
            icon: 'https://img.xiaopiu.com/userImages/img11159694579f0.jpg',
            title: 'administrator',
            content: '2018-8-9 16:36'
          }
        ]
      }
    })
  },

  'GET /api/sampleDetail/*':(req, res) => {
    res.send({
      status: 'success',
      code: 200,
      data:{
        id:'001',
        partaken: false,
        imageCarouselList: [
          {
            url:"http://images.10mup.com/20170708154906841-0DuiLUvq.jpg",
          }
        ],
        title:'弹润淡斑焕白体验装',
        subtitle: '二级标题二级标题二级标题二级标题二级标题二级标题',
        note:'<p>试用装详情页content</p>'
      }
    })
  },

  'POST /api/sampleApply/*':(req, res) => {
    res.send({
      status_code: 200,
      code: 200,
      data:{
      }
    })
  },

  'GET /api/queryDiaryTag':(req, res) => {
    res.send({
      status_code: 200,
      code: 200,
      data:{
        tagList: [
          {
            name: '干性肌肤'
          },
          {
            name: '美白'
          },
          {
            name: '护肤'
          },
        ]
      }
    })
  },

  'POST /api/published/*':(req, res) => {
    res.send({
      status_code: 200,
      code: 200,
      data:{

      }
    })
  },

  'POST /api/cms/favorites/*':(req, res) => {
    res.send({
      status_code: 200,
      code: 200,
      data:{

      }
    })
  },

  'GET /api/skinHousekeeper/testReport/*':(req, res) => {
    res.send({
      data:{
         percentage: '69%',
         skinType: '敏感皮肤',
          reportResultList:[
            {
              name: '综合得分',
              value: '51分'
            },
            {
              name: '问题肌肤',
              value: '敏感皮肤'
            }
          ],
          reportDetailList: [
            {
              name: '注意事项',
              value: '注意事项撒旦飞洒法撒旦法撒反对啥法撒旦法撒旦法卡了三等奖发生'
            },
            {
              name: '皮肤护理',
              value: '注意事项撒旦飞洒法撒旦法撒反对啥法撒旦法撒旦法卡了三等奖发生'
            }
          ],
          skinAssessList:['肤质','斑点','毛孔','皱纹','水粉','肤色','粗糙度','紫外班'],
          assessmentList:[
            {
              title:'定量分析结果',
              content: '按实际峰会上卡京东方贺卡上交电话费看见萨达哈卡死返回看见'
            }
          ]
      }
    })
  },

  'GET /api/skinHousekeeper/testRecord':(req, res) => {
    res.send({
      status_code: 200,
      code: 200,
      data:{
        records:[
          {
            time:'2018-8-8',
            list:[
              {
                name: '综合得分',
                value:'55'
              }
            ]
          }
        ]
      }
    })
  },



}
