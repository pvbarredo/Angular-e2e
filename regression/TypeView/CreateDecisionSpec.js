'use strict';

var TypeViewPage = require('../../page-objects/TypeViewPage'),
config = require('../../data/config.js').config(),
Navigation = require('../../page-objects/Navigation');

describe("Type View Page", function() {
	var navigation = new Navigation();
	var typeViewPage = new TypeViewPage();

    beforeAll(function () {
        navigation.gotoTypeViewPage();
    });

	it("should be able to search", function() {
		typeViewPage.clickSearchButton();
	});

	it("should add a decision", function(){
		typeViewPage.clickCreateDecisionButton();
	});
	it("should show a modal", function(){
		var modalElement = element(by.className('modal-dialog'));
		expect(modalElement.isPresent()).toBe(true);
	});

	describe("Decision modal", function(){
		var typeViewPage = new TypeViewPage();
		var data = typeViewPage.generateFieldData();

		it("should not save with incomplete form", function(){
			expect(typeViewPage.saveTypeButton.isEnabled()).toBe(false);
		});

		it("should accept inputs", function(){
			typeViewPage.inputModule(data.modules);
			typeViewPage.inputDataType(data.dataTypes);
			typeViewPage.inputName(data.name);
			typeViewPage.inputDescription(data.description);
			typeViewPage.inputPending(data.isPending);
			typeViewPage.inputHandler(data.handler);
			typeViewPage.inputParameters(data.parameters);
			typeViewPage.inputFields(data.fields);
			typeViewPage.inputDefDecision(data.defaultDecisionValue);
			typeViewPage.inputDecisions(data.decisionValues);
			typeViewPage.inputServiceItems(data.serviceItem);

			expect(typeViewPage.saveTypeButton.isEnabled()).toBe(true);
		});

		it("should save newly created decision", function(){

		});
	});
})