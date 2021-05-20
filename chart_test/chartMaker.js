//광역본부별 만족도&활용도 그래프

var ctx = document.getElementById('test1');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive : false,
        scales: {
            y: {
                beginAtZero: true,
                ticks : {
                    font : {
                        size : 50,
                    }
                }
            },
            x : {
                beginAtZero: true,
                ticks : {
                    font : {
                        size : 50,
                    }
                }
            },
        },
    },
});





//직무별 만족도&활용도 그래프
        var ctx2 = document.getElementById("test2").getContext("2d");
        var chart2 = new Chart(ctx2, {
          // The type of chart we want to create
          type: "bar",
          // The data for our dataset
          data: {
            labels: [
              "설계",
              "감리",
              "장비개통",
              "인수시험",
              "회선구성",
              "DB현행화",
              "시설감시",
              "시설점검",
              "원격제어",
              "현장출동",
              "품질관리",
              "기술지원",
            ],
            datasets: [
              {
                label: "만족도",
                backgroundColor: ["rgba(255, 206, 86, 0.5)"],
                borderColor: [
                  //"rgb(255, 99, 132,1.5)",
                  "rgba(54, 162, 235, 1.5)",
                  //"rgba(255, 206, 86, 1.5)",
                  //"rgba(75, 192, 192, 1.5)",
                  //"rgba(153, 102, 255, 1.5)",
                  //"rgba(255, 159, 64, 1.5)",
                ],
                data: [4.5, 3.5, 2, 1, 5, 4,2,2,3,5,4.3,2.3],
              },
              {
                label: "활용도",
                backgroundColor: [
                  //"rgba(255, 99, 132, 0.5)",
                  //"rgba(54, 162, 235, 0.5)",
                  //"rgba(255, 206, 86, 0.5)",
                  "rgba(75, 192, 192, 0.5)",
                  //"rgba(153, 102, 255, 0.5)",
                  //"rgba(255, 159, 64, 0.5)",
                ],
                borderColor: [
                  //"rgb(255, 99, 132,1.5)",
                  //"rgba(54, 162, 235, 1.5)",
                  //"rgba(255, 206, 86, 1.5)",
                  "rgba(75, 192, 192, 1.5)",
                  //"rgba(153, 102, 255, 1.5)",
                  //"rgba(255, 159, 64, 1.5)",
                ],
                data: [4, 3, 3, 2, 5, 4.5,1,1.5,2.4,3,4,4.5],
              },
            ],
          },
        });


        //test 만족도&활용도 그래프
        var ctx3 = document.getElementById("test3").getContext("2d");

        Chart.defaults.font.size = 16;
        let chart3 = new Chart(ctx3, {
            type: 'line',
            data: {
              labels: [
                "설계",
                "감리",
                "장비개통",
                "인수시험",
                "회선구성",
                "DB현행화",
                "시설감시",
                "시설점검",
                "원격제어",
                "현장출동",
                "품질관리",
                "기술지원",
              ],
              datasets: [
                {
                  label: "만족도",
                  backgroundColor: ["rgba(255, 206, 86, 0.5)"],
                  borderColor: [
                    //"rgb(255, 99, 132,1.5)",
                    "rgba(54, 162, 235, 1.5)",
                    //"rgba(255, 206, 86, 1.5)",
                    //"rgba(75, 192, 192, 1.5)",
                    //"rgba(153, 102, 255, 1.5)",
                    //"rgba(255, 159, 64, 1.5)",
                  ],
                  data: [4.5, 3.5, 2, 1, 5, 4,2,2,3,5,4.3,2.3],
                },
                {
                  label: "활용도",
                  backgroundColor: [
                    //"rgba(255, 99, 132, 0.5)",
                    //"rgba(54, 162, 235, 0.5)",
                    //"rgba(255, 206, 86, 0.5)",
                    "rgba(75, 192, 192, 0.5)",
                    //"rgba(153, 102, 255, 0.5)",
                    //"rgba(255, 159, 64, 0.5)",
                  ],
                  borderColor: [
                    //"rgb(255, 99, 132,1.5)",
                    //"rgba(54, 162, 235, 1.5)",
                    //"rgba(255, 206, 86, 1.5)",
                    "rgba(75, 192, 192, 1.5)",
                    //"rgba(153, 102, 255, 1.5)",
                    //"rgba(255, 159, 64, 1.5)",
                  ],
                  data: [4, 3, 3, 2, 5, 4.5,1,1.5,2.4,3,4,4.5],
                },
              ],
            },
            options: {
                plugins: {
                    legend: {
                        labels: {
                            // This more specific font property overrides the global property
                            font: {
                                size: 100
                            }
                        }
                    }
                }
            }
        });