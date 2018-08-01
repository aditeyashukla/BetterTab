var count = 0;

function increaseCount(count){
  count++;
}
function formdata()
{
  var myVar= document.getElementById("firstname").value;
  console.log(myVar);
document.getElementById("para2").innerHTML = myVar;
Cookies.set('link', myVar);
//document.cookie = myVar + "; path=/;";
//TO DELETE A COOKIE document.cookie = "sitename=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
var x = Cookies.get('link');
console.log(x);
}

function formdatacheck(){
  var p = Cookies.get('link');
  if(p==null){return;}
  else{
  document.getElementById("para2").innerHTML = p;
}
}


function formdata2()
{
  var myVar2= document.getElementById("firstname2").value;
  console.log(myVar2);
document.getElementById("para3").innerHTML = myVar2;
Cookies.set('link2', myVar2);
//document.cookie = myVar + "; path=/;";
//TO DELETE A COOKIE document.cookie = "sitename=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
var x = Cookies.get('link2');
console.log(x);
}

function formdatacheck2(){
  var p = Cookies.get('link2');
  if(p==null){return;}
  else{
  document.getElementById("para3").innerHTML = p;
}
}
function formdata3()
{
  var myVar3= document.getElementById("firstname3").value;
  console.log(myVar3);
document.getElementById("para4").innerHTML = myVar3;
Cookies.set('link3', myVar3);
//document.cookie = myVar + "; path=/;";
//TO DELETE A COOKIE document.cookie = "sitename=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
var x = Cookies.get('link3');
console.log(x);
}



function formdatacheck3(){
  var p = Cookies.get('link3');
  if(p==null){return;}
  else{
  document.getElementById("para4").innerHTML = p;
}
}

function formdata4()
{
  var myVar4= document.getElementById("firstname4").value;
  console.log(myVar4);
document.getElementById("para5").innerHTML = myVar4;
Cookies.set('link4', myVar4);
//document.cookie = myVar + "; path=/;";
//TO DELETE A COOKIE document.cookie = "sitename=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
var x = Cookies.get('link4');
console.log(x);
}

function formdatacheck4(){
  var p = Cookies.get('link4');
  if(p==null){return;}
  else{
  document.getElementById("para5").innerHTML = p;
}
}


document.addEventListener('DOMContentLoaded', function () {
  formdatacheck();
  formdatacheck2();
  formdatacheck3();
  formdatacheck4();
  document.querySelector('#button').addEventListener('click', formdata);
  document.querySelector('#button2').addEventListener('click', formdata2);
  document.querySelector('#button3').addEventListener('click', formdata3);
  document.querySelector('#button4').addEventListener('click', formdata4);
  //main();
});
