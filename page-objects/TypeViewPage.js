var UISelectWrapper = require('../util/UISelectWrapper');
var TypeViewPage = function(){
	this.searchButton = element(by.css('[ng-click="vm.searchTypes()"]'));
	this.createDecisionButton = element(by.css('[ng-click="vm.addType(\'Decision\')"]'));
	this.createActionButton = element(by.css('[ng-click="vm.addType(\'Action\')"]'));
	this.saveTypeButton = element(by.css('[ng-click="vm.saveType()"]'));
	this.addParameterButton = element(by.css('[ng-click="vm.addParameter()"]'));
	this.saveTypeButton = element(by.css('[ng-click="vm.saveType()"]'));
	this.cancelTypeButton = element(by.css('[ng-click="vm.cancelType()"]'));
	this.addParameterButton = element(by.css('[ng-click="vm.addParameter()"]'));
	this.addDecValueButton = element(by.css('[ng-click="vm.addDecisionValue()"]'));

	//fields
	this.moduleField = element(by.model('vm.updateTypeObj.supportModules'));
	this.dataTypeField = element(by.model('vm.updateTypeObj.supportDataTypes'));
	this.nameField = element(by.name('name'));
	this.descriptionField = element(by.name('description'));
	this.pendingCheckBox = element(by.name('pending'));
	this.handlerField = element(by.name('handlerPath'));
	this.parameterField = element.all(by.name('parameter'));
	this.fieldsField = element(by.name('fields'));
	this.defaultDecisionField = element(by.name('defaultDecisionValue'));
	this.decisionNameField = element.all(by.name('decisionValueName'));
	this.decisionCodeField = element.all(by.name('decisionValueCode'));
	this.serviceItemField = element(by.name('serviceItem'));
	//select wrappers for dropdowns
	this.moduleSelectWrapper = new UISelectWrapper(this.moduleField);
	this.dataTypeSelectWrapper = new UISelectWrapper(this.dataTypeField);
	this.fieldsSelectWrapper = new UISelectWrapper(this.fieldsField);
	this.serviceItemSelectWrapper = new UISelectWrapper(this.serviceItemField);

	this.clickSearchButton = function(){
		this.searchButton.click();
	};

	this.clickCreateDecisionButton = function(){
		this.createDecisionButton.click();
	};

	this.clickCreateActionButton = function(){
		this.createActionButton.click();
	};

	this.clickSaveTypeButton = function(){
		this.saveTypeButton.click();	
	};

	this.clickAddParameterButton = function(){
		this.addParameterButton.click();
	};

	this.generateFieldData = function(){
		return ({
			modules: ["DOC SOP"],
			dataTypes: ["String"],
			name: "Test decision",
			description: "This is for testing purposes only",
			isPending: true,
			handler: "doc/test-decision",
			parameters:["SYS_FIELD","INPUT"],
			fields:["SI B/L No.","SI B/L Released"],
			templateText:"",
			celTemplateText: "",
			defaultDecisionValue:"Yes",
			decisionValues:["Yes;Yes","No;No"],
			serviceItem:["All"]
		})
	};

	this.inputModule = function(modules){
		var moduleField = this.moduleField;
		var moduleSelectWrapper = this.moduleSelectWrapper;
		modules.forEach(function(module){
			moduleField.click();
			moduleSelectWrapper.selectItem(module);
		})
	};

	this.inputDataType = function(dataTypes){
		var dataTypeField = this.dataTypeField;
		var dataTypeSelectWrapper = this.dataTypeSelectWrapper;
		dataTypes.forEach(function(dataType){
			dataTypeField.click();
			dataTypeSelectWrapper.selectItem(dataType);
		})
	};

	this.inputName = function(name){
		this.nameField.sendKeys(name);
	};

	this.inputDescription = function(description){
		this.descriptionField.sendKeys(description);
	};

	this.inputPending = function(isPending){
		if(isPending){
			this.pendingCheckBox.click();
		}
	};

	this.inputHandler = function(handler){
		this.handlerField.sendKeys(handler);
	};

	this.inputParameters = function(parameters){
		var addParameterButton = this.addParameterButton;
		var parameterField = this.parameterField;
		var parameterSelectWrapper;
		parameters.forEach(function(parameter, idx){
			addParameterButton.click();
			parameterField.get(idx).click();
			parameterSelectWrapper= new UISelectWrapper(parameterField.get(idx));
			parameterSelectWrapper.selectItem(parameter);
		})
	};

	this.inputFields = function(fields){
		var fieldsField = this.fieldsField;
		var fieldsSelectWrapper = this.fieldsSelectWrapper;
		fields.forEach(function(field){
			fieldsField.click();
			fieldsSelectWrapper.selectItem(field);
		})
	};

	this.inputDefDecision = function(defaultDecision){
		this.defaultDecisionField.sendKeys(defaultDecision);
	};

	this.inputDecisions = function(decisionValues){
		var decisionNameField = this.decisionNameField;
		var decisionCodeField = this.decisionCodeField;
		var addDecValueButton = this.addDecValueButton;

		decisionValues.forEach(function(decisionValue, idx){
			var decisionValue = decisionValue.split(';');
			addDecValueButton.click();
			decisionNameField.get(idx).sendKeys(decisionValue[0]);
			decisionCodeField.get(idx).sendKeys(decisionValue[1]);
		})
	};

	this.inputServiceItems = function(serviceItems){
		var serviceItemField = this.serviceItemField;
		var serviceItemSelectWrapper = this.serviceItemSelectWrapper;

		serviceItems.forEach(function(serviceItem){
			serviceItemField.click();
			serviceItemSelectWrapper.selectItem(serviceItem);
		})
	};
}

module.exports = TypeViewPage;
