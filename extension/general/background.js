let URL = "http://127.0.0.1:8080/api?message=";

let GET = (url, callback) => {
	var request = new XMLHttpRequest();
	request.onreadystatechange = (() => {callback(request);});
	request.open("GET",url,true);
	request.send(null);
};

let moods = [];

chrome.omnibox.onInputEntered.addListener(
	(search, disposition) => { GET(
		URL+encodeURIComponent(search),
		request => {
			if(request.readyState == 4 ){
				moods.push( parseFloat(request.responseText) );
			}
		}
	) }
)

chrome.runtime.onConnect.addListener(port =>
	port.onMessage.addListener( message =>
		port.postMessage(JSON.stringify(moods))
	)
);

