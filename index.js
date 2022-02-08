// navbar function
const hamburger = document.querySelector('.hamburger');
const navBar = document.querySelector('.navBar');
const list = navBar.getElementsByTagName('li');
const mainNav = document.getElementById('mainNav');
const close = document.querySelector('.close');

hamburger.addEventListener('click', () => {
    navBar.classList.add('active');
})

close.addEventListener('click',() => {
    navBar.classList.remove('active');
})
// sub navbar function
const navAbout = document.getElementById('navAbout');
const navTest = document.getElementById('navTest');
const navInfo = document.getElementById('navInfo');
const nav__about = document.getElementById('nav__about');
const nav__Test = document.getElementById('nav__Test');
const nav__Information = document.getElementById('nav__Information');
const back = document.querySelectorAll('.back');

navAbout.addEventListener('click',() => {
    nav__about.classList.add('active');
    mainNav.style.display = 'none';
})
navTest.addEventListener('click',() => {
    nav__Test.classList.add('active');
    mainNav.style.display = 'none';
})
navInfo.addEventListener('click',() => {
    nav__Information.classList.add('active');
    mainNav.style.display = 'none';
})

back.forEach(btn => {
    btn.addEventListener('click',(e) => {
        const target = e.target;
        const parent = target.parentNode.parentNode;
        parent.classList.remove('active');
        mainNav.style.display = 'block';
    })
})

// tablet navbar function
const navTablet = document.querySelector('.tabletNav')
const infoBarTablet = document.getElementById('nav__Information--tablet');
const testBarTablet = document.getElementById('nav__Test--tablet');
const aboutBarTablet = document.getElementById('nav__about--tablet');

navTablet.addEventListener('click', (e) => {
    const target = e.target; 
    if(target.id === 'navAbout--tablet') {
        aboutBarTablet.classList.toggle('active');
        testBarTablet.classList.remove('active');
        infoBarTablet.classList.remove('active');
    } else if (target.id === 'navTest--tablet') {
        testBarTablet.classList.toggle('active');
        aboutBarTablet.classList.remove('active');
        infoBarTablet.classList.remove('active');
    } else if (target.id === 'navInfo--tablet') {
        infoBarTablet.classList.toggle('active');
        aboutBarTablet.classList.remove('active');
        testBarTablet.classList.remove('active');
    }
})


// CTA function
const cta = document.querySelectorAll('.CTA_TEST')

// footer bar function
const footerNav = document.querySelectorAll('.footerNav');
footerNav.forEach(item => {
    item.addEventListener('click', (e) => {
        const target = e.target;
        const about = document.getElementById('about');
        const aboutBmg = document.getElementById('about-bmg-footer');
        const support = document.getElementById('support');
        const commSupport = document.getElementById('community-support-footer');
        const contact = document.getElementById('contact');
        const contactUs = document.getElementById('contact-us-footer');
        if(target === footerNav[0]) {
            aboutBmg.classList.toggle('active');
            about.innerHTML = '<ion-icon name="chevron-up-outline"></ion-icon>';
            if(aboutBmg.classList.contains('active')){
                about.innerHTML = '<ion-icon name="chevron-up-outline"></ion-icon>';
            } else {
                about.innerHTML = '<ion-icon name="chevron-down-outline"></ion-icon>';
            }
        }
        if(target === footerNav[1]) {
            commSupport.classList.toggle('active');
            if(commSupport.classList.contains('active')){
                support.innerHTML = '<ion-icon name="chevron-up-outline"></ion-icon>';
            } else {
                support.innerHTML = '<ion-icon name="chevron-down-outline"></ion-icon>';
            }
        } else {
            support.innerHTML = '<ion-icon name="chevron-down-outline"></ion-icon>';
        }
        if(target === footerNav[2]) {
            contactUs.classList.toggle('active');
            if(contactUs.classList.contains('active')){
                contact.innerHTML = '<ion-icon name="chevron-up-outline"></ion-icon>';
            } else {
            contact.innerHTML = '<ion-icon name="chevron-down-outline"></ion-icon>';
        }} 
        else {
            contact.innerHTML = '<ion-icon name="chevron-down-outline"></ion-icon>';
        }
    })
})
// form function
const testBtn = document.querySelectorAll('.CTA_TEST')
const form = document.querySelector('.formContainer');
const closeBtn = document.querySelector('.close');

testBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        form.classList.add('open')
    })
})

closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    form.classList.remove('open')
})
