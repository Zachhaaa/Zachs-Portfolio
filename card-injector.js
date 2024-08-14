let projectsGrid = document.getElementById('projects-grid');
let processedContent = projectsGrid.textContent.trim();
let items = processedContent.split('\n');
let itemsHTML = new Array(items.length);
let numComplete = 0;

items.forEach((item, i) => {
  fetch(item.trim())
  .then(response => {
    return response.text();
  })
  .then(data => {
    itemsHTML[i] = data;
    numComplete++; 
    if (numComplete === items.length) {
      projectsGrid.innerHTML = itemsHTML.join('');
      projectsGrid.style.opacity = 1.0;
    }
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
}); 

