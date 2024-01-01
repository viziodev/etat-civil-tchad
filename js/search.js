
$(document).ready(function () {

    const searchForm  = document.getElementById("modal_search_acte");
    if (searchForm) {


        searchForm.addEventListener("submit" , (event)=>{

            event.preventDefault();
            console.log("===== search-modal-acte on ======");
            getFormElementByFormId("modal_search_acte")

        });
    }

    
});


const getFormElementByFormId = (formId)=> {

    const form = document.getElementById(formId);
    const formElements = form.querySelectorAll('# _'+formId);
    const myObject = {};
    for (let index = 0; index < form.length; index++) {
        const element = form[index];
        console.log("element " , element);
        // if ()

        
    }


    
}

// ?