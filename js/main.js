var sound = new Howl({
  urls: ['./assets/blaster_shot.wav'],
  volume: 0.5,
  onload: function(){console.log("Sound loaded.")},
  onloaderror: function(msg){console.log("Sound load error: " + msg + ".")}
});

function init(){
	canvas.addEventListener("mouseup", onMouseUp, false);
	canvas.addEventListener("touchup", onTouchUp, false);
}
init();

function onMouseUp(event){
	var x = event.pageX - canvas.offsetLeft;
	var y = event.pageY - canvas.offsetTop;

	//console.log("onMouseUp x: " + x);
	//console.log("onMouseUp y: " + y);

	sound.play();
}