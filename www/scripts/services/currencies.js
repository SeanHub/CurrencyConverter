angular.module('app').factory('currencies', function ($http, cache) {
	var currencies = {};
    
	var _apiEndpoint = 'http://austin-currency.azurewebsites.net/api/currencies/';
    
	var data = cache;

	var _httpOptions = {
		headers: {

		}
	};

	var _makeRequest = function (url) {
		return $http.get(url, _httpOptions);
	};

	var _getCurrencies = function (base) {
		_makeRequest(_apiEndpoint + base + '/rates').success(function (res) {
			data = res;
			currencies.list.length = 0;
			data.results.forEach(function (i) {
				currencies.list.push({
					country_code: i.country_code,
					currency: i.designator,
					rate: i.rate
				});
			});
		}).error(function (err) {
			console.log(err);
		});;
	};

	currencies.updateCurrencies = function () {
		_getCurrencies(currencies.baseCurrency.currency);
	};

	currencies.baseCurrency = {
		currency: 'GBP',
		country_code: 'gb',
		rate: 1.00
	};

	currencies.selectedCurrency = null;

	currencies.list = [];

	data.results.forEach(function (i) {
		currencies.list.push({
			country_code: i.country_code,
			currency: i.designator,
			rate: i.rate
		});
	});
    
	currencies.getConversion = function (amount, selectedCurrency) {
		return (amount * selectedCurrency.rate).toFixed(2);
	};

	return currencies;
});