function createContact(){
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const contactLabel = document.createElement('h1');
    contactLabel.classList.add('contactLabel');
    contactLabel.textContent = "Contact Us!"
    contact.appendChild(contactLabel)

    const contactAddress1 = document.createElement('p');
    contactAddress1.classList.add('contactAddress');
    contactAddress1.classList.add('contactAddress1')
    contactAddress1.textContent = "2264 Clifftop Adventurer's Quarter";
    
    const contactAddress2 = document.createElement('p');
    contactAddress2.classList.add('contactAddress');
    contactAddress2.classList.add('contactAddress2');
    contactAddress2.textContent = "Upper Dura, Sharn, 95131";
    
    const addressIcon = document.createElement("i");
    addressIcon.classList.add("fas");
    addressIcon.classList.add("fa-map-marker-alt");
    contactAddress1.appendChild(addressIcon)
    contact.appendChild(contactAddress1);
    contact.appendChild(contactAddress2);
    
    const hoursOpen = document.createElement('p');
    hoursOpen.classList.add('hoursOpen');
    hoursOpen.textContent = "Open 24/7!";
    
    const hourIcon = document.createElement('i');
    hourIcon.classList.add('fas');
    hourIcon.classList.add('fa-clock')
    hoursOpen.appendChild(hourIcon);
    contact.appendChild(hoursOpen);

    const phoneNumber = document.createElement('p');
    phoneNumber.classList.add('phoneNumber');
    phoneNumber.textContent = "985-655-2500"

    const phoneIcon = document.createElement('i');
    phoneIcon.classList.add('fas');
    phoneIcon.classList.add('fa-phone');
    phoneNumber.appendChild(phoneIcon);
    contact.appendChild(phoneNumber);

    const email = document.createElement('p');
    email.classList.add('email');
    email.textContent = "contact@drunkendragon.org"
    
    const emailIcon = document.createElement('i');
    emailIcon.classList.add('fas');
    emailIcon.classList.add('fa-envelope');
    email.appendChild(emailIcon);
    contact.appendChild(email);

    return contact;
};

function loadContact(){
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createContact());
};

export default loadContact;
