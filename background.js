// create a context menu
browser.contextMenus.create({
    id: "ddg",
    title: "Seacrh on Google",
    contexts: ["selection"]
});

//add action listener to the context menu
browser.contextMenus.onClicked.addListener(contextMenuAction);

function contextMenuAction(info, tab) {
     const url = "https://www.google.com/search?q="+info.selectionText;
    browser.tabs.create({url: url});
}


