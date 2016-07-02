app.factory("PlayerAttack", function(View, Enemy, Player, Utility, Input){
		var idCounter = 0;

		var attacks = {};

		class BasicAttack{
			constructor(spawn){
				this.position = angular.copy(spawn);
				this.id = idCounter++;
				this.lastFired = 0;
				this.power = 1;
				this.speed = 1000;
				this.radius = 5;
				this.img = new PIXI.Sprite(View.textures.enemy1);
				this.img.position = this.position;
				View.center(this.img);
				this.img.scale.x = 0.03;
				this.img.scale.y = 0.03;
			}

			update(delta){
				this.position.x += this.speed * delta;

				angular.forEach(Enemy.enemies, (enemy) => {
					if(Utility.isInRadius(enemy, this)){
						enemy.takeDamage(this.power);
						this.terminate();
					}
				});

				Utility.boundsCheck(this);
			}

			terminate(){
				delete attacks[this.id];
				View.containers.enemies.removeChild(this.img);
			}
		}
	return {

		BasicAttack: BasicAttack,

		addAttack: function(attack){
			attacks[attack.id] = attack;
			View.containers.enemies.addChild(attack.img);
		},

		updateAll: function(delta){
			angular.forEach(attacks, function(attack){
				attack.update(delta);
			});
		}
	};
});
