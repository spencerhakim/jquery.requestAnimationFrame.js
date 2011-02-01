(function($, window) {

$.support.requestAnimationFrame = window.mozRequestAnimationFrame ?
	'mozRequestAnimationFrame' :
	window.webkitRequestAnimationFrame ?
		'webkitRequestAnimationFrame' :
		false;

var timerId;

$.fx.prototype.custom = function( from, to, unit ) {
	var self = this,
		fx = jQuery.fx;

	this.startTime = jQuery.now();
	this.start = from;
	this.end = to;
	this.unit = unit || this.unit || "px";
	this.now = this.start;
	this.pos = this.state = 0;

	function t( gotoEnd ) {
		return self.step(gotoEnd);
	}

	t.elem = this.elem;

	if ( t() && jQuery.timers.push(t) && !timerId ) {
		jQuery.support.requestAnimationFrame ?
			window[jQuery.support.requestAnimationFrame](fx.tick):
			timerId = setInterval(fx.tick, fx.interval);
	}
};

$.fx.tick = function() {
	var timers = jQuery.timers;

	for ( var i = 0; i < timers.length; i++ ) {
		if ( !timers[i]() ) {
			timers.splice(i--, 1);
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	} else if (jQuery.support.requestAnimationFrame) {
		window[jQuery.support.requestAnimationFrame](jQuery.fx.tick);
	}
};

$.fx.stop = function() {
	clearInterval( timerId );
	timerId = null;
};

})(jQuery, window)