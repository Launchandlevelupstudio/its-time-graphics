/* Before/after comparison.
   Any .ba block is enhanced on load. No before photo ships with the site, so the
   only example is commented out in case-studies.html. Do not point this at a stand-in. */
(function(){
"use strict";
function apply(frame, range, v){
  v=Math.max(0, Math.min(100, Math.round(Number(v))));
  frame.style.setProperty("--ba", String(v));
  if(Number(range.value)!==v) range.value=String(v);
  range.setAttribute("aria-valuenow", String(v));
  var text=v===0?"Divider at the left edge. The after photo fills the frame."
    :v===100?"Divider at the right edge. The before photo fills the frame."
    :"Divider "+v+" percent from the left. Left of the line is before, right is after.";
  range.setAttribute("aria-valuetext", text);
}
function init(root){
  var frame=root.querySelector(".ba-frame");
  var before=root.querySelector(".ba-before");
  var after=root.querySelector(".ba-after");
  var range=root.querySelector('input[type="range"]');
  if(!frame||!before||!after||!range) return;
  root.classList.add("is-ready");
  apply(frame, range, range.value===""?50:range.value);
  range.addEventListener("input", function(){apply(frame, range, range.value);});
  var drag=false;
  function fromPointer(e){
    var rect=frame.getBoundingClientRect();
    if(!rect.width) return;
    var x=Math.max(0, Math.min(rect.width, e.clientX-rect.left));
    apply(frame, range, (x/rect.width)*100);
  }
  function onMove(e){ if(drag) fromPointer(e); }
  function end(){
    drag=false;
    window.removeEventListener("pointermove", onMove);
    window.removeEventListener("pointerup", end);
    window.removeEventListener("pointercancel", end);
  }
  frame.addEventListener("pointerdown", function(e){
    if(e.pointerType==="mouse"&&e.button!==0) return;
    drag=true;
    try { if(e.pointerId!=null && frame.setPointerCapture) frame.setPointerCapture(e.pointerId); } catch(err) {}
    fromPointer(e);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", end);
    window.addEventListener("pointercancel", end);
  });
}
function initAll(){
  Array.prototype.forEach.call(document.querySelectorAll(".ba"), init);
}
if(typeof document!=="undefined"){
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", initAll);
  else initAll();
  window.ITGCompare={init:initAll};
}
})();
