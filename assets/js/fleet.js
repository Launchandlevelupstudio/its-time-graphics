/* Fleet showcases + Our Work grid.
   One list, used by our-work/, commercial-fleets/, law-enforcement-security/, and municipal/.

   ADDING ACI PHOTOS
   Photos do not exist yet. Do not drop in a stand-in image.
   1. Export real photos to assets/img/ as WebP. Name them aci-something.webp.
   2. Add a pic() entry to CATALOG in this file, then list that filename in the ACI.photos take() call.
   3. Set ACI.pending to false and replace ACI.line with a short factual description
      of what those photos actually show. Do not add vehicle counts, dates, or contract claims.
      The Our Work grid drops that filename automatically.
   The commercial card switches from the "coming soon" placeholder to a photo card
   as soon as that array has at least one photo.

   DO NOT ADD these files to a showcase or to Our Work:
   - p24-hero-harbor-police.webp
   - p24-hero-harbor-police-v2.webp
   - p24-hero-harbor-police-wide-v6.webp
   - p24-hero-harbor-police-wide-v7.webp
     (homepage hero only)
   - logo.webp
   - og-image.jpg
   - its-time-graphics-service-area-map-frederick-md-v2.webp
   - berwyn-heights-police-mach-e-suv-side-card-4x3.webp
     (4:3 crop of berwyn-heights-police-mach-e-suv-side-wrap.webp)
   - p2-police-badge-closeup.webp
     (same Mount Rainier door badge as mount-rainier-police-badge.webp)
   - p4-special-police-suv.webp
     (same Children's National door close-up already in childrens-national-special-police.webp)
*/
(function(){
"use strict";
function pic(src, w, h, alt, opt){
  opt = opt || {};
  return {src:src, w:w, h:h, alt:alt, caption:opt.caption || alt, fit:opt.fit || "cover", pos:opt.pos || "center center"};
}

/* Commercial fleet: ACI only, until real photos are added. */
var ACI = {
  id:"aci",
  name:"ACI",
  pending:true,
  line:"Fleet showcase coming soon",
  photos:[
    /* {src:"aci-example.webp", w:1600, h:1000, alt:"Describe only what the photo shows", caption:"Short caption"} */
  ]
};

/* One record per gallery file. Showcases name the files they use.
   WORK is everything in CATALOG that a showcase did not take. */
var EXCLUDED = {
  "p24-hero-harbor-police.webp":"hero only",
  "p24-hero-harbor-police-v2.webp":"hero only",
  "p24-hero-harbor-police-wide-v6.webp":"hero only",
  "p24-hero-harbor-police-wide-v7.webp":"hero only",
  "logo.webp":"logo",
  "og-image.jpg":"social card",
  "its-time-graphics-service-area-map-frederick-md-v2.webp":"service-area map",
  "berwyn-heights-police-mach-e-suv-side-card-4x3.webp":"crop of the Mach-E side wrap",
  "p2-police-badge-closeup.webp":"same Mount Rainier badge",
  "p4-special-police-suv.webp":"same Children's National door close-up"
};

var CATALOG = [
  pic("berwyn-heights-police-suv-side.webp",1600,901,"Black and white Berwyn Heights Police SUV, full side view in a parking lot"),
  pic("berwyn-heights-police-mach-e-suv-side-wrap.webp",1320,841,"Berwyn Heights Police Mustang Mach-E with a black and white wrap, side view"),
  pic("berwyn-heights-police-mach-e-suv-front-wrap.webp",1320,866,"Berwyn Heights Police Mustang Mach-E, front three-quarter view"),
  pic("berwyn-heights-police-charger-sedan-wrap.webp",1320,859,"Berwyn Heights Police Dodge Charger with a black and white wrap"),
  pic("berwyn-heights-police-suv-rear-maryland-flag.webp",1320,1168,"Rear of a Berwyn Heights Police SUV with a Maryland flag graphic across the tailgate"),
  pic("berwyn-heights-police-suv-hood-maryland-flag-grille.webp",1320,1329,"Hood of a Berwyn Heights Police SUV with POLICE lettering and a Maryland flag grille graphic"),
  pic("berwyn-heights-police-suv-emergency-911-decal.webp",1320,1174,"Rear quarter of a Berwyn Heights Police SUV with Emergency Dial 911 lettering"),
  pic("berwyn-heights-tahoe-side.webp",1131,848,"Black and gray Berwyn Heights Police Chevy Tahoe, full side view"),
  pic("berwyn-heights-tahoe-driver-side.webp",1280,960,"Driver side of a black and gray Berwyn Heights Police Chevy Tahoe"),
  pic("berwyn-heights-tahoe-rear.webp",848,1131,"Rear of a Berwyn Heights Police Chevy Tahoe with a Maryland flag graphic on the tailgate"),
  pic("p15-police-suv.webp",1000,750,"White City of Mount Rainier Police SUV, number 78, in a shop"),
  pic("mount-rainier-police-badge.webp",1200,1600,"Close-up of a Mount Rainier Police badge on a vehicle door"),
  pic("atlas-security-shield.webp",1600,1600,"Atlas International Security shield decal on a vehicle door"),
  pic("childrens-national-special-police.webp",1600,1600,"Children's National Special Police SUV: a side view and a close view of the door graphic"),
  pic("brentwood-public-works-van.webp",1600,1600,"White Brentwood public works van with a green and gold stripe and the town seal, full side view"),
  pic("brentwood-code-enforcement-leaf.webp",1600,1200,"White Brentwood code enforcement Nissan Leaf, full side view"),
  pic("brentwood-code-enforcement-sedan.webp",901,1600,"White Brentwood code enforcement sedan, full side view"),
  pic("p9-police-sedan.webp",1200,950,"White Brentwood Police sedan, full side view"),
  pic("brentwood-tailgate-frequent-stops.webp",1600,1600,"Brentwood pickup tailgate with yellow and red Frequent Stops chevrons"),
  pic("brentwood-seal-decal.webp",1600,1600,"Brentwood, Maryland seal decal on a white vehicle door"),
  pic("brentwood-seal-sign.webp",1600,1600,"Round Brentwood, Maryland seal mounted on a wall"),
  pic("brentwood-police-shield-sign.webp",1600,1600,"Brentwood Police shield sign"),
  pic("berwyn-heights-recycling-truck.webp",1600,1600,"Berwyn Heights recycling truck with a Recycle for the Bees and Trees graphic"),
  pic("p5-public-works-truck.webp",1200,950,"Blue Berwyn Heights public works recycling truck with a Let's Save the Planet graphic"),
  pic("berwyn-heights-municipal-signs.webp",1086,1448,"Collage of Town of Berwyn Heights signs, including a leaf-collection notice and a sports park sign"),
  pic("university-park-code-escape.webp",1600,1600,"White University Park code compliance Ford Escape, rear three-quarter view"),
  pic("university-park-code-door.webp",1600,1600,"University Park Code Compliance lettering on a vehicle door"),
  pic("amazing-earth-landscaping-truck-trailer.webp",1600,1600,"Black Amazing Earth Landscaping pickup towing a lettered trailer, both vehicles fully in frame"),
  pic("bubblegum-limo-side.webp",1600,1600,"White stretch limousine with pink BubbleGum lettering, full side view in a parking lot"),
  pic("kitchen-renovation-transit.webp",1600,1600,"Black Ford Transit van with kitchen renovation lettering, full side view"),
  pic("tatas-treats-trailer-rear.webp",1600,1600,"Rear doors of a Tata's Treats trailer with candy apple, popcorn, and cotton candy graphics"),
  pic("tatas-treats-trailer-side.webp",1600,1600,"Side panel of a Tata's Treats trailer with the logo, menu, and booking information"),
  pic("cottage-city-police-shuttle.webp",1600,1600,"Cottage City Police Department community engagement shuttle, full side view"),
  pic("cottage-city-police-charger.webp",960,720,"Silver Cottage City Police Dodge Charger with a purple POLICE wrap, full side view"),
  pic("bladensburg-police-door.webp",1600,1600,"Bladensburg Police door badge and POLICE lettering on a black SUV"),
  pic("bladensburg-police-upfit.webp",1280,960,"Bladensburg Police SUV with the hood open in an upfit shop, full side view",{fit:"contain"}),
  pic("university-park-police-door.webp",1600,1600,"University Park Police door graphic, unit 39, on a white SUV"),
  pic("security-patrol-suv.webp",1600,901,"Tan SUV with red and black SECURITY PATROL graphics, full side view",{fit:"contain"}),
  pic("security-patrol-sedan.webp",1600,901,"Silver sedan with red and black SECURITY PATROL graphics, full side view",{fit:"contain"}),
  pic("saberone-security-door.webp",1600,1600,"Saberone Security door lettering and badge on a white SUV"),
  pic("mount-rainier-parking-enforcement-bolt.webp",1600,1600,"White City of Mount Rainier parking enforcement Chevy Bolt, number 95, front three-quarter view"),
  pic("p21-parking-enforcement-car.webp",1000,1000,"White City of Mount Rainier parking enforcement Chevy Bolt, number 95, side view"),
  pic("p1-detailing-van.webp",768,608,"White service van with blue striped lettering",{fit:"contain"}),
  pic("p3-utility-truck.webp",768,608,"White utility truck with blue and white graphics",{fit:"contain"}),
  pic("p6-plumbing-van.webp",1200,950,"White plumbing van with a blue and gold wrap",{fit:"contain"}),
  pic("p10-ice-delivery-truck.webp",1200,950,"Box truck with a penguin and a Got Ice graphic",{fit:"contain"}),
  pic("p17-hauling-pickup.webp",1000,486,"Black pickup with a hauling company door logo",{fit:"contain"}),
  pic("p18-hvac-fleet-collage.webp",1000,1000,"Collage of pickup trucks with HVAC company graphics"),
  pic("p19-ice-cream-van-collage.webp",1000,1000,"Collage of an ice cream van with a colorful wrap"),
  pic("p22-contractor-minivan.webp",1000,750,"White minivan with a partial wrap for a construction company",{fit:"contain"}),
  pic("p8-event-trailer.webp",1200,950,"Black enclosed trailer with gold lettering",{fit:"contain"}),
  pic("p11-food-truck-trailer.webp",960,960,"Red food trailer with colorful logo graphics"),
  pic("yatai-corner-signs.webp",1600,901,"Oval and long Yatai Corner signs for sushi, hibachi, and Thai, against a brick wall",{fit:"contain"}),
  pic("friend-leaves-banner.webp",901,1600,"Friend Leaves retractable banner for therapeutic horticulture",{fit:"contain"}),
  pic("friend-leaves-window-decal.webp",901,1600,"Friend Leaves window decal with a QR code on a car window"),
  pic("p23-storefront-window-graphics.webp",1000,750,"Storefront windows and door with printed graphics",{fit:"contain"}),
  pic("new-horizon-landscaping-flyers.webp",1600,1600,"Stack of New Horizon Landscaping flyers"),
  pic("bbq-tech-koozies.webp",901,1600,"Black BBQ Tech koozies with a grill graphic"),
  pic("call-811-stickers.webp",1600,1600,"Sheet of 811 Call Before You Dig stickers"),
  pic("p20-police-event-table.webp",720,720,"Town of Berwyn Heights Police table cover at an outreach table"),
  pic("shop-printer-laminator.webp",1600,901,"Shop work table with a wide-format printer, vinyl, and a sign laid out",{fit:"contain"}),
  pic("its-time-graphics-shop-box-truck-wrap-install.webp",1194,1200,"Installer on yellow scaffolding beside a box truck during a wrap"),
  pic("its-time-hoodie-portrait.webp",900,1600,"Person wearing a black hoodie with the It's Time Graphics logo",{pos:"center 22%"})
];

function findPhoto(src){
  for(var i=0;i<CATALOG.length;i++) if(CATALOG[i].src===src) return CATALOG[i];
  throw new Error("Showcase file is not in the catalog: "+src);
}
function take(srcs){return srcs.map(findPhoto);}

var LAW = [
  {
    id:"berwyn-heights-police",
    name:"Berwyn Heights Police",
    line:"Patrol fleet graphics",
    photos:take([
      "berwyn-heights-police-suv-side.webp",
      "berwyn-heights-police-mach-e-suv-side-wrap.webp",
      "berwyn-heights-police-mach-e-suv-front-wrap.webp",
      "berwyn-heights-police-charger-sedan-wrap.webp",
      "berwyn-heights-police-suv-rear-maryland-flag.webp",
      "berwyn-heights-police-suv-hood-maryland-flag-grille.webp",
      "berwyn-heights-police-suv-emergency-911-decal.webp",
      "berwyn-heights-tahoe-side.webp",
      "berwyn-heights-tahoe-driver-side.webp",
      "berwyn-heights-tahoe-rear.webp"
    ])
  },
  {
    id:"mount-rainier-police",
    name:"Mount Rainier Police",
    line:"Patrol SUV and door badge",
    /* p15 is filed under a generic name; the door reads City of Mount Rainier Police.
       The parking-enforcement Bolt stays in Our Work: the door says Parking Enforcement, not Police. */
    photos:take([
      "p15-police-suv.webp",
      "mount-rainier-police-badge.webp"
    ])
  },
  {
    id:"atlas-security",
    name:"Atlas Security",
    line:"Door shield decal",
    photos:take(["atlas-security-shield.webp"])
  },
  {
    id:"childrens-national",
    name:"Children\u2019s National Special Police",
    line:"Special police SUV graphics",
    photos:take(["childrens-national-special-police.webp"])
  }
];

var MUNICIPAL = [
  {
    id:"town-of-brentwood",
    name:"Town of Brentwood",
    line:"Town vehicles and signs",
    /* p9 is a generic filename; the door reads POLICE BRENTWOOD. */
    photos:take([
      "brentwood-public-works-van.webp",
      "brentwood-code-enforcement-leaf.webp",
      "brentwood-code-enforcement-sedan.webp",
      "p9-police-sedan.webp",
      "brentwood-tailgate-frequent-stops.webp",
      "brentwood-seal-decal.webp",
      "brentwood-seal-sign.webp",
      "brentwood-police-shield-sign.webp"
    ])
  },
  {
    id:"berwyn-heights-municipal",
    name:"Berwyn Heights",
    line:"Recycling trucks and town signs",
    /* p5 is a generic filename; the door reads Berwyn Heights, MD Public Works. */
    photos:take([
      "berwyn-heights-recycling-truck.webp",
      "p5-public-works-truck.webp",
      "berwyn-heights-municipal-signs.webp"
    ])
  },
  {
    id:"university-park-code",
    name:"University Park Code Enforcement",
    line:"Code compliance vehicle graphics",
    photos:take([
      "university-park-code-escape.webp",
      "university-park-code-door.webp"
    ])
  }
];

/* ACI photos: add the pic() to CATALOG, then list the filename here. Leave this empty until real photos exist. */
ACI.photos = take([
  /* "aci-example.webp" */
]);

function showcaseSrcSet(){
  var set = {};
  function add(list){
    list.forEach(function(p){
      if(set[p.src]) throw new Error("Duplicate showcase photo: "+p.src);
      if(EXCLUDED[p.src]) throw new Error("Showcase uses an excluded file: "+p.src);
      set[p.src] = true;
    });
  }
  add(ACI.photos);
  LAW.forEach(function(d){add(d.photos);});
  MUNICIPAL.forEach(function(d){add(d.photos);});
  return set;
}
var SHOWCASE_SRCS = showcaseSrcSet();
/* Our Work is the catalog minus every showcase file and minus excluded near-duplicates. */
var WORK = CATALOG.filter(function(p){
  return !SHOWCASE_SRCS[p.src] && !EXCLUDED[p.src];
});

function assertGallery(){
  var seen = {};
  CATALOG.forEach(function(p){
    if(seen[p.src]) throw new Error("Duplicate catalog photo: "+p.src);
    seen[p.src] = true;
    if(EXCLUDED[p.src]) throw new Error("Excluded file is in the catalog: "+p.src);
  });
  Object.keys(SHOWCASE_SRCS).forEach(function(src){
    if(!seen[src]) throw new Error("Showcase photo missing from catalog: "+src);
  });
  var overlap = WORK.filter(function(p){return SHOWCASE_SRCS[p.src] || EXCLUDED[p.src];});
  console.assert(overlap.length===0, "Our Work repeats a showcase or excluded photo", overlap.map(function(p){return p.src;}));
  if(overlap.length) throw new Error("Our Work repeats a showcase or excluded photo: "+overlap.map(function(p){return p.src;}).join(", "));
  if(Object.keys(SHOWCASE_SRCS).length + WORK.length !== CATALOG.length){
    throw new Error("Gallery count mismatch: "+Object.keys(SHOWCASE_SRCS).length+" showcase + "+WORK.length+" grid != "+CATALOG.length+" catalog");
  }
}
assertGallery();

var SECTIONS = [
  {id:"commercial", title:"Commercial fleet", cols:"", items:[ACI]},
  {id:"law", title:"Law enforcement & security", cols:"", items:LAW},
  {id:"municipal", title:"Municipal", cols:"cols-3", items:MUNICIPAL}
];

function $(s,r){return(r||document).querySelector(s);}
function el(tag, attrs){
  var n = document.createElement(tag);
  if(attrs) Object.keys(attrs).forEach(function(k){
    if(k==="class") n.className = attrs[k];
    else if(k==="text") n.textContent = attrs[k];
    else if(attrs[k]!=null && attrs[k]!==false) n.setAttribute(k, attrs[k]);
  });
  for(var i=2;i<arguments.length;i++) if(arguments[i]) n.appendChild(arguments[i]);
  return n;
}
function imgEl(root, photo, eager){
  var img = el("img",{src:root+"assets/img/"+photo.src, alt:photo.alt, width:String(photo.w), height:String(photo.h), decoding:"async"});
  img.loading = eager ? "eager" : "lazy";
  return img;
}
/* Native loading=lazy misses some images inside buttons. When a thumbnail
   nears the viewport, force it to decode so a scroll never leaves a blank cell. */
function armLazy(rootEl){
  var imgs = rootEl.querySelectorAll("img[loading=lazy]");
  if(!("IntersectionObserver" in window)){
    Array.prototype.forEach.call(imgs, function(img){img.loading="eager";});
    return;
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(!en.isIntersecting) return;
      var img = en.target;
      img.loading = "eager";
      if(!img.complete || !img.naturalWidth){
        var src = img.getAttribute("src");
        if(src) img.src = src;
      }
      io.unobserve(img);
    });
  }, {rootMargin:"900px 0px"});
  Array.prototype.forEach.call(imgs, function(img){io.observe(img);});
}
function countLabel(n){return n+" photo"+(n===1?"":"s");}

