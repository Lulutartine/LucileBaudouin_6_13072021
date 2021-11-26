//Retrieve Photograph ID 
let paramSearch = window.location.search
let id = paramSearch.replace("?id=", "")
let namePhotographe 
let listMedias = []
let likes = 0
//Retrieve JSON data
fetch("../data.json").then((res)=>{ 
    if (res.ok) {
        return res.json()
    }
}).then(datas => {
    //Retrieve photographs datas
    for(let data of datas.photographers){
        if(data.id == parseInt(id)) {
            new CreateCardHeader(data)
            namePhotographe = data.name
            new Formulaire(data.name)
            document.querySelector('.pricePhotograph').innerHTML = data.price
        }
    }

    //Retreive photograph's media
    for(let data of datas.media){
        if(data.photographerId == parseInt(id)) {
            namePhotographe =  namePhotographe.replace("-", "").split(" ")[0]
            listMedias.push(data)
            likes = likes + data.likes
        }
    }

    //Create media cards
    for(let media of listMedias.sort((a, b)=>{
        return a.likes - b.likes; //Sort media cards by popularity
    }).reverse()) {
        new CreateMediaCard(media, namePhotographe) 
    }

    //Sort media cards by popularity, date or title 
    new sortBy(listMedias, namePhotographe, likes)
    
    //Likes incrementation
    new IncrementeLikes(likes, listMedias)

    //Lightbox display
     new Lightbox(namePhotographe, listMedias)
}).catch((err) => {
    console.log(err)
})

