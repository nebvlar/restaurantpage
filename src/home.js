function createHome(){
const home = document.createElement('div');
home.classList.add('home');

const info = document.createElement('div');
info.classList.add('info');

const tagline = document.createElement('h2');
tagline.classList.add('tagline');
tagline.textContent = "Large Selection of spirits for any adventurer in need!";
info.appendChild(tagline);

const order = document.createElement('h4');
order.classList.add('order');
order.textContent = "Order for pickup or dine in.";
info.appendChild(order);

const orderButton = document.createElement('button');
orderButton.classList.add('orderButton');
orderButton.textContent = "Order Now!";
info.appendChild(orderButton)

const barInfo = document.createElement('div');
barInfo.classList.add('barInfo');

const address1 = document.createElement('p');
address1.classList.add('address');
address1.classList.add('address1')
address1.textContent = "2264 Clifftop Adventurer's Quarter";

const address2 = document.createElement('p');
address2.classList.add('address');
address2.classList.add('address2');
address2.textContent = "Upper Dura, Sharn, 95131";

const addressIcon = document.createElement("i");
addressIcon.classList.add("fas");
addressIcon.classList.add("fa-map-marker-alt");
address1.appendChild(addressIcon)
barInfo.appendChild(address1);
barInfo.appendChild(address2);

const operationHours = document.createElement('p');
operationHours.classList.add('hours');
operationHours.textContent = "Open 24/7!";

const hourIcon = document.createElement('i');
hourIcon.classList.add('fas');
hourIcon.classList.add('fa-clock')
operationHours.appendChild(hourIcon);
barInfo.appendChild(operationHours);


home.appendChild(info);
home.appendChild(barInfo);
return home;
}


function loadHome(){
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHome());
};

export default loadHome;