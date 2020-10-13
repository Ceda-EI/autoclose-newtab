function autoCloseNewTab(tabId, changeInfo, tab) {
	console.log(tabId, changeInfo, tab)
	if (tab.url.trim() === "about:newtab")
		browser.tabs.remove([tabId]);
}
browser.tabs.onUpdated.addListener(autoCloseNewTab);
