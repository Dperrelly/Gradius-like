app.factory("Player", function(){
	let Player = {};

	Player.init = function(){
		Player.position = {x: 0, y: 0},
		Player.img = null
	}

	return Player;
})
