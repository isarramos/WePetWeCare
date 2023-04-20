function mostrarMenu(){
document.getElementsByClassName('dropdown-menu')[0].style.display="block"
}
function esconderMenu(){
  document.getElementsByClassName('dropdown-menu')[0].style.display="none"
  }


var menu= document.getElementsByClassName('after')[0]
menu.addEventListener('mouseover',mostrarMenu)
menu.addEventListener('mouseout',esconderMenu)