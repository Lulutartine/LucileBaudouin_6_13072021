/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ (() => {

eval("fetch(\"./data.json\")\n   .then(response => { \n      return response.json()\n   }) \n   .then(response2 => {\n\t   sessionStorage.setItem('data', JSON.stringify(response2))\n   init(response2);\n});\n\n// ________ DOM ELEMENTS  ________ //\n\n// ON INSÈRE DANS LE DOM \n   const main = document.querySelector('mainContent');\n      main.append(card);\n   const initIndex = (data) => {\n      //boucle pour chaque photographes\n     data.photographers.forEach(photographer => {\n         createCard(photographer);\n      });\n      createHeader(data)\n   };\n\nconst createHeader = (data) => {\n   // ON FABRIQUE LES BALISES\n      const body = document.querySelector(\"body\");\n      const header = document.querySelector(\"header\");\n   \n      const hidden = document.createElement('div');\n      hidden.classList.add('hidden');\n      const hiddenLink = document.createElement('a');\n      hiddenLink.href = '#main';\n      hiddenLink.innerHTML = 'Passer au contenu';\n   \n      const logoLink = document.createElement('a');\n      const logo = document.createElement('img');\n      logoLink.href = './index.html';\n      logoLink.classList.add('logo');\n      logo.src = 'FishEye_Photos/logo.png';\n      logo.alt = 'FishEye Home Page';\n   \n      const h1 = document.createElement('h1');\n      h1.innerHTML = 'Nos photographes';\n   \n      const nav = document.createElement('nav');\n      const ul = document.createElement('ul');\n      nav.ariaLabel = 'photographer categories';\n      nav.classList.add('topNav');\n      ul.classList.add('tagDesign');\n   \n      const fullTags = [];\n      data.photographers.forEach(photographer => {\n         photographer.tags.forEach(tag => {\n            fullTags.push(tag)\n         });\n      });\n   \n      const uniqueTags = fullTags.filter(function (item, pos) {\n         return fullTags.indexOf(item) == pos;\n      })\n   \n   // ON REMPLI lES BALISES\n      for (let i = 0; i < uniqueTags.length; i++) {\n         const tag = uniqueTags[i];\n         const li = document.createElement('li');\n         const btn = document.createElement('button');\n   \n         btn.classList.add('tagDesign__tag');\n         btn.innerHTML = `#${tag}`;\n         btn.id = tag;\n   \n         li.append(btn);\n         ul.append(li);\n      }\n   \n      hidden.append(hiddenLink);\n   \n      logoLink.append(logo);\n      nav.append(ul);\n   \n   // ON LES INSÈRE DANS LE DOM\n      header.append(logoLink);\n      header.append(nav);\n      header.append(h1);\n   \n      body.append(hidden);\n   }\n   \nconst createCard = (photographerData) => {\n   // ON FABRIQUE LES BALISES\n      const card = document.createElement('a');\n      card.classList.add('cards');\n      card.href = 'photographer.html?id=' + photographerData.id;\n      card.id = photographerData.id;\n   \n      const image = document.createElement('img');\n      image.src = 'FishEye_Photos/Photographers ID Photos/' + photographerData.portrait;\n      image.alt = 'photo portrait de ' + photographerData.name;\n   \n      const cardDescription = document.createElement('div');\n      cardDescription.classList.add('cardDescription');\n   \n      const nameTitle = document.createElement('h2');\n      nameTitle.innerHTML = photographerData.name;\n   \n      const para = document.createElement('p');\n      para.classList.add('descript');\n   \n      const place = document.createElement('span');\n      place.classList.add('local');\n      place.innerHTML = photographerData.city + ', ' + photographerData.country;\n   \n      const descript2 = document.createElement('span');\n      descript2.classList.add('descript2');\n      descript2.innerHTML = photographerData.tagline;\n   \n      const price = document.createElement('span');\n      price.classList.add('price');\n      price.innerHTML = photographerData.price + '€/jour';\n   \n      const ul = document.createElement('ul');\n      ul.classList.add('tagDesign');\n   \n   // ON REMPLI LES BALISES\n      card.append(image);\n   \n      para.append(place);\n      para.append(descript2);\n      para.append(price);\n   \n      cardDescription.append(nameTitle);\n      cardDescription.append(para);\n   \n      for (let i = 0; i < photographerData.tags.length; i++) {\n         const li = document.createElement('li');\n         const tag = document.createElement('span');\n   \n         tag.classList.add('tagDesign__tag2');\n         tag.innerHTML = '#' + photographerData.tags[i];\n   \n         li.append(tag);\n         ul.append(li);\n      }\n      cardDescription.append(ul);\n   \n      card.append(cardDescription);\n   }\n\n\n//# sourceURL=webpack://dist/./assets/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./assets/js/app.js"]();
/******/ 	
/******/ })()
;