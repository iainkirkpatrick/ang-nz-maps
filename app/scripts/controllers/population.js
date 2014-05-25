'use strict';

angular.module('nzMapsApp')
  .controller('PopulationCtrl', function ($scope, $http, $q, leafletData) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    function style(feature) {
                return {
                    fillColor: getColor(feature.properties["2006-2013"]),
                    weight: 1,
                    opacity: 1,
                    color: 'white',
                    dashArray: '3',
                    fillOpacity: 0.8
                };
            }
    function AUstyle(feature) {
                return {
                    fillColor: getColor(feature.properties["06-13"]),
                    weight: 1,
                    opacity: 1,
                    color: 'white',
                    dashArray: '3',
                    fillOpacity: 0.8
                };
            }

    function getColor(d) {
    return d > 7.5 ? '#4575b4' :
           d > 5.0  ? '#74add1' :
           d > 2.5  ? '#abd9e9' :
           d > 0  ? '#e0f3f8' :
           d > -2.5   ? '#fee090' :
           d > -5.0   ? '#fdae61' :
           d > -7.5   ? '#f46d43' :
                      '#d73027';
	}

	$scope.toAU = function() {
    	$scope.geojson = {
    		data: dataAU.data,
			style: dataAU.style
    	};
    }
    $scope.toTA = function() {
    	$scope.geojson = {
    		data: dataTA.data,
			style: dataTA.style
    	};
    }

    var dataTA, dataAU;
    $q.all([$http.get("data/TA2013.json"), $http.get("data/AU2013_1.json")])
		.then(function(resultArray){
			console.log(resultArray);
			dataTA = {
				data: resultArray[0].data,
				style: style
			};
			dataAU = {
				data: resultArray[1].data,
				style: AUstyle
			};
			$scope.geojson = {
				data: dataTA.data,
				style: dataTA.style
			};
		});

	var tilesDict = {
            mapbox: {
                url: 'http://{s}.tiles.mapbox.com/v3/envintage.i9eofp14/{z}/{x}/{y}.png',
                // url: 'http://tile.stamen.com/toner/{z}/{x}/{y}.png',
                options: {
                    attribution: '&copy; <a href="http://mapbox.com/about/maps" target="_blank">Terms & Feedback</a>'
                  }
                }
              };

        angular.extend($scope, {
            center: {
                lat: -41.1,
                lng: 172.5,
                zoom: 6
              },
              legend: {
	            position: 'bottomleft',
	            colors: [ '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#fee090', '#fdae61', '#f46d43', '#d73027' ],
	            labels: [ 'more than 7.5', '5.0 to 7.5', '2.5 to 5.0', '0 to 2.5', '-2.5 to 0', '-5.0 to -2.5', '-7.5 to -5.0', 'less than -7.5' ]
	          },
              tiles: tilesDict.mapbox,
              defaults: {
                scrollWheelZoom: false
              }
            });
  });
