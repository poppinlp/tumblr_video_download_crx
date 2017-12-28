chrome.contextMenus.create({
	title: 'download video from tumblr',
	contexts: ['frame'],
	documentUrlPatterns: ['*://*.tumblr.com/video/*'],
	onclick: info => {
		$.get(info.frameUrl).then(html => {
			const url = $(html).find('source').attr('src');

			chrome.downloads === null
				? chrome.tabs.create({ url })
				: chrome.downloads.download({ url });
		});
	}
});
