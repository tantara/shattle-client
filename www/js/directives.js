angular.module('starter.directives', [])

.directive('map', function() {
  return {
    restrict: 'E',
    scope: {
      onCreate: '&'
    },
    link: function ($scope, $element, $attr) {
      function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(37.4580767,126.9536907),
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map($element[0], mapOptions);

 var stations = [
      
        
        ['301동 공학관', 37.451325, 126.952697, 1, "/resources/images/map/10A.png", "1001", "10A"]
      
        ,
        ['301동 공학관', 37.449935, 126.951849, 2, "/resources/images/map/10B.png", "1000", "10B"]
      
        ,
        ['302동 공학관', 37.4487516666667, 126.952107, 3, "/resources/images/map/9A.png", "901", "9A"]
      
        ,
        ['302동 공학관', 37.4488616666667, 126.951892, 4, "/resources/images/map/9B.png", "900", "9B"]
      
        ,
        ['가족생활동', 37.4665466666667, 126.95781333333335, 5, "/resources/images/map/21A.png", "2101", "21A"]
      
        ,
        ['가족생활동', 37.46641, 126.95766499999999, 6, "/resources/images/map/21B.png", "2100", "21B"]
      
        ,
        ['건설환경종합연구소', 37.4472016666667, 126.949911666667, 7, "/resources/images/map/8-1A.png", "811", "8-1A"]
      
        ,
        ['건설환경종합연구소', 37.447146, 126.950648, 8, "/resources/images/map/8-1B.png", "810", "8-1B"]
      
        ,
        ['경영대', 37.4660483333333, 126.952165, 9, "/resources/images/map/18A.png", "1801", "18A"]
      
        ,
        ['경영대', 37.4659383333333, 126.951145, 10, "/resources/images/map/18B.png", "1800", "18B"]
      
        ,
        ['공대입구', 37.454995, 126.94985999999999, 11, "/resources/images/map/6A.png", "601", "6A"]
      
        ,
        ['공대입구', 37.45539, 126.94973999999999, 12, "/resources/images/map/6B.png", "600", "6B"]
      
        ,
        ['관악사,기숙사구관', 37.4621283333333, 126.95745, 13, "/resources/images/map/19A.png", "1901", "19A"]
      
        ,
        ['관악사,기숙사신관', 37.46324, 126.957766, 14, "/resources/images/map/19B.png", "1900", "19B"]
      
        ,
        ['교수회관입구', 37.45601, 126.95526666666667, 15, "/resources/images/map/13A.png", "1301", "13A"]
      
        ,
        ['국제대학원', 37.4641416666667, 126.95528166666666, 16, "/resources/images/map/16A.png", "1601", "16A"]
      
        ,
        ['국제대학원', 37.46373, 126.95499, 17, "/resources/images/map/16B.png", "1600", "16B"]
      
        ,
        ['기숙사 구관', 37.461842, 126.956651, 18, "/resources/images/map/19-1B.png", "1910", "19-1B"]
      
        ,
        ['기숙사삼거리', 37.46076, 126.95671, 19, "/resources/images/map/15A.png", "1501", "15A"]
      
        ,
        ['기숙사삼거리', 37.4605533333333, 126.956635, 20, "/resources/images/map/15B.png", "1500", "15B"]
      
        ,
        ['기초과학공동기기원', 37.455205, 126.954387, 21, "/resources/images/map/12B.png", "1200", "12B"]
      
        ,
        ['노천강당', 37.458836, 126.955385, 22, "/resources/images/map/14A.png", "1401", "14A"]
      
        ,
        ['농생대', 37.4571433333333, 126.94920333333333, 23, "/resources/images/map/5A.png", "501", "5A"]
      
        ,
        ['농생대', 37.4571633333333, 126.94926666666667, 24, "/resources/images/map/5B.png", "500", "5B"]
      
        ,
        ['대학동(승차)', 37.4705383333333, 126.94072166666668, 25, "/resources/images/map/25A.png", "2501", "25A"]
      
        ,
        ['대학동(하차)', 37.47095, 126.94139166666668, 26, "/resources/images/map/25B.png", "2500", "25B"]
      
        ,
        ['대학동-서울대입구역', 37.4787833333333, 126.95184166666668, 27, "/resources/images/map/27B.png", "2700", "27B"]
      
        ,
        ['문화관입구', 37.461302, 126.949575, 28, "/resources/images/map/3B.png", "300", "3B"]
      
        ,
        ['법대입구', 37.4628116666667, 126.94904833333334, 29, "/resources/images/map/2A.png", "201", "2A"]
      
        ,
        ['법대입구', 37.46329, 126.94905666666666, 30, "/resources/images/map/2B.png", "200", "2B"]
      
        ,
        ['북션', 37.470825, 126.93628166666667, 31, "/resources/images/map/26B.png", "2600", "26B"]
      
        ,
        ['서울대 후문', 37.4634416666667, 126.958085, 32, "/resources/images/map/20A.png", "2001", "20A"]
      
        ,
        ['서울대 후문', 37.4650616666667, 126.95778166666666, 33, "/resources/images/map/20B.png", "2000", "20B"]
      
        ,
        ['서울대본부', 37.46086, 126.950347, 34, "/resources/images/map/4-1B.png", "410", "4-1B"]
      
        ,
        ['서울대입구역(승차)', 37.4801233333333, 126.95248666666666, 35, "/resources/images/map/24A.png", "2401", "24A"]
      
        ,
        ['서울대입구역(하차)', 37.4793866666667, 126.95245500000001, 36, "/resources/images/map/24B.png", "2400", "24B"]
      
        ,
        ['서울대학교', 37.466918, 126.948019, 37, "/resources/images/map/28A.png", "2801", "28A"]
      
        ,
        ['서울대학교', 37.467169, 126.949242, 38, "/resources/images/map/29B.png", "2900", "29B"]
      
        ,
        ['서울대학교', 37.467075, 126.949022, 39, "/resources/images/map/30B.png", "3000", "30B"]
      
        ,
        ['수의대입구', 37.4659533333333, 126.95477166666666, 40, "/resources/images/map/17B.png", "1700", "17B"]
      
        ,
        ['신소재연구소', 37.4535166666667, 126.95018333333334, 41, "/resources/images/map/7A.png", "701", "7A"]
      
        ,
        ['에너지자원연구소', 37.4535416666667, 126.952148, 42, "/resources/images/map/7-1A.png", "711", "7-1A"]
      
        ,
        ['에너지자원연구소', 37.45747333333334, 126.95214833333333, 43, "/resources/images/map/7-1B.png", "710", "7-1B"]
      
        ,
        ['유전공학연구소', 37.4540933333333, 126.953909, 44, "/resources/images/map/11A.png", "1101", "11A"]
      
        ,
        ['유전공학연구소', 37.4537833333333, 126.953276, 45, "/resources/images/map/11B.png", "1100", "11B"]
      
        ,
        ['자연대500동(행정관)', 37.460225, 126.948502, 46, "/resources/images/map/4A.png", "401", "4A"]
      
        ,
        ['자연대500동(행정관)', 37.4602116666667, 126.949124, 47, "/resources/images/map/4B.png", "400", "4B"]
      
        ,
        ['정문', 37.465585, 126.94837000000001, 48, "/resources/images/map/1A.png", "101", "1A"]
      
        ,
        ['정문', 37.46538, 126.94859999999998, 49, "/resources/images/map/1B.png", "100", "1B"]
      
        ,
        ['제2파워플랜트', 37.4475883333333, 126.949798333333, 50, "/resources/images/map/8A.png", "801", "8A"]
      
        ,
        ['종합교육연구동', 37.4661266666667, 126.954635, 51, "/resources/images/map/17A.png", "1701", "17A"]
      
        ,
        ['호암교수회관', 37.4678433333333, 126.95825166666667, 52, "/resources/images/map/23A.png", "2301", "23A"]
      
        ,
        ['호암교수회관', 37.46825, 126.957793, 53, "/resources/images/map/22B.png", "2200", "22B"]
      
        ,
        ['bk국제관', 37.46522, 126.95791666666668, 54, "/resources/images/map/20-1A.png", "2011", "20-1A"]
      
    ];

        function setMarkers(map, locations) {
          for (var i = 0; i < locations.length; i++) {
            var beach = locations[i];
            var myLatLng = new google.maps.LatLng(beach[1], beach[2]);
            var marker = new google.maps.Marker({
              position: myLatLng,
              map: map,
              icon: 'http://147.47.106.240' + beach[4],
              title: beach[0]+'('+beach[6]+')',
              text:beach[5],
              zIndex: beach[3]
            });
            //attachSecretMessage(marker,i);
          } 
        }
        setMarkers(map, stations)

        $scope.onCreate({map: map});

        // Stop the side bar from dragging when mousedown/tapdown on the map
        google.maps.event.addDomListener($element[0], 'mousedown', function (e) {
          e.preventDefault();
          return false;
        });
      }

      if (document.readyState === "complete") {
        initialize();
      } else {
        google.maps.event.addDomListener(window, 'load', initialize);
      }
    }
  }
});
