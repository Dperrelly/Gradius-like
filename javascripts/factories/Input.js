app.factory("Input", function(){

	


	var Key = {
		doubleTapEffect: {},

		_pressed: {},

	    _lastKeyHit: null,

	    _timeOfLastInput: null,

		LEFT: 37,
		UP: 38,
		RIGHT: 39,
		DOWN: 40,
		R: 82,
		SPACE: 32,

		directions: ['LEFT', 'UP', 'RIGHT', 'DOWN'],
		  
		isDown: function(keyCode){
	    	return this._pressed[keyCode];
		},
		  
		onKeydown: function(event){
		    if([32, 37, 38, 39, 40].indexOf(event.keyCode) > -1) {
		        event.preventDefault();
		    }

		    if(this.isDoubleTap(event) && this.doubleTapEffect[event.keyCode]){
		    	this.doubleTapEffect[event.keyCode]();
		    }
			this._pressed[event.keyCode] = true;
			this._lastKeyHit = event.keyCode;
			this._timeOfLastInput = Date.now();
		},
		  
		onKeyup: function(event){
			delete this._pressed[event.keyCode];
		},

		isDoubleTap: function(event){
			return this._lastKeyHit === event.keyCode && 
				Date.now() - this._timeOfLastInput < 150 &&
				!this.isDown(event.keyCode);
		}
	};

	window.addEventListener('keyup', function(event) { Key.onKeyup(event); }, false);
	window.addEventListener('keydown', function(event) { Key.onKeydown(event); }, false);

	return Key;
});