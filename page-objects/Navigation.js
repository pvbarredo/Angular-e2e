var Navigation= function() {

	this.gotoCELRestructureViewPage = function() {
		this.celRestructureViewButton = element(by.css('a[href*="#/CelRestructrueView"]'));
		this.celRestructureViewButton.click();
	}

	this.gotoSOPViewPage = function() {
		this.sopViewButton = element(by.css('a[href*="#/SopView"]'));
		this.sopViewButton.click();
	}
	
	this.gotoGuidelineViewPage = function() {
		this.guidelineViewButton = element(by.css('a[href*="#/GuideView"]'));
		this.guidelineViewButton.click();
	}

	this.gotoExecutionViewPage = function() {
		this.executionViewButton = element(by.css('a[href*="#/ExecutionView"]'));
		this.executionViewButton.click();
	}

	this.gotoTypeViewPage = function() {
		this.typeViewButton = element(by.css('a[href*="#/TypeView"]'));
		this.typeViewButton.click();
	}
	
	this.gotoFieldViewPage = function() {
		this.fieldViewButton = element(by.css('a[href*="#/FieldView"]'));
		this.fieldViewButton.click();
	}
	
	
	this.gotoUserViewPage = function() {
		this.userViewButton = element(by.css('a[href*="#/UserView"]'));
		this.userViewButton.click();
	}

}

module.exports = Navigation;