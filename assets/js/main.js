/*==================== DARK LIGHT THEME ====================*/ 

const themeButton = document.getElementById('theme-button');

selectedTheme = localStorage.getItem('selected_theme');
selectedIcon = localStorage.getItem('selected_icon');

themeButton.addEventListener('click',_=>{
    document.body.classList.toggle('dark-theme');
    if(themeButton.classList.contains('bx-moon')){
        themeButton.classList.replace('bx-moon','bx-sun');
        localStorage.selected_theme = 'dark';
        localStorage.selected_icon = 'bx-sun';
    }   
    else{
        themeButton.classList.replace('bx-sun','bx-moon');
        localStorage.selected_theme = "basic";
        localStorage.selected_icon = 'bx-moon';
    }
});

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove']('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        themeButton.classList.replace('bx-moon','bx-sun');
    }else{
        themeButton.classList.replace('bx-sun','bx-moon');
    }
}

/*==================== SHOW MENU ====================*/
const ShowMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle&&nav){
        toggle.addEventListener('click', _ =>{
            nav.classList.toggle('show-menu');
        });
    }
}

ShowMenu('nav-toggle','nav-menu');

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(item => item.addEventListener('click', linkAction));

/**********************************************************************************************************************************/

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop-100;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= (sectionHeight + sectionTop)){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}


window.addEventListener('scroll', scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/ 


function scrollHeader(){
    const nav = document.getElementById('header');

    if(window.pageYOffset >= 200){
        nav.classList.add('scroll-header');
    }else{
        nav.classList.remove('scroll-header');
    }
}

document.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL TOP ====================*/ 


function scrollTop(){
    const scrolltop = document.getElementById('scroll-top');

    if(window.pageYOffset >= 560){
        scrolltop.classList.add('show-scroll');
    }else{
        scrolltop.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollTop);

/*==================== SCROLL REVEAL ANIMATION ====================*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1000
});

const targets = '.home__data,'
+               '.home__img,'
+               '.about__data,'
+               '.about__img,'
+               '.services__content,'
+               '.menu__content,'
+               '.app__data,'
+               '.contact__data,'
+               '.contact__button,'
+               '.footer__content';

sr.reveal(targets,{
    interval: 200
});

/*==================== FUNCTIONAL CONTACT FORM WITH FORMSPREE.IO ====================*/
$('.submit').click(function(e){
    var mail = $('.mail').val();
    var subject = $('.subject').val();
    var message = $('.message').val();
    var StatusElm = $('.status');
    StatusElm.empty();

    if(!(mail.length > 5 && mail.includes('@') && mail.includes('.'))){
        e.preventDefault();
        StatusElm.append('<div style="color : var(--first-color); text-align:center;">L\'adresse mail n\'est pas valide</div>');
    }

    if(!(subject.length > 2)){
        e.preventDefault();
        StatusElm.append('<div style="color : var(--first-color); text-align:center;">L\'objet n\'est pas valide</div>');
    }

    if(!(message.length > 20)){
        e.preventDefault();
        StatusElm.append('<div style="color : var(--first-color); text-align:center;">Le message n\'est pas valide</div>');
    }
})

$(".sélecteur").val();


