exports.gotoFieldViewPage = gotoFieldViewPage;

function gotoFieldViewPage(){
	this.fieldViewButton = element(by.css('a[href*="#/FieldView"]'));
	this.fieldViewButton.click();
}