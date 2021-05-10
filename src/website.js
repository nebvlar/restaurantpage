import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact"

function createHeader(){
    const header = document.createElement('div');
    header.classList.add('header');

    const name = document.createElement('h1');
    name.classList.add('name');
    name.textContent = "The Drunken Dragon";
    header.appendChild(name);

    const nav = document.createElement('nav');
    nav.classList.add('nav');

    const homeButton = document.createElement('button');
    homeButton.classList.add('button-nav');
    homeButton.textContent = 'Home';
    nav.appendChild(homeButton);
    homeButton.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return;
        setActiveButton(homeButton);
        loadHome();
    })

    const menuButton = document.createElement('button');
    menuButton.classList.add('button-nav');
    menuButton.textContent = 'Menu';
    nav.appendChild(menuButton);
    menuButton.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveButton(menuButton);
        loadMenu();
    });

    const contactButton = document.createElement('button');
    contactButton.classList.add('button-nav');
    contactButton.textContent = 'Contact';
    nav.appendChild(contactButton);
    contactButton.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return;
        setActiveButton(contactButton);
        loadContact();
    })
  

    const homeSpan = document.createElement('span');
    homeSpan.classList.add('span');
    homeButton.appendChild(homeSpan);

    const menuSpan = document.createElement('span');
    menuSpan.classList.add('span');
    menuButton.appendChild(menuSpan);

    const contactSpan = document.createElement('span');
    contactSpan.classList.add('span');
    contactButton.appendChild(contactSpan);

    header.appendChild(nav);
    return header;
}

function setActiveButton(button){
    const buttons = document.querySelectorAll('.button-nav');

    buttons.forEach((button) => {
        if (button !== this){
            button.classList.remove('active');
        }
    });
    button.classList.add('active');
}

function createMain(){
    const main = document.createElement('div');
    main.classList.add('main');
    main.setAttribute('id', 'main');
    return main;
}

function createFooter(){
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    const footerContent = document.createElement('p');
    footerContent.classList.add('footerContent');
    const link = document.createElement('p');
    link.classList.add('link');

    footerContent.textContent = "© The Drunken Dragon 2021. All rights reserved";
    link.textContent = "developed by ☽nebvlar☾";
    link.href = "https://github.com/nebvlar";

    footer.appendChild(footerContent);
    footer.appendChild(link);

    return footer;
}


function initializeWebsite(){
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    setActiveButton(document.querySelector('.button-nav'));
    content.appendChild(createFooter());
    content.appendChild(createMain())

    loadHome();

};

export default initializeWebsite;