var lb, lbImg, lbCap, lbCount, lbPrev, lbNext, lbTitle, lastFocus, slides, index, deptName;

function focusables(){
  return Array.prototype.filter.call(lb.querySelectorAll("button"), function(b){return !b.hidden && !b.disabled;});
}
function show(i){
  if(!slides.length) return;
  index = i;
  var p = slides[i];
  lbImg.src = p.src;
  lbImg.width = p.w;
  lbImg.height = p.h;
  lbImg.alt = p.alt;
  lbCap.textContent = p.caption;
  lbCount.textContent = "Photo "+(i+1)+" of "+slides.length;
  lbTitle.textContent = deptName || "Photo";
  var single = slides.length<2;
  lbPrev.hidden = single;
  lbNext.hidden = single;
  lbPrev.disabled = i<=0;
  lbNext.disabled = i>=slides.length-1;
}
function openAt(list, i, name, opener){
  slides = list;
  deptName = name;
  lastFocus = opener;
  show(i);
  if(typeof lb.showModal==="function") lb.showModal();
  else {lb.setAttribute("open",""); document.body.style.overflow="hidden";}
  lb.querySelector(".lb-x").focus();
}
function closeLb(){
  if(lb.open && typeof lb.close==="function") lb.close();
  else {lb.removeAttribute("open"); document.body.style.overflow="";}
  if(lastFocus) lastFocus.focus();
}
function step(d){
  var n = index+d;
  if(n<0 || n>=slides.length) return;
  show(n);
}

