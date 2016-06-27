'use strict';
angular.module('Aplikasi-Klinsana')
  .factory('AmbilDataService', ['$http', function($http) {

    //var baseUrl = 'http://10.42.0.1/Aplikasi-Supir-Server/index.php';
    var baseUrl = 'http://192.168.54.46/myskripsi/index.php';

    return {
      ambilDataPesanan: function() {
        return $http.get(baseUrl + '/HimpunanController/himpunanJson');
      }
    // ambilDataPesananByPelanggan: function(email) {
    //   return $http.get(baseUrl + '/PesanSupirRestController/pesanSupir/' + email);
    // },
    // ambilDataPesananByPelanggan1: function(email) {
    //   return $http.get(baseUrl + '/PesanSupirRestController/pesanSupir1/' + email);
    // },
    // ambilDataPesananBySupir: function(idSupir) {
    //   return $http.get(baseUrl + '/PesanSupirRestController/pesanSupirBySupir/' + idSupir);
    // },
    // ambilDataSupir: function(idSupir) {
    //   return $http.get(baseUrl + '/SupirRestController/supir/' + idSupir);
    // },
    // pelangganPesanSupir: function(pesanSupir) {
    //   return $http.post(baseUrl + '/PesanSupirRestController/pesanSupirPost', pesanSupir);
    // },
    // supirTerimaPesanan: function(pesanSupir) {
    //   return $http.put(baseUrl + '/PesanSupirRestController/pesanSupirPut', pesanSupir);
    // }
    }
  }]);
