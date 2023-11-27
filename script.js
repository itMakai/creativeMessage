function message(){
	let name = document.getElementById("name").value;
	let recievers_Name = document.getElementById("receiversName").value;
	 
	let newWindow = window.open("", "_blank",);
	newWindow.document.write(" <center> <h4>hello, " + recievers_Name + " how are you doing today? <br> "+  "it's your friend " + name + " <br> </h4> </center>");
	newWindow.document.write("<br>");

	
	
	let newWindowUrl = newWindow.location.href;
	
	newWindow.copyLink = function (){
		let tempkInput = document.createElement("input");
		tempkInput.value = newWindowUrl;
		newWindow.document.body.appendChild(tempkInput);
		tempkInput.select();
		document.execCommand("copy");

		newWindow.document.body.removeChild(tempkInput);
		alert("link copied: " + newWindowUrl);
	};

	if(recievers_Name.length  = 5){
		newWindow.document.write(" <center> <h4> wow! " + recievers_Name + " you have an amazing attribute <br> check out: <br>" +
		" love 99% <br>" + " wisdom 90% <br>" + " trustworth 95% <br>"  +  " caring 90% </h4> </center>");
	}
	else if(recievers_Name.length = 6 && recievers_Name.length < 8){
		newWindow.document.write(" <center> <h4> WOW! " + recievers_Name + " you have an amazing attribute <br> check out: <br>" +
		" love 90% <br>" + " wisdom 95% <br>" + " trustworth 99% <br>"  +  " caring 89% </h4> </center> ");
	}else{
		newWindow.document.write(" <center><h4> WOW! " + recievers_Name + " you have an amazing attribute <br> check out: <br>" +
		" love 99% <br>" + " wisdom 90% <br>" + " trustworth 95% <br>"  +  " caring 90% </h4> </center>");
	}
	newWindow.document.write('<center> <br> <button onclick="copyLink();">copy link</button> </center>');
	newWindow.document.write(`
	<style>
	body{
		background-color: green;
		color: red;
		align-items: center;
		//justify-content: space-around;
		background:url('love1.jpeg');
		font-size:16px;
		font-weight:bold;

	}
	h4{
		margin-top: 0%;
		display: inline-block;
		background-color: red;
		padding:25px;
		border-radius:30% 0 30%;
		//background: url('love.jpeg');
		color: white;
	}
	button{
		//margin-left: 25%;
		background-color: red;
		padding: 25px;
		border-radius: 50% 0 50%;
		cursor: pointer;
		color: white;
		font-size: 15px;
	}
	</style>
	<body> 
	<p>
	<center>
	&copy creativeMessage 2023.</p>
	<p> </p>
	</center>
	</body>
	`);
	
	console.log(name + recievers_Name);
}