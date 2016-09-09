'use strict';


angular.module('psJwtApp')
    .factory('authToken', function($window) {
        var storage = $window.localStorage;
        var cachedToken;
        var userToken = 'userToken';

        var authtoken = {
            setToken: function(token) {
                cachedToken = token;
                storage.setItem(userToken, token);
                // isAuthenticatedi = true;
            },
            getToken: function() {
                if (!cachedToken)
                    cachedToken = storage.getItem(userToken);

                return cachedToken;
            },
            isAuthenticated: function() {
                return !!authtoken.getToken();
            },
            removeToken: function() {
                cachedToken = null;
                storage.removeItem(userToken);
            }
        }

        return authtoken;
    });