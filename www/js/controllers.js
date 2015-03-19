angular.module('starter.controllers', [])

.controller('DashCtrl', function ($rootScope, $scope) {

  $scope.fakeNotif = function () {
    $rootScope.ui.number++;
    $rootScope.ui.faked = true;

    var el = $('.item-new-msg');
    var badge = $('.badge');
    var t = new TimelineMax();

    t
      .set(el, { scaleY: 0 })
      .to(el, .25, { scaleY: 1 })
      .to(badge, .25, { scale: 1.2 })
      .to(badge, .25, { scale: 1.0 })
      .to(badge, .25, { scale: 1.2 })
      .to(badge, .25, { scale: 1.0 })

  }

  $scope.closeAlert = function (num) {
    var el = $('.item-msg-' + num);
    var t = new TimelineMax();

    t
      .set(el, { scaleY: 1 })
      .to(el, .25, { scaleY: 0, height: 0, padding: 0 });

    $rootScope.ui.number--;
  }

})

.controller('ChatsCtrl', function ($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('RoomsCtrl', function ($scope) {
})

.controller('TabsCtrl', function ($scope) {
})

.controller('RoomDetailCtrl', function ($scope, $stateParams, $rootScope) {

  $scope.vm = {
    start: false,
    reported: false,
    room: $stateParams.roomId
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
    $rootScope.ui.finishedRoom = true;
  };

  $scope.report = function () {
    $scope.vm.reported = true;

    var t = new TimelineMax({});

    var tw1 = new TweenMax.to($('.report-before'), 1, { opacity: 0, y: -100 });
    var tw2 = new TweenMax.to($('.report-after'), .5, { opacity: 1, y: -41 });

    $scope.vm.ck1 = false;
    $scope.vm.ck2 = false;
    $scope.vm.ck3 = false;
    $rootScope.ui.finishedRoom = false;

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
      title: 'Signalement',
      template: 'Êtes-vous sûr(e) ?',
      buttons: [{ text: 'Annuler' }, { text: '<b>Confirmer</b>', type:'button-positive', onTap: function () { return true; } }]
    }).then(function (res) {
      if (res) {
        $ionicPopup.alert({
           title: 'Confirmation',
          template: 'Un agent a été alerté.'
        });
      }
    });

  }

});
