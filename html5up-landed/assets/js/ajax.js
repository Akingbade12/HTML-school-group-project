
$(document).ready(function() {
   console.log('we are in');
	$('#butsubmit').on('click', function() {
		$("#butsubmit").attr("disabled", "disabled");
		var firstname = $('#firstname').val();
        var lastname = $('#lastname').val();
		var email = $('#email').val();
		var comment = $('#comment').val();
	
		if(firstname!="" && lastname!="" && email!="" && comment!="" ){
    
			$.ajax({
       
				url: "save.php",
				type: "POST",
				data: {
					firstname: firstname,
          lastname: lastname,
					email: email,
					comment: comment			
				},
				cache: false,
				success: function(dataResult){
						console.log(dataResult);
					var dataResult = JSON.parse(dataResult);
				
					if(dataResult.statusCode==200){
						$("#butsave").removeAttr("disabled");
						$('#fupForm').find('input:text').val('');
						$("#success").show();
						$('#success').html('Data added successfully !'); 						
					}
					else if(dataResult.statusCode==201){
					   alert("Error occured !");
					}
					
				}
			});
		}
		else{
			alert('Please fill all the field !');
		}
	});
});