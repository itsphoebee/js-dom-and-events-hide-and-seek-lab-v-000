function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n){
  const lis= document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < lis.length; i++){
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n)
  }
}

function deepestChild(){
  const divs = document.getElementById('grand-node').querySelectorAll('div')
  return divs[(divs.length - 1)]
  }
