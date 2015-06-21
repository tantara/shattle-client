angular.module('starter.controllers', [])

.controller('BookmarkCtrl', function($scope, Buses) {

  $scope.buses = Buses.bookmarks();

  // always fire
  try{
    FB.XFBML.parse(); 
  }catch(ex){}
})

.controller('BusesCtrl', function($scope, Buses, $http) {
  $scope.buses = [];//Buses.all();

  $scope.filterName = ""

  $scope.busCount = {
    ss: 0,
    si: 0,
    pbcg: 0,
    snv: 0
  }

  $scope.setFilterName = function(name) {
    if($scope.filterName == name) {
      $scope.filterName = "";
    } else {
      $scope.filterName = name;
    }
  }

  $scope.filterByType = function(bus) {
    if($scope.filterName.length == 0) return 1;
    else return ($scope.filterName.indexOf(bus.busType) >= 0);
  }

  $http.get('http://snubus.kr/api/buses').success(function(data) {
    $scope.buses = data;

    for(var i = 0; i < $scope.buses.length; i++) {
      var bus = $scope.buses[i]; 

      if($scope.busCount[bus.busType] == null) {
        $scope.busCount[bus.busType] = 0;
      }
      $scope.busCount[bus.busType] += 1;
    }

    $scope.busCount['pbcg'] = $scope.busCount['pb'] + $scope.busCount['cg'];
    $scope.busCount['snv'] = $scope.busCount['sn'] + $scope.busCount['v'];

    console.log($scope.busCount);
  });
})

.controller('BusDetailCtrl', function($scope, $stateParams, Buses, $ionicSlideBoxDelegate, $ionicModal, $ionicLoading, $http, $timeout) {
  $scope.tab = 1;
  $scope.bus = {};
  $http.get('http://snubus.kr/api/buses/' + $stateParams.busId).success(function(data) {
    $scope.bus = data;
  });
  $scope.isBookmarked = Buses.isBookmarked($stateParams.busId);

  $ionicModal.fromTemplateUrl('modal.html', function($ionicModal) {
    $scope.modal = $ionicModal;
  }, {
    // Use our scope for the scope of the modal to keep it simple
    scope: $scope,
    // The animation we want to use for the modal entrance
    animation: 'slide-in-up'
  });  

  $scope.mapCreated = function(map) {
    $scope.map = map;
  };

  function setLines(map, points) {
    var flightPlanCoordinates = [];
    for(var i = 0; i < points.length; i++) {
      flightPlanCoordinates.push(new google.maps.LatLng(points[i].lat, points[i].lng));
    }

    var flightPath = new google.maps.Polyline({
      path: flightPlanCoordinates,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2

    });

    flightPath.setMap($scope.map);
  }

  function setMarkers(map, stations) {
    var marker, i;
    var infowindow = new google.maps.InfoWindow();

    for (i = 0; i < stations.length; i++) {
      var station = stations[i];
      var myLatLng = new google.maps.LatLng(station.lat, station.lng);
      marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        //icon: 'http://147.47.106.240' + beach[4],
        //zIndex: beach[3]
      });
      //attachSecretMessage(marker,i);
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          var station = stations[i];
          var contentString = "<h3>" + station.name + "</h3><p>" + station.description + "</p>";
          infowindow.setContent(contentString);
          infowindow.open(map, marker);
        }
      })(marker, i));
    } 
  }

  $scope.centerOnMe = function () {
    $scope.map.setCenter(new google.maps.LatLng($scope.bus.stations[0].lat, $scope.bus.stations[0].lng));
    return;
    console.log("Centering");
    if (!$scope.map) {
      return;
    }

    $ionicLoading.show({
      content: '위치 얻는중',
      showBackdrop: false
    });

    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log('Got pos', pos);
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      $ionicLoading.hide();

    }, function (error) {
      alert('Unable to get location: ' + error.message);

    });
  };

  $scope.showMap = function() {
    setMarkers($scope.map, $scope.bus.stations);
    setLines($scope.map, $scope.bus.stations);
    $scope.modal.show();
    $timeout(function() {
      $scope.map.setCenter(new google.maps.LatLng($scope.bus.stations[0].lat, $scope.bus.stations[0].lng));
      console.log(new google.maps.LatLng($scope.bus.stations[0].lat, $scope.bus.stations[0].lng));
    }, 300);
  }

  $scope.tabChanged = function(idx) {
    $scope.tab = idx;
  }

  $scope.bookmark = function() {
    if($scope.isBookmarked) {
      Buses.unbookmark($scope.bus.id);
      $scope.isBookmarked = false;
    } else {
      Buses.bookmark($scope.bus);
      $scope.isBookmarked = true;
    }
  }
})

