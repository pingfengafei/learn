/**
 * Created by luo_f on 2017/9/12.
 */
function convertQueryToMap (query) {
  let queryList = query.split('&')
  return queryList.reduce((obj, item) => {
    itemList = item.split('=')
    return itemList.reduce((itemObj, item1, index) => {
      if (index === 0) { //key
        return item1.split('.').reduce((item2Obj, item2, index) => {
          if (!item2Obj[item2]) { //这里有一步bug
            item2Obj[item2] = {} //这里有一个循环，不清楚怎么解决
            item2Obj = item2Obj[item2]
          }
          return item2Obj

        }, itemObj)
      }else{
        console.log('value', item1)
      }
    }, obj)
  }, {})
}

console.log(convertQueryToMap('user.name.firstname.aaaa.bbbbb.ccccc.ddddd=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue'))

//  queryList.map((val) => {return decodeURIComponent(val)})