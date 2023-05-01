var iconMenu = document.querySelectorAll('.icon-menu');

iconMenu[0].addEventListener('click',()=>{
//Efeito de opacidade
//Efeito de toggle
let menu = document.getElementById('cabeçalho');
if(cabeçalho.classList.contains('hide')){
menu.classList.add('show');
menu.classList.remove('hide');
}else{
    menu.classList.add('hide');
    menu.classList.remove('show');
    }
});