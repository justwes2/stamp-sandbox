var imageLoader = document.getElementById('imageLoader');
    imageLoader.addEventListener('change', importImage, false);
var canvas = document.getElementById('imageCanvas');
canvas.addEventListener('click', stampImage)
var ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;
var imagePresent
var img = new Image();

function importImage(e){
    var reader = new FileReader();
    reader.onload = function(event){
        imagePresent = true
        img.onclick = stampImage
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
}

function stampImage(e){
  if (!imagePresent) return
  var x = e.clientX-(img.width/2);     // Get the horizontal coordinate
  var y = e.clientY-(img.height/2);     // Get the vertical coordinate
  ctx.drawImage(img,x,y);
}
