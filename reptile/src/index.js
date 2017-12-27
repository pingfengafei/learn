/**
 * Created by luo_f on 2017/5/11.
 */

var superagent = require('superagent')
var charset = require('superagent-charset')
var cheerio = require('cheerio')
var async = require('async')

charset(superagent); //编码中文，否则中文可能会出现乱码

/**
 *@type []
 * 存储filter后的数据
 * eg：
 * [{
 *   url : url,
 *   firstCommentContent : 'hello world',
 *   firstCommentUserID : 'userid',
 *   firstCommentUserScore : 1000
 * }
 * ]
 *
 */
var resultList = [];
const baseUrl = 'http://stackoverflow.com/';

function init() {
  superagent.get(baseUrl)
      .end((err, response) => {
        if (err) {
          console.error('error');
        } else {
          var $ = cheerio.load(response.res.text, {decodeEntities: false});
          $('body').find('.question-summary h3').each((i, e) => {
            let obj = {};
            obj.title = $(e).text();
            obj.href = $(e).find('a').attr('href');
            resultList.push(obj);
          });
          resultList.forEach(async (item, index) => {
            var response = await getFirstComment(item.href);
            var $$ = cheerio.load(response.res.text, {decodeEntities: false});

            $$('body').find('.answer').each((i, elem) => { //没找到获取第一个.answer的方法，用each替代
              if (i === 0) {
                let html = $(elem).html();
                resultList[index].firstCommentContent = '回复内容太长，用个字段替代';

                let userInfo = $(elem).find('.user-info .user-details a');
                let userLinkPath = $(userInfo).attr('href');
                let userName = $(userInfo).text();

                resultList[index].firstCommentUserID = userName;
                resultList[index].firstCommentUserLink = userLinkPath;

                //console.log(resultList[index]);

                //哈哈哈， 我知道卡在这里的原因了
                //通过bind index方式匹配数组下标解决需求
                getFirstComment(userLinkPath, index).then(response => {
                  let $$$ = cheerio.load(response.response.res.text, {decodeEntities: false});
                  let userScore = $$$('body #user-card .reputation').text();
                  resultList[response.index].userScore = userScore;
                  console.log(resultList[index]);
                }, reject => {
                });


              }
            });
          });
        }
      });
}

async function getFirstComment(path, index) {
  var response = await promisefySuperAgent(path).then(response => {
    if (index >= 0) {
      return {
        response: response,
        index: index
      }
    } else {
      return response;
    }

  }, reject => {
    return reject;
  });

  return response;

}

//promise superagent
function promisefySuperAgent(path) {
  return new Promise((resolve, reject) => {
    superagent.get(baseUrl + path).end((err, response) => {
      if (err) {
        reject();
      } else {
        resolve(response);
      }
    });
  });
}


init();
//setTimeout(()=>{console.log(arr)}, 10000);