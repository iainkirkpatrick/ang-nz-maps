'use strict';

angular.module('nzMapsApp')
  .controller('PopulationCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    function style(feature) {
                return {
                    fillColor: getColor(feature.properties["2006-2013"]),
                    weight: 2,
                    opacity: 1,
                    color: 'white',
                    dashArray: '3',
                    fillOpacity: 0.5
                };
            }

    ['rgb(215,48,39)','rgb(244,109,67)','rgb(253,174,97)','rgb(254,224,144)','rgb(224,243,248)','rgb(171,217,233)','rgb(116,173,209)','rgb(69,117,180)']

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

    var tilesDict = {
            mapbox: {
                url: 'http://{s}.tiles.mapbox.com/v3/envintage.i9eofp14/{z}/{x}/{y}.png',
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
              tiles: tilesDict.mapbox,
              defaults: {
                scrollWheelZoom: false
              }
            });

    $http.get("data/test_1.json").success(function(data, status) {
                    angular.extend($scope, {
                        geojson: {
                            data: data,
                            style: style
                        }
                    });
                });
  });
