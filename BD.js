const form = document.getElementById('form');
form.addEventListener('submit', function(e){

var p = document.querySelector('#par')
		var cp = document.querySelector('#cp')
		if (cp.value.length != 5){
			p.innerHTML = "Mauvais code"
			e.preventDefault()
		}
		
})