app.controller("PlayController", function(View){
	View.init();
	var bunny = new PIXI.Sprite(PIXI.Texture.fromImage("/images/enemy1.png"));
	bunny.position.x = 400;
	bunny.position.y = 300;
	View.containers.enemies.addChild(bunny);
	console.log(bunny);
	var update = function(){
		View.renderer.render(View.containers.main);
		window.requestAnimationFrame(update);
	};
	update();
});
