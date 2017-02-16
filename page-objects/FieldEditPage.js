var fieldEditPage = function(){
	this.module = element(by.model('vm.updateFieldObj.module'));
	this.descriptionTextBox = element(by.model('vm.updateFieldObj.desc'));
	this.pathTextBox = element(by.model('vm.updateFieldObj.path'));
	this.section = element(by.model('vm.updateFieldObj.section'));
	this.dataType = element(by.model('vm.updateFieldObj.dataType'));
	this.status = element(by.model('vm.updateFieldObj.status'));
	this.saveButton = element(by.css('[ng-click="vm.saveField()"]'));
	this.cancelButton = element(by.css('[ng-click="vm.cancelField()"]'));
	this.addOptValueButton = element(by.css('[ng-click="vm.addOptionValue()"]'));
	this.optValue = element(by.id('uiOptionValue'));

	this.save = function(){
		this.saveButton.click();
	};

	this.cancel = function(){
		this.cancelButton.click();
	};
};

module.exports = fieldEditPage;