//Header card creation @ photograph page
class CreateCardHeader {
    constructor (data) {
        this.dataPhotograph = data
        this.firstName = document.querySelector('.photographerHeader-text_name')
        this.city = document.querySelector('.photographerHeader-text_city')
        this.slogan = document.querySelector('.photographerHeader-text_slogan')
        this.tags = document.querySelector('.photographerHeader-text_tags')
        this.image = document.querySelector('.photographerHeader-img')
        this.infosPhotograph()
        this.tagsPhotograph()
        this.portraitPhotograph()
    }
    
    //Pic insertion
    portraitPhotograph(){
        let img = document.createElement("img")
        img.setAttribute("src" , "../img/PhotographIDPhoto/"+ this.dataPhotograph.portrait)
        img.setAttribute("aria-label" , this.dataPhotograph.name)
        this.image.appendChild(img)
    }

    //Photograph insertion into html tag
    infosPhotograph() {
        this.firstName.innerHTML = this.dataPhotograph.name
        this.city.innerHTML = this.dataPhotograph.city + ", " + this.dataPhotograph.country
        this.slogan.innerHTML = this.dataPhotograph.tagline
    }

    //Tags insertion
    tagsPhotograph() {
        this.dataPhotograph.tags.forEach(tag => {
            let liSpan = document.createElement("li")
            let span = document.createElement("span")
            span.setAttribute("aria-label", tag)
            span.setAttribute("tabindex", 0) 
            span.classList.add("btnTags")
            span.innerHTML = "#" + tag
            this.tags.appendChild(liSpan)
            liSpan.appendChild(span)
        });
    }
}