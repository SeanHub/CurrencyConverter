angular.module('app').controller('sidebar', function ($scope, popup, currencies) {
	$scope.baseCurrency = function() {
		return currencies.baseCurrency;
	};

	$scope.updateCurrencies = function () {
		currencies.updateCurrencies();
	};
	
	$scope.openBaseCurrencyPopup = function () {
		 popup.create({ controller: 'baseCurrencyPopup', templateUrl: 'views/popups/basecurrency.tpl.html' }).open();
	};
});