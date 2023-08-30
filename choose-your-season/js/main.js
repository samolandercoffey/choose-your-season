document.getElementById('yellow').onclick = partyYellow
document.getElementById('green').onclick = partyGreen
document.getElementById('white').onclick = partyWhite
document.getElementById('pink').onclick = partyPink


function partyYellow() {
  document.querySelector('body').style.backgroundColor = 'rgb(240, 208, 5)'
  document.querySelector('body').style.color = 'yellow'
}

function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'rgb(29, 196, 79)'
  document.querySelector('body').style.color = 'green'
}

function partyWhite() {
  document.querySelector('body').style.backgroundColor = 'rgb(244, 244, 244)'
  document.querySelector('body').style.color = 'white'
}
function partyPink() {
  document.querySelector('body').style.backgroundColor = 'rgb(213, 106, 167)'
  document.querySelector('body').style.color = 'pink'
}




