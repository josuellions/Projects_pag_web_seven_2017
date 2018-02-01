/*
* Banco de dado off-line web CADASTRO
*/


// import android.app.Activity;
// import android.app.AlertDialog;
// import android.content.Context;
// import android.database.Cursor;
// import android.database.sqlite.SQLiteDatabase;
// import android.os.Bundle;
// import android.webkit.WebView;
// import android.webkit.WebChromeClient;
// import android.webkit.WebSettings;
// import android.widget.Toast;


let localCadBD = null;


function onInit( ) {
	try {
		if ( !window.openDatabase ) {
			
			alert( "Erro: Seu navegado não permite banco de dados local,\n por favor acesse de outro navegado!");

		} else {
			
			initDB( );
			createTables( );
			// queryAndUpdateOverview( );

		}

	}	catch( e ) {
		
		if ( e == 2 ) {
		
			alert( "Erro: Versão de banco dados inválida!" );
		
		} else {

			alert( "Erro: Erro desconhecido: " + e + "!!!" );
		}

		return;
	}

// CRIANDO BANDO DADOS
	function initDB ( ) {
		let shortName = 'BDCadastro';
		let version = '1.0';
		let displayName = 'Cadastrobase';
		let maxSize = 65536; //Em bytes
		localCadBD = window.openDatabase( shortName, version, displayName, maxSize);
	}

// CRIANDO TABELAS
	function createTables ( ) {
		let query = 'CREATE TABLE IF NOT EXISTS tbClientes (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, nome VARCHAR NOT NULL, cpfcnpj VARCHAR NOT NULL, telefone VARCHAR NOT NULL, celular VARCHAR NOT NULL, email VARCHAR NOT NULL);';

		try {

			localCadBD.transaction( function ( transaction ) {

					transaction.executeSql( query, [], nullDataHandler, errorHandler );
					// alert( "Tabela criada com sucesso!" );
			} );

		} catch ( e ) {

			alert( "Erro: Data base não pode ser criada " + e + "!!!" );
			return;

		}
	}
}

// Função de tratamento 

// Tratamento erros
errorHandler = function ( transaction, error ) {
	alert ( "Erro: " + error.message );
	return true;
}

nullDataHandler = function ( transaction, results ) {
}

// Inserindo Dados na tabela
function onCreate( ) {

	let nome = $( "#nomeCliente" ).val( );
	let cpfcnpj = $( "#cpfCliente" ).val( );
	let telefone = $( "#telCliente" ).val( );
	let celular = $( "#celCliente" ).val( );
	let email = $( "#emailCliente" ).val( );

	console.log (nome, cpfcnpj, telefone, celular, email);

	if ( nome == "" || cpfcnpj == "" || telefone == "" || celular == "" || email == "" ) {

		alert( "Erro:  Preenchimento de todos os campos é obrigatórios!!!" );
	
	} else {

		let query = "insert into tbClientes (nome, cpfcnpj,telefone, celular, email) VALUES (?,?,?,?,?);";

		try {

			localCadBD.transaction( function( transaction ) {
				transaction.executeSql( query, [nome, cpfcnpj, telefone, celular, email], function( transaction, results ) {

					if( !results.rowsAffected ) {
						alert( "Erro: Inserção não realizada!" );

					} else {

						// updateForm( "", " ");
						alert( "Inserção realizada, linha id: " + results.insertId );
						// queryAndUpdateOverview( );
					}
				}, errorHandler );

			} );
		
		}catch( e ) {

			alert( "Erro: Inserção não realizada " + e + "!!!" );

		}
	}
}


$( "#btnCadastro").click( function( ){

 	onCreate( )

 } );