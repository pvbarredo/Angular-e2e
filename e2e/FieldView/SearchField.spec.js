'use strict';

var FieldViewPage = require('../../page-objects/FieldViewPage'),
	Navigation = require('../../page-objects/Navigation'),
	UIGridWrapper = require('../../util/UIGridWrapper'),
	config = require('../../data/config.js').config();

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
		expect(uiGridWrapper.getAllRowsCount()).toEqual(6);
	});

	it('Should filter by section',function(){
		uiGridWrapper.enterFilterInColumn(columnIdx,'Equipment');
		expect(uiGridWrapper.getAllRowsCount()).toEqual(16);
	});

	it('Should filter by path',function(){
		uiGridWrapper.enterFilterInColumn(columnIdx,'xxx');
		browser.pause();
		expect(uiGridWrapper.getAllRowsCount()).toBeGreaterThan(10);
	});

	it('Should filter by data type',function(){
		uiGridWrapper.enterFilterInColumn(columnIdx,'Number');
		expect(uiGridWrapper.getAllRowsCount()).toEqual(0);
	});

	it('Should filter by status',function(){
		uiGridWrapper.enterFilterInColumn(columnIdx,'in-active');
		expect(uiGridWrapper.getAllRowsCount()).toEqual(1);
	});

});