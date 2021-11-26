
class ImageMedia {
    constructor(namePhotographe , data){
            this.data = data
            this.namePhotographe = namePhotographe
            this.main = document.querySelector("#mediasList")
            this.createElementImage()
            this.attributionClass()
            this.attributionAttribute()
            this.integrationTextElement()
            this.rattachElementDOM()
    }
    //Inputs creation for image card
    createElementImage() {
        this.media = document.createElement('article')
        this.mediaHeader = document.createElement('header')
        this.mediaHeaderLinkMedia = document.createElement('button')
        this.mediaFooter = document.createElement('footer')
        this.mediaName = document.createElement('p')
        this.mediaNumberLike = document.createElement('p')
        this.mediaButtonLike = document.createElement('div')
        this.mediaHeaderImage = document.createElement('img')
    }

    //Class set up for created inputs
    attributionClass(){
        this.media.classList.add("media")
        this.mediaHeader.classList.add("media-header")
        this.mediaHeaderLinkMedia.classList.add("media-header_img")
        this.mediaFooter.classList.add("media-footer")   
        this.mediaName.classList.add("media-footer_name")
        this.mediaNumberLike.classList.add("media-footer_numberLike")
        this.mediaButtonLike.classList.add("media-footer_buttonLike")
        this.mediaHeaderImage.classList.add("media-src")
    }

    //Properties set up for created inputs
    attributionAttribute(){
        this.media.setAttribute("tabindex", 0)
        this.media.setAttribute("aria-label", "article")
        this.mediaHeaderLinkMedia.setAttribute("aria-label", this.data.alt)
        this.mediaHeaderImage.setAttribute("src", "../img/"+ this.namePhotographe +"/"+ this.data.image)
        this.mediaHeaderImage.setAttribute("alt", this.data.alt)
        this.mediaHeaderImage.setAttribute("id", this.data.id)
        this.mediaButtonLike.setAttribute("aria-label", "likes")
    }

    //Text display @ html
    integrationTextElement(){
        this.mediaName.innerHTML = this.data.title
        this.mediaNumberLike.innerHTML = this.data.likes
    }

    //All inputs display @ DOM
    rattachElementDOM(){
        this.main.appendChild(this.media)
        this.media.appendChild(this.mediaHeader)
        this.media.appendChild(this.mediaFooter)
        this.mediaHeader.appendChild(this.mediaHeaderLinkMedia)
        this.mediaHeaderLinkMedia.appendChild(this.mediaHeaderImage)
        this.mediaFooter.appendChild(this.mediaName)
        this.mediaFooter.appendChild(this.mediaNumberLike)
        this.mediaFooter.appendChild(this.mediaButtonLike)
    }
}