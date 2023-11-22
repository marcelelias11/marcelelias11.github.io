/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
var screenextended = 0;

if (screenextended == 0) {
	function dropdown() {
		document.getElementById("dropbtn").classList.toggle("hidebutton");
		let id = null;
		const header = document.getElementById("header");
		let pos = 159;
		clearInterval(id);
		id = setInterval(frame, 0.1);
			function frame() {
			if (pos == 401) {
				clearInterval(id);
				document.getElementById("dropdown").classList.toggle("show");
				document.getElementById("upbtn").classList.toggle("showbutton");
			} 
			else {
				header.style.height = pos + "px";
				pos++;
			}
		}
	}
	var screenextended = 1;
}
if (screenextended == 1) {
	function dropup() {
		let id = null;
		const header = document.getElementById("header");
		let pos = 401;
		clearInterval(id);
		id = setInterval(frame, 0.1);
			function frame() {
			if (pos == 159) {
				clearInterval(id);
			} 
			else {
				header.style.height = pos + "px";
				pos--;
			}
		}
		document.getElementById("dropbtn").classList.toggle("hidebutton");
		document.getElementById("upbtn").classList.toggle("showbutton");
		var dropdowns = document.getElementsByClassName("navbar");
			var i;
			for (i = 0; i < dropdowns.length; i++) {
				var openDropdown = dropdowns[i];
				if (openDropdown.classList.contains('show')) {
					openDropdown.classList.remove('show');
				}
			}
		var showbtn = document.getElementById("dropbtn");	
			if (showbtn.classList.contains('hidebutton')) {
					showbtn.classList.remove('hidebutton');
					showbtn.classList.toggle("showbutton");
			}
		var hidebtn = document.getElementById("upbtn");
			if (hidebtn.classList.contains('showbutton')) {
					hidebtn.classList.remove("showbutton");
					hidebtn.classList.toggle("hidebutton");
			}
	}
	var screenextended = 0;
}
