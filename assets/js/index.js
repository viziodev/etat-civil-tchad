let currentStep = 1;
const totalSteps = 7;

document.addEventListener('DOMContentLoaded', function() {
    showStep(currentStep);
});

function showStep(step) {
  
   document.querySelectorAll('.ol-step li').forEach(s => s.classList.remove('bg-gray-100'));
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));

   document.getElementById(`step${step}`).classList.add('active');
    document.getElementById(`ol-step${step}`).classList.add('bg-gray-100');
     document.getElementById("close-step").setAttribute("hidden" , true);
    if (currentStep === 1) {
        document.getElementById("preview-step").setAttribute("hidden", true);
    } else {
        document.getElementById("preview-step").removeAttribute("hidden");
    }

    if (currentStep === totalSteps) {
        document.getElementById("next-step").setAttribute("hidden", true);
        document.getElementById("close-step").removeAttribute("hidden");

    } else {
        document.getElementById("next-step").removeAttribute("hidden");
    }
     // Cacher les étapes inactives
     for (let i = 1; i <= totalSteps; i++) {
        if (i !== currentStep) {
            document.getElementById(`step${i}`).classList.add('hidden');
        }
    }
}

function nextStep() {
    if (currentStep < totalSteps) {
        currentStep++;
        showStep(currentStep);
    }
}

function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
    }
}

function finish() {
    alert('Processus terminé !');
}





// modal js
document.addEventListener('DOMContentLoaded', function() {
    
  
// const action = document.querySelector("actions-2");
// if (action) {
//  console.log(",my action");
 
//  action.addEventListener("mouseover", () => {
//      console.log("this event ");
//  });
// }



});



// }
const displaySearchLieu = (idToDisplay)=> {
    console.log("je uis dev");
    // document.addEventListener("DOMContentLoaded", function () {
        const attrId = document.getElementById(idToDisplay);  
        if (attrId && attrId != undefined) {
            console.log("je suis test");
            attrId.classList.contains("hidden") ? attrId.classList.remove("hidden") : attrId.classList.add("hidden");
        }
    // })
}


const openModal = (idModal)=> {
    const modal = document.getElementById(idModal);
    modal.classList.remove('hidden');
    modal.classList.add('show');
    modal.classList.add('flex');
    modal.setAttribute('role' , 'dialog');
    modal.style.zIndex = 1000;
    document.querySelector('body').classList.add("modal-body-open");

}
const closeModal = (idModal)=> {
    const modal = document.getElementById(idModal);
    modal.classList.add('hidden');
    modal.classList.remove('hidden');
    modal.classList.remove('show');
    modal.classList.remove('flex');
    modal.removeAttribute('role');
    document.querySelector('body').classList.remove("modal-body-open");

    
}


// // Obtenez le chemin de la page actuelle (sans le "#" initial)

