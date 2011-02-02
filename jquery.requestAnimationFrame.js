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
		// Use requestAnimationFrame instead of setInterval if available
		( timerId = jQuery.support.requestAnimationFrame ) ?
			window[timerId](function raf() {
				// timerId will be true as long as the animation hasn't been stopped
				if (timerId) {
					window[timerId](raf);
					fx.tick();
				}
			}):
			timerId = setInterval(fx.tick, fx.interval);
	}
};

$.fx.stop = function() {
	clearInterval( timerId );
	timerId = null;
};

})(jQuery, window)