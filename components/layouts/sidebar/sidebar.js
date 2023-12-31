// component-button.js
class MySideBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();

    }

    

    

   
   //  highlightActiveLink() {
   //      const currentUrlHash = window.location.hash;
   //      const currentUrl = window.location.href;
   //      console.log("Current URL: ", currentUrl);
   //      // Vérifiez chaque lien dans le menu
   //      this.shadowRoot.querySelectorAll('#ul-sidebar li a').forEach(link => {
   //          console.log("href " , link);
   //          const linkHash = link.getAttribute('href');
   //          console.log("linkHash " , linkHash);
   //          console.log("currentUrlHash and linkHash" , currentUrlHash , linkHash);
   //          // Comparaison avec l'URL actuelle
   //          if (currentUrlHash === linkHash) {
   //              console.log("iciicicicic and linkHash" );
   //              link.classList.add('active'); // Ajoutez la classe active au lien correspondant
   //          } else {
   //              link.classList.remove('active'); // Assurez-vous que les autres liens n'ont pas la classe active
   //          }
   //      });
   //  }

    render() {
        // const htmB = document.getElementById("element-button-template");
        this.shadowRoot.innerHTML = `
        <link href="../../../assets/css/flowbite/flowbite.min.css" rel="stylesheet" />
        <link href="../../../assets/css/style.css" rel="stylesheet" />

        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

        <aside id="sidebar" class="fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 hidden w-64 h-full pt-4 font-normal duration-75 lg:flex transition-width primary-bg-color overflow-y-auto" aria-label="Sidebar">
            <div class="relative flex flex-col flex-1 min-h-0 pt-0  ">
              <div class="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
                <div class="flex-1 px-3 space-y-1 primary-bg-color divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                
                  <ul class="pb-2 space-y-2" id="ul-sidebar">
                    <a href="#" class="flex ml-2 md:w-64">
                      <img src="assets/images/tasdjil-logo.png" class="h-8 w-auto mr-3 max-w-64" alt="FlowBite Logo" />
                    </a>
                  
    
                    <div class="w-full max-w-sm bg-white  rounded-lg shadow ">
    
                        <div class="flex items-center p-2 gap-2">
                            <button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                <span class="sr-only">Open user menu</span>
                                <img class="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo">
                              </button>
    
                              <div class="flex flex-col items-start justify-center ">
                                <h5 id="name-userconnected" class=" text-sm font-medium text-gray-900 dark:text-white">

                                </h5>
                                <span class="text-sm text-gray-500 dark:text-gray-400">Centre CAU Ati</span>
                                <span class="text-sm text-gray-500 dark:text-gray-400">01001010101</span>
                              
                            </div>
                             
                        </div>
                    </div>
                    <div class="flex items-center  gap-2 p-2  ">
                      <button type="button" class="flex text-sm bg-blue-100  p-2 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button-2" >
                          <span class="material-symbols-outlined">
                              language_french
                              </span>
                      </button>
                    
                      <button type="button" id="mode-off" class="flex hidden  text-sm bg-red-300 p-2 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"  >
                        <div class="flex justify-between ">
                         <span class="material-symbols-outlined text-red-500 ">
                          app_blocking
                           </span>
                           <p class="text-red-500  font-bold">
                            Hors ligne
                           </p>
                        </div>
                       </button>
                    
                       <button type="button" id="mode-on" class="flex hidden  text-sm bg-green-300 p-2 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"  >
                        <div class="flex justify-between ">
                         <span class="material-symbols-outlined text-green-500 ">
                          security_update_good
                           </span>
                           <p class="text-green-500  font-bold">
                            En ligne
                           </p>
                        </div>
                       </button>
                    
                  </div>
                    
                    <p class="text-gray-500  pb-2 whitespace-nowrap dark:text-gray-400 mb-2 text-xs paraph-color uppercase">Menu</p>  
    
                    <li id="accueil" class="hidden">
                       <a href="#" class="flex lien-sidebar items-center justidy-center p-2  rounded-full dark:text-white secondary-bg-color button-color group">
                        <span class="material-symbols-outlined">
                            home
                            </span>
                          <span class="ms-3">Accueil</span>
                       </a>
                    </li>
                  
                 
                   
                   
                    <li id="acte" class="hidden">
                      <button type="button" id="select-dropdown" class="flex items-center w-full p-2 text-base text-gray-900 secondary-bg-color transition duration-75 rounded-full group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                       onclick="displaySearchLieu('dropdown-actes')" >
                        <span class="material-symbols-outlined">
                          contract
                          </span>
                            <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Actes</span>
                            <span class="material-symbols-outlined">
                              expand_more
                              </span>
                      </button>
                      <ul id="dropdown-actes" class="hidden py-2 space-y-2">
                            <li>
                               <a href="#liste-acte" class="flex items-center w-full  rounded-full p-2 text-gray-900 transition duration-75  pl-11 group  dark:text-white dark:hover:bg-blue-700">Naissance</a>
                            </li>
                            <li>
                               <a href="#liste-acte-deces" class="flex items-center  rounded-full w-full p-2 text-gray-900 transition duration-75  pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Décés</a>
                            </li>
                            <li>
                               <a href="#liste-acte-divorce" class="flex items-center rounded-full w-full p-2 text-gray-900 transition duration-75  pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Divorce</a>
                            </li>
                      </ul>
                   </li>
                    <li id="liste-stock" class="hidden">
                      <a href="#liste-stock"  class="flex lien-sidebar items-center secondary-bg-color p-2 text-gray-900 rounded-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                       <span class="material-symbols-outlined">
                           inventory_2
                           </span>
                         <span class="flex-1 ms-3 whitespace-nowrap">Gestion de stock</span>
                      </a>
                   </li>
                   <li id="liste-mention" class="hidden">
                    <a href="#liste-mention"  class="flex lien-sidebar items-center secondary-bg-color p-2 text-gray-900 rounded-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                     <span class="material-symbols-outlined">
                         document_scanner
                         </span>
                       <span class="flex-1 ms-3 whitespace-nowrap">Mentions</span>
                    </a>
                 </li>
                 
                   
                   
                    <p class="text-gray-500 pt-2 pb-2 mb-2 whitespace-nowrap dark:text-gray-400 text-xs uppercase paraph-color">
                      Actions rapides</p>
                      <li id="valider-acte" class="hidden">
                        <a href="#valider-acte"  class="flex lien-sidebar items-center secondary-bg-color p-2 text-gray-900 rounded-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                         <span class="material-symbols-outlined">
                             check_circle
                             </span>
                           <span class="flex-1 ms-3 whitespace-nowrap">Valider un acte</span>
                        </a>
                     </li>
                     <li id="annuler-acte" class="hidden">
                      <a href="#annuler-acte"  class="flex lien-sidebar items-center secondary-bg-color p-2 text-gray-900 rounded-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                       <span class="material-symbols-outlined">
                           contract_delete
                           </span>
                         <span class="flex-1 ms-3 whitespace-nowrap">Annuler un acte</span>
                      </a>
                   </li>
                   <li id="annuler-annulation-acte" class="hidden">
                    <a href="#annuler-annulation-acte"  class="flex lien-sidebar items-center secondary-bg-color p-2 text-gray-900 rounded-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                     <span class="material-symbols-outlined">
                         tab_close
                         </span>
                       <span class="flex-1 ms-3 whitespace-nowrap">Annuler une annulation</span>
                    </a>
                    <li id="rectifier-acte" class="hidden" >
                      <a href="#rectifier-acte"  class="flex lien-sidebar items-center secondary-bg-color p-2 text-gray-900 rounded-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                       <span class="material-symbols-outlined">
                           tab_close
                           </span>
                         <span class="flex-1 ms-3 whitespace-nowrap">Rectifier un acte</span>
                      </a>
                   </li>
                 </li>
                      <li id="ajouter-acte" class="hidden">
                     <a href="#ajout-acte" class="flex items-center lien-sidebar secondary-bg-color p-2 text-gray-900 rounded-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <span class="material-symbols-outlined">
                            add
                            </span>
                        <span class="flex-1 ms-3 whitespace-nowrap">Ajouter une acte</span>
                     </a>
                  </li>
                
                  <li id="details-acte" class="hidden">
                    <a href="#details-acte" class="flex items-center lien-sidebar secondary-bg-color p-2 text-gray-900 rounded-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <span class="material-symbols-outlined">
                            contract_edit
                            </span>
                       <span class="flex-1 ms-3 whitespace-nowrap">Modifier une acte</span>
                    </a>
                 </li>
                 <li id="recherche-lieu" class="hidden">
                  <a href="#rechercher-lieu" class="flex items-center lien-sidebar secondary-bg-color p-2 text-gray-900 rounded-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                      <span class="material-symbols-outlined">
                          travel_explore
                          </span>
                     <span class="flex-1 ms-3 whitespace-nowrap">Rechercher un lieu</span>
                  </a>
               </li>
                
                 <p class="text-gray-500 mb-2  pt-2 pb-2 whitespace-nowrap dark:text-gray-400 text-xs uppercase paraph-color">
                    Utilitaires</p>
                 <li id="notification" class="hidden">
                  <a href="#notification" class="flex lien-sidebar secondary-bg-color items-center p-2 text-gray-900 rounded-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <span class="material-symbols-outlined">
                        mark_email_unread
                        </span>
                     <span class="flex-1 ms-3 whitespace-nowrap">Notifications</span>
                  </a>
               </li>
              
             
               <li id="parametre" class="hidden">
                 <a href="#parametre" class="flex  lien-sidebar secondary-bg-color items-center p-2 text-gray-900 rounded-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <span class="material-symbols-outlined">
                        settings
                        </span>
                    <span class="flex-1 ms-3 whitespace-nowrap">Paramètres</span>
                 </a>
              </li>
            
              <li id="aide" class="hidden mb-2">
                <a href="#aide" class="lien-sidebar secondary-bg-color flex items-center p-2 text-gray-900 rounded-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <span class="material-symbols-outlined">
                        help
                        </span>
                   <span class="flex-1 ms-3 whitespace-nowrap">Aide</span>
                </a>
             </li>
                      
             <li id="deconnexion" class="hidden">
                <a href="javascript:void(0)" onclick="logOut()" class="flex lien-sidebar secondary-bg-color items-center p-2 text-gray-900 rounded-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                   <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
                   </svg>
                   <span class="flex-1 ms-3 whitespace-nowrap">Déconnexion</span>
                </a>
             </li>
         
                   
                
                </ul>
                  
                </div>
              </div>
             
            </div>
        </aside>
               `;
    }
}

customElements.define('my-sidebar', MySideBar);


