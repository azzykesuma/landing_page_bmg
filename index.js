// navbar function
const hamburger = document.querySelector('.hamburger');
const navBar = document.querySelector('.navBar');
const list = navBar.getElementsByTagName('li');


hamburger.addEventListener('click', () => {
    navBar.classList.toggle('active');
    const divs = hamburger.getElementsByTagName('div');
    if(navBar.classList.contains('active')) {
        divs[0].classList.add('one')
        divs[1].classList.add('two')
        divs[2].classList.add('three')
    } else {
        divs[0].classList.remove('one')
        divs[1].classList.remove('two')
        divs[2].classList.remove('three')
    }
})

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
                about.innerHTML = '<ion-icon name="chevron-up-outline"></ion-icon>';
            } else {
                about.innerHTML = '<ion-icon name="chevron-down-outline"></ion-icon>';
            }
        } else {
            support.innerHTML = '<ion-icon name="chevron-down-outline"></ion-icon>';
            commSupport.style.display = 'none';
        }
        if(target === footerNav[2]) {
            contactUs.style.display = 'block';
            contact.innerHTML = '<ion-icon name="chevron-up-outline"></ion-icon>';
        } else {
            contact.innerHTML = '<ion-icon name="chevron-down-outline"></ion-icon>';
            contactUs.style.display = 'none';
        }
    })
})