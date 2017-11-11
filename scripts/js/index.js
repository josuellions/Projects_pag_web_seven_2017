// Menu superior
$( document ).ready( function( ) {
	
	$( "a" ).each( function( index ) {
		let campos = [ this.id ];

		campos.forEach( function( campo ) {
			
			// console.log(campo)

			let indice = campo.length;

			let pag = [ "pagHome", "pagSobre", "pagNossoVal", "pagLinhaTemp", "pagService", "pagServceOn", "pagCadastro", "pagContato", 
						 			"pagHomeMob", "pagSobreMob", "pagNossoValMob", "pagLinhaTempMob", "pagServiceMob", "pagServceOnMob", "pagCadastroMob", "pagContatoMob", 
						 		];

			let link = [ "index.html", "QuemSomos.html","NossosValores.html", "LinhaTempo.html", "NossosServicos.html", "ServicosOnline.html", "Cadastro.html", "Contato.html"]

			if( campo == pag[0] ) {

				$( "#" + pag[0] ).attr( "href" , link[0] );

			} else if ( campo === pag[1] ) {

				$( "#" + pag[1] ).attr( "href", link[1] );

			} else if ( campo === pag[2] ) {

				$( "#" + pag[2] ).attr( "href", link[2] );

			} else if ( campo === pag[3] ) {

				$( "#" + pag[3] ).attr( "href", link[3] );

			} else if ( campo === pag[4] ) {

				$( "#" + pag[4] ).attr( "href", link[4] );

			} else if ( campo === pag[5] ) {
			 	
			 	$( "#" + pag[5] ).attr( "href", link[5] );

			} else if ( campo === pag[6] ) {
			 	
			 	$( "#" + pag[6] ).attr( "href", link[6] );

			} else if ( campo === pag[7] ) {
				
				$( "#" + pag[7] ).attr( "href", link[7] );

			} else if ( campo === pag[8] ) {
				
				$( "#" + pag[8] ).attr( "href", link[0] );

			} else if ( campo === pag[9] ) {
				
				$( "#" + pag[9] ).attr( "href", link[1] );

			} else if ( campo === pag[10] ) {
				
				$( "#" + pag[10] ).attr( "href", link[2] );

			} else if ( campo === pag[11] ) {
				
				$( "#" + pag[11] ).attr( "href", link[3] );

			} else if ( campo === pag[12] ) {
				
				$( "#" + pag[12] ).attr( "href", link[4] );

			} else if ( campo === pag[13] ) {
				
				$( "#" + pag[13] ).attr( "href", link[5] );

			} else if ( campo === pag[14] ) {
			 	
			 	$( "#" + pag[14] ).attr( "href", link[6] );

			} else if ( campo === pag[15] ) {
				
				$( "#" + pag[15] ).attr( "href", link[7] );

			} else if ( campo !== "" && campo != "pagSairMob") {

				let varCampo = '#' + campo;

				function outMouse( ){
				 	$( varCampo ).mouseout( function( ) {
						$( varCampo ).css({ "opacity":"100" } );
					} );
				};

				$( varCampo ).mouseover( function( ) {
					
					$( varCampo ).css({ "opacity":".5" } );
					
					$( varCampo ).click( function( ) {
					 		
					 		outMouse( );

					 		// $("#alertInfo").html( campo.substr(3) + " Em Desenvolvimento !!!" );


	 					$("#avisos").css('color','red').css('font-weight','bold').css('font-size','1.8em')
	 										.html('<i class="glyphicon glyphicon-remove" />' + ' ' + campo.substr(3) + '   Em Desenvolvimento !!!');
                      $('#myModal').modal('toggle');
                      return  false;
					 	} );
					
					outMouse( );

				} );

			}
		
		} );
	
	} );

} );

// Icone Rede Social - Rodapé
$( document ).ready( function( ) {
	$( "img" ).each( function( index ) {
		let campos = [ this.id ];
		
		campos.forEach( function( campo ) {

		let indice = campo.length;
		
			if (campo != "imgBannerHome-01") {

				let varCampo = '#' + campo;

					$( varCampo ).click( function( ) {
				 		
				 		// alert( "Link para " + campo.substr(8) + " Em Desenvolvimento !!!" );

 					$("#avisos").css('color','red').css('font-weight','bold').css('font-size','1.8em')
								.html('<i class="glyphicon glyphicon-remove" />' + ' ' + campo.substr(8) + '   Em Desenvolvimento !!!');
              $('#myModal').modal('toggle') ;
              return  false;
				 	} );
      
				}

			} );

	} );

} );

// Botão Cadastro 
// $( "#btnCadastro" ).click( function ( ) {
// 	// alert( "Campo Cadastro em Desenvolvimento!!!")

// 	$("#avisos").css('color','red').css('font-weight','bold').css('font-size','1.8em')
// 							.html('<i class="glyphicon glyphicon-remove" />' + '  Campo CADASTRO Em Desenvolvimento !!!');
//             $('#myModal').modal('toggle');
//             return  false;
// });

// BOTÃO SAIR
// $( "#pagSairMob" ).click( function ( ) {
// 	$( window ).unload( function ( ) {
// 		$.ajax( {
// 			url:"index.html"
// 		});
// 	});
// });

$( "#pagSairMob").click( function( ){
 
 $( location ).attr( 'href', 'https://google.com') 

});

// EFEITO MENU SUPERIOR
$('#menu_Desk').click(function() {
	$('#liMenu' ).toggle(function()
	{
	    $(this).click(function()
	    {
	    	$( '#liMenu' ).animate( ).slideToggle(1).slideDown(70);
	        // $( 'ul' ).animate( function( ){
						// if( click().value === true ){
				 // $( 'ul' ).animate( ).slideToggle( 1 ).slideDown(700);
				 $(this).ready(function()
	    {
				 // $('li' ).Down(70);
				 $( '#liMenu' ).animate( ).slideUp(700);
				});
	    });
	});
	// function()
	// {
	//     $(this).click(function()
	//     {
	//       // $( 'ul' ).animate( ).slideToggle( 1 ).slideUp(700);
	//       // $( 'ul' ).animate( ).slideUp(700);
	//     });
	// });

});


			// $( 'li' ).animate( ).fadeToggle(1).slideDown(1000);
			// $( 'li' ).toggle( ).animate( ).slideUp(900);

				// $( '#liMenu' ).animate( ).slideToggle(1).slideDown(700)
				

				// $( 'li' ).animate( ).fadeToggle( 1 ).fadeIn(900).fadeOut(900);
				

				// $( 'li' ).slideToggle(1).slideUp(10000)

				// .slideUp(300).foogle();
				// .slideDown(150)
		// });		
	// } );