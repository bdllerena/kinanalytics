"use strict";

export const requestAnimationFrame = (function() {
  return window.requestAnimationFrame     ||
	window.webkitRequestAnimationFrame    ||
	window.mozRequestAnimationFrame       ||
	window.oRequestAnimationFrame         ||
	window.msRequestAnimationFrame        ||
	function ( callback ){
		window.setTimeout(callback, 1000 / 60);
  };
})();


export function randomColorFromArray(array) {
	if (!array) {
		return;
	}

	return array[Math.floor(Math.random() * array.length)];
}

export function hexToRgbA(hex, alpha = 1){
	let c;
	if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){

		c = hex.substring(1).split('');

		if (c.length== 3){
			c= [c[0], c[0], c[1], c[1], c[2], c[2]];
		}

		c= '0x' + c.join('');

		return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',' + alpha + ')';
	}
	throw new Error('Bad Hex');
}

export function throttle(fn, wait) {
	let time = Date.now();

	return () => {
		if (((time + wait) - Date.now()) < 0) {
			fn();
			time = Date.now();
		}
	};
}