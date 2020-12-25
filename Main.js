console.log(7)
var myImg = document.querySelector('img')
myImg.onclick = function(){
var Src = myImg.getAttribute('src');
if(Src === 'images/firefox-icon.png'){
myImg.setAttribute('src','images/firefox2.png');//changes the image onclicking it
}
else
myImg.setAttribute('src','images/firefox-icon.png');	
}