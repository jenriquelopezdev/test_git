$(document).ready(function() {	

	function isText(value) {
		if (typeof value == "string") {
			return true
		} else {
			return false
		}
	}

	function isNumber(value) {
		if (typeof value == "number") {
			return true
		} else {
			return false
		}
	}

	function validEmail(value) {
		var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (value.match(mailformat)) {
			return true
		} else {
			return false
		}
		
	}

	function validUrl(value) {
		var format = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
		if (value.match(format)) {
			return true
		} else {
			return false
		}
	}

	function isEmpty(value) {
		if (value.length <= 0) {

		return true
		} else {
			return false
		}
	}
	
		// $.post(URL, parametros,
		// 	function(datos, estados, xhr)
		// 	tipoDato)
		// $.post("046-ejemplo-jquery-post-pagina-externa02.php",
		// 		function)(htmlexterno){
		// 			$("cargaexterna").html(htmlexterno);
	$(document).ready(function(){
		$(".mostrar").on( "btnClick", function() {
			// $('#target').show(); //muestro mediante id
			$('#ver').show(); //muestro mediante clase
		 });
		$("#esconder").on( "btnClick", function() {
			$('#ocultar').hide(); //oculto mediante id
			// $('.target').hide(); //muestro mediante clase
		});
	});
        
    $('#btn').click(function () {

		var name = $('#name').val();
		var email = $('#email').val();
		var webSite = $('#webSite').val();
		var budget = $('#budget').val();
		var tuneline = $('#tuneline').val();
		var validate = $('#validate').val();
		var message = $('#message').val();


		if (isEmpty(name)) {
			//Si
			alert('Ingrese su nombre')
		} else {
			//No
			if (!isText(name)) {
				//No
				alert('Ingrese por favor texto no numeros')
			}
		}

		if (isEmpty(email)) {
			alert('Ingrese su email')
		} else {
			if (!validEmail(email)) {
				//No es email
				alert('El email no es valido')
			}
		}



		if (isEmpty(webSite)) {
			alert('Ingrese su webSite')
		} else {
			if (!validUrl(webSite)) {
				//No es url
				alert('El webSite no es valido')
			}
		}


		if (isEmpty(budget)) {
			alert('Ingrese su budget')
		} else {
			if (!isText(budget)) {
				//No es text
				alert('El budget no es valido')
			}
		}

		if (isEmpty(tuneline)) {
			alert('Ingrese su tuneline')
		} else {
			if (!isNumber(tuneline)) {
				//No es numero
				alert('El tuneline no es valido')
			}
		}

		if (isEmpty(validate)) {
			alert('Ingrese su validacion')
		} else {
			if (!isNumber(validate)) {
				//No es numero
				alert('El tuneline no es valido')
			} else {
				// Si es numero
				if (validate != 3) {
					alert('La oprecion no es correcta')
				}
			}
		}

		if (isEmpty(message)) {
			//Si
			alert('Ingrese su message')
		} else {
			//No
			if (!isText(message)) {
				//No
				alert('El message no es valido')
			}
		
		}
    })
})