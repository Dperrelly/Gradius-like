app.factory("Weapon", function(PlayerAttack, Player, Input){

	class BasicWeapon{
		constructor(){
			this.shotInterval = 100;
			this.lastFired = 0;

		}

		shoot(){
			PlayerAttack.addAttack(new PlayerAttack.BasicAttack(Player.player.position));			
		}

		update(){
			if (Input.isDown(Input.SPACE) && Date.now() - this.lastFired > this.shotInterval){
				this.shoot();
				this.lastFired = Date.now();
			}
		}

	}

	class DoubleWeapon extends BasicWeapon{
		constructor(){
			super();
			this.shotInterval = 200;
		}

		shoot(){
			PlayerAttack.addAttack(new PlayerAttack.BasicAttack({x: Player.player.position.x, y: Player.player.position.y - 10}));
			PlayerAttack.addAttack(new PlayerAttack.BasicAttack({x: Player.player.position.x, y: Player.player.position.y + 10}));						
		}
	}

	return {
		currentWeapon: new DoubleWeapon()
	};
});
