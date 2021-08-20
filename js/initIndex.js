import { createCard, createHeader, onClickTagsListHeader } from "./utils.js";

export const initIndex = (data) => {
	data.photographers.forEach(photographer => {
		createCard(photographer);
	});
	
	createHeader(data)
	
	onClickTagsListHeader(data)
};