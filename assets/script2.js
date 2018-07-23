window.onload=function(){
   var thediv=document.getElementById("yourid");
   var imgarray = new Array("“wall.jpg”,”wall2.jpg","wall3.jpg","wall4.jpg","wall5.jpg","wall6.jpg","wall7.jpg","wall8.jpg","wall9.jpg","wall10.jpg","wall11.jpg","wall12.jpg");
   var spot =Math.floor(Math.random()* imgarray.length);
   thediv.style.background="url("+imgarray[spot]+")";
}
