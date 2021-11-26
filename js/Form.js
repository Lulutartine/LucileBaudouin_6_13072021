//Contact form treatment
class Formulaire {
    constructor (data) {
        this.btnContactMe = document.getElementById("btnContactMe")
        this.main = document.getElementById("photographer")
        this.formulaire = document.getElementById("formulaire")
        this.formulaireNamePhotograph = document.getElementById("formulaire-namePhotographe")
        this.data = data
        this.firstname= document.querySelector("#prenom")
        this.lastname= document.querySelector("#nom")
        this.email= document.querySelector("#email")
        this.message= document.querySelector("#message")
        this.regexEmail=  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        this.regexMessage = /[A-Za-z0-9,-]/
        this.regexMin = /^.{2,35}$/
        this.formulaireName()
        this.addEvent(this.firstname, this.regexMin, "Veuillez entrer 2 caractères ou plus pour le prénom.")
        this.addEvent(this.lastname, this.regexMin, "Veuillez entrer 2 caractères ou plus pour le nom.")
        this.addEvent(this.email, this.regexEmail, "Veuillez entrer une adresse e-mail valide.")
        this.addEvent(this.message, this.regexMessage, "Veuillez entrer un message")
        this.submitForm()
        this.btnClose= document.querySelector(".formulaire-close")
        this.closeForm()
        this.openForm()
    }
    //Photograph name display @ form
    formulaireName() {
        this.formulaireNamePhotograph.innerHTML = this.data
        this.formulaireNamePhotograph.setAttribute("aria-label", this.data)
    }
    //Form submission
    submitForm(){
        this.formulaire.addEventListener("submit", (e)=> {
            e.preventDefault()
            //if all fields are properly set up then form values are displayed & reset form
            if( this.regexMin.test(this.firstname.value) &&
                this.regexMin.test(this.lastname.value) &&
                this.regexEmail.test(this.email.value) &&
                this.regexMessage.test(this.message.value)){
                    let data = {
                        "prenom": this.firstname.value,
                        "nom":  this.lastname.value,
                        "email": this.email.value,
                        "message": this.message.value
                    }
                    //Form values displayed @ console
                    console.log(data)

                    //Display confirmation message
                    this.formulaire.querySelector(".formulaire-msgConfirm").style.display="block"
                    setTimeout(() => {
                        this.formulaire.querySelector(".formulaire-msgConfirm").style.display="none"
                    }, 10000);
                    //Form reset
                    e.target.reset()
                    const textControl = document.querySelectorAll(".text-control")
                    textControl.forEach(element => {
                        element.classList.remove("success")
                    });
                    
                } else {
                    //Error messages
                    e.preventDefault()
                    if(this.firstname.value == ""){
                        let msgErreur = this.firstname.parentNode.childNodes[5]
                        this.error(this.firstname, "Veuillez entrer 2 caractères ou plus pour le champ du prénom.", msgErreur)
                    }
                    if(this.lastname.value == ""){
                        let msgErreur = this.lastname.parentNode.childNodes[5]
                        this.error(this.lastname, "Veuillez entrer 2 caractères ou plus pour le champ du prénom.", msgErreur)
                    }
                    if(this.email.value == ""){
                        let msgErreur = this.email.parentNode.childNodes[5]
                        this.error(this.email, "Veuillez entrer 2 caractères ou plus pour le champ du prénom.", msgErreur)
                    }
                    if(this.message.value == ""){
                        let msgErreur = this.message.parentNode.childNodes[5]
                        this.error(this.message, "Veuillez entrer un message", msgErreur)
                    }
                }
            })
    }
    //Close form
    closeForm() {
        this.btnClose.addEventListener("click", ()=>{
            this.formulaire.style.display= "none"
        })
        document.addEventListener("keyup", (e)=> {
            if(e.key == "Escape") {
                this.formulaire.style.display= "none"
            }
        })
    }

    //Open form @ "contact me" btn click
    openForm() {
        this.btnContactMe.addEventListener("click", ()=>{
            this.formulaire.style.display= "flex"
            this.formulaire.setAttribute("aria-hidden", "false")
            this.main.setAttribute("aria-hidden", "true")
            this.formulaire.querySelector("form").focus()
        })
    }

    //Check error or validation message @ field entry
    addEvent(element, regex, textMsgErreur){
        element.addEventListener("keyup",()=>{
            let msgErreur = element.parentNode.childNodes[5]
            if(regex.test(element.value)) {
                this.success(element, msgErreur)
            }else {
                this.error(element, textMsgErreur, msgErreur )
            }
        })
    }
    
    success(element, smallError) {
        element.classList.add("success")
        element.classList.remove("error") 
        smallError.style.display="none" //delete error message
    }

    error(element, messageError, smallError) {
        element.classList.add("error")
        element.classList.remove("success")
        smallError.style.display="block" //display error message
        smallError.innerHTML= messageError
    }

}