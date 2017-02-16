var UIGridWrapper = function(gridElement){
  this.gridElement = gridElement;
};

UIGridWrapper.prototype.getRow = function(rowNum){
  return this.gridElement.element(by.repeater('(rowRenderIndex, row) in rowContainer.renderedRows track by $index').row( rowNum ));
};

UIGridWrapper.prototype.selectRow = function(rowNum){
  var row = this.getRow(rowNum),
      button = row.element(by.css('.ui-grid-selection-row-header-buttons'));

  return browser.actions().mouseMove(button).mouseDown(button).mouseUp().perform();
};

UIGridWrapper.prototype.headerCell = function(expectedCol){
  return this.gridElement.element(by.css('.ui-grid-render-container-body')).element( by.css('.ui-grid-header')).element(by.repeater('col in colContainer.renderedColumns track by col.uid').row( expectedCol));
};

UIGridWrapper.prototype.enterFilterInColumn = function(colNumber,filterValue){
  var headerCell = this.headerCell(colNumber);
  return headerCell.element(by.css('.ui-grid-filter-input')).sendKeys(filterValue);
};

UIGridWrapper.prototype.cancelFilterInColumn = function(colNumber){
  var headerCell = this.headerCell(colNumber),
      cancelButton = headerCell.element(by.css('.ui-grid-icon-cancel'));

  return cancelButton.click();
};

UIGridWrapper.prototype.doubleClickRow = function(rowNum){
  var row = this.getRow(rowNum),
      button = row.element(by.css('.ui-grid-selection-row-header-buttons'));

  return browser.actions().doubleClick(button).perform();
}

module.exports = UIGridWrapper;