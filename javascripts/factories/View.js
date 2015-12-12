app.factory("View", function(){
	var View = {};

	View.renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);
 	document.body.appendChild(View.renderer.view);
 	//$("#mainContainer").append(StateFactory.renderer.view);

	View.init = function(){
		View.containers = {};
		View.containers.main = new PIXI.Container();
		View.containers.background = new PIXI.Container();
		View.containers.enemies = new PIXI.Container();
		View.containers.attacks = new PIXI.Container();
		View.containers.player = new PIXI.Container();

		View.containers.main.addChild(View.containers.background);
		View.containers.main.addChild(View.containers.enemies);
		View.containers.main.addChild(View.containers.attacks);
		View.containers.main.addChild(View.containers.player);
	}

	return View;
});
