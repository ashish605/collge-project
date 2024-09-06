//accessing the chart 1
const ctx = document.getElementById('one');


//fetching data from json
fetch('data.json')
    .then(function(response){
      if(response.ok == true){

        return response.json();
      }
    })

    .then(function(data){

     
      createchart(data);  

    });



//sending the data from json to the funcation
function createchart(data){
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: data[0].years,                 //accessing the years array from json file
    datasets: [{
      label: 'Citations per year',
      data:  data[0].citation ,            //accessing the citation array from json file   
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
  maintainAspectRatio: false                //by this the graph maintain its ratio 
});
}

