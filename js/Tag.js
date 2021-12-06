class Tag {
    constructor(tagEvent, tabCardsFilter){
        this.tag = tagEvent
        this.tagAriaLabel = this.tag.attributes["aria-label"].value
        this.allSameTags = document.querySelectorAll('.btnTags[aria-label='+ this.tagAriaLabel +']')
        this.photographCards = document.querySelector("#photographsList").childNodes
        this.tabCardsFilter = tabCardsFilter
        this.deleteCardsPhotograph()
        this.activeOrDesactiveTags()
        this.displayOrHidePhotographsCards()
    }
    //Hide photographs cards
    deleteCardsPhotograph(){
        for(let photographCard of this.photographCards) {
            photographCard.style.display = "none"
        }
    }
    //Display or hide active class on tags
    activeOrDesactiveTags(){
        for(let tag of this.allSameTags) {
            tag.classList.toggle("active")
        }
        if(this.tag.classList.contains("active")){
            this.allSameTags.forEach(tag => {
                let cardOfTag = tag.parentNode.parentNode.parentNode
                this.tabCardsFilter.push(cardOfTag)  
            });
        //Add or delete cards @ "tabCardsFilter" table
        }else {
            this.tag.blur()
            this.allSameTags.forEach(tag => {
                let cardOfTag = tag.parentNode.parentNode.parentNode
                this.tabCardsFilter.splice(this.tabCardsFilter.indexOf(cardOfTag),1)
            })
        }
    }
    //Display or hide photogrpahs cards according to "tabCardsFilter" table
    displayOrHidePhotographsCards(){
        if(this.tabCardsFilter.length === 0){
            for(let photographCard of this.photographCards) {
                photographCard.style.display = "flex"
            }
        }else {
            for(let el of this.tabCardsFilter) {
                el.style.display = "flex"
            }
        }        
    }
}

//Regex to check if url includes tag setting
let regTag = /\?tag=/i 

//Tag feature
setTimeout(() => {
    //if url doesn't inculde tag setting, tags act as usual 
    if(window.location.search == ""){
        let tagsAll = document.querySelectorAll(".btnTags")
        let tabCardsFilter = []
        for (let index = 0; index < tagsAll.length; index++) {
            let tag = tagsAll[index];
            // as clicking, display all photographers with same tag
            tag.addEventListener("click", (e)=> {
                let tagEvent = e.target
                new Tag(tagEvent, tabCardsFilter)
            })
            tag.addEventListener("keyup", (e)=> {
                let tagEvent = e.target
                if(e.key == "Enter") {
                    new Tag(tagEvent, tabCardsFilter)
                }
            })  
        }

    //else, url includes tag setting => display cards with same tag
    } else if (regTag.test(window.location.search)) {
        let tagAriaLabel = window.location.search.replace(/\?tag=/i, "")//tag value
        let tabCardsFilter = []
        let tag = document.querySelector('.btnTags[aria-label="'+ tagAriaLabel +'"]')
        new Tag(tag, tabCardsFilter)
    }
}, 300);
