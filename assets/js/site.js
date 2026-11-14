(function(){
"use strict";
var $=function(s,r){return(r||document).querySelector(s)},$$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
function track(n,p){try{(window.dataLayer=window.dataLayer||[]).push(Object.assign({event:n},p||{}))}catch(e){}}
var y=$('#yr');if(y)y.textContent=new Date().getFullYear();
/* mobile menu: focus trap, Esc returns to the toggle, background scroll locked */
var bg=$('.burger'),mm=$('#mm');
if(bg&&mm){
var scrollY=0,paneY=0,pane=null;
function menuItems(){return $$('a[href],button',mm).filter(function(el){return !el.disabled;});}
function holdPane(){if(pane && pane.scrollTop!==paneY) pane.scrollTop=paneY;}
function lockScroll(){
pane=window.matchMedia('(max-width:700px)').matches?$('.scroller'):null;
document.documentElement.classList.add('menu-open');
document.body.classList.add('menu-open');
if(pane){paneY=pane.scrollTop;pane.style.overflow='hidden';pane.addEventListener('scroll',holdPane);return;}
scrollY=window.scrollY||window.pageYOffset||0;
document.body.style.position='fixed';
document.body.style.top='-'+scrollY+'px';
document.body.style.left='0';
document.body.style.right='0';
document.body.style.width='100%';
}
function unlockScroll(){
document.documentElement.classList.remove('menu-open');
document.body.classList.remove('menu-open');
if(pane){pane.removeEventListener('scroll',holdPane);pane.style.overflow='';pane.scrollTop=paneY;pane=null;return;}
document.body.style.position='';
document.body.style.top='';
document.body.style.left='';
document.body.style.right='';
document.body.style.width='';
var y=scrollY;
window.scrollTo(0,y);
requestAnimationFrame(function(){window.scrollTo(0,y);});
}
function openMenu(){
mm.classList.add('open');
mm.setAttribute('aria-modal','true');
bg.setAttribute('aria-expanded','true');
lockScroll();
var x=$('.x',mm);if(x)x.focus();
}
function closeMenu(){
if(!mm.classList.contains('open'))return;
mm.classList.remove('open');
mm.removeAttribute('aria-modal');
bg.setAttribute('aria-expanded','false');
unlockScroll();
bg.focus();
}
bg.addEventListener('click',openMenu);
var xbtn=$('.x',mm);if(xbtn)xbtn.addEventListener('click',closeMenu);
document.addEventListener('keydown',function(e){
if(!mm.classList.contains('open'))return;
if(e.key==='Escape'){e.preventDefault();closeMenu();return;}
if(e.key!=='Tab')return;
var f=menuItems();if(!f.length)return;
var i=f.indexOf(document.activeElement);
if(e.shiftKey){if(i<=0){e.preventDefault();f[f.length-1].focus();}}
else if(i<0||i===f.length-1){e.preventDefault();f[0].focus();}
});
}
/* work filters */
$$('.fl button').forEach(function(b){b.addEventListener('click',function(){$$('.fl button').forEach(function(x){x.setAttribute('aria-pressed',x===b)});var f=b.getAttribute('data-f');$$('.item').forEach(function(i){i.hidden=f!=='all'&&i.getAttribute('data-c')!==f});track('work_filter_used',{filter:f})})});
/* quote form */
var qf=$('#qf');
if(qf){var t0=Date.now(),started=false,pt=$('#pt');
var mph={fleet:'Vehicle types, number of vehicles and any deadlines.',signs:'Where will it hang or stand, and what should it say?',decals:'What should it say or show, and where will it go?',apparel:'Colors, sizes and any logo details.',design:'Tell us about your business and what you need designed.',other:'Tell us what you have in mind.'};
function grp(){var v=pt.value,g=/^fleet/.test(v)?'fleet':v;$$('.gp[data-g]',qf).forEach(function(x){var on=x.getAttribute('data-g')===g;x.hidden=!on;x.disabled=!on});$('#m').placeholder=mph[g]||mph.other}
pt.addEventListener('change',function(){grp();track('quote_project_type',{type:pt.value})});grp();
qf.addEventListener('input',function(){if(!started){started=true;track('quote_form_start')}});
$('#f').addEventListener('change',function(){track('file_upload_added')});
qf.addEventListener('submit',function(e){var st=$('#st');
if(qf.website.value||Date.now()-t0<3000){e.preventDefault();return}
if(!qf.name.value||!/.+@.+\..+/.test(qf.email.value)||!qf.consent.checked){e.preventDefault();st.textContent='Please add your name, a valid email, and tick the consent box.';return}
if(qf.getAttribute('action')==='FORM_ENDPOINT'){e.preventDefault();st.textContent='Form not connected yet. Call 240-531-3996 to request a quote.';return}
track('quote_form_submit',{fleet_size:qf.fleet.value,project_type:qf.project.value})})}
/* tracking */
document.addEventListener('click',function(e){var a=e.target.closest('a');if(!a)return;
if(a.href.indexOf('tel:')===0)track('click_to_call',{location:a.dataset.loc||'unknown'});
if(a.dataset.q)track('quote_cta_click',{location:a.dataset.q});
if(a.href.indexOf('instagram.com')>-1)track('outbound_social_click',{network:'instagram'})});
})();
