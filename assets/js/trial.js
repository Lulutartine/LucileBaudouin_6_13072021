function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const photographerData = document.getElementById('photographersData');
const url = "./data.json";

fetch(url)
.then((response) => response.json())
.then(function(data) {
  let photographerData = data.results;
  return photographersData.map(function(photographer) {
    let div = createNode('photographercard');
    let img = createNode('img');
    let span = createNode('span');
    img.src = 'FishEye_Photos/Photographers ID Photos/';
    span.innerHTML = `${photographer.name} ${photographer.id}`;
    append(div, img);
    append(div, span);
    append(photographercard, div);
  })
})
.catch(function(error) {
  console.log(error);
});