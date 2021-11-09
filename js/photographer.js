import { paramUrl, getMedias, getPhotographer } from "./tools.js";
import { DomPage } from "./DomPage.js";
import { DropBox } from "./DropBox.js";
import { Gallery } from "./Gallery.js";
import { Lightbox } from "./Lightbox.js";
import { Form } from "./Form.js";
//================================================//
// Récupération des data dans le local Storage
const dataFromLocalStorage = sessionStorage.getItem('data');
const data = JSON.parse(dataFromLocalStorage);
// Gestion des paramètres url_id=id
const url_id = paramUrl('id');
// Récuperation des photos via une boucle puis stockage dans un tableau
const medias = getMedias(data, url_id);
//Récupération des medias en fonction de l'id du photographe
const photographer = getPhotographer(data, url_id);
//================================================//
// DOM Elements
const domPage = new DomPage(data, photographer);
domPage.createHeaderPage();
domPage.photographerFrame(data);
domPage.createTagsOnPage(photographer);
domPage.createAlbum(photographer);

// DropBox
const drop = new DropBox(medias, photographer);
drop.createDropBox();

// Gallery
const gallery = new Gallery(medias, photographer);
gallery.displayMedias();
gallery.getTotalLike();
gallery.heartListener();

// Lightbox
Lightbox.init();

// Contact Form
const form = new Form(photographer);
form.createForm();
form.handleStatus();
// Tags
	//boucle pour chaque photographes
	data.photographers.forEach(photographer => {
	});
	onClickTagsListHeader(data);
const ul = document.createElement('ul');
ul.classList.add('tagDesign');
for (let i = 0; i < photographerData.tags.length; i++) {
    const li = document.createElement('li');
    const tag = document.createElement('span');

    tag.classList.add('tagDesign__tag');
    tag.innerHTML = '#' + photographerData.tags[i];

    li.append(tag);
    ul.append(li);
}
const onClickTagsListHeader = (data) => {
	//Quand je clic sur un tag, si la card avec l'id: (photoId) ne contient pas le tag, alors tu passes cette card en Display = 'none';
	const tags = document.querySelectorAll('.tagDesign__tag'); // tags sur lesquels clicker
	const getCards = document.querySelectorAll('.cards'); // cards des photographes
	
	tags.forEach(tag => { // pour chaque tag
		tag.addEventListener('click', () => { // Quand je click sur un tag...

			//Reset les cards si on click a nouveau sur le tag selectionné
			if (tag.classList.contains('selectedTag')) {
				tag.classList.remove('selectedTag');

				getCards.forEach(card => {
					card.style.display = 'block';
				});
			} else {

				const tagId = tag.id; //id du boutton selectionné
				const photographersList = data.photographers;
				const photographerAsked = [];

				const selectedTag = document.querySelector('.selectedTag');
				if (selectedTag !== null) {
					selectedTag.classList.remove('selectedTag');
				}

				for (let i = 0; i < photographersList.length; i++) { // parcourir chacune des cards pour verifier les tags
					const photographerTags = photographersList[i].tags; // tableau des tags de chaque photographe
	
					for (let j = 0; j < photographerTags.length; j++) { // parcourir chacun des tableau des tags de chaque photographe
						const eachTag = photographerTags[j]; // chaque tags de chaque photographe
	
						if (tagId == eachTag) { // si (id du btn sélectionné) correspond au (tag de chaque photographe)
							photographerAsked.push(photographersList[i]);
							tag.classList.add('selectedTag');// on ajoute une class
						}
					}
				}
				// afficher les photographes demandé
				const cardToDisplay = [];
	
				getCards.forEach(card => {
					card.style.display = 'none';
				});
	
				for (let i = 0; i < getCards.length; i++) {
					const cardId = getCards[i].id;
					for (let j = 0; j < photographerAsked.length; j++) {
						const photographerId = photographerAsked[j].id;
						if (photographerId == cardId) {
							cardToDisplay.push(getCards[i]);
						}
					}
				}
				for (let i = 0; i < cardToDisplay.length; i++) {
					document.getElementById(cardToDisplay[i].id).style.display = 'block';
				}
			}
		});
	});
};