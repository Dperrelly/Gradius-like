app.factory("Enemy", function(View, Player, Utility){
	let exports = {};
	exports.enemies = {};

	var idCounter = 0;

	class Enemy{
		constructor(x, y){
			this.position = {x, y};
			this.id = idCounter++;
		}

		takeDamage(damage){
            this.health -= damage;
            
            if(this.health <= 0){
                this.terminate();
            }
        }

        terminate(){
			delete exports.enemies[this.id];
			View.containers.enemies.removeChild(this.img);
		}
	}

	class Worm extends Enemy{
		constructor (x, y){
			super(x, y);
			this.health = 5;
			this.radius = 50;
			this.swerver = Math.random();
			this.speed = 400;
			this.img = new PIXI.Sprite(View.textures.enemy1);
			this.img.position = this.position;
			View.center(this.img);
			this.img.scale.x = 0.15;
			this.img.scale.y = 0.15;
		}

		update(delta){
			this.position.x -= this.speed * delta;
			this.position.y += Math.sin(this.swerver) * 2;
			this.swerver += 0.1;

			if(Utility.isInRadius(this, Player.player)){
				Utility.playerDeath();
			}

			Utility.boundsCheck(this);
		}

	}



	exports.createWorm = function(spawn){
		var enemy = new Worm(spawn[0], spawn[1]);
		exports.enemies[enemy.id] = enemy;
		View.containers.enemies.addChild(enemy.img);
	};

	exports.updateAll = function(delta){
		angular.forEach(exports.enemies, function(enemy){
			enemy.update(delta);
		});
	};

	exports.terminateAll = function(){
		angular.forEach(exports.enemies, function(enemy){
			enemy.terminate();
		});
	};

	return exports;
});