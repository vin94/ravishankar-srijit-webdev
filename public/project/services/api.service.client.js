(function () {
    angular
        .module('BonAppetit')
        .factory('apiService', apiService);
    
    function apiService($http) {

        var api ={
            "searchLocation" : searchLocation,
            "searchCollections" : searchCollections,
            "restaurantCollections" : restaurantCollections
        };

        var baseUrl = "https://developers.zomato.com/api/v2.1/";
        var apikey = "&apikey=0393efd0fa7d592433e675f2a7c2729d";

        return api;



        function searchLocation(location) {
            var searchLocationUrl = baseUrl + "locations?query=" + location + "&count=10" + apikey;
            return $http.get(searchLocationUrl);
        }
        
        function searchCollections(cityId) {
            var searchCollectionsUrl = baseUrl + "collections?city_id=" + cityId + apikey;
            return $http.get(searchCollectionsUrl);
        }

        function restaurantCollections(cityId,collectionId) {
            var searchRestaurantUrl = baseUrl + "search?entity_id=" + cityId + "&entity_type=city&collection_id=" +collectionId + apikey;
            return $http.get(searchRestaurantUrl);
        }
    }
})();