function buildLightbox(){
  lbTitle = el("h2",{id:"lb-title", class:"sr", text:"Photo"});
  lbImg = el("img",{alt:""});
  var stage = el("div",{class:"lb-stage"});
  stage.appendChild(lbImg);
  lbCap = el("p",{class:"lb-cap", id:"lb-cap"});
  lbPrev = el("button",{type:"button", class:"lb-nav", text:"Previous"});
  lbPrev.setAttribute("aria-label","Previous photo");
  lbNext = el("button",{type:"button", class:"lb-nav", text:"Next"});
  lbNext.setAttribute("aria-label","Next photo");
  lbCount = el("p",{class:"lb-count", "aria-live":"polite"});
  var bar = el("div",{class:"lb-bar"}, lbPrev, lbCount, lbNext);
  var x = el("button",{type:"button", class:"lb-x", text:"Close"});
  x.setAttribute("aria-label","Close photos");
  var inner = el("div",{class:"lb-in"}, stage, lbCap, bar);
  lb = el("dialog",{class:"lb", "aria-modal":"true", "aria-labelledby":"lb-title", "aria-describedby":"lb-cap"}, lbTitle, x, inner);
  document.body.appendChild(lb);
  x.addEventListener("click", closeLb);
  lbPrev.addEventListener("click", function(){step(-1);});
  lbNext.addEventListener("click", function(){step(1);});
  lb.addEventListener("click", function(e){if(e.target===lb) closeLb();});
  lb.addEventListener("close", function(){document.body.style.overflow="";});
  lb.addEventListener("keydown", function(e){
    if(e.key==="Escape"){e.preventDefault(); closeLb(); return;}
    if(e.key==="ArrowRight"){e.preventDefault(); step(1); return;}
    if(e.key==="ArrowLeft"){e.preventDefault(); step(-1); return;}
    if(e.key!=="Tab") return;
    var f = focusables();
    if(!f.length) return;
    var i = f.indexOf(document.activeElement);
    if(e.shiftKey){ if(i<=0){e.preventDefault(); f[f.length-1].focus();} }
    else if(i===f.length-1 || i<0){e.preventDefault(); f[0].focus();}
  });
  var sx=0, sy=0, tracking=false;
  stage.addEventListener("pointerdown", function(e){
    if(e.pointerType==="mouse" && e.button!==0) return;
    tracking=true; sx=e.clientX; sy=e.clientY;
  });
  stage.addEventListener("pointerup", function(e){
    if(!tracking) return;
    tracking=false;
    var dx=e.clientX-sx, dy=e.clientY-sy;
    if(Math.abs(dx)<48 || Math.abs(dx)<Math.abs(dy)) return;
    step(dx<0?1:-1);
  });
  stage.addEventListener("pointercancel", function(){tracking=false;});
}

