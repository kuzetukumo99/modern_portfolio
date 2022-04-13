// Select DOM Items DOM document object model プログラムからHTMLやXMLを自由に操作するための仕組み
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');// queryselectorは最初の一つしか掴めない。liは複数あるのでそれを掴むためにはquerySelectorAllを使ってLiの全てのnav-itemを配列として掴む

// Set Initial State Of Menu
let showMenu = false;//後で値を再割り当てするので、constは使えない

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(!showMenu){
    menuBtn.classList.add('close');//クラスを付与
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));//navItemは複数あるため、それら全てにshowクラス付与しないといけない。そのためにforeachで繰り返し処理をする

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;

  }
}