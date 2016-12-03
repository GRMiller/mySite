(function () {

var app = angular.module("mainMod", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider.when("/", {
    templateUrl:"views/home.html",
    controller:"projCtrl"
  }),
  $routeProvider.when("/portfolio", {
    templateUrl:"views/portfolio.html",
    controller:"projCtrl"
  }),
  $routeProvider.when("/portfolio/shoppingcart", {
    templateUrl:"../views/shoppingcart.html",
  });
});







})();
