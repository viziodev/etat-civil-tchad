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
          if (user && user.role == "valideur") {
            console.log("current role ", user.role);
            const agentselect = document.getElementById("select-agence");
            if (agentselect) {
              console.log("current iciicic  ", user.role);
              agentselect.classList.remove("hidden");
            }
          }
          console.log("root changes ", window.location.hash);
          scope.rootElem.innerHTML = this.responseText;

          // if (!hashMy) {
          scope.createChart();
          scope.testChart();
          scope.currentLink();
          // }

          if (!user) {
            console.log("disconnected");
            window.location.href = "../../../pages/login.html";
          } else {
            console.log("connected");
          }
        }
      };
      xhttp.open("GET", url, true);
      xhttp.send();
      scope.testChart();
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
          console.log("mylink linkPath " , linkPath);
          // Vérifiez si le chemin du lien correspond à la page actuelle
          if (currentPath === linkPath) {
              console.log("mylink current linkPath " , linkPath);
              // Ajoutez la classe "current" à l'élément li de la page actuelle
              link.classList.add('current');
          }
      });
    })
   
  },
  restoreTabState: function () {
    $(document).ready(function () {
      var activeTabId = localStorage.getItem("activeTab");

      // Sélectionner et activer l'onglet en fonction de l'ID récupéré
      if (activeTabId) {
        var tabButtons = document.querySelectorAll('[role-tabs="tab"]');
        tabButtons.forEach(function (button) {
          button.classList.remove("current");
          if (button.getAttribute("aria-tabs-controls") === activeTabId) {
            button.classList.add("current");
            $("#" + activeTabId).removeClass("hidden");
          }
        });
      }
    });
    // Récupérer l'onglet actif depuis le stockage local
  },
  createChart: function () {
    $(document).ready(() => {
      // const getChartOptions = () => {
      //     return {
      //       series: [35.1, 23.5, 2.4, 5.4],
      //       colors: ["#1C64F2", "#16BDCA", "#FDBA8C", "#E74694"],
      //       chart: {
      //         height: 220,
      //         width: "80%",
      //         type: "donut",
      //       },
      //       stroke: {
      //         colors: ["transparent"],
      //         lineCap: "",
      //       },
      //       plotOptions: {
      //         pie: {
      //           donut: {
      //             labels: {
      //               show: true,
      //               name: {
      //                 show: true,
      //                 fontFamily: "Inter, sans-serif",
      //                 offsetY: 20,
      //                 fontSize:"10"
      //               },
      //               total: {
      //                 showAlways: true,
      //                 show: true,
      //                 label: "Total",
      //                 fontFamily: "Inter, sans-serif",
      //                 formatter: function (w) {
      //                   const sum = w.globals.seriesTotals.reduce((a, b) => {
      //                     return a + b
      //                   }, 0)
      //                   return `${sum}`
      //                 },
      //               },
      //               value: {
      //                 show: true,
      //                 fontFamily: "Inter, sans-serif",
      //                 offsetY: -20,
      //                 formatter: function (value) {
      //                   return value + ""
      //                 },
      //               },
      //             },
      //             size: "80%",
      //           },
      //         },
      //       },
      //       grid: {
      //         padding: {
      //           top: -2,
      //         },
      //       },
      //       labels: ["Encours", "Acceptés", "Rejetés", "Modifiés"],
      //       dataLabels: {
      //         enabled: false,
      //       },
      //       legend: {
      //         position: "bottom",
      //         fontFamily: "Inter, sans-serif",
      //       },
      //       yaxis: {
      //         labels: {
      //           formatter: function (value) {
      //             return value + "k"
      //           },
      //         },
      //       },
      //       xaxis: {
      //         labels: {
      //           formatter: function (value) {
      //             return value  + "k"
      //           },
      //         },
      //         axisTicks: {
      //           show: false,
      //         },
      //         axisBorder: {
      //           show: false,
      //         },
      //       },
      //     }
      //   }

      //   if (document.getElementById("donut-chart") && typeof ApexCharts !== 'undefined') {
      //     document.getElementById("donut-chart").innerHTML = "";
      //     const chart = new ApexCharts(document.getElementById("donut-chart"), getChartOptions());
      //     chart.render();

      //   }
      //   if (document.getElementById("donut-chart1") && typeof ApexCharts !== 'undefined') {
      //     document.getElementById("donut-chart1").innerHTML = "";
      //     const chart1 = new ApexCharts(document.getElementById("donut-chart1"), getChartOptions());
      //     chart1.render();

      //   }
      //   if (document.getElementById("donut-chart2") && typeof ApexCharts !== 'undefined') {
      //     document.getElementById("donut-chart2").innerHTML = "";
      //     const chart2 = new ApexCharts(document.getElementById("donut-chart2"), getChartOptions());
      //     chart2.render();

      //   }
      //   if (document.getElementById("donut-chart3") && typeof ApexCharts !== 'undefined') {
      //     document.getElementById("donut-chart3").innerHTML = "";
      //     const chart3 = new ApexCharts(document.getElementById("donut-chart3"), getChartOptions());
      //     chart3.render();

      //   }

      let options = {
        chart: {
          height: "100%",
          maxWidth: "100%",
          type: "line",
          fontFamily: "Inter, sans-serif",
          dropShadow: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        tooltip: {
          enabled: true,
          x: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 2,
        },
        grid: {
          show: true,
          strokeDashArray: 4,
          padding: {
            left: 2,
            right: 2,
            top: -26,
          },
        },
        series: [
          {
            name: "Clicks",
            data: [500, 418, 456, 526, 356, 456],
            color: "#1A56DB",
          },
          {
            name: "CPC",
            data: [456, 356, 526, 332, 418, 500],
            color: "#7E3AF2",
          },
          {
            name: "CTT",
            data: [356, 256, 626, 432, 418, 500],
            color: "#FF7E89",
          },
        ],
        legend: {
          show: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          categories: [
            "01 Feb",
            "02 Feb",
            "03 Feb",
            "04 Feb",
            "05 Feb",
            "06 Feb",
            "07 Feb",
          ],
          labels: {
            show: true,
            style: {
              fontFamily: "Inter, sans-serif",
              cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
            },
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          show: true,
        },
      };

      if (
        document.getElementById("line-chart") &&
        typeof ApexCharts !== "undefined"
      ) {
        document.getElementById("line-chart").innerHTML = "";
        const chart = new ApexCharts(
          document.getElementById("line-chart"),
          options
        );
        chart.render();
      }
    });

    window.addEventListener("load", function () {});
  },
  testChart: () => {
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
};
