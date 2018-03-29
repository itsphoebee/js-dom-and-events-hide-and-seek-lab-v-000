function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n){
  const lis= document.querySelector('ul.ranked-list li')
  for (let i = parseInt(lis[i].innerHTML; i < lis.length; i++){
    lis[i].innerHTML = i + 1)
  }
}

function deepestChild(){
  return document.getElementById('grand-node').querySelectorAll('div')[3]
}
