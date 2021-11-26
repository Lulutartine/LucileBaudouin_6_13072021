    class IncrementeLikes{
        constructor(dataLikes, listMedias) {
            this.listMedias = listMedias
            this.totalLikes = 0
            this.btnHeartLike = document.querySelectorAll('.media footer .media-footer_buttonLike')
             //Display likes @ pink banner
            this.totalLikes = this.totalLikes + dataLikes
            document.querySelector('.totalLikes').innerHTML = this.totalLikes
            this.increment()
        }
        

        increment() {
            //on like btn click I add like nbr for 1
            this.btnHeartLike.forEach(element => {
                element.addEventListener("click", ()=> {
                    let mediaId = element.parentElement.parentElement.querySelector(".media-src").id
                    //add 1 to pink banner
                    this.totalLikes = this.totalLikes + 1
                    document.querySelector('.totalLikes').innerHTML = this.totalLikes
                    //add 1 to picture
                    for (let index = 0; index < this.listMedias.length; index++) {
                        const el= this.listMedias[index];
                        if(el.id == mediaId){
                            el.likes = el.likes + 1
                            element.parentElement.querySelector(".media-footer_numberLike").innerHTML = el.likes
                        }
                    }
                })
            });
        }
        
    }   


