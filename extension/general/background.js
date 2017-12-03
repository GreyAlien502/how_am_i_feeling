URL = "pythonanywhere.com/idefk?search="

GET = (url, callback) => {
	var request = new XMLHttpRequest();
	request.onreadystatechange = callback;
	request.open("GET",url,true);
}

times = ["time"]
moods = ["mood"]

chrome.omnibox.onInputEntered.addListener(
	(search, disposition) => {
		GET(
			URL+encodeURIComponent(search),
			request => (
				times.push( new Date() ), 
				moods.push( parseFloat(request.responseText) )
			)
		)
	}
)
