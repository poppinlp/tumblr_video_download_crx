chrome.contextMenus.create({
    title: 'download video from tumblr',
    contexts: ['frame'],
    documentUrlPatterns: ['*://*.tumblr.com/video/*'],
    onclick: info => {
        $.get(info.frameUrl).then(html => {
            var url = $(html).find('source').attr('src');
            if (chrome.downloads !== null) {
                chrome.downloads.download({'url':url})
            } else {
                chrome.tabs.create({'url':url})
            }
        });
    }
});
