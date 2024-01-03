window.onload = () => {
  const openSidebarNew = document.getElementById("openSidebarNew");
  const closeSidebarNew = document.getElementById("closeSidebarNew");
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.getElementById("main-content");
  const toggleDivButtons = document.getElementById("toggleDivButtons");

  const closeSideBar = document.getElementById("closeSideBar");

  // Fonction pour mettre à jour le style de #sidebar en fonction de la largeur de l'écran
  if (closeSideBar) {
    closeSideBar.addEventListener("click", () => {
      openOrCloseSidebar();
    });
  }

  openSidebarNew.addEventListener("click", () => {
    openOrCloseSidebar();
  });
  closeSidebarNew.addEventListener("click", () => {
    openOrCloseSidebar();
  });

  const openOrCloseSidebar = () => {
    // sidebar.classList.toggle("hidden");
    toggleButton();
  };
  let isOpenSidebar = () => {
    return window.getComputedStyle(sidebar).display === "none";
  };

  containsHiddenSidebar = () => {
    return sidebar.classList.contains("hidden");
  };

  const toggleButton = () => {
    // sidebar.classList.toggle("hidden");
    if (sidebar.style.display === "none") {
      sidebar.style.display = "block";
    } else {
      // alert("noe")
      sidebar.style.display = "none";
    }
    closeSidebarNew.classList.toggle("hidden");

    openSidebarNew.classList.toggle("hidden");
    toggleDivButtons.classList.toggle("my-ml-64");
    mainContent.classList.toggle("my-ml-64");
  };
};
