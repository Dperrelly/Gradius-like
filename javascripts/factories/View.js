app.factory("View", function(){
	var exports = {};

	exports.canvasWidth = 1000;
	exports.canvasHeight = 700;

	exports.renderer = PIXI.autoDetectRenderer(exports.canvasWidth, exports.canvasHeight);
 	document.body.appendChild(exports.renderer.view);
 	console.log(exports.renderer);

  //   function resizeCanvas() {
  //       exports.renderer.width = window.innerWidth;
  //       exports.renderer.height = window.innerHeight;
  //   }

 	// window.addEventListener('resize', resizeCanvas, false);    

 	exports.textures = {};
 	exports.textures.enemy1 = PIXI.Texture.fromImage("/images/enemy1.png");
 	exports.textures.ship = PIXI.Texture.fromImage("/images/ship.png");
 	exports.textures.bg1 = PIXI.Texture.fromImage("/images/background.jpg");
 	
	exports.init = function(){
		var containers = [
			'background',
			'enemies',
			'attacks',
			'player',
			'ui',
		];
		exports.containers = {
			main: new PIXI.Container()
		};
		containers.forEach(function(container){
			exports.containers[container] = new PIXI.Container();
			exports.containers.main.addChild(exports.containers[container]);
		});
	};

	exports.center = function (img){
		img.pivot.x = 0.5;
        img.pivot.y = 0.5;
        img.anchor.x = 0.5;
        img.anchor.y = 0.5;
	};

	return exports;
});
