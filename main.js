function preload() {
	world_start = loadSound("world_start.wav");
	mario_gameover = loadSound("gameover.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent("canvas");
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent("game_console");
	posenet = ml5.poseNet(video,modalloaded);
	posenet.on("pose",gotposes);
}
function modalloaded(){
	console.log("modal has loaded");
}
function gotposes(results){
	if(results.length > 0){
		console.log(results);
		nosex = results[0].pose.nose.x;
		nosey = results[0].pose.nose.y;
		console.log(nosex);
		console.log(nosey);
	}
}
function draw() {
	game();
}