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
    $scope.vm.finish = false;
    $scope.$broadcast('timer-start');

    var timer = $('timer');
    var fake = $('fake');
    var button = $('.button-start');

    var t = new TimelineMax({});

    var tw1 = new TweenMax.to(fake, 2, { marginTop: 200, opacity: 0 });
    var tw2 = new TweenMax.fromTo(timer, 2, { marginTop: 200, opacity: 0 }, { marginTop: 0, opacity: 1 });

  };

  $scope.finishCountdown = function () {
    $scope.$broadcast('timer-stop');
    $scope.vm.finish = true;
  };

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, $ionicPopup) {
  $scope.settings = {
    enableFriends: true
  };

  $scope.showAlert = function () {
    $ionicPopup.confirm({
      title: 'Signaler un comportement',
      template: 'Êtes-vous sûr(e) ?',
      buttons: [{ text: 'Annuler' }, { text: '<b>Save</b>', type:'button-positive', onTap: function () { return true; } }]
    }).then(function (res) {
      if (res) {
        $ionicPopup.alert({
           title: 'Signalement',
          template: 'Un agent a été alerté.'
        });
      }
    });

  }

});
