jQuery('document').ready(function($){
    var menuBtn = $('.menu-icon'),
    menu = $('.navegation ul');

    menuBtn.click(function(){
        
        if(menu.hasClass('show')){
            menu.removeClass('show');
        }else{
            menu.addClass('show');
        }

    });

});
const btnSwitch = document.querySelector('#switch');
btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
})