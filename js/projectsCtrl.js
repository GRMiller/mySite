(function(){

var app = angular.module("mainMod");

app.controller("projCtrl", function($scope){

  $scope.projects = [
    {
      headline: 'Shopping Cart',
      img: 'images/ShoppingCart.png',
      description: 'Our assignment was to build a grocery list that could display and total items in it. I built a fully functioning shopping cart in my first foray into Object Oriented Programming.',
      tools: 'jQuery, vanilla Javascript, Bootstrap',
      link: 'views/shoppingCart.html'
    },
    {
      headline: 'Seat Reservation Application',
      img: "images/SeatReservationApp.png",
      description: 'Building on the shopping cart, this project tested my understanding of Object Oriented Programming and challenged me to come up with creative solutions. It was my first experience working in small groups and paired programming',
      tools: 'jQuery, jQuery UI, OOP',
      link: 'views/seatReservationApp.html'
    },
    {
      headline: 'Mad Lib',
      img: 'images/MadLib.png',
      description: 'A fun and expressive way to push my understanding of Angular, Single Page Applications, and to dig deeper into Services and the MVC',
      tools: 'Angular.js, MVC, UX',
      link: 'views/madLib.html'
    }
    ]

  });

})();
