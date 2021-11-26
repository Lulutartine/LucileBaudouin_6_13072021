class sortBy {
    constructor( listMedias, namePhotographe, likes) {
        this.listMedias =  listMedias
        this.likes = likes
        this.namePhotographe = namePhotographe
        this.dropdown = document.querySelectorAll(".dropdown-item")
        this.dropdownBtn = document.getElementById("dropdownButton")
        this.listMediasDOM = document.getElementById('mediasList')
        this.displayMedias()
    }
    
    //On dropdown list, when sort by changes (popularity date or title)
    //Media table received is sort as parameter
    displayMedias(){
        let tabTitle 
        let tabPopularity 
        let tabDate
        this.dropdown.forEach(element => {
            element.addEventListener("click", (e)=> {
                let value = e.target.attributes["aria-label"].value
                if(value == "popularity"){
                    this.dropdownBtn.innerHTML = "Popularité" 
                    //Received table sort by popularity
                    tabPopularity  = this.listMedias.sort(function(a,b){
                        return a.likes - b.likes;
                    })
                    //
                    this.changeMedias(tabPopularity.reverse())
                }else if (value == "date"){
                    this.dropdownBtn.innerHTML = "Date"
                    //Received table sort by date
                    tabDate = this.listMedias.sort(function(a,b){
                        return a.date.localeCompare(b.date)
                    })
                    this.changeMedias(tabDate.reverse())
                }else if (value == "title") {
                    this.dropdownBtn.innerHTML = "Titre"
                    //Received table sort by title
                    tabTitle = this.listMedias.sort(function(a,b){
                        return a.title.localeCompare(b.title)
                    })
                    this.changeMedias(tabTitle)
                }
            })
        });
    }

    //Delete media list displayed @ DOM 
    //Replaced by sorted table
    changeMedias(tab){
        Array.from(this.listMediasDOM.children).forEach(el => {
            el.remove()
        });
        tab.forEach(element => {
            new CreateMediaCard(element, this.namePhotographe) 
        });
        //Lightbox call back to get new sorted table
        new Lightbox(this.namePhotographe, tab)
        new IncrementeLikes(parseInt(document.querySelector('.totalLikes').innerHTML), tab)
    }
}