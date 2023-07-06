function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_gameover = loadSound("gameover.wav");
	mario_kill = loadSound("kick.wav");
	mario_die=loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
	video = createCapture(VIDEO);
	video.size(800,400);

	video.parent('game_console')
	poseNet= ml5.poseNet(video , modalLoaded );
	poseNet.on( 'pose' , gotposes)


}
function modalLoaded(){
console.log(" modal loaded !!")}

function gotposes(results){
if (results.length>0) {
	noseX = results[0].pose.nose.x;
	noseY = results[0].pose.nose.y;
	console.log( "x = "+ noseX+" y = "+ noseY);
}
}


function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas')
	instializeInSetup(mario);
}

function draw() {
	game()
}






