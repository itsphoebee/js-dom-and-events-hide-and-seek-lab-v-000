function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target')
}

function deepestChild(){
  return document.getElementById('grand-node').querySelectorAll('div')[3]
}

function increaseRankBy(n){
  
}
