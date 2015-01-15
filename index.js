
        google.load('visualization', '1', {
            'packages': ['geochart']
        });
        google.setOnLoadCallback(drawMarkersMap);

        function drawMarkersMap() {
            var data = google.visualization.arrayToDataTable([
        ['City', 'Awesomeness'],
        ['Worst', 0],
        ['Hakone', 8],
        ['Hiroshima', 7],
        ['Kyoto', 8],
        ['Osaka', 9],
        ['Tokyo', 10],
        ['Best', 10],


      ]);

            var options = {
                region: 'JP',
                displayMode: 'text',
                enable: true,
                zoomFactor: 20,
                backgroundColor: '#B3E5FC',
                datalessRegionColor: '#DCEDC8',
                colorAxis: {
                    colors: ['yellow', 'red']
                }
            };

            var chart = new google.visualization.GeoChart(document.getElementById('japan_map'));
            chart.draw(data, options);
        };

        $('.cities').click(function () {
            $('.level2').css('visibility','visible');
        });