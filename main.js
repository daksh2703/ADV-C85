//reference for canvas 
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
//height and width to the car image
var greencar_width;
var greencar_height;
var background_image = "parkingLot.jpg";
var greencar_image;
//initial position for car image
var greencar_x = 5;
var greencar_y = 235;

function add() {
	//upload car, and background images on the canvas.
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	greencar_imageTag = new Image();
	greencar_imageTag.onload = uploadgreencar;
	greencar_imageTag.src = greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_imageTag, greencar_x, greencar_y, greencar_width, greencar_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	var keyPressed = e.keyCode;
	console.log(keyPressed);
	if (keyPressed == '38') {
		up();
		console.log("up");
	}

	if (keyPressed == '40') {
		down();
		console.log("down");
	}

	if (keyPressed == '37') {
		left();
		console.log("left");
	}

	if (keyPressed == '39') {
		right();
		console.log("right");
	}


}

function up() {
	if (greencar_y >= 45) {
		greencar_y = greencar_y - 10;
		greencar_image = "car(up).png";
		add();
		greencar_width = 75;
		greencar_height = 125;
		console.log(greencar_y);
	}
}

function down() {
	if (greencar_y <= 225) {
		greencar_y = greencar_y + 10;
		greencar_image = "car(down).png";
		add();
		greencar_width = 75;
		greencar_height = 125;
		console.log(greencar_y);
	}
}
function left() {
	if (greencar_x >= -25) {
		greencar_x = greencar_x - 10;
		greencar_image = "car(left).png";
		add();
		greencar_width = 125;
		greencar_height = 75;
		console.log(greencar_x);
	}
}

function right() {
	if (greencar_x <= 700) {
		greencar_x = greencar_x + 10;
		greencar_image = "car(right).png";
		add();
		greencar_width = 125;
		greencar_height = 75;
		console.log(greencar_x);
	}
}
