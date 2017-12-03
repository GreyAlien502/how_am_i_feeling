//function render(){
//	c3.generate({
//		bindto: '#graph',
//		x:"time",
//		columns:[ times, moods ]
//	});
//}
let port = chrome.runtime.connect({name:"moodTransfer"});
port.postMessage("Commence emotion transfer.");
port.onMessage.addListener( moodJSON =>
	document.getElementById("text").innerHTML = moodJSON
);
