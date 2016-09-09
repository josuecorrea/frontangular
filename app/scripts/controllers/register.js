'use strict';

angular.module('psJwtApp')
    .controller('RegisterCtrl', function($scope, $http, alert, authToken) {
        $scope.submit = function() {

            var url = 'http://localhost:3000/register';
            var user = {
                email: $scope.email,
                password: $scope.password
            };
            $http.post(url, user)
                .success(function(res) {
                    alert('success', 'Opps!', 'Could not register');
                    authToken.setToken(res.token);
                })
                .error(function(err) {
                    alert('warning', 'Opps!', 'Could not register');
                });
        }
 });