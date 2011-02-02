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
		if ( jQuery.support.requestAnimationFrame ) {
			timerId = true;
			(function raf() {
				if (timerId) {
					window[jQuery.support.requestAnimationFrame](raf);
				}
				fx.tick();
			})();
		} else {
			timerId = setInterval(fx.tick, fx.interval);
		}
	}
};

$.fx.stop = function() {
	clearInterval( timerId );
	timerId = null;
};

})(jQuery, window)