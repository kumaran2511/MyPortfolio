(function(){
var ids=["home","projects","internship","skills","research","education","certificates","contact"];
var rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
function show(){
  var h=(location.hash||"").slice(1);if(ids.indexOf(h)<0)h="home";
  ids.forEach(function(i){document.getElementById(i).classList.toggle("on",i===h)});
  document.querySelectorAll("nav a").forEach(function(a){a.classList.toggle("on",a.getAttribute("href")==="#"+h)});
  window.scrollTo(0,0);
  if(h==="projects")count();
}
function count(){var el=document.getElementById("count");if(rm){el.textContent=92;return}
  var s=null;(function f(t){s=s||t;var p=Math.min((t-s)/1200,1);el.textContent=Math.round(92*p);if(p<1)requestAnimationFrame(f)})(performance.now())}
addEventListener("hashchange",show);show();
document.addEventListener("pointermove",function(e){var t=e.target.closest&&e.target.closest(".tile,.card");if(!t)return;var r=t.getBoundingClientRect();t.style.setProperty("--mx",(e.clientX-r.left)+"px");t.style.setProperty("--my",(e.clientY-r.top)+"px")});
var words=["machine learning models","stock forecasters","language tools","data dashboards"],w=0,c=0,del=false,el=document.getElementById("typed");
if(rm){el.textContent=words[0]}else{(function tick(){var s=words[w];c+=del?-1:1;el.textContent=s.slice(0,c);var d=del?35:75;
  if(!del&&c===s.length){del=true;d=1400}else if(del&&c===0){del=false;w=(w+1)%words.length;d=300}setTimeout(tick,d)})()}
})();
(function(){
var bar=document.getElementById("bar");
function pr(){var m=document.documentElement.scrollHeight-innerHeight;bar.style.transform="scaleX("+(m>0?scrollY/m:0)+")"}
addEventListener("scroll",pr,{passive:true});addEventListener("hashchange",function(){setTimeout(pr,30)});pr();
if(matchMedia("(prefers-reduced-motion:reduce)").matches)return;
var cv=document.getElementById("net"),g=cv.getContext("2d"),P=[],mx=-999,my=-999,W,H;
function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight;P=[];for(var i=0,n=Math.min(80,Math.floor(W*H/20000));i<n;i++)P.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.45,vy:(Math.random()-.5)*.45})}
addEventListener("resize",rs);rs();
addEventListener("pointermove",function(e){mx=e.clientX;my=e.clientY});
(function loop(){g.clearRect(0,0,W,H);
 P.forEach(function(p,i){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;
  g.fillStyle="rgba(124,58,237,.7)";g.beginPath();g.arc(p.x,p.y,2.2,0,6.283);g.fill();
  for(var j=i+1;j<P.length;j++){var q=P[j],d=Math.hypot(p.x-q.x,p.y-q.y);if(d<130){g.strokeStyle="rgba(124,58,237,"+(.35*(1-d/130))+")";g.beginPath();g.moveTo(p.x,p.y);g.lineTo(q.x,q.y);g.stroke()}}
  var m=Math.hypot(p.x-mx,p.y-my);if(m<170){g.strokeStyle="rgba(236,72,153,"+(.7*(1-m/170))+")";g.beginPath();g.moveTo(p.x,p.y);g.lineTo(mx,my);g.stroke();p.x+=(p.x-mx)*.002;p.y+=(p.y-my)*.002}});
 requestAnimationFrame(loop)})();
var fine=matchMedia("(pointer:fine)").matches;
if(fine){var cur=document.getElementById("cur"),cx=0,cy=0,tx=0,ty=0;
 addEventListener("pointermove",function(e){tx=e.clientX;ty=e.clientY;cur.classList.add("v");cur.classList.toggle("h",!!(e.target.closest&&e.target.closest("a,.card,.tile")))});
 document.addEventListener("pointerleave",function(){cur.classList.remove("v")});
 (function mv(){cx+=(tx-cx)*.18;cy+=(ty-cy)*.18;cur.style.transform="translate("+cx+"px,"+cy+"px)";requestAnimationFrame(mv)})();
 document.querySelectorAll(".tile,.card").forEach(function(el){
  el.addEventListener("pointermove",function(e){var r=el.getBoundingClientRect(),px=(e.clientX-r.left)/r.width-.5,py=(e.clientY-r.top)/r.height-.5;el.style.transform="perspective(800px) rotateX("+(-py*9)+"deg) rotateY("+(px*9)+"deg) translateY(-6px)"});
  el.addEventListener("pointerleave",function(){el.style.transform=""})});
 document.querySelectorAll(".btn").forEach(function(b){
  b.addEventListener("pointermove",function(e){var r=b.getBoundingClientRect();b.style.transform="translate("+((e.clientX-r.left-r.width/2)*.25)+"px,"+((e.clientY-r.top-r.height/2)*.35)+"px)"});
  b.addEventListener("pointerleave",function(){b.style.transform=""})})}
var S="!<>-_/[]{}=+*^?#";
function scr(){var h=document.querySelector(".view.on>h2");if(!h)return;var t=h.dataset.t||(h.dataset.t=h.textContent),f=0;
 (function s(){var o="";for(var i=0;i<t.length;i++)o+=i<f/2?t[i]:S[Math.floor(Math.random()*S.length)];h.textContent=o;if(f++<t.length*2)setTimeout(s,28);else h.textContent=t})()}
addEventListener("hashchange",scr);scr();
})();