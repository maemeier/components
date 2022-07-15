
function applySize(src, dst) {
  document.getElementById(dst).style.fontSize = `${src.value}px`;
}

function applyBackgroundColor(src, dst){
  document.getElementById(dst).style.backgroundColor = src.value
}

function applyColor(src, dst){
  document.getElementById(dst).style.color = src.value
}

function applyColors(src, dsts){
  for (let dst of dsts){
    applyColor(src, dst);
  }
}

function applyRadius(src, dst){
  document.getElementById(dst).style.borderRadius = `${src.value}px`
}

function applyWeight(src, dst){
  var value = src.options[src.selectedIndex].text
  document.getElementById(dst).style.fontWeight = value
}
