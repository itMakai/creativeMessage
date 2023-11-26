function message(){
	let name = document.getElementById("name").value;
	let recievers_Name = document.getElementById("receiversName").value;
	 
	let newWindow = window.open("", "_blank",);
	newWindow.document.write("<h4>hello, " + recievers_Name + " how are you doing today? <br> "+  "it's your friend " + name + " <br> </h4>");
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
		newWindow.document.write("<h4> hi! " + recievers_Name + " you have an amazing attribute <br> check out: <br>" +
		" love 99% <br>" + " wisdom 90% <br>" + " trustworth 95% <br>"  +  " caring 90% </h4>");
	}
	else if(recievers_Name.length = 6 && recievers_Name.length < 8){
		newWindow.document.write("<h4> wow! " + recievers_Name + " you have an amazing attribute <br> check out: <br>" +
		" love 90% <br>" + " wisdom 95% <br>" + " trustworth 99% <br>"  +  " caring 89% </h4>");
	}else{
		newWindow.document.write("<h4> wow! " + recievers_Name + " you have an amazing attribute <br> check out: <br>" +
		" love 99% <br>" + " wisdom 90% <br>" + " trustworth 95% <br>"  +  " caring 90% </h4>");
	}
	newWindow.document.write(' <br> <button onclick="copyLink();">copy link</button>');
	newWindow.document.write(`
	<style>
	body{
		background-color: green;
		color: #fff;
		align-items: center;
		justify-content: center;
		background:url('love1.jpeg');

	}
	h4{
		margin-left: 20%;
		display: inline-block;
		background-color: purple;
		padding:25px;
		border-radius:30% 0 30%;
		background: url('love.jpeg');
		color: red;
	}
	button{
		margin-left: 25%;
		background-color: red;
		padding: 25px;
		border-radius: 50% ;
		cursor: pointer;
		color: white;
		font-size: 15px;
	}
	</style>
	`);
	
	console.log(name + recievers_Name);
}