function render(){
	c3.generate({
		bindto: '#graph',
		x:"time",
		columns:[ times, moods ]
	});
}
