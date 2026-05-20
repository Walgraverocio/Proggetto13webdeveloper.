import './style.scss'

// Import just what we need

// import 'bootstrap/js/dist/alert';
// import 'bootstrap/js/dist/button';
// import 'bootstrap/js/dist/carousel';
   import 'bootstrap/js/dist/collapse';
// import 'bootstrap/js/dist/dropdown';
   import 'bootstrap/js/dist/modal';
// import 'bootstrap/js/dist/offcanvas';
// import 'bootstrap/js/dist/popover';
// import 'bootstrap/js/dist/scrollspy';
// import 'bootstrap/js/dist/tab';
// import 'bootstrap/js/dist/toast';
// import 'bootstrap/js/dist/tooltip';

const formContatti = document.querySelector("#contatti form");
    let contenitoreMessagio = document.createElement("div");

    formContatti.addEventListener("submit", (event)=>{

        event.preventDefault(); // TECNICA - AJAX

        if ( formContatti.checkValidity() ){

            contenitoreMessagio.innerHTML = `<div class="alert alert-success" role="alert">
  Form inviato con successo!
</div>`
        formContatti.parentElement.appendChild(contenitoreMessagio);


        } else {

            formContatti.classList.add("was-validated");
             contenitoreMessagio.innerHTML = `<div class="alert alert-danger" role="alert">
  Form  non inviato!
</div>`
        formContatti.parentElement.appendChild(contenitoreMessagio);


        }



    });