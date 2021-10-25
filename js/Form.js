export class Form {
   constructor(photographer) {
      this.photographer = photographer;
   }
   createForm(photographer) {
      const body = document.querySelector('body');
      //Background
      const bground = document.createElement('section');
      const content = document.createElement('div');
      bground.classList.add('bground');
      content.classList.add('content');
      //Cross (Escape)
      const cross = document.createElement('span');
      cross.classList.add('cross');
      //Texte Format
      const divContact = document.createElement('div');
      const contactMe = document.createElement('span');
      const up = document.createElement('br');
      contactMe.classList.add('contactMe');
      contactMe.innerHTML = 'Contactez-moi';
      //This.photographer.name
      const photographerName = document.createElement('h3');
      const modalbg = document.createElement('div');
      photographerName.classList.add('titleName');
      photographerName.innerHTML = this.photographer.name;
      modalbg.classList.add('modalBody');
      //FORMULARE
      const form = document.createElement('form');
      form.id = 'send';
      form.method = 'POST';
      //===================================================
      const firstname = document.createElement('div');
      const lastname = document.createElement('div');
      const email = document.createElement('div');
      const txtFree = document.createElement('div');
      firstname.classList.add('form-data');
      lastname.classList.add('form-data');
      email.classList.add('form-data');
      txtFree.classList.add('form-data');
      //===================================================
      const labFirstname = document.createElement('label');
      const labLastname = document.createElement('label');
      const labEmail = document.createElement('label');
      const labTxtFree = document.createElement('label');
      labFirstname.innerHTML = 'Prénom';
      labFirstname.setAttribute('for', 'first');
      labLastname.innerHTML = 'Nom';
      labLastname.setAttribute('for', 'last');
      labEmail.innerHTML = 'Email';
      labEmail.setAttribute('for', 'email');
      labTxtFree.innerHTML = 'Votre message';
      labTxtFree.setAttribute('for', 'txtFree');
      //===================================================
      const inpFirstname = document.createElement('input');
      const inpLastname = document.createElement('input');
      const inpEmail = document.createElement('input');
      const inpTxtFree = document.createElement('textarea');
      inpFirstname.id = 'first';
      inpFirstname.type = 'textarea';
      inpLastname.id = 'last';
      inpLastname.type = 'textarea';
      inpEmail.type = 'email';
      inpEmail.id = 'email';
      inpEmail.required = true;
      inpTxtFree.id = 'txtFree';
      //===================================================
      const sendBtn = document.createElement('button');
      sendBtn.type = 'submit';
      sendBtn.classList.add('send');
      sendBtn.innerHTML = 'Envoyer';
      
      form.append(firstname);
      form.append(lastname);
      form.append(email);
      form.append(txtFree);
      form.append(sendBtn);
      //================================
      firstname.append(labFirstname);
      firstname.append(inpFirstname);
      lastname.append(labLastname);
      lastname.append(inpLastname);
      email.append(labEmail);
      email.append(inpEmail);
      txtFree.append(labTxtFree);
      txtFree.append(inpTxtFree);
      //================================
      body.append(bground);
      bground.append(content);
      bground.append(modalbg);
      modalbg.append(form);
      content.append(photographerName);
      content.append(cross);
      content.append(divContact);
      divContact.append(contactMe);
      divContact.append(up);
      divContact.append(photographerName);
      //STATE______________//
      let setting = {
         firstName: {
            data: '',
            status: false
         },
         lastName: {
            data: '',
            status: false
         },
         email: {
            data: '',
            status: false
         },
         txtFree: {
            data: '',
            status: false
         }
      };

      const checkForm = () => {
         const sendBtn = document.querySelector('.send');
         sendBtn.addEventListener('click', (event) => {
            //STOP FOR CHECK
            event.preventDefault();

            // Check first name
            const checkInputFirstName = () => {
               let errorFirstName = document.querySelector('.error');
               if (firstName.value.length > 1) {
                  setting.firstName.data = firstName.value;
                  setting.firstName.status = true;
                  firstName.parentNode.setAttribute("data-error-visible", "false");
               } else {
                  setting.firstName.data = firstName.value;
                  setting.firstName.status = false;
                  firstName.parentNode.setAttribute("data-error-visible", "true");
                  errorFirstName.setCustomValidity("Veuillez entrer prenom de 2 caracteres ou plus");
               }
            }
            firstName.addEventListener('input', checkInputFirstName);
            
            // Check last name
            const checkInputLastName = () => {
               let errorLastName = document.querySelector('.error');
               if (lastName.value.length > 1) {
                  setting.lastName.data = lastName.value;
                  setting.lastName.status = true;
                  lastName.parentNode.setAttribute("data-error-visible", "false");
               } else {
                  setting.lastName.data = lastName.value;
                  setting.lastName.status = false;
                  lastName.parentNode.setAttribute("data-error-visible", "true");
                  errorLastName.setCustomValidity("Veuillez entrer nom de 2 caracteres ou plus");
               }
            }
            lastName.addEventListener('input', checkInputLastName);
            
            // Check email
            const checkInputEmail = () => {
               let errorEmail = document.querySelector('.error');
               if (email.value.match(/^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i)) {
                  setting.email.data = email.value;
                  setting.email.status = true;
                  email.parentNode.setAttribute("data-error-visible", "false");
               } else {
                  setting.email.data = email.value;
                  setting.email.status = false;
                  email.parentNode.setAttribute("data-error-visible", "true");
                  errorEmail.setCustomValidity("Veuillez entrer une adresse e-mail valide");
               }
            }
            email.addEventListener('input', checkInputEmail);

            // Check message
            const checkInputMessage = () => {
               let errorMessage = document.querySelector('.error');
               if (message.value.length > 1) {
                  setting.message.data = lastName.value;
                  setting.message.status = true;
                  message.parentNode.setAttribute("data-error-visible", "false");
               } else {
                  setting.message.data = lastName.value;
                  setting.message.status = false;
                  message.parentNode.setAttribute("data-error-visible", "true");
                  errorMessage.setCustomValidity("Veuillez entrer un message plus long");
                  }
            }
            lastName.addEventListener('input', checkInputMessage);
            }
         ,);
      }
      checkForm();
   };
   handleStatus() {
      this.openForm();
      this.closeForm();
   };

   openForm() {
      //FORM_context___
      const contact = document.querySelector('.contact');
      contact.addEventListener('click', this.openForm);

      const bground = document.querySelector('.bground');
      const main = document.querySelector('main');
      bground.style.display = 'block';
      main.style.opacity = 0.3;

      const input = document.querySelector('#first');
      input.focus();
   };
   closeForm() {
      const cross = document.querySelector('.cross');
      cross.addEventListener('click', this.closeForm);
      const bground = document.querySelector('.bground');
      const main = document.querySelector('main');
      bground.style.display = 'none';
      main.style.opacity = 1;
   };}