'use strict';

document.addEventListener('DOMContentLoaded', function() {
    console.log('aaa');

    // ハンバーガーメニューの開閉
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const container = document.querySelector('.container');

    hamburgerMenu.addEventListener('click', function(){
        container.classList.toggle('open');
    });


});