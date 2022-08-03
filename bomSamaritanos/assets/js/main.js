    document.addEventListener("mousemove", parallax);
    function parallax(e){
      document.querySelectorAll(".object").forEach(function(move){

        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value) / 250;
        var y = (e.clientY * moving_value) / 250;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
      });
    }
	

var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false
})



google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Anos', 'Volntários', 'Projetos' , 'Doações'],
          ['2018-2',  1        ,  1         ,  0        ],
          ['2019-1',  5        ,  1         ,  0        ],
          ['2019-2',  47       ,  2         ,  5        ],
          ['2020-1',  60       ,  2         ,  20       ]
        ]);

        var options = {
          vAxis: {minValue: 0},
          lineWidth: 5,
          series: {
            0: { color: '#0ab4af' },
            1: { color: '#db9902' },
            2: { color: '#1464e9' },
          }
        };

        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }