'use strict';
angular.module('accesseducaApp', ['ui.router', 'ngResource', 'ngDialog', 'lbServices', 'ui.bootstrap', 'ui.mask', 'images-resizer'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
     // route for the home page
      .state('accesseduca', {
        url:'/',
        views: {
            'conteudo': {
                templateUrl : 'views/mapa.html',
                controller  : 'CabecalhoController'
            }
        }
      })
      .state('accesseduca.mapa', {
        url:'',
        views: {
            'conteudo@': {
                templateUrl : 'views/mapa.html',
                controller  : 'CabecalhoController'
            }
        }
      })
      .state('accesseduca.facilitadores', {
        url: '',
        params: {
          uf: null,
          ativo: 'S'
        },
        views: {
          'conteudo@': {
              templateUrl : 'views/facilitadores.html',
              controller  : 'FacilitadoresController'
          }
        }
      })
      .state('accesseduca.novo-facilitador', {
        url: '',
        views: {
          'conteudo@': {
              templateUrl : 'views/novo-facilitador.html',
              controller  : 'FacilitadoresController'
          }
        }
      })
      ;


    $urlRouterProvider.otherwise('/');
  });
