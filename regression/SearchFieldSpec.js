'use strict';

var FieldViewPage = require('../page-objects/FieldViewPage'),
	Navigation = require('../page-objects/Navigation'),
	UIGridWrapper = require('../util/UIGridWrapper'),
	config = require('../data/config.js').config();

describe("Search in Field Maintenance", function(){
	var navigation = new Navigation(),
		fieldViewPage = new FieldViewPage(),
		uiGridWrapper = new UIGridWrapper(fieldViewPage.uiGrid),
		columnIdx = 0;

	beforeAll(function(){
		navigation.gotoFieldViewPage();
		fieldViewPage.searchFields();
	});

	afterEach(function(){
		uiGridWrapper.cancelFilterInColumn(columnIdx);
		columnIdx++;
	});

	it('Should filter by description',function(){
		uiGridWrapper.enterFilterInColumn(columnIdx,'Seal');
		expect(uiGridWrapper.getAllRows().count()).toBeGreaterThan(1);
	});

	it('Should filter by section',function(){
		uiGridWrapper.enterFilterInColumn(columnIdx,'Equipment');
		expect(uiGridWrapper.getAllRows().count()).toBeGreaterThan(1);
	});

	it('Should filter by path',function(){
		uiGridWrapper.enterFilterInColumn(columnIdx,'xxx');
		expect(uiGridWrapper.getAllRows().count()).toBeGreaterThan(1);
	});

	it('Should filter by data type',function(){
		uiGridWrapper.enterFilterInColumn(columnIdx,'Number');
		expect(uiGridWrapper.getAllRows().count()).toEqual(0);
	});

	it('Should filter by status',function(){
		uiGridWrapper.enterFilterInColumn(columnIdx,'in-active');
		expect(uiGridWrapper.getAllRows().count()).toEqual(1);
	});

});