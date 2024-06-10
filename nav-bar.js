let navBar   = document.getElementById('nav-bar');
let navMenu  = document.getElementById('nav-menu')
let topBar   = document.getElementById('top-bar');
let menuIcon = document.createElement('img');
let main = document.querySelector('main');

menuIcon.src = '/General-Icons/Menu.svg';
menuIcon.style.width = '50px';
menuIcon.onclick = menuIconClick

let topBarMenuState = false;
let menuIconState = false;
let menuItemStates = Array(8).fill(false);
let navBarHTML = '';

const maxWidth = 750;

function navBarMQ() {
  if (window.innerWidth <= maxWidth) {
    navBar.innerHTML = '';
    navBar.style.margin = '0';
    main.style.width = 'calc(100% - 30px)';
    main.style.marginLeft = '15px';
  } else {
    navBar.innerHTML = navBarHTML;
    navMenu.innerHTML = ''
    navBar.style.margin = null;
    main.style.width = null;
    main.style.marginLeft = null;
  }
  if (window.innerWidth <= maxWidth && !topBarMenuState) {
    topBar.appendChild(menuIcon)
    topBarMenuState = true;
  } else if (window.innerWidth > maxWidth && topBarMenuState){
    topBar.removeChild(menuIcon);
    topBarMenuState = false;
  }
}

function menuItemClick(itemNumber) {

  if(menuItemStates[itemNumber]) {
    document.querySelectorAll('.sub-items')[itemNumber].style.display = 'none';
    document.querySelectorAll('.dropdown-title img')[itemNumber].style.transform = 'rotate(0deg)';

    menuItemStates[itemNumber] = false;
  }
  else {
    document.querySelectorAll('.sub-items')[itemNumber].style.display = 'flex';
    document.querySelectorAll('.dropdown-title img')[itemNumber].style.transform = 'rotate(90deg)';
    menuItemStates[itemNumber] = true;
  }
}
function menuIconClick() {
  console.log('something')
  if (menuIconState) {
    navMenu.innerHTML = '';
    menuIconState = false;
  } 
  else {
    navMenu.innerHTML = navBarHTML;
    menuIconState = true; 
  }
}

fetch('/nav-bar.html')
.then(response => {
  return response.text();
})
.then(data => {
  navBarHTML = data;
})
.catch(error => {
  console.error('There has been a problem with your fetch operation:', error);
});

document.addEventListener('DOMContentLoaded', navBarMQ)

window.addEventListener('resize', navBarMQ)