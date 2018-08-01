document.getElementById("para1").innerHTML = formatAMPM();

function formatAMPM() {
var d = new Date(),
    minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
    hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
    ampm = d.getHours() >= 12 ? 'pm' : 'am',
    months = ['January','February','March','April','May','June','July','August','September','October','November','December'],
    days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
if (hours > 12) {hours = hours - 12;}
return days[d.getDay()]+', '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+'<br>'+hours+':'+minutes+ampm;
document.getElementById("para1").innerHTML = formatAMPM();
setTimeout(formatAMPM, 1000);
}


document.getElementById("para3").innerHTML = returnsite();
function returnsite() {
  var y = Cookies.get('link');
  if (y==null || y == '')
    { document.getElementById("cba").src="thumb/0.png";
      return "";}
  else
  {
  document.getElementById("abc").href="http://"+y;
  document.getElementById("cba").src="thumb/"+y[0]+".png";
  document.getElementById("abc").title=y;
  var bgarray = new Array("bg1.png","bg2.png","bg3.png","bg4.png","bg5.png","bg6.png","bg7.png");
  var spo = Math.floor(Math.random()* bgarray.length);
  document.getElementById("cba").style.background="url(bg/"+bgarray[spo]+")";
//if (y==undefined){document.getElementById("cba").style.visibility="hidden";}
  return "";
  }
//  console.log(y[0]);
//return y;

}
document.getElementById("para4").innerHTML = returnsite2();
function returnsite2() {

  var s = Cookies.get('link2');
  if (s==null || s == '')
    { document.getElementById("cba2").src="thumb/0.png";
      return "";}
  else
  {
  document.getElementById("abc2").href="http://"+s;
  document.getElementById("cba2").src="thumb/"+s[0]+".png";
  document.getElementById("abc2").title=s;
  var bgarray = new Array("bg1.png","bg2.png","bg3.png","bg4.png","bg5.png","bg6.png","bg7.png");
  var spo = Math.floor(Math.random()* bgarray.length);
  document.getElementById("cba2").style.background="url(bg/"+bgarray[spo]+")";

  return "";
}
//  console.log(y[0]);
//return y;

}

document.getElementById("para5").innerHTML = returnsite3();
function returnsite3() {

  var s = Cookies.get('link3');
  if (s==null || s == '')
    { document.getElementById("cba3").src="thumb/0.png";
      return "";}
  else
  {
  document.getElementById("abc3").href="http://"+s;
  document.getElementById("cba3").src="thumb/"+s[0]+".png";
  document.getElementById("abc3").title=s;
  var bgarray = new Array("bg1.png","bg2.png","bg3.png","bg4.png","bg5.png","bg6.png","bg7.png");
  var spo = Math.floor(Math.random()* bgarray.length);
  document.getElementById("cba3").style.background="url(bg/"+bgarray[spo]+")";

  return "";
}
//  console.log(y[0]);
//return y;

}


document.getElementById("para6").innerHTML = returnsite4();
function returnsite4() {

  var s = Cookies.get('link4');
  if (s==null || s == '')
    { document.getElementById("cba4").src="thumb/0.png";
      return "";}
  else
  {
  document.getElementById("abc4").href="http://"+s;
  document.getElementById("cba4").src="thumb/"+s[0]+".png";
  document.getElementById("abc4").title=s;
  var bgarray = new Array("bg1.png","bg2.png","bg3.png","bg4.png","bg5.png","bg6.png","bg7.png");
  var spo = Math.floor(Math.random()* bgarray.length);
  document.getElementById("cba4").style.background="url(bg/"+bgarray[spo]+")";

  return "";
}
//  console.log(y[0]);
//return y;

}

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
