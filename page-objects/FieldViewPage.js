var fieldViewPage = function(){
	this.uiGrid = element(by.css('[ui-grid="vm.fieldGrid"]'));
	this.searchButton = element(by.css('[ng-click="vm.searchFields()"]'));
	this.moduleDropdown = element(by.model('vm.module'));
	this.selectedModule = element(by.className('ui-select-choices-row-inner'));
	this.createButton = element(by.css('[ng-click="vm.addField()"]'));
	this.removeButton = element(by.css('[ng-click="vm.removeField()"]'));
	this.searchFields = function(){
		this.searchFieldsButton = element(by.css('[ng-click="vm.searchFields()"]'));
		this.searchFieldsButton.click();
	};
}

module.exports = fieldViewPage;