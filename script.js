function message(){
	let name = document.getElementById("name").value;
	let recievers_Name = document.getElementById("receiversName").value;
	
	let newWindow = window.open("", "_blank",);
	newWindow.document.write("<h4>hello, " + recievers_Name + " how are you doing today? "+ "</h4>");
	newWindow.document.write("<h4>it's your friend " + name + " </h4>");

	newWindow.document.write('<button onclick="copyLink();">copy link</button>');
	
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
	
	console.log(name + recievers_Name);
}