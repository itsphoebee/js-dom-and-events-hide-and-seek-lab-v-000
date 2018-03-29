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
  for (let i = 0; i < divs.length; i++){
    return divs[i === (divs.length - 1)]
  }
}
