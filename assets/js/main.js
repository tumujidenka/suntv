'use strict';

document.addEventListener('DOMContentLoaded', function() {

    // ハンバーガーメニューの開閉
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const container = document.querySelector('.container');

    hamburgerMenu.addEventListener('click', function(){
        container.classList.toggle('open');
    });

    // メニューリンク押下時に、ハンバーガーメニューを閉じる
    const menuLinks = document.querySelectorAll('.side-nav__menu-item a');

    menuLinks.forEach(menuLink =>{
        menuLink.addEventListener('click', function(){
            console.log(menuLink);
            container.classList.toggle('open');
        });
    
    })


});