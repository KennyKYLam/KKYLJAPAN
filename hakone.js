
        //Map and Markers
        var locations = [
      ['Tokyo Skytree - 東京スカイツリー', 35.710063, 139.8107, 1, 'http://en.wikipedia.org/wiki/Tokyo_Skytree'],
      ['Tsukiji Fish Market - 築地市場', 35.665486, 139.770667, 2, 'http://en.wikipedia.org/wiki/Tsukiji_fish_market'],
      ['Tokyo DisneyLand - 東京ディズニーランド', 35.632896, 139.880394, 3, 'http://en.wikipedia.org/wiki/Tokyo_Disneyland'],
      ['Sensō-ji - 浅草寺', 35.7146256, 139.7968535, 4, 'http://en.wikipedia.org/wiki/Sensō-ji'],
      ['Ueno Park - 上野公園', 35.7140821,139.7728707, 4, 'http://en.wikipedia.org/wiki/Ueno_Park'],

    ];

        var map = new google.maps.Map(document.getElementById('hakone_map'), {
            zoom: 10,
            center: new google.maps.LatLng(35.2324915,139.0475768),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var infowindow = new google.maps.InfoWindow();

        var marker, i;

        for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map
            });

            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    infowindow.setContent('<div class="markerinfo" >' + locations[i][0] + '<br>' + '<a href="' + locations[i][4] + '" target="blank">Learn more</a>' + '</div>');

                    infowindow.open(map, marker);
                }
            })(marker, i));
        }
         //Hover for preview images
        var previewimgsrc1 = 'images/hakone_jinjashrine.JPG';
        var previewimgsrc2 = 'images/hakone_lake.JPG';
        var previewimgsrc3 = 'images/hakone_hotel.JPG';
        var previewimgsrc4 = 'images/hakone_ropeway.JPG';
        var previewimgsrc5 = 'images/hakone_mountain.JPG';
        $(".site_list li").hover(
            function () {
                var previewlink = $(this).attr("id");
                $(".site_list li a").css('color','black');
                $('#'+ previewlink +' a').css('color','#F44336');
                console.log(previewlink);
                var previewimgnum = previewlink.replace("previewlink", "previewimgsrc");
                console.log(previewimgnum);
                $(".preview_img").attr('src', window[previewimgnum]);
            }
        );
