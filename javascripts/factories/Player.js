app.factory("Player", function(View, Input, Utility){
	let Player = {};

	class Ship{
		constructor(x, y){
			this.position = {x, y};
			this.speed = 300;
			this.radius = 10;
			this.lastFired = 0;
			this.img = new PIXI.Sprite(View.textures.ship);
			this.img.position = this.position;
			this.img.rotation = 3.14 / 2;
			this.img.scale.x = 0.1;
			this.img.scale.y = 0.1;
			View.center(this.img);
			View.containers.player.addChild(this.img);
		}

		update(delta){

			Input.directions.forEach(function(direction){
				if(Input.isDown(Input[direction])) Player.player.move(delta, Player.player.speed, direction);
			});

		    if (Utility.isOutOfBounds(this)){
		    	Utility.playerDeath();
		    }

		}

		move(delta, distance, direction){
			switch(direction){
				case 'UP': {
					this.position.y -= distance * delta;
					break;
				}
				case 'DOWN': {
					this.position.y += distance * delta;
					break;
				}
				case 'LEFT': {
					this.position.x -= distance * delta;
					break;
				}
				case 'RIGHT': {
					this.position.x += distance * delta;
					break;
				}
			}
		}

		addWarpDrive(){
			Input.directions.forEach(function(direction){
				Input.doubleTapEffect[Input[direction]] = function(){
					Player.player.move(1, 200, direction);
				};
			});
		}

		terminate(){
			View.containers.player.removeChild(this.img);
		}
		
		die(){

		}
	}

	Player.spawn = function(spawnPoint){
		if(Player.player) Player.player.terminate();
		Player.player = new Ship(spawnPoint.x, spawnPoint.y);
		Player.player.addWarpDrive();
	};

	return Player;
});
