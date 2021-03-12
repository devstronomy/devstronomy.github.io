(()=>{"use strict";(()=>{const e=()=>document.getElementById("header"),t=()=>document.getElementById("status"),i=(e,t)=>`<span style="color: ${t}">${e}</span>`;function a(e,t){e.strokeStyle=t,e.stroke()}function r(e,t){e.fillStyle=t,e.fill()}const n="#444444";function o(e,t,i,r,n,o,s=3){e.save(),e.beginPath(),e.lineWidth=s,e.moveTo(t,i),e.lineTo(r,n),a(e,o),e.restore()}function s(e,t,i,r,o){e.save(),e.beginPath(),e.setLineDash([5,5]),e.moveTo(t,i),e.lineTo(r,o),a(e,n),e.restore()}function l(e,t,i,a,r){e.save(),e.beginPath(),e.ellipse(t,i,a,r,0,0,2*Math.PI),e.restore()}function c(e,t,i,a){l(e,t,i,a,a)}const h="#bbbbbb",d="#ff531e",u="#0f93d4",b="#1db11d",m={speedFactor:10,distanceFactor:300,radiusScalingFactor:1/300},y={radiusScalingFactor:5e-5},g=2*Math.PI,p=(e,t,i)=>({r:e,g:t,b:i}),f={Mercury:p(224,194,150),Venus:p(145,77,19),Earth:p(171,227,254),Mars:p(97,51,35),Jupiter:p(180,180,180),Saturn:p(180,180,180),Uranus:p(180,180,180),Neptune:p(180,180,180),Pluto:p(180,180,180)},P=[{id:1,name:"Mercury",mass:.33,diameter:4879,density:5427,gravity:3.7,escapeVelocity:4.3,rotationPeriod:1407.6,lengthOfDay:4222.6,distanceFromSun:57.9,perihelion:46,aphelion:69.8,orbitalPeriod:88,orbitalVelocity:47.4,orbitalInclination:7,orbitalEccentricity:.205,obliquityToOrbit:.034,meanTemperature:167,surfacePressure:0,numberOfMoons:0,hasRingSystem:!1,hasGlobalMagneticField:!1},{id:2,name:"Venus",mass:4.87,diameter:12104,density:5243,gravity:8.9,escapeVelocity:10.4,rotationPeriod:-5832.5,lengthOfDay:2802,distanceFromSun:108.2,perihelion:107.5,aphelion:108.9,orbitalPeriod:224.7,orbitalVelocity:35,orbitalInclination:3.4,orbitalEccentricity:.007,obliquityToOrbit:177.4,meanTemperature:464,surfacePressure:92,numberOfMoons:0,hasRingSystem:!1,hasGlobalMagneticField:!1},{id:3,name:"Earth",mass:5.97,diameter:12756,density:5514,gravity:9.8,escapeVelocity:11.2,rotationPeriod:23.9,lengthOfDay:24,distanceFromSun:149.6,perihelion:147.1,aphelion:152.1,orbitalPeriod:365.2,orbitalVelocity:29.8,orbitalInclination:0,orbitalEccentricity:.017,obliquityToOrbit:23.4,meanTemperature:15,surfacePressure:1,numberOfMoons:1,hasRingSystem:!1,hasGlobalMagneticField:!1},{id:4,name:"Mars",mass:.642,diameter:6792,density:3933,gravity:3.7,escapeVelocity:5,rotationPeriod:24.6,lengthOfDay:24.7,distanceFromSun:227.9,perihelion:206.6,aphelion:249.2,orbitalPeriod:687,orbitalVelocity:24.1,orbitalInclination:1.9,orbitalEccentricity:.094,obliquityToOrbit:25.2,meanTemperature:-65,surfacePressure:.01,numberOfMoons:2,hasRingSystem:!1,hasGlobalMagneticField:!1},{id:5,name:"Jupiter",mass:1898,diameter:142984,density:1326,gravity:23.1,escapeVelocity:59.5,rotationPeriod:9.9,lengthOfDay:9.9,distanceFromSun:778.6,perihelion:740.5,aphelion:816.6,orbitalPeriod:4331,orbitalVelocity:13.1,orbitalInclination:1.3,orbitalEccentricity:.049,obliquityToOrbit:3.1,meanTemperature:-110,surfacePressure:null,numberOfMoons:79,hasRingSystem:!1,hasGlobalMagneticField:!1},{id:6,name:"Saturn",mass:568,diameter:120536,density:687,gravity:9,escapeVelocity:35.5,rotationPeriod:10.7,lengthOfDay:10.7,distanceFromSun:1433.5,perihelion:1352.6,aphelion:1514.5,orbitalPeriod:10747,orbitalVelocity:9.7,orbitalInclination:2.5,orbitalEccentricity:.057,obliquityToOrbit:26.7,meanTemperature:-140,surfacePressure:null,numberOfMoons:62,hasRingSystem:!1,hasGlobalMagneticField:!1},{id:7,name:"Uranus",mass:86.8,diameter:51118,density:1271,gravity:8.7,escapeVelocity:21.3,rotationPeriod:-17.2,lengthOfDay:17.2,distanceFromSun:2872.5,perihelion:2741.3,aphelion:3003.6,orbitalPeriod:30589,orbitalVelocity:6.8,orbitalInclination:.8,orbitalEccentricity:.046,obliquityToOrbit:97.8,meanTemperature:-195,surfacePressure:null,numberOfMoons:27,hasRingSystem:!1,hasGlobalMagneticField:!1},{id:8,name:"Neptune",mass:102,diameter:49528,density:1638,gravity:11,escapeVelocity:23.5,rotationPeriod:16.1,lengthOfDay:16.1,distanceFromSun:4495.1,perihelion:4444.5,aphelion:4545.7,orbitalPeriod:59800,orbitalVelocity:5.4,orbitalInclination:1.8,orbitalEccentricity:.011,obliquityToOrbit:28.3,meanTemperature:-200,surfacePressure:null,numberOfMoons:14,hasRingSystem:!1,hasGlobalMagneticField:!1},{id:9,name:"Pluto",mass:.0146,diameter:2370,density:2095,gravity:.7,escapeVelocity:1.3,rotationPeriod:-153.3,lengthOfDay:153.3,distanceFromSun:5906.4,perihelion:4436.8,aphelion:7375.9,orbitalPeriod:90560,orbitalVelocity:4.7,orbitalInclination:17.2,orbitalEccentricity:.244,obliquityToOrbit:122.5,meanTemperature:-225,surfacePressure:1e-5,numberOfMoons:5,hasRingSystem:!1,hasGlobalMagneticField:!1}].map((e=>new class{constructor(e,t,i,a,r){var n;this.name=e,this.distanceAU=t,this.radiusKm=i,this.orbitalPeriodDE=a,this.color=r,this.startTheta=(n=g,Math.random()*n),this.thetaRad=0}scaledDistance(){return this.distanceAU*m.distanceFactor}computeRadius(){return this.radiusKm*m.radiusScalingFactor}update(e){const t=-g/this.orbitalPeriodDE*e;this.thetaRad=(this.startTheta+t*m.speedFactor)%g}drawBody(e){e.save(),e.beginPath(),e.rotate(this.thetaRad),e.translate(this.scaledDistance(),0),c(e,0,0,this.computeRadius()),function(e,t,i,a){e.fillStyle=`rgb(${t}, ${i}, ${a})`,e.fill()}(e,this.color.r,this.color.g,this.color.b),a(e,"black"),e.restore()}drawOrbit(e){e.save(),e.beginPath(),e.setLineDash([5,5]),c(e,0,0,this.scaledDistance()),a(e,n),e.restore()}draw(e){this.drawOrbit(e),this.drawBody(e)}}(e.name,e.distanceFromSun*10**9/149597870700,e.diameter/2,e.orbitalPeriod,f[e.name])));let S,M;function F(){const n=document.querySelector('input[name="scene-type"]:checked').value;if(n!==S)if(t().innerHTML="",S=n,"mean-orbits"===n)e().innerHTML="Simulation of the Solar System with <b>mean orbits</b>",M=new class{constructor(){this.planets=P.slice(0,4),this.startMs=Date.now()}drawSun(e){c(e,0,0,695700*y.radiusScalingFactor),r(e,"yellow"),a(e,"orange")}render({ctx:e}){this.drawSun(e),this.planets.forEach((t=>{t.update((Date.now()-this.startMs)/1e3),t.draw(e)}))}};else{if("ellipse"!==n)throw new Error(`Unknown scene type: ${n}`);e().innerHTML="Basic <b>Ellipse</b> Terminology",M=new class{constructor(e){this.statusEl=e,this.a=void 0,this.b=void 0,this.le=void 0,this.oe=void 0}updateStatus(){this.statusEl.innerHTML=i(`semi-major axis: ${this.a.toFixed(2)}`,d)+"<br/>"+i(`semi-minor axis: ${this.b.toFixed(2)}`,u)+"<br/>"+i(`linear eccentricity: ${this.le.toFixed(2)}`,b)+"<br/>"+i(`orbital eccentricity: ${this.oe.toFixed(2)}`,"magenta")}render({ctx:e,width:t,height:i}){this.b=Math.min(.8*t/3,i/2-100),this.a=1.5*this.b,this.le=Math.sqrt(this.a**2-this.b**2),this.oe=this.le/this.a,l(e,0,0,this.a,this.b),a(e,h),s(e,-this.a,0,this.a,0),s(e,0,-this.b,0,this.b),o(e,-this.a,0,0,0,d),o(e,-this.le,0,0,-this.b,d,1),o(e,0,-this.b,0,0,u),o(e,this.le,0,0,0,b),c(e,-this.le,0,5),r(e,h),c(e,this.le,0,5),r(e,h),this.updateStatus()}}(t())}return M}window.onload=function(){const e=document.getElementById("canvas"),t=e.getContext("2d"),i={canvas:e,ctx:t,width:void 0,height:void 0};document.getElementById("loading-indicator").style.display="none",function a(){(()=>{const t=e.clientWidth,a=e.clientHeight;e.width===t&&e.height===a||(e.width=t,e.height=a,i.width=t,i.height=a)})(),t.fillStyle="black",t.fillRect(0,0,e.width,e.height),t.save(),t.translate(e.width/2,e.height/2),F().render(i),t.restore(),requestAnimationFrame(a)}()}})()})();