// Photographers profils
fetch("./data.json")
    .then(response => {
        return response.json()
    })

// DOM ELEMENTS
const mainContent = document.querySelector('.mainContent');

