(function(){
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll(".rv").forEach(function(n){io.observe(n)});
var T={Naturaleza:"caminata y miradores en entornos naturales",Cultura:"recorrido por patrimonio y tradiciones locales",Gastronomía:"degustación de sabores típicos del Tolima","Guadua y artesanía":"visita a un taller de guadua y piezas hechas a mano"};
var S={};
function render(){
var i=S.i||[],d=S.d||"1 día",p=S.p||"Económico";
var r=document.getElementById("res");
r.innerHTML="<b>Tu propuesta: "+d+" · presupuesto "+p.toLowerCase()+"</b><br>"+(i.length?i.map(function(x){return "• "+T[x]}).join("<br>"):"Elige al menos un interés.")+"<br><span class=\"small\">Sugerencia orientativa; verifica condiciones de acceso y prestadores autorizados.</span>";
}
document.querySelectorAll(".chips").forEach(function(g){
var k=g.dataset.k;
function read(){var on=[].filter.call(g.children,function(c){return c.getAttribute("aria-pressed")==="true"}).map(function(c){return c.textContent});S[k]=k==="i"?on:on[0]}
g.addEventListener("pointerdown",function(e){var c=e.target.closest(".chip");if(!c)return;
if(k==="i"){c.setAttribute("aria-pressed",c.getAttribute("aria-pressed")==="true"?"false":"true")}
else{[].forEach.call(g.children,function(x){x.setAttribute("aria-pressed","false")});c.setAttribute("aria-pressed","true")}
read();render()});
read();
});
render();
})();
