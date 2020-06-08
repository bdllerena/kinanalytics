import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import {
	requestAnimationFrame,
	randomColorFromArray,
	hexToRgbA
} from '../utilities';

const cloudBlue = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/280549/cloud-blue-green.png';
const cloudPurple = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/280549/cloud-purple.png';


export default class ParticleCanvas extends React.PureComponent {
	particles = {
		particles: [],
		count: 30,
		lineWidth: 1.5,
		lineColors: ['#1c7685'],
		clouds: [],
		cloudMax: 30,
		minDist: 350
	};

	componentDidMount() {
		this.updateCanvas();
		this.loadParticles();
		this.loadSmokeClouds();
	}

	loadParticles() {
		// console.log("loading particles...");
		const { count, particles } = this.particles;

		for (let i = 0; i < count; i += 1) {
			particles.push(this.particle());
		}
	}

	drawParticles() {
		const { particles } = this.particles;

		particles.forEach((p) => {
			this.drawParticle(p);
		});
	}

	draw() {
		this.paintCanvas();

		this.drawParticles();
		this.drawClouds();

		this.updateParticles();
		this.updateClouds();
	}

	updateClouds() {
		const { clouds } = this.particles;
		const { W, H } = this;

		clouds.forEach((cloud) => {
			cloud.x += cloud.vx;
			cloud.y += cloud.vy;

			if (cloud.x > W) {
				cloud.x = 0;
			} else if (cloud.x < -300) {
				cloud.x = W;
			}

			if (cloud.y > H) {
				cloud.y = 200;
			} else if (cloud.y < -200) {
				cloud.y = H;
			}
		});
	}

	updateParticles() {
		const { particles } = this.particles;
		const { W, H } = this;

		for (let i = 0; i < particles.length; i++) {
			const p = particles[i];

			p.x += p.vx;
			p.y += p.vy;

			if (p.x + p.radius > W) {
				p.x = p.radius;
			} else if (p.x - p.radius < 0) {
				p.x = W - p.radius;
			}

			if (p.y + p.radius > H) {
				p.y = p.radius;
			} else if (p.y - p.radius < 0) {
				p.y = H - p.radius;
			}
			for (let j = 0; j < particles.length; j += 1) {
				const p2 = particles[j];

				this.getDistance(p, p2);
			}
		}
	}

	getDistance(p1, p2) {
		const { minDist, lineWidth, lineColors } = this.particles;
		const { ctx } = this;


		const dx = p1.x - p2.x;
		const dy = p1.y - p2.y;

		const dist = Math.sqrt(dx**2 + dy**2);

		if (dist <= minDist) {
			ctx.beginPath();
			ctx.strokeStyle = hexToRgbA(randomColorFromArray(lineColors), (1.2-dist/minDist));

			ctx.lineWidth = lineWidth;

			ctx.moveTo(p1.x, p1.y);
			ctx.lineTo(p2.x, p2.y);

			ctx.stroke();
			ctx.closePath();

			const ax = dx / -50000;
			const ay = dy / -50000;

			p1.vx -= ax;
			p1.vy -= ay;

			p2.vx += ax;
			p2.vy += ay;
		}
	}

	paintCanvas() {
		const { ctx, W, H } = this;

		ctx.fillStyle = '#000';
		ctx.fillRect(0, 0, W, H);
	}

	animLoop() {
		this.draw();
		requestAnimationFrame(this.animLoop.bind(this));
	}

	drawParticle(particle) {
		const { ctx } = this;

		ctx.fillStyle = 'white';
		ctx.globalAlpha = '0.5';
		ctx.beginPath();

		ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2, false);

		ctx.fill();
	}

	createSmokeCloud() {
		const { H, W } = this;
		const img = new Image();

		const cloudsArr = [
			cloudBlue,
			cloudPurple
		];

		const pic = cloudsArr[Math.floor(Math.random() * cloudsArr.length)];
		img.src = pic;

		const cloud = {};
		cloud.img = img;

		cloud.x = (Math.random() * W) - 300;
		cloud.y = (Math.random() * H) - 300;

		const randVelocity = Math.random() > 0.5;
		if (randVelocity) {
			cloud.vx = Math.random() * 0.5;
			cloud.vy = Math.random() * 0.5;
		} else {
			cloud.vx = -1 * (Math.random() * 0.5);
			cloud.vy = -1 * (Math.random() * 0.5);
		}

		return cloud;
	}

	loadSmokeClouds() {
		const { cloudMax, clouds } = this.particles;

		for (let i = 0; i < cloudMax; i += 1) {
			clouds.push(this.createSmokeCloud());
		}
	}

	drawClouds() {
		const { ctx } = this;
		const { clouds } = this.particles;

		clouds.forEach((cloud) => {
			ctx.globalAlpha = '0.1';

			ctx.drawImage(cloud.img, cloud.x, cloud.y, 600, 600);
		});
	}

	particle() {
		const { W, H } = this;

		const particle = {};

		particle.x = Math.random() * W;
		particle.y = Math.random() * H;

		particle.vx = (-1 + Math.random()) * (Math.random() * 3);
		particle.vy = (-1 + Math.random()) * (Math.random() * 3);

		particle.radius = Math.random() * (Math.random() * 5);

		return particle;
	}

	updateCanvas() {
		const ctx = this.refs.canvas.getContext('2d');
		const { canvas } = this.refs;

		const W = window.innerWidth;
		const H = window.innerHeight;

		canvas.width = W;
		canvas.height = H;


		this.canvas = canvas;
		this.ctx = ctx;
		this.W = W;
		this.H = H;
		this.animLoop();
	}

	render() {
		return (
			<canvas className="ParticleCanvas" ref="canvas"></canvas>
		);
	}
}
