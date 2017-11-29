angular.module('scrollApp', ['infinite-scroll'])
        .controller('infiniteScrollController', function ($scope, $http) {
            $scope.users =
                    [{
                            "id": 1,
                            "first_name": "Kimberly",
                            "last_name": "Grant",
                            "email": "kgrant0@ebay.co.uk",
                            "country": "Bolivia",
                            "ip_address": "93.77.148.179"
                        }, {
                            "id": 2,
                            "first_name": "Elizabeth",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
                        {
                            "id": 3,
                            "first_name": "Elizabeth1",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
						{
                            "id": 4,
                            "first_name": "Elizabeth2",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
						{
                            "id":5,
                            "first_name": "Elizabeth6",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
						{
                            "id": 6,
                            "first_name": "Elizabeth7",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
						{
                            "id": 7,
                            "first_name": "Elizabeth8",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
						{
                            "id": 8,
                            "first_name": "Elizabeth8",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
						{
                            "id": 9,
                            "first_name": "Elizabeth8",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
						{
                            "id": 10,
                            "first_name": "Elizabeth8",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
						{
                            "id": 11,
                            "first_name": "Elizabeth8",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
						{
                            "id": 12,
                            "first_name": "Elizabeth8",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
							{
                            "id": 13,
                            "first_name": "Elizabeth8",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
							{
                            "id": 14,
                            "first_name": "Elizabeth8",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
							{
                            "id": 15,
                            "first_name": "Elizabeth8",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
							{
                            "id": 16,
                            "first_name": "Elizabeth8",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
							{
                            "id": 17,
                            "first_name": "Elizabeth8",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
							{
                            "id": 18,
                            "first_name": "Elizabeth8",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
							{
                            "id": 19,
                            "first_name": "Elizabeth8",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
							{
                            "id": 20,
                            "first_name": "Elizabeth8",
                            "last_name": "Lewis",
                            "email": "elewis1@so-net.ne.jp",
                            "country": "Indonesia",
                            "ip_address": "39.187.159.25"
                        },
 
                        {
                            "id": 100,
                            "first_name": "Shawn",
                            "last_name": "Ellis",
                            "email": "sellis2r@diigo.com",
                            "country": "Portugal",
                            "ip_address": "121.250.152.235"
                        }];
						 $scope.numberToDisplay = 10;
						var usersList = $scope.users;
						
					$scope.logEvents = [];
       for (var i = 0; i < usersList.length; i++) {
           $scope.logEvents.push(usersList[i]);
             
           
       }
	   
	   $scope.loadMore = function() {
           if ($scope.numberToDisplay + 5 < $scope.logEvents.length) {
               $scope.numberToDisplay += 5;
           } else {
               $scope.numberToDisplay = $scope.logEvents.length;
           }
       };
	   
	   
});