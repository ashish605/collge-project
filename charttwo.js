//accessing the chart 2
const two= document.getElementById('two')

//fetching data from json
fetch('data.json')
    .then(function(response){
      if(response.ok == true){

        return response.json();
      }
    })

    .then(function(data){

     
      createchart2(data);  

    });


//sending the data from json to the funcation
function createchart2(data){
new Chart(two, {
  type: 'bar',
  data: {
    labels: data[1].years,    //accessing the years array from json file
    datasets: [{
      label: 'Citations per year',
      data: data[1].citation,    //accessing the citation array from json file
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
  maintainAspectRatio:false      //by this the graph maintain its ratio 
});
}





