// Called when the user clicks on the browser action.
window.localStorage.domMapperState = 'off';
const mapDomScript = {
	code: `
  javascript: [].forEach.call(document.querySelectorAll('*'), function(a) {
    a.style.outline = 'solid hsl(' + (a + a).length * 9 + ',99%,50%)1px';
  });`
};

const resetDOM = {
	code: `javascript: [].forEach.call(document.querySelectorAll('*'), function(a) {
    a.style.outline = 'none';
  });`
};

chrome.browserAction.onClicked.addListener((tab) => {
	// No tabs or host permissions needed!
	switch (window.localStorage.domMapperState) {
		case 'off':
			chrome.tabs.executeScript(mapDomScript);
			window.localStorage.domMapperState = 'on';
			console.log('DOM has been visualized');
			break;
		case 'on':
			chrome.tabs.executeScript(resetDOM);
			window.localStorage.domMapperState = 'off';
			console.log('DOM has been reset');
			break;
		default:
			chrome.tabs.executeScript(mapDomScript);
			break;
	}
});
