"use strict";

function Router(routes) {
  try {
    if (!routes) {
      throw "error: routes param is mandatory";
    }
    this.constructor(routes);
    this.init();
  } catch (e) {
    console.error(e);
  }
}

Router.prototype = {
  routes: undefined,
  rootElem: undefined,
  constructor: function (routes) {
    this.routes = routes;
    this.rootElem = document.getElementById("main-content");
  },
  init: function () {
    var r = this.routes;
    var i = 0;
    console.log("my rooot ", r);
    (function (scope, r) {
      window.addEventListener("hashchange", function (e) {
        scope.hasChanged(scope, r);
      });
    })(this, r);
    this.hasChanged(this, r);
  },
  hasChanged: function (scope, r) {
    if (window.location.hash.length > 0) {
      console.log("======= je suid icici fist if");
      for (var i = 0, length = r.length; i < length; i++) {
        var route = r[i];
        if (route.isActiveRoute(window.location.hash.substr(1))) {
          scope.goToRoute(route.htmlName);
        }
      }
    } else {
      console.log("========= je suid 2 fist if =============== ");
      for (var i = 0, length = r.length; i < length; i++) {
        var route = r[i];
        if (route.default) {
          scope.goToRoute(route.htmlName);
        }
      }
    }
  },
  goToRoute: function (htmlName) {
    (function (scope) {
      var url = "pages/" + htmlName,
        xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          const hashMy = window.location.hash;
        
          const user = UserUtility.getUserConnected();
          console.log("root changes ", window.location.hash);
          scope.rootElem.innerHTML = this.responseText;

          if (!hashMy) {
            scope.createChart();
          }
          scope.currentLink();

          if (!user) {
            console.log("disconnected");
            window.location.href = "../../../pages/login.html";
          } else {
            if (user.role && user.role == "valideur") {
                const slectAgen = document.getElementById("selected-agence");
                if (slectAgen.classList.contains("hidden")) {
                  slectAgen.classList.remove("hidden")
                }
              
            }
            console.log("connected");
          }
        }
      };
      xhttp.open("GET", url, true);
      xhttp.send();
    })(this);
  },
  currentLink :  function () {  
    $(document).ready(function () {
      const currentPath = window.location.hash.substr(1);

      
      // Parcourez tous les liens de la barre latérale
      document.querySelectorAll('#ul-sidebar li').forEach(link => {
          console.log("mylink hash " , link);
          // Obtenez le chemin du lien (sans le "#" initial)
          var linkPath = link.querySelector('a').getAttribute('href').substr(1);
          const linkA = link.querySelector('a');
          console.log("mylink linkPath " , linkPath);
          // Vérifiez si le chemin du lien correspond à la page actuelle
          if (currentPath == linkPath) {
              console.log("mylink current linkPath " , currentPath);
              // Ajoutez la classe "current" à l'élément li de la page actuelle
              // link.classList.add('current');
              linkA.classList.add('button-color');
          }else {
            linkA.classList.remove('button-color');
          }
      });
    })
   
  },

  createChart: () => {
    $(document).ready(() => {
      const ctx = document.getElementById("test-linechart");
    
      if (ctx && typeof Chart !== "undefined") {
        ctx.innerHTML = "";
        const labels = ["jan", "fev", "mars", "avril", "mai", "juin"];
        const data = {
          labels: labels,
          datasets: [
            {
              label: "",
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: "#1C64F2",
              tension: 0.1,
            },
            {
              label: "",
              data: [44, 50, 70, 79, 56, 44, 40],
              fill: false,
              borderColor: "#7E3AF2",
              tension: 0.1,
            },
            {
              label: "",
              data: [22, 89, 70, 90, 56, 33, 66],
              fill: false,
              borderColor: "#D61F69",
              tension: 0.1,
            },
          ],
        };
        const config = {
          type: "line",
          data: data,
          
        };
        new Chart(ctx, config);
      }
    });
    

  },

    // restoreTabState: function () {
  //   $(document).ready(function () {
  //     var activeTabId = localStorage.getItem("activeTab");

  //     // Sélectionner et activer l'onglet en fonction de l'ID récupéré
  //     if (activeTabId) {
  //       var tabButtons = document.querySelectorAll('[role-tabs="tab"]');
  //       tabButtons.forEach(function (button) {
  //         button.classList.remove("current");
  //         if (button.getAttribute("aria-tabs-controls") === activeTabId) {
  //           button.classList.add("current");
  //           $("#" + activeTabId).removeClass("hidden");
  //         }
  //       });
  //     }
  //   });
  //   // Récupérer l'onglet actif depuis le stockage local
  // },
  
};
