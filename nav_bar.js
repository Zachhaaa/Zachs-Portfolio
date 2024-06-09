let navBar = document.getElementById('nav-bar');

fetch('/nav_bar.html')
  .then(response => {
    return response.text();
  })
  .then(data => {
    navBar.innerHTML = data;
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });

let menuItemStates = Array(6).fill(false);

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