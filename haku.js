// Haku.js

function shakeAll(){
  var style = document.createElement('style');
  style.innerHTML = "*{animation:shake .5s;animation-iteration-count:infinite}@keyframes shake{0%{transform:translate(1px,1px) rotate(0)}10%{transform:translate(-1px,-2px) rotate(-1deg)}20%{transform:translate(-3px,0) rotate(1deg)}30%{transform:translate(3px,2px) rotate(0)}40%{transform:translate(1px,-1px) rotate(1deg)}50%{transform:translate(-1px,2px) rotate(-1deg)}60%{transform:translate(-3px,1px) rotate(0)}70%{transform:translate(3px,1px) rotate(-1deg)}80%{transform:translate(-1px,-1px) rotate(1deg)}90%{transform:translate(1px,2px) rotate(0)}100%{transform:translate(1px,-2px) rotate(-1deg)}}";
  document.getElementsByTagName('head')[0].appendChild(style);
}

function shakeImages(){
  var style = document.createElement('style');
  style.innerHTML = "img{animation:shake .5s;animation-iteration-count:infinite}@keyframes shake{0%{transform:translate(1px,1px) rotate(0)}10%{transform:translate(-1px,-2px) rotate(-1deg)}20%{transform:translate(-3px,0) rotate(1deg)}30%{transform:translate(3px,2px) rotate(0)}40%{transform:translate(1px,-1px) rotate(1deg)}50%{transform:translate(-1px,2px) rotate(-1deg)}60%{transform:translate(-3px,1px) rotate(0)}70%{transform:translate(3px,1px) rotate(-1deg)}80%{transform:translate(-1px,-1px) rotate(1deg)}90%{transform:translate(1px,2px) rotate(0)}100%{transform:translate(1px,-2px) rotate(-1deg)}}";
  document.getElementsByTagName('head')[0].appendChild(style);
}
