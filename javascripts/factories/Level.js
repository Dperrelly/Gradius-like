app.factory("Level", function(Player, View, Enemy, Utility){
	let exports = {
		levels: []
	};

	class Level{
		constructor(spawnX, spawnY){
			this.spawn = {x: spawnX, y: spawnY};
			this.enemies = [
				{spawn: [0, 0]}
			];
			this.img = new PIXI.Sprite(View.textures.bg1);
			//this.img.height = View.canvasHeight;
			//this.img.width = View.canvasWidth;
			console.log(this.img);
			View.center(this.img);
		}
	}

	exports.levels[0] = new Level(100, 100);

	exports.load = function(level){
		Enemy.terminateAll();
		Player.spawn(level.spawn);
		level.enemies.forEach(function(enemy){
			Enemy.createWorm(enemy.spawn);
		});
		View.containers.background.removeChildren();
		View.containers.background.addChild(level.img);
	};

	exports.update = function (){
		if (Math.random()*100 < 9){
			Enemy.createWorm([1000, Math.random() * View.canvasWidth]);
		}
	};

	return exports;
});