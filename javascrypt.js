
			$(document).ready(function(){

			var btnClick=true;

		    $("#show").on('click', function() {
		    	if (btnClick) {
		    		$(".esconder").show();
		    		btnClick = !btnClick
		    	} else {
		    		$(".esconder").hide();
		    		btnClick = !btnClick
		    	}
		        
		         return false;
		      });
		    });
		 
		
