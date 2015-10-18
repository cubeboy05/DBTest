$( document ).ready(function() {

    var isLogged = false;
	/**
	 * Method used to log into the application
	 */
	$(document).on("pageinit", "#loginForm", function () {
	    $("#form1").on("submit", function (event) {
	    	alert("ll");
	        event.preventDefault();
	        $.ajax({
	            type: "GET",
	            url: "http://www.karsv.com/login.php",
	            data: $("#form1").serialize(),
	            success: function (data) {
	                console.log(data);
	                if (data.match('successbully')) {
	                    isLogged = true;
	                    //$.mobile.changePage("#home");
	                    alert("SUCCESS");
	                } else {
	                    alert("You entered the wrong username or password. Please try again.");
	                }
	            }
	        });
	    });
	});
	
});