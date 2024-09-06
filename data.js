//in this we fetching the data from json and putting them into the html by the help of id selector

fetch('data.json')           
    .then(response => response.json())  // Parse the JSON data
    .then(data => {
        // Display the data on the HTML page
        document.getElementById('aaa').textContent = `${data[0].element.citationall}`;
        document.getElementById('bbb').textContent = `${data[0].element.citationsince}`;
        document.getElementById('ccc').textContent = `${data[0].element.hindex}`;
        document.getElementById('ddd').textContent = `${data[0].element.hindex19}`;
        document.getElementById('eee').textContent = `${data[0].element.i10}`;
        document.getElementById('fff').textContent = `${data[0].element.i1019}`;
        document.getElementById('ggg').textContent = `${data[1].element.citationall}`;
        document.getElementById('hhh').textContent = `${data[1].element.citationsince}`;
        document.getElementById('iii').textContent = `${data[1].element.hindex}`;
        document.getElementById('jjj').textContent = `${data[1].element.hindex19}`;
        document.getElementById('kkk').textContent = `${data[1].element.i10}`;
        document.getElementById('lll').textContent = `${data[1].element.i1019}`;
        document.getElementById('mmm').textContent = `${data[2].element.citationall}`;
        document.getElementById('nnn').textContent = `${data[2].element.citationsince}`;
        document.getElementById('ooo').textContent = `${data[2].element.hindex}`;
        document.getElementById('ppp').textContent = `${data[2].element.hindex19}`;
        document.getElementById('qqq').textContent = `${data[2].element.i10}`;
        document.getElementById('rrr').textContent = `${data[2].element.i1019}`;   
    })
    .catch(error => {
        console.error('Error fetching the JSON data:', error);
    });

    document.querySelector(".hamburger").addEventListener("click", () => {

        document.querySelector(".nav1").style.left = "0";
        document.querySelector(".nav1").style.position = "fixed";
      })


      document.querySelector(".cross").addEventListener("click", () => {

        document.querySelector(".nav1").style.left = "-120%"
    })
