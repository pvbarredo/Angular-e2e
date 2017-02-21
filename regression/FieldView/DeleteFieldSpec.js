'use strict';

var FieldViewPage = require('../../page-objects/FieldViewPage'),
	Navigation = require('../../page-objects/Navigation'),
	UIGridWrapper = require('../../util/UIGridWrapper'),
	_ = require('lodash'),
	config = require('../../data/config.js').config();

describe("Delete in Field Maintenance", function(){
	var navigation = new Navigation(),
		fieldViewPage = new FieldViewPage(),
		uiGridWrapper = new UIGridWrapper(fieldViewPage.uiGrid);

	beforeAll(function(){
		navigation.gotoFieldViewPage();
		fieldViewPage.searchFields();
	});

	it('Should select 3 records',function(){
		var columnIdx = [0,2,4];
		_.forEach(columnIdx,function(column){
			uiGridWrapper.selectRow(column);
		});
	});

	it('Should delete selected records',function(){
		fieldViewPage.removeButton.click();
	});

	it('Should confirm delete',function(){
		fieldViewPage.confirmUtilButton.click();
		browser.pause();
	});

});