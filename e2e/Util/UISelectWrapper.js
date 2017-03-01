var UISelectWrapper = function(element){
  this.dropDownElement = element;
};

UISelectWrapper.prototype.selectItem = function(itemString){
  var selectInput = this.dropDownElement.element(by.css('.ui-select-search'));
  selectInput.sendKeys(itemString);
  return element.all(by.css('.ui-select-choices-row-inner span')).first().click();
};

module.exports = UISelectWrapper;