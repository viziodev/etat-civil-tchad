
$(document).ready(function () {
    const sidebar = document.getElementById('sidebar');
    console.log("ici sidebar");
    if (sidebar) {
        console.log("ici sidebar");
    
        const toggleSidebarMobile = (sidebar, sidebarBackdrop, toggleSidebarMobileHamburger, toggleSidebarMobileClose , contentMain) => {
            sidebar.classList.toggle('hidden');
            sidebarBackdrop.classList.toggle('hidden');
            toggleSidebarMobileHamburger.classList.toggle('hidden');
            toggleSidebarMobileClose.classList.toggle('hidden');
            if (contentMain) {
                contentMain.querySelector('main').style.marginLeft = '16rem';
                // contentMain.forEach((s) => s.style.marginLeft = '16rem');
            }
        }
        

        const toggleSidebarMobileEl = document.getElementById('toggleSidebarMobile');
        const sidebarBackdrop = document.getElementById('sidebarBackdrop');
        const toggleSidebarMobileHamburger = document.getElementById('toggleSidebarMobileHamburger');
        const toggleSidebarMobileClose = document.getElementById('toggleSidebarMobileClose');
        const toggleSidebarMobileSearch = document.getElementById('toggleSidebarMobileSearch');
        const test = document.getElementById('testResp');
        const contentMain = document.getElementById('main-content');
        
       
        if (toggleSidebarMobileSearch) {
            toggleSidebarMobileSearch.addEventListener('click', () => {
                toggleSidebarMobile(sidebar, sidebarBackdrop, toggleSidebarMobileHamburger, toggleSidebarMobileClose , contentMain);
               
            });
        }
        // if (test) {
        //     test.addEventListener('click', () => {
        //         toggleSidebarMobile(sidebar, sidebarBackdrop, toggleSidebarMobileHamburger, toggleSidebarMobileClose);
        //     });
        // }
       if (toggleSidebarMobileEl) {
        toggleSidebarMobileEl.addEventListener('click', () => {
            toggleSidebarMobile(sidebar, sidebarBackdrop, toggleSidebarMobileHamburger, toggleSidebarMobileClose , contentMain);
        });
       }
        
       
        if (sidebarBackdrop) {
            sidebarBackdrop.addEventListener('click', () => {
                toggleSidebarMobile(sidebar, sidebarBackdrop, toggleSidebarMobileHamburger, toggleSidebarMobileClose , contentMain);
            });
        }
      
        const closeSideBar = document.getElementById("closeSideBar");
       
            closeSideBar.addEventListener('click', () => {
               
                if (contentMain) {
                    // contentMain.forEach((s) => s.style.marginLeft = '0rem');
                    contentMain.querySelector('main').style.marginLeft = '0rem';
                }
                if (sidebar) {
                    console.log("je suis ici close sidebar  ");
                    sidebar.classList.toggle('hidden');
                    sidebarBackdrop.classList.toggle('hidden');
                    toggleSidebarMobileHamburger.classList.toggle('hidden');
                    toggleSidebarMobileClose.classList.toggle('hidden');
                    
                }
         
            });
            
        
    }

   
    
  })


//   class="fixed sidebar-my top-0 left-0 z-40
//  flex flex-col flex-shrink-0 w-64 h-full pt-4
//  font-normal duration-75 lg:flex transition-width 
// primary-bg-color overflow-y-auto hidden



// class="fixed sidebar-my top-0 left-0 z-40
//  flex flex-col flex-shrink-0 w-64 h-full pt-4 
// font-normal duration-75 lg:flex transition-width
//  primary-bg-color overflow-y-auto hidden"


// fixed sidebar-my top-0 left-0 z-40 
// flex flex-col flex-shrink-0 w-64 h-full pt-4
//  font-normal duration-75 lg:flex transition-width
//  primary-bg-color overflow-y-auto