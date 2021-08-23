fetch("./data.json")
   .then(response => { 
      return response.json();
   }) 
   .then(response2 => {
	sessionStorage.setItem('data', JSON.stringify(response2));
    init(response2);
   });

// /**
//  * @param domElement
//  */
class CreateDOMElement {
	constructor(domElement, className, id, src) {
    	this.domElement = domElement;
       	this.className = className;

    const elem = document.createElement(this.domElement);
    elem.classList.add(this.className);
	return elem;
    }
 }

class CreateHeader {
    constructor() {
    const header = new domElement('header');
    const linkHome = new domElement('a');
    const h1 = new domElement('h1');
    const logo = new domElement('img');
    const nav = new domElement('nav');
    }
}


const image = new CreateDOMElement('img', 'logo');
const div = new CreateDOMElement('div', 'bground');

//DOM ELEMENTS
const mainContent = document.querySelector('.mainContent');

//___________//create
//HEADER_____
const header = document.createElement('header');
const linkHome = document.createElement('a');
const h1 = document.createElement('h1');
const logo = document.createElement('img');
const nav = document.createElement('nav');
//___________//settings
//HEADER_____
header.classList.add('banner');
linkHome.classList.add('logo');
logo.scr = "FishEye_Photos/logo.png";
logo.alt = "FishEye Home Page";
nav.classList.add('topNav');
nav.ariaLabel = "photographer categories";
//___________//indent
//HEADER_____
header.append(linkHome);
linkHome.append(logo);
header.append(nav);
nav.append(ul);

const init = (data) => {
   //boucle pour chaque photographes
   data.photographers.forEach(photographer => {

      //___________//create
      //CARDS______
      const card = document.createElement('a');
      const image = document.createElement('img');
      const contact = document.createElement('button');
      const blockFlex = document.createElement('div');
      const nameTitle = document.createElement('h2');
      const para = document.createElement('p');
      const place = document.createElement('span');
      const gimmick = document.createElement('span');
      const price = document.createElement('span');
      const mainFlux = document.createElement('section');
      //__________//create
      //TAGS______
      const ul = document.createElement('ul');
   //**************************************************************************************/
      //___________//settings
      //CARDS______
      card.classList.add('cards');
      card.href = "photographer.html?id=" + photographer.id;
      image.src = "FishEye_Photos/Photographers ID Photos/" + photographer.portrait;
      image.alt = 'photo portrait de ' + photographer.name;
      contact.classList.add('contact-btn');
      contact.innerHTML = 'Contactez-moi'
      blockFlex.classList.add('blockFlex');
      nameTitle.innerHTML = photographer.name;
      para.classList.add('descript');
      place.classList.add('local');
      place.innerHTML = photographer.city + ', ' + photographer.country;
      gimmick.classList.add('depiction');
      gimmick.innerHTML = photographer.tagline;
      price.classList.add('price');
      price.innerHTML = photographer.price + '€/jour';
      mainFlux.classList.add('mainFlux');
      //__________//settings
      //TAGS______
      ul.classList.add('tagDesign');
      /*********inDOM*********/
      mainContent.append(card);
   //**************************************************************************************/
      //___________//indent
      //CARDS______
      card.append(image);
      card.append(contact);
      card.append(blockFlex);
      blockFlex.append(nameTitle);
      blockFlex.append(para);
      para.append(place);
      para.append(gimmick);
      para.append(price);
      card.append(mainFlux);

      //__________//indent
      //TAGS______
      for (let i = 0; i < photographer.tags.length; i++) {
         const li = document.createElement('li')
         const tag = document.createElement('span');

         tag.classList.add('tagDesign__tag');
         tag.innerHTML = '#' + photographer.tags[i];

         li.append(tag);
         ul.append(li);
      }
      blockFlex.append(ul);
   })
}