.controller('StationsCtrl', function($scope, Stations, $ionicLoading, $http) {
  $scope.showLoading = function() {
    $ionicLoading.show({
      template: '로딩중...'
    });
  }

  $scope.hideLoading = function() {
    $ionicLoading.hide();
  }

  $scope.search = {query: ""}

  $scope.submit = function() {
    $scope.showLoading()
    
    $http.get('http://snubus.kr/api/stations/search?q=' + $scope.search.query).success(function(data) {
      $scope.stations = data;
      $scope.hideLoading()
    });
  }

  $scope.stations = [];
})

.controller('StationDetailCtrl', function($scope, $stateParams, $ionicSlideBoxDelegate, $ionicModal, $ionicLoading, $http, $timeout) {
  $scope.station = {};
  $http.get('http://snubus.kr/api/stations/' + $stateParams.stationId).success(function(data) {
    $scope.station = data;
  });
})

.controller('NearCtrl', function($scope, Stations, $ionicLoading, $http) {
  $scope.stations = [];//Stations.near();

  $http.get('http://snubus.kr/api/stations').success(function(data) {
    $scope.stations = data;
    setMarkers($scope.map, $scope.stations);
  });

  $scope.mapCreated = function(map) {
    $scope.map = map;
  };

  function setMarkers(map, stations) {
    console.log(map);
    console.log(stations);
    console.log('setMarkers');
    var marker, i;
    var infowindow = new google.maps.InfoWindow();

    for (i = 0; i < stations.length; i++) {
      var station = stations[i];
      var myLatLng = new google.maps.LatLng(station.lat, station.lng);
      marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        //icon: 'http://147.47.106.240' + beach[4],
      });
      //attachSecretMessage(marker,i);

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          var station = stations[i];
          var contentString = "<h3>" + station.name + "</h3><p>" + station.description + "</p>";
          infowindow.setContent(contentString);
          infowindow.open(map, marker);
        }
      })(marker, i));
    } 
  }

  $scope.centerOnMe = function () {
    console.log("Centering");
    if (!$scope.map) {
      return;
    }

    $ionicLoading.show({
      content: '위치 얻는중',
      showBackdrop: false
    });

    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log('Got pos', pos);
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      $ionicLoading.hide();

    }, function (error) {
      alert('Unable to get location: ' + error.message);

    });
  };
})

.controller('MoreCtrl', function($scope) {

  $scope.notices = [{
    profile_url: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xta1/v/t1.0-1/c40.0.160.160/p160x160/11062680_1632568290322668_8760645719298181241_n.jpg?oh=e6a630952abf0ccc9fb75a1383b7b867&oe=55EAE7DA&__gda__=1445593611_16e061a28680bbf2e360a68070d916b2',
    user_name: '@샤틀',
    created_at: '2015년 6월 21일',
    content_url: 'https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xfa1/t31.0-8/c0.115.851.315/p851x315/1501560_1632575860321911_6161642205487319665_o.jpg',
    content: '서울대학교 버스 알림 [샤틀] 출시!'
  }];

  $scope.help = [];

})

// old

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
