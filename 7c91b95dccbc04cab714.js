"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[50],{7376:()=>{var t=document.getElementById("canvas"),i=t.getContext("2d"),a=t.width=window.innerWidth,s=t.height=window.innerHeight,e=[],h=0,o=document.createElement("canvas"),r=o.getContext("2d");o.width=100,o.height=100;var d=o.width/2,l=r.createRadialGradient(d,d,0,d,d,d);function n(t,i){if(arguments.length<2&&(i=t,t=0),t>i){var a=i;i=t,t=a}return Math.floor(Math.random()*(i-t+1))+t}l.addColorStop(.025,"#fff"),l.addColorStop(.1,"hsl(217, 61%, 33%)"),l.addColorStop(.25,"hsl(217, 64%, 6%)"),l.addColorStop(1,"transparent"),r.fillStyle=l,r.beginPath(),r.arc(d,d,d,0,2*Math.PI),r.fill();var p=function(){var t,i,o;this.orbitRadius=n((t=a,i=s,o=Math.max(t,i),Math.round(Math.sqrt(o*o+o*o))/2)),this.radius=n(60,this.orbitRadius)/12,this.orbitX=a/2,this.orbitY=s/2,this.timePassed=n(0,1e3),this.speed=n(this.orbitRadius)/5e5,this.alpha=n(2,10)/10,h++,e[h]=this};p.prototype.draw=function(){var t=Math.sin(this.timePassed)*this.orbitRadius+this.orbitX,a=Math.cos(this.timePassed)*this.orbitRadius+this.orbitY,s=n(10);1===s&&this.alpha>0?this.alpha-=.01:2===s&&this.alpha<1&&(this.alpha+=.01),i.globalAlpha=this.alpha,i.drawImage(o,t-this.radius/2,a-this.radius/2,this.radius,this.radius),this.timePassed+=this.speed};for(var u=0;u<1e3;u++)new p;!function t(){i.globalCompositeOperation="source-over",i.globalAlpha=.99,i.fillStyle="hsla(217, 2%, 2%, 1)",i.fillRect(0,0,a,s),i.globalCompositeOperation="lighter";for(var h=1,o=e.length;h<o;h++)e[h].draw();window.requestAnimationFrame(t)}()}},t=>{t(t.s=7376)}]);