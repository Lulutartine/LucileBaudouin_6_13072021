class Lightbox {
    constructor(namePhotographe, listMedias){
        this.namePhotographe = namePhotographe
        this.listMedias = listMedias
        this.lightbox = document.getElementById("lightboxModal")
        this.lightboxBtnClose = document.querySelector("#lightboxModal .lightbox-close")
        this.lightboxBtnLeft = document.querySelector("#lightboxModal .lightbox-arrow_left")
        this.lightboxBtnRight = document.querySelector("#lightboxModal .lightbox-arrow_right")
        this.listMediasDOM = document.querySelectorAll(".media-src")
        this.emplacementImageLightbox = document.querySelector('.lightbox-media_image')
        this.emplacementNameImageLightbox = document.querySelector('.lightbox-media_name')
        this.main = document.getElementById("photographer")
        this.index = 0
        this.media = ""
        this.displayLightbox()
        this.arrowNext() 
        this.arrowPrevious()
        this.keyup(this.media)
        this.closeLightbox()

    }
    //Keyboard keys setup (escape, left & right arrows)
    keyup() {
        document.addEventListener("keyup", (e)=> {
            if(e.key === "ArrowRight") {
                this.changeDisplay(this.index + 1)
            }
            if(e.key === "ArrowLeft") {
                this.changeDisplay(this.index - 1)            
            }
            if(e.key == "Escape") {
                if(this.media !== ""){
                    document.querySelector("#lightboxModal .lightbox").blur()
                    this.lightbox.style.display= "none"
                    this.main.setAttribute("aria-hidden", "false")
                    this.lightbox.setAttribute("aria-hidden", "true")
                }
            }
        })
    }

    //Close cross @ lightbox 
    closeLightbox(){
        this.lightboxBtnClose.addEventListener("click", ()=>{
            this.lightbox.style.display= "none"
            this.main.setAttribute("aria-hidden", "false")
            this.lightbox.setAttribute("aria-hidden", "true")
        })
    }

    //Right/next btn @ lightbox
    arrowNext() {
        this.lightboxBtnRight.addEventListener("click", ()=> {
        this.changeDisplay(this.index + 1)
        })
    }

    //Left/previous btn @ lightbox
    arrowPrevious() {
        this.lightboxBtnLeft.addEventListener("click", ()=> {
            this.changeDisplay(this.index - 1)
        })
    }

    //Media display alterations @ lightbox
    changeDisplay(addition){
        if(this.media !== "") {
            this.index = addition
            if(this.index == this.listMedias.length){
                this.index = 0
            }
            if(this.index == -1){
                this.index = this.listMedias.length-1
            }
            this.emplacementNameImageLightbox.innerHTML = this.listMedias[this.index].title
            this.mediaImageOrVideo(this.listMedias[this.index])
        }
    }

    //Lightbox display
    displayLightbox(){
        this.listMediasDOM.forEach(media => {
            let btn = media.parentElement
            btn.addEventListener("click", ()=>{
                btn.blur()//Remove media focus
                this.lightbox.style.display= "block"
                document.querySelector("#lightboxModal .lightbox").focus()//Set up media focus
                this.media = btn
                this.displayMedia(media.id)//Display picture or video 
            })
        });
    }

    //According to the media ID, I get the right one into the media list & display it @ lightbox
    displayMedia(id) {
        for (let index = 0; index < this.listMedias.length; index++) {
            const element = this.listMedias[index];
            if(element.id == id) {
                this.index= index
                this.mediaImageOrVideo(element)
                this.emplacementNameImageLightbox.innerHTML = element.title
            }
        }
    }
    
    //Display a picture or a video
    mediaImageOrVideo(media){
        if(media.image) {
            let baliseImg = document.createElement("img")
            baliseImg.setAttribute("src", "../img/"+ this.namePhotographe +"/"+ media.image)
            baliseImg.setAttribute("alt", media.alt)
            baliseImg.setAttribute("id", media.id)
            baliseImg.setAttribute("tabindex", "0")
            this.emplacementImageLightbox.replaceChild(baliseImg, this.emplacementImageLightbox.firstElementChild)
        }else if (media.video){  
            let baliseVideo = document.createElement("video")
            let baliseVideoSrc = document.createElement("source")
            baliseVideo.setAttribute("controls", "")
            baliseVideoSrc.setAttribute("src", "../img/"+ this.namePhotographe +"/"+ media.video)
            baliseVideoSrc.setAttribute("alt", media.alt)
            this.emplacementImageLightbox.replaceChild(baliseVideo, this.emplacementImageLightbox.firstElementChild)
            baliseVideo.appendChild(baliseVideoSrc)
        }
    }
}