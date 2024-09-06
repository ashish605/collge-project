//accessing the chart 3
const three = document.getElementById('three')

//fetching data from json
fetch('data.json')
  .then(function (response) {
    if (response.ok == true) {

      return response.json();
    }
  })

  .then(function (data) {

    createchart1(data);

  });


//sending the data from json to the funcation
function createchart1(data) {
  new Chart(three, {
    type: 'bar',
    data: {
      labels: data[2].years,      //accessing the years array from json file
      datasets: [{
        label: 'Citations per year',
        data: data[2].citation,           //accessing the citation array from json file
        backgroundColor: [
          '#777'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
    maintainAspectRatio: false    //by this the graph maintain its ratio 
  });
}