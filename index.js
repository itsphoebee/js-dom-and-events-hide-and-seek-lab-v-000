function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n){

}

function deepestChild(){
  return document.getElementById('grand-node').querySelectorAll('div')[3]
}