function deptCard(root, dept){
  var lead = dept.photos[0];
  var frame = el("span",{class:"dept-lead"});
  frame.style.aspectRatio = lead.w+" / "+lead.h;
  var image = imgEl(root, lead, false);
  image.alt = "";
  image.style.objectPosition = lead.pos || "center center";
  frame.appendChild(image);
  var btn = el("button",{type:"button", class:"dept", "aria-haspopup":"dialog"});
  btn.appendChild(frame);
  btn.appendChild(el("h3",{text:dept.name}));
  btn.appendChild(el("p",{class:"line", text:dept.line}));
  btn.appendChild(el("p",{class:"count", text:countLabel(dept.photos.length)}));
  btn.appendChild(el("span",{class:"go", text:"View photos"}));
  var list = dept.photos.map(function(p){
    return {src:root+"assets/img/"+p.src, w:p.w, h:p.h, alt:p.alt, caption:p.caption};
  });
  btn.addEventListener("click", function(){openAt(list, 0, dept.name, btn);});
  return btn;
}
function aciCard(){
  return el("article",{class:"aci"},
    el("p",{class:"kicker", text:"Featured fleet"}),
    el("h3",{text:ACI.name}),
    el("p",{text:"ACI fleet showcase coming soon."})
  );
}
function renderShowcases(){
  document.querySelectorAll("[data-fleet-root]").forEach(function(mount){
    var root = mount.getAttribute("data-fleet-root") || "";
    var want = (mount.getAttribute("data-fleet") || "commercial,law,municipal").split(/[\s,]+/);
    var headings = mount.getAttribute("data-headings")==="true";
    SECTIONS.forEach(function(sec){
      if(want.indexOf(sec.id)===-1) return;
      var block = el("div",{class:"fx-block"});
      if(headings){
        block.id = sec.id;
        block.appendChild(el("span",{class:"rule","aria-hidden":"true"}));
        block.appendChild(el("h2",{text:sec.title}));
      }
      if(sec.id==="commercial" && ACI.pending && !ACI.photos.length){
        block.appendChild(aciCard());
      } else {
        var grid = el("div",{class:"dept-grid"+(sec.cols?" "+sec.cols:"")});
        sec.items.forEach(function(dept){
          if(!dept.photos.length) return;
          grid.appendChild(deptCard(root, dept));
        });
        block.appendChild(grid);
      }
      mount.appendChild(block);
    });
    armLazy(mount);
  });
}
function renderWork(){
  document.querySelectorAll("[data-work-root]").forEach(function(mount){
    var root = mount.getAttribute("data-work-root") || "";
    var grid = el("div",{class:"ig"});
    var list = WORK.map(function(p){
      return {src:root+"assets/img/"+p.src, w:p.w, h:p.h, alt:p.alt, caption:p.caption};
    });
    WORK.forEach(function(p, i){
      var image = imgEl(root, p, false);
      image.alt = "";
      image.className = p.fit==="contain" ? "contain" : "cover";
      image.style.setProperty("--pos", p.pos || "center center");
      image.style.objectPosition = p.pos || "center center";
      var ov = el("span",{class:"ov", "aria-hidden":"true", text:p.caption});
      var btn = el("button",{type:"button", class:"ig-item", "aria-haspopup":"dialog", "aria-label":p.caption}, image, ov);
      btn.addEventListener("click", function(){openAt(list, i, "Our work", btn);});
      grid.appendChild(btn);
    });
    mount.appendChild(grid);
    armLazy(grid);
  });
}

var galleryReport = {
  assertGallery:assertGallery,
  showcaseCount:Object.keys(SHOWCASE_SRCS).length,
  gridCount:WORK.length,
  catalogCount:CATALOG.length,
  overlap:WORK.filter(function(p){return SHOWCASE_SRCS[p.src];}).map(function(p){return p.src;})
};
if(typeof module!=="undefined" && module.exports) module.exports = galleryReport;
if(typeof document!=="undefined"){
  buildLightbox();
  renderShowcases();
  renderWork();
}
})();
