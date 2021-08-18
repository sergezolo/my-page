// !!! Show / Hide Menu
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

// !!! Hide Mobile Menu on Link Click
const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach((link) => link.addEventListener('click', linkAction));



// Arrow menu
const skillsContent = document.getElementsByClassName('skills-content');
const skillsHeader = document.querySelectorAll('.skills-header');

function toggleSkills(){
    let itemClass = this.parentNode.className
    if(itemClass === 'skills-content skills-close'){
        this.parentNode.className = 'skills-content skills-open';
    } else {
        this.parentNode.className = 'skills-content skills-close';
    }
}
skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})


// Qualifications
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');
    
tabs.forEach((tab) => {
    tab.addEventListener('click', () => { 
        const target = document.querySelector(tab.dataset.target)
        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('qualification-active')
        })
        target.classList.add('qualification-active')

        tabs.forEach((tab) => {
            tab.classList.remove('qualification-active')
        })
        tab.classList.add('qualification-active')
    })
})

// Swiper

let swiper = new Swiper('.portfolio-container', {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Scroll Section Active Link

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive)

// Background header

function scrollHeader() {
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)

// Dark-Light Theme

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})