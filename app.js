        var count = 0;
		var message = ['Clique', 'Va y plus vite', 'Encore', 'cest bien tu as maximisé']
		$('#click').on('click', function() {
			count++;
			$("#compteur").html('nombres de clics: ' + count);{
			console.log(count);
				
			}
		});