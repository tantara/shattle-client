// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'starter.directives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:
  
  .state('tab.bookmark', {
      url: '/bookmark',
      cache: false,
      views: {
        'tab-bookmark': {
          templateUrl: 'templates/tab-bookmark.html',
          controller: 'BookmarkCtrl'
        }
      }
    })
    .state('tab.bookmark-detail', {
      url: '/bookmark/:busId',
      cache: false,
      views: {
        'tab-bookmark': {
          templateUrl: 'templates/bus-detail.html',
          controller: 'BusDetailCtrl'
        }
      }
    })

  .state('tab.buses', {
      url: '/buses',
      views: {
        'tab-buses': {
          templateUrl: 'templates/tab-buses.html',
          controller: 'BusesCtrl'
        }
      }
    })
    .state('tab.bus-detail', {
      url: '/buses/:busId',
      cache: false,
      views: {
        'tab-buses': {
          templateUrl: 'templates/bus-detail.html',
          controller: 'BusDetailCtrl'
        }
      }
    })

  .state('tab.stations', {
    url: '/stations',
    views: {
      'tab-stations': {
        templateUrl: 'templates/tab-stations.html',
        controller: 'StationsCtrl'
      }
    }
  })

  .state('tab.near', {
    url: '/near',
    views: {
      'tab-near': {
        templateUrl: 'templates/tab-near.html',
        controller: 'NearCtrl'
      }
    }
  })

  .state('tab.more', {
    url: '/more',
    views: {
      'tab-more': {
        templateUrl: 'templates/tab-more.html',
        controller: 'MoreCtrl'
      }
    }
  })
  .state('tab.info', {
    url: '/info',
    views: {
      'tab-more': {
        templateUrl: 'templates/info.html',
        controller: 'MoreCtrl'
      }
    }
  })
  .state('tab.help', {
    url: '/help',
    views: {
      'tab-more': {
        templateUrl: 'templates/help.html',
        controller: 'MoreCtrl'
      }
    }
  })
  
  // old

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/bookmark');

});
