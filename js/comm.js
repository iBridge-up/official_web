let mulitImg = [
  "./img/bg-s4.webp",
  "./img/area1right.webp",
  "./img/area1left.webp"			  
];
let promiseAll = [];
let img = [];
let imgTotal = mulitImg.length;
 
for (let i = 0; i < imgTotal; i++) {
  promiseAll[i] = new Promise((resolve, reject) => {
	img[i] = new Image();
	img[i].src = mulitImg[i];
	img[i].onload = function() {
	  resolve(this);
	};
  });
}
Promise.all(promiseAll).then(img => {
	document.getElementById("loading").style.display = "none";  
});
var navbtn = document.getElementById("navbtn");
var menu = document.getElementById('menu');
var flag = true;
navbtn.onclick = function(){	
	if(flag){
		navbtn.classList.replace('icon-bars','icon-close');
		menu.style.display = "block"
		flag = false
	}else{
		navbtn.classList.replace('icon-close','icon-bars');
		menu.style.display = "none"
		flag = true
	}
}

 bodymovin.loadAnimation(
	{
	  container: document.getElementById('lottie-1'), // Required
	  path: './lottie/lot1/data.json', // Required
	  renderer: 'svg', // Required
	  loop: true, // Optional
	  autoplay: true, // Optional
	  name: "lottie-1", // Name for future reference. Optional.
	}	
)

 bodymovin.loadAnimation({
  container: document.getElementById('lottie-2'), // Required
  path: './lottie/lot2/data.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true, // Optional
  name: "lottie-2", // Name for future reference. Optional.
})

 bodymovin.loadAnimation({
  container: document.getElementById('lottie-3'), // Required
  path: './lottie/lot3/data.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true, // Optional
  name: "lottie-3", // Name for future reference. Optional.
})


var timebox = document.getElementsByClassName('timebox');

for(let i=0;i<timebox.length;i++){
	timebox[i].onmouseenter = function() {		
		show(i);
	}
}


function show(i) {		
	for (var j = 0; j < timebox.length; j++) {
		timebox[j].className = "timebox it-"+(j+1);
	}
	timebox[i].classList.add('curr'); 
}