class CreateCardHomePage {
    constructor(data){
        this.dataPhotograph = data
        this.main = document.querySelector(".photographsList")
        this.createElementCard()
        this.attributionClass()
        this.attributionAttribute()
        this.integrationTextElement()
        this.integrationTagFooter()
        this.rattachElementDOM()
    }

    //Card inputs creation
    createElementCard() {
        this.photograph = document.createElement('article')
        this.photographHeader = document.createElement('a') 
        this.photographContainImage = document.createElement('div')
        this.photographImage = document.createElement('img')
        this.photographName = document.createElement('h2')
        this.photographBody = document.createElement('body') 
        this.photographCity= document.createElement('p') 
        this.photographSlogan= document.createElement('p') 
        this.photographPrice= document.createElement('p') 
        this.photographFooter = document.createElement('ul') 
    }

    //Card inputs classes addition
    attributionClass(){
        this.photograph.classList.add("photograph")
        this.photographHeader.classList.add("photograph-header")
        this.photographContainImage.classList.add("photograph-header_image")
        this.photographName.classList.add("photograph-header_title")
        this.photographBody.classList.add("photograph-body")
        this.photographCity.classList.add("photograph-body_city")
        this.photographSlogan.classList.add("photograph-body_job")
        this.photographPrice.classList.add("photograph-body_price")
        this.photographFooter.classList.add("photograph-tags") 
    }

    //Card inputs properties insertion
    attributionAttribute(){
        this.photographHeader.setAttribute("href", "./page/photographer.html?id=" + this.dataPhotograph.id)
        this.photographHeader.setAttribute("aria-label", this.dataPhotograph.name)
        this.photographImage.setAttribute("src", "./img/PhotographIDPhoto/" + this.dataPhotograph.portrait)
        this.photographImage.setAttribute("alt", this.dataPhotograph.alt)
        this.photographName.setAttribute("tabindex", 0)
        this.photographCity.setAttribute("tabindex", 0)
        this.photographSlogan.setAttribute("tabindex", 0) 
        this.photographPrice.setAttribute("tabindex", 0)
    }

    //Text display @ html
    integrationTextElement(){
        this.photographName.textContent = this.dataPhotograph.name
        this.photographCity.textContent = this.dataPhotograph.city + ", " + this.dataPhotograph.country
        this.photographSlogan.textContent = this.dataPhotograph.tagline
        this.photographPrice.textContent = this.dataPhotograph.price + "E/jour" 
    }

    //Tags insertion @ footer's card
    integrationTagFooter(){
        this.dataPhotograph.tags.forEach(tag => {
            let liSpan = document.createElement("li")
            let span = document.createElement("span")
            span.setAttribute("aria-label", tag)
            span.setAttribute("tabindex", 0)
            span.classList.add("btnTags")
            span.innerHTML = "#" + tag
            this.photographFooter.appendChild(liSpan)
            liSpan.appendChild(span)
        });
    }
    
    //All inputs display @ DOM
    rattachElementDOM(){
        this.main.appendChild(this.photograph)
        this.photograph.appendChild(this.photographHeader)
        this.photographHeader.appendChild(this.photographContainImage)
        this.photographContainImage.appendChild(this.photographImage)
        this.photographHeader.appendChild(this.photographName)
        this.photograph.appendChild(this.photographBody)
        this.photographBody.appendChild(this.photographCity)
        this.photographBody.appendChild(this.photographSlogan)
        this.photographBody.appendChild(this.photographPrice)
        this.photograph.appendChild(this.photographFooter)
        

    }
}

//JSON datas collect
fetch("./data.json").then((res)=>{ 
    //check request status
    //if ok send answer as JSON object
    if (res.ok) {
        return res.json()
    }
}).then(data => {
      data.photographers.forEach(dataPhotograph => {
        new CreateCardHomePage(dataPhotograph)
      });
    //then for all photograph create a card
}).catch((err) => {
    console.log(err)
    // otherwise error @ console
})