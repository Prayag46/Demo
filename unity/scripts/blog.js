
var app = angular.module("MainApp", ['ngMaterial', 'ngMessages']);

app.controller('mainController', function ($scope) {
    $scope.items = ['User 1', 'User 2', 'User 3', 'User 4'];

    $scope.UserIn = false;

    $scope.Submit = function () {
        $scope.UserName = $scope.User;
        $scope.UserIn = true;
    }

    $scope.time = 'morning';
    $scope.timeimg = 'images/morning.jpg';

    $scope.weather = 'clear';
    $scope.weatherimg = 'images/clear.jpg';

    $scope.traffic = 'low';
    $scope.trafficimg = 'images/low.jpg';


    $scope.timechange = function () {
        if ($scope.time === 'morning') {
            $scope.timeimg = 'images/morning.jpg';
        }
        else if ($scope.time === 'afternoon') {
            $scope.timeimg = 'images/afternoon1.jpg';
        }
        else if ($scope.time === 'evening') {
            $scope.timeimg = 'images/evening.jpg';
        }
        else {
            $scope.timeimg = 'images/night.jpg';
        }
    }

    $scope.weatherchange = function () {
        if ($scope.weather === 'clear') {
            $scope.weatherimg = 'images/clear.jpg';
        }
        else if ($scope.weather === 'rainy') {
            $scope.weatherimg = 'images/rain.jpg';
        }
        else if ($scope.weather === 'foggy') {
            $scope.weatherimg = 'images/foggy.jpg';
        }
        else {
            $scope.weatherimg = 'images/snow.jpg';
        }
    }

    $scope.trafficchange = function () {
        if ($scope.traffic === 'low') {
            $scope.trafficimg = 'images/low.jpg';
        }
        else if ($scope.traffic === 'medium') {
            $scope.trafficimg = 'images/medium.jpg';
        }
        else {
            $scope.trafficimg = 'images/high.jpg';
        }
    }



})
