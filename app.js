fetch("./data.json")
   .then(response => { 
      return response.json()
   }) 
   .then(response2 => {
	   sessionStorage.setItem('data', JSON.stringify(response2))
   init(response2);
});

// ________ DOM ELEMENTS  ________ //

// ON INSÈRE DANS LE DOM 
   const main = document.querySelector('mainContent');
      main.append(card);
   const initIndex = (data) => {
      //boucle pour chaque photographes
     data.photographers.forEach(photographer => {
         createCard(photographer);
      });
      createHeader(data)
   };

const createHeader = (data) => {
   // ON FABRIQUE LES BALISES
      const body = document.querySelector("body");
      const header = document.querySelector("header");
   
      const hidden = document.createElement('div');
      hidden.classList.add('hidden');
      const hiddenLink = document.createElement('a');
      hiddenLink.href = '#main';
      hiddenLink.innerHTML = 'Passer au contenu';
   
      const logoLink = document.createElement('a');
      const logo = document.createElement('img');
      logoLink.href = './index.html';
      logoLink.classList.add('logo');
      logo.src = 'FishEye_Photos/logo.png';
      logo.alt = 'FishEye Home Page';
   
      const h1 = document.createElement('h1');
      h1.innerHTML = 'Nos photographes';
   
      const nav = document.createElement('nav');
      const ul = document.createElement('ul');
      nav.ariaLabel = 'photographer categories';
      nav.classList.add('topNav');
      ul.classList.add('tagDesign');
   
      const fullTags = [];
      data.photographers.forEach(photographer => {
         photographer.tags.forEach(tag => {
            fullTags.push(tag)
         });
      });
   
      const uniqueTags = fullTags.filter(function (item, pos) {
         return fullTags.indexOf(item) == pos;
      })
   
   // ON REMPLI lES BALISES
      for (let i = 0; i < uniqueTags.length; i++) {
         const tag = uniqueTags[i];
         const li = document.createElement('li');
         const btn = document.createElement('button');
   
         btn.classList.add('tagDesign__tag');
         btn.innerHTML = `#${tag}`;
         btn.id = tag;
   
         li.append(btn);
         ul.append(li);
      }
   
      hidden.append(hiddenLink);
   
      logoLink.append(logo);
      nav.append(ul);
   
   // ON LES INSÈRE DANS LE DOM
      header.append(logoLink);
      header.append(nav);
      header.append(h1);
   
      body.append(hidden);
   }
   
const createCard = (photographerData) => {
   // ON FABRIQUE LES BALISES
      const card = document.createElement('a');
      card.classList.add('cards');
      card.href = 'photographer.html?id=' + photographerData.id;
      card.id = photographerData.id;
   
      const image = document.createElement('img');
      image.src = 'FishEye_Photos/Photographers ID Photos/' + photographerData.portrait;
      image.alt = 'photo portrait de ' + photographerData.name;
   
      const cardDescription = document.createElement('div');
      cardDescription.classList.add('cardDescription');
   
      const nameTitle = document.createElement('h2');
      nameTitle.innerHTML = photographerData.name;
   
      const para = document.createElement('p');
      para.classList.add('descript');
   
      const place = document.createElement('span');
      place.classList.add('local');
      place.innerHTML = photographerData.city + ', ' + photographerData.country;
   
      const descript2 = document.createElement('span');
      descript2.classList.add('descript2');
      descript2.innerHTML = photographerData.tagline;
   
      const price = document.createElement('span');
      price.classList.add('price');
      price.innerHTML = photographerData.price + '€/jour';
   
      const ul = document.createElement('ul');
      ul.classList.add('tagDesign');
   
   // ON REMPLI LES BALISES
      card.append(image);
   
      para.append(place);
      para.append(descript2);
      para.append(price);
   
      cardDescription.append(nameTitle);
      cardDescription.append(para);
   
      for (let i = 0; i < photographerData.tags.length; i++) {
         const li = document.createElement('li');
         const tag = document.createElement('span');
   
         tag.classList.add('tagDesign__tag2');
         tag.innerHTML = '#' + photographerData.tags[i];
   
         li.append(tag);
         ul.append(li);
      }
      cardDescription.append(ul);
   
      card.append(cardDescription);
   }
