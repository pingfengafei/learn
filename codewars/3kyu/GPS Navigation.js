/**
 * Created by luo_f on 2017/9/26.
 */

//典型的背包问题
function navigate(numberOfIntersections, roads, start, finish) {
  let totalMinutes = 0, cityList = []

  //构造一个数组 [{time : 20, order : [1,2,3,4,5,6,7,8]}]
  //其中，order是城市的序列 time是总时间
  //最后排序数组，取出最小time
  //注意是有向图

  let data = []

  let cityAllRoadList = {}

  roads.map(val=>{
    cityAllRoadList[val.from] ?  cityAllRoadList[val.from].push(val) : cityAllRoadList[val.from] = [], cityAllRoadList[val.from].push(val)
  })

  console.log(cityAllRoadList)





}

var roads = [

  {from: 1, to: 2, drivingTime: 10},
  {from: 1, to: 3, drivingTime: 2},
  {from: 2, to: 3, drivingTime: 2},
  {from: 2, to: 4, drivingTime: 5},
  {from: 3, to: 2, drivingTime: 2},
  {from: 0, to: 1, drivingTime: 5},
  {from: 0, to: 2, drivingTime: 10},
  {from: 3, to: 4, drivingTime: 10}
];

navigate(5, roads, 0, 4); //城市数量 城市列表 开始城市 结束城市

//let to be continue