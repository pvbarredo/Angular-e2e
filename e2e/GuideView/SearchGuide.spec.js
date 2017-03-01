'use strict';

var GuideViewPage = require('../../page-objects/GuideViewPage'),
	GuideEditPage = require('../../page-objects/GuideEditPage'),
	Navigation = require('../../page-objects/Navigation'),
	UITreeWrapper = require('../../util/UITreeWrapper'),
	_ = require('lodash'),
	config = require('../../data/config.js').config();

describe("Search in GuideLine View", function(){
	var guideViewPage = new GuideViewPage(),
		guideEditPage = new GuideEditPage(),
		uiTreeWrapper = null,
		node = null,
		navigation = new Navigation();

	beforeAll(function(){
		navigation.gotoGuidelineViewPage();
		guideViewPage.searchButton.click();
	});

	it('Should open a parent node',function(){
		guideViewPage.uiTree.then(function(nodes){
			nodes[0].element(by.css('[ng-click="collapsed = !collapsed"]')).click();
			// browser.pause();
		});
	});

	it('Should open a child node',function(){
		node = guideViewPage.childNodes.get(2);
		guideViewPage.expandAllNode(node);
		// browser.pause();
	});

	it('Should expand the child node',function(){
		node = guideViewPage.grandChildNodes.get(0);
		guideViewPage.expandAllNode(node);
		
	});

	it('Should open a decision node',function(){
		node = guideViewPage.grandChildNodes.get(0);
		uiTreeWrapper = new UITreeWrapper(node);
		uiTreeWrapper.doubleClick();
		browser.pause();
		guideEditPage.cancelButton.click();
	});

	// it('Should open a action node',function(){
	// 	// guideViewPage.grandChildNodes.count().then(function(size){
	// 	// 	console.log(size);
	// 	// });
	// 	guideViewPage.grandChildNodes.each(function(node){
	// 		node.element(by.css('[ng-show="vm.showExpand(node)"]')).isDisplayed(function(isDisplayed){
	// 			if(!isDisplayed){
	// 				uiTreeWrapper = new UITreeWrapper(node);
	// 				uiTreeWrapper.doubleClick();
	// 			}
	// 		},function(err){
				
	// 		});
	// 	});
	// });

});