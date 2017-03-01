'use strict';

var FieldEditPage = require('../../page-objects/FieldEditPage'),
	FieldViewPage = require('../../page-objects/FieldViewPage'),
	Navigation = require('../../page-objects/Navigation'),
	UIGridWrapper = require('../../util/UIGridWrapper'),
	config = require('../../data/config.js').config();

describe("Update in Field Maintenance", function(){
	var navigation = new Navigation(),
		fieldEditPage = new FieldEditPage(),
		fieldViewPage = new FieldViewPage(),
		uiGridWrapper = new UIGridWrapper(fieldViewPage.uiGrid);

	beforeAll(function(){
		navigation.gotoFieldViewPage();
		fieldViewPage.searchFields();
	});

	it('Should open an existing record',function(){
		uiGridWrapper.doubleClickRow(5);
		expect(fieldEditPage.pathTextBox.getAttribute('value')).not.toEqual('');
	});

	it('Should replace old path with new path',function(){
		fieldEditPage.pathTextBox.clear().then(function(){
			fieldEditPage.pathTextBox.sendKeys('sample path');
			expect(fieldEditPage.pathTextBox.getAttribute('value')).toEqual('sample path');
		});		
	});

	it('Should click save button',function(){
		fieldEditPage.saveButton.click();
		browser.pause();
	});

});