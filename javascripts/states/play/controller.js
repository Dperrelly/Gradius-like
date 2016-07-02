app.controller("PlayController", function($rootScope, Weapon, PlayerAttack, View, Level, Enemy, Player, Input){
	function init(){
		View.init();
	}
	init();

	var state = "playing";
	var scoreCounter = 0;
	var score = new PIXI.Text('0',{font : '24px Arial', fill : 0xff0000});
	score.position = {x: 1, y: 1};
	View.containers.ui.addChild(score);


	$rootScope.$on('playerDeath', (event, data) => {
        state = "dead";
    });

	function updateAll(delta){
		Enemy.updateAll(delta);
		Player.player.update(delta);
		PlayerAttack.updateAll(delta);
		Level.update(delta);
		Weapon.currentWeapon.update();
	}
 
	Level.load(Level.levels[0]);


	var delta = 1;
	var now = Date.now();


	var updateScore = function(delta){
		scoreCounter += delta * 50;
		score.text = String(Math.floor(scoreCounter));
	};


	var update = function(then){
		now = Date.now();
        delta = (now - then) / 1000;

        if(state === "playing") {
        	updateAll(delta);
        	updateScore(delta);
        }

        if(state === "dead") {
        	if (Input.isDown(Input.R)) {
        		Level.load(Level.levels[0]);
        		scoreCounter = 0;
        		state = "playing";
        	}
        }
		View.renderer.render(View.containers.main);
		window.requestAnimationFrame(update.bind(null, now));
	};
	update(Date.now());
});
