import {} from "./modules/main.js"
document.addEventListener('DOMContentLoaded', function () {
    const menuDisplayButton = document.querySelector('.menuDisplay');
    const menu = document.querySelector('.menu ul');
  
    menuDisplayButton.addEventListener('click', function () {
      menu.classList.toggle('active');
    });
  });
  