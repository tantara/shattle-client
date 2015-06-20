angular.module('starter.controllers', [])

.controller('BookmarkCtrl', function($scope, Buses) {

  $scope.buses = Buses.bookmarks();
})

.controller('BusesCtrl', function($scope, Buses) {
  $scope.buses = Buses.all();
})

.controller('BusDetailCtrl', function($scope, $stateParams, Buses, $ionicSlideBoxDelegate) {
  $scope.tab = 1;
  $scope.bus = Buses.get($stateParams.busId);
  $scope.isBookmarked = Buses.isBookmarked($stateParams.busId);

  $scope.tabChanged = function(idx) {
    $scope.tab = idx;
  }

  $scope.bookmark = function() {
    if($scope.isBookmarked) {
      Buses.unbookmark($scope.bus.id);
      $scope.isBookmarked = false;
    } else {
      Buses.bookmark($scope.bus.id);
      $scope.isBookmarked = true;
    }
  }
})

.controller('StationsCtrl', function($scope, Stations, $ionicLoading) {
  $scope.showLoading = function() {
    $ionicLoading.show({
      template: '로딩중...'
    });
  }

  $scope.stations = Stations.all();
})

.controller('NearCtrl', function($scope, Stations, $ionicLoading) {
  $scope.stations = Stations.near();

  $scope.mapCreated = function(map) {
    console.log('map');
    console.log(map);
    $scope.map = map;
  };

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

.controller('MoreCtrl', function($scope) {})

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
