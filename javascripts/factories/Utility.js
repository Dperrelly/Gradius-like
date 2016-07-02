app.factory("Utility", function($rootScope){
	let exports = {};

	exports.isInRadius = function(circle1, circle2){
		var dx = circle1.position.x - circle2.position.x;
		var dy = circle1.position.y - circle2.position.y;
		var distance = Math.sqrt(dx * dx + dy * dy);

		return (distance < circle1.radius + circle2.radius);
	};

	exports.playerDeath = function(){
		$rootScope.$emit('playerDeath', () => {
	        
    	});
	};

	exports.isOutOfBounds = function(obj){
		if (obj.position.x < 0 || obj.position.x > 1000 || obj.position.y < 0 || obj.position.y > 700){
			return true;
		}
		else return false;
	};

	exports.boundsCheck = function(obj){
		if(exports.isOutOfBounds(obj)){
			obj.terminate();	
		}
	};

	return exports;
});
