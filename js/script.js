function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

var thumbnails = document.getElementById("thumbnails");
var imageHolder = document.getElementById("imageHolder");
var imageNames = [
				"IMAG0445.jpg",
				"IMAG0446.jpg",
        "IMAG0447.jpg",
        "IMAG0448.jpg",
				"IMAG0449.jpg",
				"IMAG0450.jpg",
				"IMAG0451.jpg",
				"IMAG0452.jpg",
				"IMAG0453.jpg",
        "IMAG0454.jpg",
				"IMAG0455.jpg",
				"IMAG0456.jpg",
        "IMAG0457.jpg",
				"IMAG0458.jpg",
				"IMAG0459.jpg",
				"IMAG0460.jpg",];

imageHolder.src = "big/" + imageNames[0];

for(let i=0;i<imageNames.length;i++){
  let img = document.createElement('img');
  let src = document.createAttribute('src');
  src.value = "small/" + imageNames[i];
  img.setAttributeNode(src);
  thumbnails.appendChild(img);
  img.addEventListener('click',()=>{
    imageHolder.src = "big/" + imageNames[i];
  })
}
