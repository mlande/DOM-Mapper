// Called when the user clicks on the browser action.
const on = false;
const mapDomScript = {
	code: `
  javascript: [].forEach.call(document.querySelectorAll('*'), function(a) {
    a.style.outline = 'solid hsl(' + (a + a).length * 9 + ',99%,50%)1px';
  });`
};

const resetDOM = {
	code: `javascript: [].forEach.call(document.querySelectorAll('*'), function(a) {
    a.style.outline = none;
  });`
};

chrome.browserAction.onClicked.addListener((tab) => {
	// No tabs or host permissions needed!
	if (!on) chrome.tabs.executeScript(mapDomScript);
	else chrome.tabs.executeScript(resetDOM);
});
