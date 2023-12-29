// // function createFirstChart() {

// // }

// var myChart;

// document.addEventListener('DOMContentLoaded', function () {
//     setTimeout(function () {
//         // Votre code pour charger le graphique ici
//         var xhr = new XMLHttpRequest();
//         xhr.onreadystatechange = function () {
//             if (xhr.readyState === 4 && xhr.status === 200) {
//                 var jsonData = JSON.parse(xhr.responseText);
//                      console.log("ici chart");
//                     // Créer le graphique pour la première fois
//                     createChart(jsonData);
                
//             }
//         };
//         xhr.open('GET', '../assets/data/test.json', true);
//         xhr.send();
//     }, 1000); // 
//     // Charger les données JSON à partir du fichier externe
   
// });

// function createChart(jsonData) {
//     myChart = new ApexCharts(document.querySelector("#chart"), jsonData);
//     myChart.render();
// }



