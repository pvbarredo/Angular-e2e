var CelRestructurePage = function(){
	this.serviceItemsSearchCriteria = element(by.model('vm.serviceItem'));
	this.regionSearchCriteria = element(by.model('vm.region'));
	this.bkgOfficeSearchCriteria = element(by.model('vm.serviceItem')); 
	this.ownerSearchCriteria = element(by.model('vm.owner'));
	this.celIdSearchCriteria = element(by.model('vm.celId'));
	this.keywordSearchCriteria = element(by.model('vm.keyword'));

	this.searchButton = element(by.css('[ng-click="vm.searchCel()"]'));
	this.resetButton = element(by.css('[ng-click="vm.reset()"]'));


	var checkBoxes = [
		'Check All',
		'Wait for Restructure',
		'Pending Home Clarification',
		'Pending for Handler/Action issue',
		'Pending on other Reason',
		'Structured',
		'Wait for Approval',
		'Approved'
	];

	this.search = function(){
		this.searchButton.click();
	}

}

module.exports = CelRestructurePage;