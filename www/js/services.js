angular.module('starter.services', [])

.factory('Buses', function() {

  return {
    bookmarks: function() {
      var bookmarks = JSON.parse(window.localStorage['bus'] || '[]');
      console.log("bookmark: " + bookmarks);
      return bookmarks;
    },
    bookmark: function(bus) {
      var bookmarks = JSON.parse(window.localStorage['bus'] || '[]');
      bookmarks.push(bus);
      window.localStorage['bus'] = JSON.stringify(bookmarks);
      return;
    },
    unbookmark: function(busId) {
      var bookmarks = JSON.parse(window.localStorage['bus'] || '[]');
      for (var i = 0; i < bookmarks.length; i++) {
        if (bookmarks[i].id === parseInt(busId)) {
           bookmarks.splice(i, 1);
        }
      }
      window.localStorage['bus'] = JSON.stringify(bookmarks);
      return;
    },
    isBookmarked: function(busId) {
      var bookmarks = JSON.parse(window.localStorage['bus'] || '[]');
      for (var i = 0; i < bookmarks.length; i++) {
        if (bookmarks[i].id === parseInt(busId)) {
          return true;
        }
      }
      return false;
    }
  };
})

.factory('Stations', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var stations = [];

  return {
    near: function() {
      return stations;
    },
    all: function() {
      return stations;
    },
    get: function(stationId) {
      for (var i = 0; i < stations.length; i++) {
        if (stations[i].id === parseInt(stationId)) {
          return stations[i];
        }
      }
      return null;
    }
  };
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  },{
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
