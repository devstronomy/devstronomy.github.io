(()=>{"use strict";(()=>{function e(e,t){if(null==e)throw new Error(t);return e}const t=()=>e(document.getElementById("header"),"header element"),i=()=>document.getElementById("status");function a(e,t){e.strokeStyle=t,e.stroke()}function n(e,t){e.fillStyle=t,e.fill()}const s="#666666",r="#bbbbbb",o="#ff531e",l="#0f93d4",h="#1db11d",c="magenta",d="#d6d770",u="#e08f62",m=e=>e.map((e=>((e,t)=>`<pre style="display: inline; color: ${t}">${e}</pre>`)(`${e[0]} : ${e[1]}`,e[2]))).join("<br/>");function b(e,t,i,n,s,r,o=3){e.save(),e.beginPath(),e.lineWidth=o,e.moveTo(t,i),e.lineTo(n,s),a(e,r),e.restore()}function p(e,t,i,n,r){e.save(),e.beginPath(),e.setLineDash([5,5]),e.moveTo(t,i),e.lineTo(n,r),a(e,s),e.restore()}function y(e,t,i,a,n){e.save(),e.beginPath(),e.ellipse(t,i,a,n,0,0,2*Math.PI),e.restore()}function f(e,t,i,a){y(e,t,i,a,a)}const g={speedFactor:10,distanceFactor:300,radiusScalingFactor:1/300},P={radiusScalingFactor:5e-5},S=2*Math.PI,M=(e,t)=>(e+t)/2,F=(e,t)=>Math.sqrt(Math.pow(e,2)-Math.pow(t,2)),T=(e,t)=>e-t,w=(e,t)=>Math.sqrt(Math.pow(e,2)-Math.pow(t,2)),O=149597870700,E=e=>1e6*e*1e3/O,v=e=>(e=>e*O/1e3)(e)/1e6;function I(e){return e*g.distanceFactor}function V(e,t){e.save(),e.beginPath(),e.rotate(t.thetaRad),e.translate(t.scaledDistance(),0),f(e,0,0,t.radiusKm*g.radiusScalingFactor),function(e,t,i,a){e.fillStyle=`rgb(${t}, ${i}, ${a})`,e.fill()}(e,t.color.r,t.color.g,t.color.b),a(e,"black"),e.restore()}function x(e,{distanceAU:t}){e.save(),e.beginPath(),e.setLineDash([5,5]),f(e,0,0,I(t)),a(e,s),e.restore()}const D=class{constructor(){this.startMs=Date.now()}updateInterval(){return(Date.now()-this.startMs)/1e3}},K=class extends D{constructor(e){super(),this.statusEl=e,this.a=0,this.b=0,this.le=0,this.oe=0}updateStatus(){this.statusEl.innerHTML=m([["semi-major axis     ",this.a.toFixed(2),o],["semi-minor axis     ",this.b.toFixed(2),l],["linear eccentricity ",this.le.toFixed(2),h],["orbital eccentricity",this.oe.toFixed(2),c]])}render({ctx:e,width:t,height:i}){var s,c;this.b=Math.min(.8*t/3,i/2-100),this.a=1.5*this.b,this.le=F(this.a,this.b),this.oe=(s=this.a,c=this.b,F(s,c)/s),y(e,0,0,this.a,this.b),a(e,r),p(e,-this.a,0,this.a,0),p(e,0,-this.b,0,this.b),b(e,-this.a,0,0,0,o),b(e,-this.le,0,0,-this.b,o,1),b(e,0,-this.b,0,0,l),b(e,this.le,0,0,0,h),f(e,-this.le,0,5),n(e,r),f(e,this.le,0,5),n(e,r),this.updateStatus()}},q=JSON.parse('[{"id":1,"name":"Mercury","mass":0.33,"diameter":4879,"density":5427,"gravity":3.7,"escapeVelocity":4.3,"rotationPeriod":1407.6,"lengthOfDay":4222.6,"distanceFromSun":57.9,"perihelion":46,"aphelion":69.8,"orbitalPeriod":88,"orbitalVelocity":47.4,"orbitalInclination":7,"orbitalEccentricity":0.205,"obliquityToOrbit":0.034,"meanTemperature":167,"surfacePressure":0,"numberOfMoons":0,"hasRingSystem":false,"hasGlobalMagneticField":false},{"id":2,"name":"Venus","mass":4.87,"diameter":12104,"density":5243,"gravity":8.9,"escapeVelocity":10.4,"rotationPeriod":-5832.5,"lengthOfDay":2802,"distanceFromSun":108.2,"perihelion":107.5,"aphelion":108.9,"orbitalPeriod":224.7,"orbitalVelocity":35,"orbitalInclination":3.4,"orbitalEccentricity":0.007,"obliquityToOrbit":177.4,"meanTemperature":464,"surfacePressure":92,"numberOfMoons":0,"hasRingSystem":false,"hasGlobalMagneticField":false},{"id":3,"name":"Earth","mass":5.97,"diameter":12756,"density":5514,"gravity":9.8,"escapeVelocity":11.2,"rotationPeriod":23.9,"lengthOfDay":24,"distanceFromSun":149.6,"perihelion":147.1,"aphelion":152.1,"orbitalPeriod":365.2,"orbitalVelocity":29.8,"orbitalInclination":0,"orbitalEccentricity":0.017,"obliquityToOrbit":23.4,"meanTemperature":15,"surfacePressure":1,"numberOfMoons":1,"hasRingSystem":false,"hasGlobalMagneticField":false},{"id":4,"name":"Mars","mass":0.642,"diameter":6792,"density":3933,"gravity":3.7,"escapeVelocity":5,"rotationPeriod":24.6,"lengthOfDay":24.7,"distanceFromSun":227.9,"perihelion":206.6,"aphelion":249.2,"orbitalPeriod":687,"orbitalVelocity":24.1,"orbitalInclination":1.9,"orbitalEccentricity":0.094,"obliquityToOrbit":25.2,"meanTemperature":-65,"surfacePressure":0.01,"numberOfMoons":2,"hasRingSystem":false,"hasGlobalMagneticField":false},{"id":5,"name":"Jupiter","mass":1898,"diameter":142984,"density":1326,"gravity":23.1,"escapeVelocity":59.5,"rotationPeriod":9.9,"lengthOfDay":9.9,"distanceFromSun":778.6,"perihelion":740.5,"aphelion":816.6,"orbitalPeriod":4331,"orbitalVelocity":13.1,"orbitalInclination":1.3,"orbitalEccentricity":0.049,"obliquityToOrbit":3.1,"meanTemperature":-110,"surfacePressure":null,"numberOfMoons":79,"hasRingSystem":false,"hasGlobalMagneticField":false},{"id":6,"name":"Saturn","mass":568,"diameter":120536,"density":687,"gravity":9,"escapeVelocity":35.5,"rotationPeriod":10.7,"lengthOfDay":10.7,"distanceFromSun":1433.5,"perihelion":1352.6,"aphelion":1514.5,"orbitalPeriod":10747,"orbitalVelocity":9.7,"orbitalInclination":2.5,"orbitalEccentricity":0.057,"obliquityToOrbit":26.7,"meanTemperature":-140,"surfacePressure":null,"numberOfMoons":62,"hasRingSystem":false,"hasGlobalMagneticField":false},{"id":7,"name":"Uranus","mass":86.8,"diameter":51118,"density":1271,"gravity":8.7,"escapeVelocity":21.3,"rotationPeriod":-17.2,"lengthOfDay":17.2,"distanceFromSun":2872.5,"perihelion":2741.3,"aphelion":3003.6,"orbitalPeriod":30589,"orbitalVelocity":6.8,"orbitalInclination":0.8,"orbitalEccentricity":0.046,"obliquityToOrbit":97.8,"meanTemperature":-195,"surfacePressure":null,"numberOfMoons":27,"hasRingSystem":false,"hasGlobalMagneticField":false},{"id":8,"name":"Neptune","mass":102,"diameter":49528,"density":1638,"gravity":11,"escapeVelocity":23.5,"rotationPeriod":16.1,"lengthOfDay":16.1,"distanceFromSun":4495.1,"perihelion":4444.5,"aphelion":4545.7,"orbitalPeriod":59800,"orbitalVelocity":5.4,"orbitalInclination":1.8,"orbitalEccentricity":0.011,"obliquityToOrbit":28.3,"meanTemperature":-200,"surfacePressure":null,"numberOfMoons":14,"hasRingSystem":false,"hasGlobalMagneticField":false},{"id":9,"name":"Pluto","mass":0.0146,"diameter":2370,"density":2095,"gravity":0.7,"escapeVelocity":1.3,"rotationPeriod":-153.3,"lengthOfDay":153.3,"distanceFromSun":5906.4,"perihelion":4436.8,"aphelion":7375.9,"orbitalPeriod":90560,"orbitalVelocity":4.7,"orbitalInclination":17.2,"orbitalEccentricity":0.244,"obliquityToOrbit":122.5,"meanTemperature":-225,"surfacePressure":0.00001,"numberOfMoons":5,"hasRingSystem":false,"hasGlobalMagneticField":false}]'),R=(e,t,i)=>({r:String(e),g:String(t),b:String(i)}),U={Mercury:R(224,194,150),Venus:R(145,77,19),Earth:R(171,227,254),Mars:R(97,51,35),Jupiter:R(180,180,180),Saturn:R(180,180,180),Uranus:R(180,180,180),Neptune:R(180,180,180),Pluto:R(180,180,180)},A=e=>new class{constructor(e,t,i,a,n,s,r,o){var l;this.name=e,this.distanceAU=t,this.perihelionAU=i,this.aphelionAU=a,this.distanceAU=t,this.radiusKm=n,this.orbitalPeriodDE=s,this.orbitalEccentricity=r,this.color=o,this.startTheta=(l=S,Math.random()*l),this.thetaRad=0}scaledDistance(){return this.distanceAU*g.distanceFactor}update(e){const t=-S/this.orbitalPeriodDE*e;this.thetaRad=(this.startTheta+t*g.speedFactor)%S}draw(e){x(e,this),V(e,this)}}(e.name,E(e.distanceFromSun),E(e.perihelion),E(e.aphelion),e.diameter/2,e.orbitalPeriod,e.orbitalEccentricity,U[e.name]),G=q.filter((e=>"Pluto"!==e.name)).map((e=>A(e))),L=e(q.find((e=>"Pluto"===e.name)),"Pluto not found");function $(e){f(e,0,0,695700*P.radiusScalingFactor),n(e,"yellow"),a(e,"orange")}A(L);const k=e=>e.toFixed().padStart(3," "),H=e=>`${e} km<sup>6</sup>`,j=class extends D{constructor(t){var i;super(),this.statusEl=t,this.planet=(i="Earth",A(e(q.find((e=>e.name===i)),"Planet with Earth not found"))),this.delta=.5,this.a=0,this.b=0,this.le=0,this.oe=0,this.planetInfo={aphelionKm6:v(this.planet.aphelionAU),perihelionKm6:v(this.planet.perihelionAU)}}updateStatus(){this.statusEl.innerHTML=m([["orbital eccentricity",this.oe.toFixed(2),c],["semi-major axis     ",H(k(this.a)),o],["semi-minor axis     ",H(k(this.b)),l],["linear eccentricity ",H(k(this.le)),h],["perihelion          ",H(k(this.planetInfo.perihelionKm6)),u],["aphelion            ",H(k(this.planetInfo.aphelionKm6)),d]])}render({ctx:e}){const t=this.planetInfo;t.aphelionKm6>v(1.85)&&(this.delta=-.5),t.aphelionKm6<v(1.01)&&(this.delta=.5),t.perihelionKm6-=this.delta,t.aphelionKm6+=this.delta,this.a=M(t.perihelionKm6,t.aphelionKm6),this.le=T(this.a,t.perihelionKm6),this.b=w(this.a,this.le),this.oe=this.le/this.a,function(e,t,i){const a=I(t),n=I(i),s=M(a,n),r=T(s,a),c=w(s,r),m=s+r,y=s-r;p(e,-m,0,y,0),p(e,-r,0,-r,c),b(e,-m,-2,-r,-2,o),b(e,-r,-c,-2*r,0,o,1),b(e,-r,0,-r,-c,l),b(e,0,-2,-r,-2,h),b(e,0,2,-m,2,d),b(e,0,0,y,0,u)}(e,E(t.perihelionKm6),E(t.aphelionKm6)),$(e),x(e,this.planet),V(e,this.planet),function(e,t,i){e.save(),e.beginPath(),e.setLineDash([5,5]);const n=M(t,i),r=T(n,t),o=w(n,r);y(e,0-I(r),0,I(n),I(o)),a(e,s),e.restore()}(e,E(t.perihelionKm6),E(t.aphelionKm6)),this.updateStatus()}},B=class extends D{constructor(){super(),this.planets=G.slice(0,4)}render({ctx:e}){$(e),this.planets.forEach((t=>{t.update(super.updateInterval()),t.draw(e)}))}};let J,N;window.onload=function(){const a=document.getElementById("canvas"),n=e(a.getContext("2d"),"canvas context");let s={canvas:a,ctx:n,width:0,height:0};document.getElementById("loading-indicator").style.display="none",function e(){s=(e=>{const t=a.clientWidth,i=a.clientHeight;return a.width!==t||a.height!==i?(a.width=t,a.height=i,Object.assign(Object.assign({},e),{width:t,height:i})):e})(s),n.fillStyle="black",n.fillRect(0,0,a.width,a.height),n.save(),n.translate(a.width/2,a.height/2),function(){const e=document.querySelector('input[name="scene-type"]:checked').value;if(e!==J)if(i().innerHTML="",J=e,"mean-orbits"===e)t().innerHTML="Simulation of the Solar System with <b>mean orbits</b>",N=new B;else if("orbits-types"===e)t().innerHTML="Shows different type of planetary orbits",N=new j(i());else{if("ellipse"!==e)throw new Error(`Unknown scene type: ${e}`);t().innerHTML="Basic <b>Ellipse</b> Terminology",N=new K(i())}return N}().render(s),n.restore(),requestAnimationFrame(e)}()}})()})();