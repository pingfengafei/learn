/**
 * Created by luo_f on 2017/5/11.
 */

var test = "GUID=09031152310696452023; _bfa=1.1493082765867.436m6w.1.1493269258766.1493292158928.3.30; _gat=1; _bfa=1.1493082765867.436m6w.1.1493292158928.1494486182855.4.31; _bfs=1.1; _bfi=p1%3D153001%26p2%3D0%26v1%3D31%26v2%3D0; cticket=9F4FFA7265D96D6F6CAFB397445EEF0723DC676A25A141EF7ABE2D7281B130E0; DUID=u=4525BEF7017C1703FF0874D832DC950B&v=0; IsNonUser=F; UUID=D0E2DFE924BA460EAE44A36B1EE9D52D; IsPersonalizedLogin=T; _bfa=1.1493082765867.436m6w.1.1493269258766.1493292158928.3.31; _bfs=1.2; MKT_Pagesource=H5; _ga=GA1.2.1697563749.1493100073; _gid=GA1.2.2103276328.1494486223; _bfi=p1%3D600001464%26p2%3D153001%26v1%3D31%26v2%3D31";

function cookieToObject(str) {
  var arr = str.split(';');
  var obj = {};
  arr.forEach(function(val, index){
    if(val.trim()){
      var nodeArr = val.trim().split('=');
      obj[nodeArr[0].trim()] = nodeArr[1].trim();
    }
  });
  return obj;
}

console.log(cookieToObject(test));