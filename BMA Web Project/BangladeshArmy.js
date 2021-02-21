function demo(){
	var result = document.getElementById('result');
	var dateTime =new Date();
	var hours = dateTime.getHours();
	var minutes= dateTime.getMinutes();
	var seconds = dateTime.getSeconds();
	
	
	var myWatch = hours+ ':'+ minutes+ ":" + seconds;
	result.innerHTML=myWatch;
	
}

setInterval(demo,1000);