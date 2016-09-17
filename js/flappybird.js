function myGame(fn) {
	var game = document.getElementById("game");
	var birdEle = document.getElementById("bird");
	var gameover = false;
	var g = 1;

	var sky = {
		position: 0
	}

	var bird = {
		entity: birdEle,
		speedX: 5,
		speedY: 5,
		x: birdEle.offsetLeft,
		y: birdEle.offsetTop
	}

	function Pipe(position) {
		this.x = position;

		this.width = 52;
		this.upPipeY = 0;
		this.upPipeH = parseInt(Math.random() * 175) + 50;
		this.downPipeY = this.upPipeH + 130;
		this.downPipeH = 400 - this.downPipeY;

		var divUp = document.createElement("div");

		divUp.className = "pipeU";
		divUp.style.left = this.x + "px";
		divUp.style.top = this.upPipeY + "px";
		divUp.style.width = this.width + "px";
		divUp.style.height = this.upPipeH + "px";
		var divDown = document.createElement("div");
		divDown.className = "pipeD";
		divDown.style.left = this.x + "px";
		divDown.style.top = this.downPipeY + "px";
		divDown.style.width = this.width + "px";
		divDown.style.height = this.downPipeH + "px";

		game.appendChild(divUp);
		game.appendChild(divDown);

		var _this = this;
		var timerId = setInterval(function() {
			_this.x -= 1;
			if (_this.x < -52) {
				_this.x = 600;
			}
			if(gameover){
				return;
			}
			if (!gameover) {
				divUp.style.left = _this.x + "px";
				divDown.style.left = _this.x + "px";
			}
			var clsUp = (bird.x + 34 > _this.x) && (bird.x < _this.x + 52) && (bird.y < _this.upPipeH);
			var clsDown = (bird.x + 34 > _this.x) && (bird.x < _this.x + 52) && (bird.y + 26 > _this.downPipeY);
			if (clsUp || clsDown) {
				gameover = true;
				clearInterval(timerId);
				fn();
			}
		}, 10)

	}

	var timer = setInterval(function() {
		if (!gameover) {
			bird.speedY = bird.speedY + g;
			bird.y = bird.y + bird.speedY;
			if (bird.y > 374) {
				bird.y = 374;
				gameover = true;
				clearInterval(timer);
				fn();
			}
			if (bird.y < 0) {
				bird.y = 0;
				gameover = true;
				clearInterval(timer);
				fn();
			}
			bird.entity.style.top = bird.y + "px";
			sky.position -= bird.speedX;
			game.style.backgroundPositionX = sky.position + "px";

		}
	}, 25)

	game.onmousedown = function() {
		bird.speedY = -10;
	}

	for (var i = 0; i < 4; i++) {
		new Pipe(400 + 600 / 4 * i);
	}

}