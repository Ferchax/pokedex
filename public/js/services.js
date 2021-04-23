(function(){

    angular.module('pokedex.services', [])
        
    .factory('pokemonService', ['$http', '$q', function($http, $q) {
        
        function all() {
            var deferred = $q.defer();

            $http.get('/pokemons.json')            
                .then(function(response) {
                    deferred.resolve(response.data);
                });
            
            return deferred.promise;
        }

        return { all: all }
    }]);

})();