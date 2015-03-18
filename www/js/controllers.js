angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('RoomsCtrl', function () {
})

.controller('RoomDetailCtrl', function ($scope, $stateParams) {

  $scope.vm = {
    start: false,
    room: 'Chambre ' + $stateParams.roomId
  };

  $scope.startCountdown = function () {
    $scope.vm.start = true;
    $scope.$broadcast('timer-start');

    var timer = $('timer');
    var fake = $('fake');
    var button = $('.button-start');

    var t = new TimelineMax({});
    var x = window.innerWidth || document.documentElement.clientWidth || -1000;

    var tw1 = new TweenMax.to(fake, 2, { marginTop: 200, opacity: 0 });

    var tw3 = new TweenMax.to(button, .5, { opacity: 0 });

    var tw2 = new TweenMax.from(timer, 2, { marginTop: 200, opacity: 0 })
      .to(timer, 0, { marginTop: 0, opacity: 1 });

    t.add(tw1).add(tw2).add(tw3);

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
