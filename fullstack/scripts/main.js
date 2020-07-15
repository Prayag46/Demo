var app = angular.module("DemoApp", ['ngRoute', 'ngMaterial', 'ngMessages']);

app.config(function ($routeProvider) {
    $routeProvider.when("/", {templateUrl: "views/index.html"})
    $routeProvider.when("/data", {templateUrl: "views/data.html"})
    $routeProvider.when('/edit/:id', {templateUrl: 'views/edit.html', reloadOnSearch: false});
});

app.controller('mainController', function ($scope, $location, $http) {

    $scope.goto = function (path) {
        $location.path(path);
    }

    $scope.submit = function () {
        var objReq = {
            UserId: $scope.muserid,
            Password: $scope.mpassword,
        };
        $http.post("api/login.php", objReq)
                .then(function (response) {
                    if (response.data === 'no') {
                        alert('Invalid User');
                    }
                    else {
                        $location.path('/data');
                    }
                });
    }

})

app.controller('DataController', function ($scope, $location, $http) {

    $http.get("api/data.php")
            .then(function (response) {
                $scope.alldata = response.data;
            });

    $scope.edit = function (Id) {
        $location.path('/edit/' + Id);
    };


    $scope.delete = function (id) {
        $http({
            method: 'GET',
            url: 'api/delete.php',
            params: {
                param1: id,
            }
        }).then(function (response) {
            alert('Deleted successfully');
            $location.path('/data');
        });

    }

})

app.controller('EditController', function ($scope, $location, $http, $routeParams) {
    $http({
        method: 'GET',
        url: 'api/edit.php',
        params: {
            param1: $routeParams.id,
        }
    }).then(function (response) {
        $scope.due_date = response.data[0].due_date;
        $scope.description = response.data[0].description;
        $scope.assignedby = response.data[0].assigned_by;
        $scope.assignedto = response.data[0].assigned_to;
        $scope.status = response.data[0].status;
    });


    $scope.saveedit = function () {
        var objReq = {
            Date: $scope.due_date,
            Description: $scope.description,
            By: $scope.assignedby,
            To: $scope.assignedto,
            Status: $scope.status,
            No: $routeParams.id,
        };
        $http.post("api/saveedit.php", objReq)
                .then(function (response) {
                    alert('Saved successfully');
                    $location.path('/data');
                });
    }



})



