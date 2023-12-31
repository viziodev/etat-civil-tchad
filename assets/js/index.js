let currentStep = 1;
const totalSteps = 7;
const olStepLis =  document.querySelectorAll('.ol-step li');
const steps =   document.querySelectorAll('.step');
const closeStep =  document.getElementById("close-step");
const previewStepButton =  document.getElementById("preview-step");
const nextStepButton =  document.getElementById("next-step");

document.addEventListener('DOMContentLoaded', function() {
    showStep(currentStep);
});

function showStep(step) {

  if (olStepLis) {
    document.querySelectorAll('.ol-step li').forEach(s => s.classList.remove('bg-gray-100'));
  }
  if (steps) {
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
  }

  if ( document.getElementById(`step${step}`)) {
    document.getElementById(`step${step}`).classList.add('active');

  }
  if ( document.getElementById(`ol-step${step}`)) {
    document.getElementById(`ol-step${step}`).classList.add('bg-gray-100');
    
  }
 
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

//  modal js

const openModal = (idModal)=> {
    const modal = document.getElementById(idModal);
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    modal.setAttribute('role' , 'dialog');
    modal.setAttribute('aria-modal' , true);
    document.querySelector('#shadow-div-modal').classList.remove("hidden");

}
const closeModal = (idModal)=> {
    const modal = document.getElementById(idModal);
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    modal.removeAttribute('role');
    modal.removeAttribute('aria-modal');
    document.querySelector('#shadow-div-modal').classList.add("hidden");
    
}

const bodyClick = ()=> {
    document.querySelector('body').addEventListener('click' , ()=>{
      
    })
}

// // Obtenez le chemin de la page actuelle (sans le "#" initial)

