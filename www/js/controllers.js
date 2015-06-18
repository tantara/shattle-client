angular.module('starter.controllers', [])

.controller('BookmarkCtrl', function($scope, Buses) {

  $scope.buses = Buses.bookmark();
})

.controller('BusesCtrl', function($scope, Buses) {
  $scope.buses = Buses.all();
})

.controller('BusDetailCtrl', function($scope, $stateParams, Buses) {
  $scope.bus = Buses.get($stateParams.busId);
})

.controller('StationsCtrl', function($scope, Stations, $ionicLoading) {
  $ionicLoading.show({
    template: '로딩중...'
  });
  $scope.stations = Stations.all();
})

.controller('NearCtrl', function($scope, Stations) {
  $scope.stations = Stations.near();
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
