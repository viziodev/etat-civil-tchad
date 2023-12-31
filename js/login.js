function loadUserData(callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var userData = JSON.parse(this.responseText);
            callback(userData);
        }
    };
    xhttp.open('GET', '../assets/data/users.json', true);
    xhttp.send();
}

const logOut = ()=> {
    localStorage.removeItem("userConnected");
    window.location.href = "../../../pages/login.html" ;

}
const getUserConnected  = () => {
   return JSON.parse(localStorage.getItem("userConnected"));
}
document.addEventListener('DOMContentLoaded', function () {
    const nameUserconnected = document.querySelector('#name-userconnected');

    const loginForm = document.querySelector('.myform-login');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submission
    
            console.log("je suis icic memem ");
            var emailInput = document.getElementById('email');
            var passwordInput = document.getElementById('password');
    
            var enteredEmail = emailInput.value;
            var enteredPassword = passwordInput.value;
    
            loadUserData(function (userData) {
                console.log("jmy user data " , userData);
               
                var isValidUser = userData.find(function (user) {
                    return user.email === enteredEmail && user.password === enteredPassword;
                });
             
                if (isValidUser) {
                    // Successful login, redirect or perform desired actions
                    console.log('Login successful');
                    localStorage.setItem("userConnected" , JSON.stringify(isValidUser));
                    window.location.href = "../index.html" ;
                } else {
                    // Invalid credentials, show an error message
                    console.log('Invalid credentials');
                }
            });
        });
    }
  
    if (nameUserconnected && UserUtility.getUserConnected()) {
        const con = UserUtility.getUserConnected();
        nameUserconnected.innerHTML = con['nom'];
        
    }
});


class UserUtility {
    static getUserConnected() {
        return JSON.parse(localStorage.getItem("userConnected"));
    }
}


function updateLinksVisibility() {
    const user = UserUtility.getUserConnected();
  
    // Liste des liens à afficher pour chaque rôle
    const roleBasedLinks = {
      admin: ["accueil","mode-off","uuuuu","uuuujju" ,"acte","details-acte", "ajouter-acte","modifier-acte","recherche-lieu","notification","parametre","aide" , "deconnexion"],
      valideur: ["accueil","mode-on","selected-agence","liste-stock","accueil-valideur","acte","valider-acte", "annuler-acte","annuler-annulation-acte","rectifier-acte" ,"liste-mention","notification","parametre","aide", "deconnexion"],
      utilisateur: ["link1"],
    };
  
    // Cacher tous les liens

    // Afficher les liens spécifiques au rôle de l'utilisateur
    $(document).ready(function () {
        if (user) {
       
       
            const linksToDisplay = roleBasedLinks[user.role] || [];
            console.log("linksToDisplay ", linksToDisplay);
            linksToDisplay.forEach(linkHref => {
                const link = document.getElementById(`${linkHref}`);
                console.log("link :  ", linkHref);
                if (link) {
                    link.classList.remove("hidden");
                    console.log("after remove :  ", linkHref);
                }
            });
          
           
        }
      })
    
   
}
  
// Appeler la fonction lors du chargement de la page
document.addEventListener('DOMContentLoaded', function () {
   
    updateLinksVisibility();
});
