/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdown() {
	let id = null;
	const header = document.getElementById("header");
	let pos = 160;
	clearInterval(id);
	id = setInterval(frame, 5);
		function frame() {
		if (pos == 240) {
			clearInterval(id);
		} 
		else {
			header.style.height = pos + "px";
			pos++;
		}
	}
	document.getElementById("dropdown").classList.toggle("show");
	document.getElementById("dropbtn").classList.toggle("hidebutton");
	var screenextended = 1;
}
//dummy
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
	var screenextended;
	if (screenextended == 1) {
		if (!event.target.matches('.dropbtn')) {
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
			let id = null;
			let pos = 240;
			clearInterval(id);
			id = setInterval(frame, 5);
			function frame() {
				if (pos == 160) {
					clearInterval(id);
				} 
				else {
					header.style.height = pos + "px"; 
					pos--;
				}
			document.getElementById("dropbtn").classList.toggle("showbutton");
			}
		}
		var screenextended = 0;
	}
	
}
