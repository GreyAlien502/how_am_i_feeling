let port = chrome.runtime.connect({ name: "moodTransfer" });
port.postMessage("Commence emotion transfer.");
port.onMessage.addListener(function (moodJSON) {
	let parsedJson = JSON.parse(moodJSON);
	var chart = c3.generate({
		bindto: '#chart',
		data: {
			json: {
				mood: parsedJson
			}
		
		},
		axis : {
			y: {
				min: -1,
				max: 1
			}
		}
	});
});
