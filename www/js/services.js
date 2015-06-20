angular.module('starter.services', [])

.factory('Buses', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var buses = [{
    id: 0,
    name: '인천-부천',
    description: '광역셔틀',
    imgType: 'ss',
    info: {
      dep: '캠퍼스타운역',
      dest: '서울대',
      interval: '정보없음',
      times: '7:00, 10:00'
    },
    stations: [
      {
        name: '캠퍼스타운역',
        description: '7:00, 10:00'
      }, {
        name: '원인재역',
        description: '7:10, 10:10'
      }, {
        name: '인천터미널역',
        description: '7:20, 10:20'
      }, {
        name: '주안역',
        description: '7:35, 10:35'
      }, {
        name: '부평역',
        description: '7:50, 10:50'
      }, {
        name: '송내역',
        description: '8:00, 11:00'
      }, {
        name: '서울대',
        description: '8:40, 11:40'
      }
    ]
  }, {
    id: 1,
    name: '용인-성남',
    description: '광역셔틀',
    imgType: 'ss',
    info: {
      dep: '신갈역',
      dest: '서울대',
      interval: '정보없음',
      times: '7:00, 10:00'
    },
    stations: [
      {
        name: '신갈역',
        description: '7:00, 10:00'
      }, {
        name: '보정역',
        description: '7:10, 10:10'
      }, {
        name: '죽전역',
        description: '7:15, 10:15'
      }, {
        name: '정자역',
        description: '7:20, 10:20'
      }, {
        name: '판교역',
        description: '7:35, 10:35'
      }, {
        name: '양재역',
        description: '8:00, 11:00'
      }, {
        name: '서울대',
        description: '8:40, 11:40'
      }
    ]
  },{
    id: 2,
    name: '목동',
    description: '광역셔틀',
    imgType: 'ss',
    info: {
      dep: '신목동역',
      dest: '서울대',
      interval: '정보없음',
      times: '7:00, 10:00'
    },
    stations: [
      {
        name: '신목동역',
        description: '7:00, 10:00'
      }, {
        name: '이대목동병원',
        description: '7:05, 10:05'
      }, {
        name: '오목교역',
        description: '7:15, 10:15'
      }, {
        name: '목동역',
        description: '7:20, 10:20'
      }, {
        name: '양천구청역',
        description: '7:30, 10:30'
      }, {
        name: '대림역',
        description: '7:50, 10:50'
      }, {
        name: '서울대',
        description: '8:40, 11:40'
      }
    ]
  }, {
    id: 3,
    name: '잠실',
    description: '광역셔틀',
    imgType: 'ss',
    info: {
      dep: '잠실역',
      dest: '서울대',
      interval: '정보없음',
      times: '7:00, 10:00'
    },
    stations: [
      {
        name: '잠실역',
        description: '7:00, 10:00'
      }, {
        name: '종합운동장역',
        description: '7:10, 10:10'
      }, {
        name: '삼성역',
        description: '7:20, 10:20'
      }, {
        name: '선릉역',
        description: '7:35, 10:35'
      }, {
        name: '강남역',
        description: '7:50, 10:50'
      }, {
        name: '서울대',
        description: '8:40, 11:40'
      }
    ]
  }, {
    id: 4,
    name: '노원&도봉',
    description: '광역셔틀',
    imgType: 'ss',
    info: {
      dep: '노원역',
      dest: '서울대',
      interval: '정보없음',
      times: '7:00, 10:00'
    },
    stations: [
      {
        name: '노원역',
        description: '7:00, 10:00'
      }, {
        name: '쌍문역',
        description: '7:10, 10:10'
      }, {
        name: '미아사거리역',
        description: '7:30, 10:30'
      }, {
        name: '고려대역',
        description: '7:40, 10:40'
      }, {
        name: '왕십리역',
        description: '8:00, 11:00'
      }, {
        name: '한양대역',
        description: '8:05, 11:05'
      }, {
        name: '서울대',
        description: '8:40, 11:40'
      }
    ]
  }, {
    id: 5,
    name: '수원-의왕-안양',
    description: '광역셔틀',
    imgType: 'ss',
    info: {
      dep: '수원역',
      dest: '서울대',
      interval: '정보없음',
      times: '7:00, 10:00'
    },
    stations: [
      {
        name: '수원역',
        description: '7:00, 10:00'
      }, {
        name: '화서역',
        description: '7:10, 10:10'
      }, {
        name: '성균관대역',
        description: '7:20, 10:20'
      }, {
        name: '군포역',
        description: '7:40, 10:40'
      }, {
        name: '범계역',
        description: '8:00, 11:00'
      }, {
        name: '안양역',
        description: '8:10, 11:10'
      }, {
        name: '서울대',
        description: '8:40, 11:40'
      }
    ]
  }, {
    id: 6,
    name: '본부-입구역',
    description: '통학셔틀',
    imgType: 'ss',
    info: {
      dep: '서울대본부 (4-1B)',
      dest: '서울대본부 (4-1B)',
      interval: '8:00 - 11:00 5분, 11:00 - 15:50 10분, 16:00 - 19:00 6분',
      times: '8:00~19:00'
    },
    stations: [
      {
        name: '서울대본부 (4-1B)',
        description: '정보없음'
      }, {
        name: '서울대입구역(하차) (24B)',
        description: '정보없음'
      }, {
        name: '서울대입구역(승차) (24A)',
        description: '정보없음'
      }, {
        name: '서울대본부 (4-1B)',
        description: '정보없음'
      }
    ]
  }, {
    id: 7,
    name: '본부-입구역(후문)',
    description: '통학셔틀',
    imgType: 'ss',
    info: {
      dep: '서울대본부 (4-1B)',
      dest: '서울대본부 (4-1B)',
      interval: '정보없음',
      times: '정보없음'
    },
    stations: [
      {
        name: '서울대본부 (4-1B)',
        description: '정보없음'
      }, {
        name: '서울대입구역(승차) (24A)',
        description: '정보없음'
      }, {
        name: '서울대본부 (4-1B)',
        description: '정보없음'
      }
    ]
  }, {
    id: 8,
    name: '본부-대학동',
    description: '통학셔틀',
    imgType: 'ss',
    info: {
      dep: '서울대본부 (4-1B)',
      dest: '서울대본부 (4-1B)',
      interval: '8:00 - 11:00 5분, 11:00 - 15:50 10분, 16:00 - 19:00 7분',
      times: '8:00~19:00'
    },
    stations: [
      {
        name: '서울대본부 (4-1B)',
        description: '정보없음'
      }, {
        name: '대학동(하차) (25B)',
        description: '정보없음'
      }, {
        name: '대학동(승차) (25A)',
        description: '정보없음'
      }, {
        name: '서울대본부 (4-1B)',
        description: '정보없음'
      }
    ]
  }, {
    id: 9,
    name: '입구역-윗공대',
    description: '통학셔틀',
    imgType: 'ss',
    info: {
      dep: '302동 공학관 (9A)',
      dest: '302동 공학관 (9A)',
      interval: '정보없음',
      times: '정보없음'
    },
    stations: [
      {
        name: '302동 공학관 (9A)',
        description: '정보없음'
      }, {
        name: '301동 공학관 (10A)',
        description: '정보없음'
      }, {
        name: '유전공학연구소 (11A)',
        description: '정보없음'
      }, {
        name: '교수회관입구 (13A)',
        description: '정보없음'
      }, {
        name: '기숙사삼거리 (15A)',
        description: '정보없음'
      }, {
        name: '관악사,기숙사구관 (19A)',
        description: '정보없음'
      }, {
        name: '서울대 후문 (20A)',
        description: '정보없음'
      }, {
        name: 'bk국제관 (20-1A)',
        description: '정보없음'
      }, {
        name: '가족생활동 (21A)',
        description: '정보없음'
      }, {
        name: '서울대입구역(승차) (24A)',
        description: '정보없음'
      }, {
        name: '302동 공학관 (9A)',
        description: '정보없음'
      }
    ]
  }, {
    id: 10,
    name: '낙성대-윗공대',
    description: '통학셔틀',
    imgType: 'ss',
    info: {
      dep: '낙성대 두부마을',
      dest: '302동 공학관 (9A)',
      interval: '정보없음',
      times: '정보없음'
    },
    stations: [
    ]
  }, {
    id: 11,
    name: '교내',
    description: '순환셔틀',
    imgType: 'si',
    info: {
      dep: '정문 (1A)',
      dest: '정문 (1A)',
      interval: '8:00 - 10:00 6분, 10:00 - 18:00 9분',
      times: '8:00~18:00'
    },
    stations: [
      {
        name: '정문 (1A)',
        description: '정보없음'
      }, {
        name: '법대입구 (2A)',
        description: '정보없음'
      }, {
        name: '자연대500동(행정관) (4A)',
        description: '정보없음'
      }, {
        name: '농생대 (5A)',
        description: '정보없음'
      }, {
        name: '공대입구 (6A)',
        description: '정보없음'
      }, {
        name: '신소재연구소 (7A)',
        description: '정보없음'
      }, {
        name: '제2파워플랜트 (8A)',
        description: '정보없음'
      }, {
        name: '건설환경종합연구소 (8-1A)',
        description: '정보없음'
      }, {
        name: '302동 공학관 (9A)',
        description: '정보없음'
      }, {
        name: '301동 공학관 (10A)',
        description: '정보없음'
      }, {
        name: '유전공학연구소 (11A)',
        description: '정보없음'
      }, {
        name: '교수회관입구 (13A)',
        description: '정보없음'
      }, {
        name: '기숙사삼거리 (15A)',
        description: '정보없음'
      }, {
        name: '국제대학원 (16A)',
        description: '정보없음'
      }, {
        name: '종합교육연구동 (17A)',
        description: '정보없음'
      }, {
        name: '경영대 (18A)',
        description: '정보없음'
      }, {
        name: '정문 (1A)',
        description: '정보없음'
      }
    ]
  }, {
    id: 12,
    name: '교내(역방향)',
    description: '순환셔틀',
    imgType: 'si',
    info: {
      dep: '302동 공학관 (9A)',
      dest: '302동 공학관 (9A)',
      interval: '정보없음',
      times: '정보없음',
    },
    stations: [
      {
        name: '302동 공학관 (9A)',
        description: '정보없음'
      }, {
        name: '301동 공학관 (10A)',
        description: '정보없음'
      }, {
        name: '에너지자원연구소 (7-1A)',
        description: '정보없음'
      }, {
        name: '공대입구 (6B)',
        description: '정보없음'
      }, {
        name: '농생대 (5B)',
        description: '정보없음'
      }, {
        name: '자연대500동(행정관) (4B)',
        description: '정보없음'
      }, {
        name: '서울대본부 (4-1B)',
        description: '정보없음'
      }, {
        name: '법대입구 (2B)',
        description: '정보없음'
      }, {
        name: '정문 (1B)',
        description: '정보없음'
      }, {
        name: '경영대 (18B)',
        description: '정보없음'
      }, {
        name: '수의대입구 (17B)',
        description: '정보없음'
      }, {
        name: '국제대학원 (16B)',
        description: '정보없음'
      }, {
        name: '관악사,기숙사구관 (19A)',
        description: '정보없음'
      }, {
        name: '서울대 후문 (20A)',
        description: '정보없음'
      }, {
        name: 'bk국제관 (20-1A)',
        description: '정보없음'
      }, {
        name: '가족생활동 (21A)',
        description: '정보없음'
      }, {
        name: '호암교수회관 (23A)',
        description: '정보없음'
      }, {
        name: '가족생활동 (21B)',
        description: '정보없음'
      }, {
        name: '서울대 후문 (20B)',
        description: '정보없음'
      }, {
        name: '관악사,기숙사신관 (19B)',
        description: '정보없음'
      }, {
        name: '기숙사삼거리 (15B)',
        description: '정보없음'
      }, {
        name: '기초과학공동기기원 (12B)',
        description: '정보없음'
      }, {
        name: '유전공학연구소 (11B)',
        description: '정보없음'
      }, {
        name: '에너지자원연구소 (7-1A)',
        description: '정보없음'
      }, {
        name: '제2파워플랜트 (8A)',
        description: '정보없음'
      }, {
        name: '건설환경종합연구소 (8-1A)',
        description: '정보없음'
      }, {
        name: '302동 공학관 (9A)',
        description: '정보없음'
      }
    ]
  }, {
    id: 13,
    name: '본부-입구역',
    description: '심야셔틀',
    imgType: 'sn',
    info: {
      dep: '서울대본부 (4-1B)',
      dest: '서울대입구역(하차) (24B)',
      interval: '21:10 - 23:10 30분',
      times: '21:10~23:10',
    },
    stations: [
      {
        name: '서울대본부 (4-1B)',
        description: '정보없음'
      }, {
        name: '대학동(승차) (24B)',
        description: '정보없음'
      }
    ]
  }, {
    id: 14,
    name: '본부-대학동-입구역',
    description: '심야셔틀',
    imgType: 'sn',
    info: {
      dep: '서울대본부 (4-1B)',
      dest: '대학동-서울대입구역 (27B)',
      interval: '정보없음',
      times: '정보없음'
    },
    stations: [
      {
        name: '서울대본부 (4-1B)',
        description: '정보없음'
      }, {
        name: '대학동(하차) (25B)',
        description: '정보없음'
      }, {
        name: '대학동-서울대입구역 (27B)',
        description: '정보없음'
      }
    ]
  }, {
    id: 15,
    name: '본부-대학동',
    description: '심야셔틀',
    imgType: 'sn',
    info: {
      dep: '서울대본부 (4-1B)',
      dest: '대학동(하차) (25B)',
      interval: '21:10 - 23:10 30분',
      times: '21:10~23:10',
    },
    stations: [
      {
        name: '서울대본부 (4-1B)',
        description: '정보없음'
      }, {
        name: '대학동(하차) (25B)',
        description: '정보없음'
      }
    ]
  }, {
    id: 16,
    name: '5511',
    description: '지선 버스',
    imgType: 'cg',
    info: {
      dep: '서울대',
      dest: '중앙대',
      interval: '평일 6~10분, 토요일 7~11분, 일요일 8~12분',
      times: '05:30~23:30',
    },
    stations: [
    ]
  }, {
    id: 17,
    name: '5513',
    description: '지선 버스',
    imgType: 'cg',
    info: {
      dep: '서울대',
      dest: '벽산블루밍아파트',
      interval: '평일 8~15분, 토요일 8~15분, 일요일 10~15분',
      times: '05:30~23:30',
    },
    stations: [
    ]
  }, {
    id: 18,
    name: '5515',
    description: '지선 버스',
    imgType: 'cg',
    info: {
      dep: '신동아.현대아파트',
      dest: '봉천3동현대아파트',
      interval: '평일 5~10분, 토요일 5~10분, 일요일 5~10분',
      times: '05:30~23:30',
    },
    stations: [
    ]
  }, {
    id: 19,
    name: '501',
    description: '간선 버스',
    imgType: 'pb',
    info: {
      dep: '서울대 ',
      dest: '종로2가',
      interval: '평일 7~8분, 토요일 6~14분, 일요일 6~14분',
      times: '04:30~22:30',
    },
    stations: [
    ]
  }, {
    id: 20,
    name: '506',
    description: '간선 버스',
    imgType: 'pb',
    info: {
      dep: '신림2동차고지 ',
      dest: '종로1가',
      interval: '평일 6~14분, 토요일 7~15분, 일요일 8~15분',
      times: '04:30~22:30',
    },
    stations: [
    ]
  }, {
    id: 21,
    name: '6515',
    description: '지선 버스',
    imgType: 'cg',
    info: {
      dep: '양천공영차고지',
      dest: '경인교대',
      interval: '평일 5~7분, 토요일 6~8분, 일요일 7~8분',
      times: '04:10~22:10',
    },
    stations: [
    ]
  }, {
    id: 22,
    name: '5517',
    description: '지선 버스',
    imgType: 'cg',
    info: {
      dep: '신림동',
      dest: '중앙대',
      interval: '평일 8~15분, 토요일 10~15분, 일요일 10~16분',
      times: '04:30~22:30',
    },
    stations: [
    ]
  }, {
    id: 23,
    name: '5528',
    description: '지선 버스',
    imgType: 'cg',
    info: {
      dep: '가산동',
      dest: '사당역',
      interval: '평일 7~19분, 토요일 8~20분, 일요일 10~20분',
      times: '04:30~22:50',
    },
    stations: [
    ]
  }, {
    id: 24,
    name: '6512',
    description: '지선 버스',
    imgType: 'cg',
    info: {
      dep: '구로동',
      dest: '서울대',
      interval: '평일 6~10분, 토요일 6~11분, 일요일 6~12분',
      times: '04:00~22:40',
    },
    stations: [
    ]
  }, {
    id: 25,
    name: '6513',
    description: '지선 버스',
    imgType: 'cg',
    info: {
      dep: '철산동',
      dest: '서울대',
      interval: '평일 6~12분, 토요일 7~13분, 일요일 8~16분',
      times: '04:30~22:30',
    },
    stations: [
    ]
  }, {
    id: 26,
    name: '6514',
    description: '지선 버스',
    imgType: 'cg',
    info: {
      dep: '양천공영차고지',
      dest: '서울대',
      interval: '평일 9~12분, 토요일 9~12분, 일요일 9~12분',
      times: '04:30~22:00',
    },
    stations: [
    ]
  }, {
    id: 27,
    name: '651',
    description: '간선 버스',
    imgType: 'pb',
    info: {
      dep: '방화동',
      dest: '서울대',
      interval: '평일 5~13분, 토요일 9~14분, 일요일 9~15분',
      times: '04:00~22:40',
    },
    stations: [
    ]
  }, {
    id: 28,
    name: '750A',
    description: '간선 버스',
    imgType: 'pb',
    info: {
      dep: '덕은동',
      dest: '서울대',
      interval: '평일 4~12분, 토요일 4~12분, 일요일 5~16분',
      times: '04:00~21:20',
    },
    stations: [
    ]
  }, {
    id: 29,
    name: '750B',
    description: '간선 버스',
    imgType: 'pb',
    info: {
      dep: '은평공영차고지',
      dest: '서울대',
      interval: '평일 4~13분, 토요일 6~13분, 일요일 7~13분',
      times: '04:00~23:10',
    },
    stations: [
    ]
  }, {
    id: 30,
    name: '6511',
    description: '지선 버스',
    imgType: 'cg',
    info: {
      dep: '구로동',
      dest: '서울대',
      interval: '평일 12~21분, 토요일 13~18분, 일요일 15~22분',
      times: '04:10~23:10',
    },
    stations: [
    ]
  }, {
    id: 31,
    name: '5516',
    description: '지선 버스',
    imgType: 'cg',
    info: {
      dep: '신림2동차고지',
      dest: '노량진역',
      interval: '평일 6~8분, 토요일 6~12분, 일요일 7~14분',
      times: '05:00~23:00',
    },
    stations: [
    ]
  }, {
    id: 32,
    name: '관악02',
    description: '마을 버스',
    imgType: 'v',
    info: {
      dep: '서울대신공학관',
      dest: '낙성대역',
      interval: '평일 6분, 토요일 6분, 일요일 6분',
      times: '06:00~00:13',
    },
    stations: [
    ]
  }];

  return {
    bookmarks: function() {
      var bookmarks = JSON.parse(window.localStorage['bus'] || '[]');
      console.log("bookmark: " + bookmarks);
      return bookmarks;
    },
    bookmark: function(busId) {
      var bookmarks = JSON.parse(window.localStorage['bus'] || '[]');
      for (var i = 0; i < buses.length; i++) {
        if (buses[i].id === parseInt(busId)) {
           bookmarks.push(buses[i]);
        }
      }
      console.log(bookmarks);
      window.localStorage['bus'] = JSON.stringify(bookmarks);
      return;
    },
    unbookmark: function(busId) {
      var bookmarks = JSON.parse(window.localStorage['bus'] || '[]');
      for (var i = 0; i < bookmarks.length; i++) {
        if (buses[i].id === parseInt(busId)) {
           bookmarks.splice(i, 1);
        }
      }
      window.localStorage['bus'] = JSON.stringify(bookmarks);
      return;
    },
    isBookmarked: function(busId) {
      var bookmarks = JSON.parse(window.localStorage['bus'] || '[]');
      for (var i = 0; i < bookmarks.length; i++) {
        if (buses[i].id === parseInt(busId)) {
          return true;
        }
      }
      return false;
    },
    all: function() {
      return buses;
    },
    get: function(busId) {
      for (var i = 0; i < buses.length; i++) {
        if (buses[i].id === parseInt(busId)) {
          return buses[i];
        }
      }
      return null;
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
