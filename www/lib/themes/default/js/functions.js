$(document).on("ready", function() {
	var text  = new Array;
	var text2 = new Array;
	
	$.ajax({
		type: "POST",
		url: PATH + "/get/" ,
		data: "",
		dataType: "json",
		beforeSend: function(jqXHR, settings){
			$(".loadgif").show();
		},
		
		success: function(response, textStatus, jqXHR) {
		
			var data = response["response"];
			$("#timeline").fadeIn();
			
			text[0] = Array('Year', 'Robo de Vehículos', 'Robo de Transeuntes', 'Robo de Vehículos s/v', 'Robo de Transeuntes s/v', 'Lesiones con arma blanca', 'Homicidios Dolosos', 'Extorsión', 'Secuestro');
			text2[0] = Array('Year', 'Robo de Vehículos', 'Robo de Transeuntes', 'Robo de Vehículos s/v', 'Robo de Transeuntes s/v', 'Lesiones con arma blanca', 'Homicidios Dolosos', 'Extorsión', 'Secuestro');
			var i=0;
			
			for(var j in data) {
				i=i+1;
				$("#" + j).html(getTable());
				$("#" +  j + " .denuncias tbody tr .d100_rvv").html(parseFloat(data[j].d100_rvv).toFixed(2));
				$("#" +  j + " .denuncias tbody tr .d100_rvt").html(parseFloat(data[j].d100_rvt).toFixed(2));
				$("#" +  j + " .denuncias tbody tr .d100_rsvv").html(parseFloat(data[j].d100_rsvv).toFixed(2));
				$("#" +  j + " .denuncias tbody tr .d100_rsvt").html(parseFloat(data[j].d100_rsvt).toFixed(2));
				$("#" +  j + " .denuncias tbody tr .d100_lda").html(parseFloat(data[j].d100_lda).toFixed(2));
				$("#" +  j + " .denuncias tbody tr .d100_hd").html(parseFloat(data[j].d100_hd).toFixed(2));
				$("#" +  j + " .denuncias tbody tr .d100_ext").html(parseFloat(data[j].d100_ext).toFixed(2));
				$("#" +  j + " .denuncias tbody tr .d100_sec").html(parseFloat(data[j].d100_sec).toFixed(2));
				
				$("#" + j).append(getTable2());
				$("#" +  j + " .incidencias tbody tr .d100_rvv").html(parseFloat(data[j].i_rvv).toFixed(2));
				$("#" +  j + " .incidencias tbody tr .d100_rvt").html(parseFloat(data[j].i_rvt).toFixed(2));
				$("#" +  j + " .incidencias tbody tr .d100_rsvv").html(parseFloat(data[j].i_rsvv).toFixed(2));
				$("#" +  j + " .incidencias tbody tr .d100_rsvt").html(parseFloat(data[j].i_rsvt).toFixed(2));
				$("#" +  j + " .incidencias tbody tr .d100_lda").html(parseFloat(data[j].i_lda).toFixed(2));
				$("#" +  j + " .incidencias tbody tr .d100_hd").html(parseFloat(data[j].i_hd).toFixed(2));
				$("#" +  j + " .incidencias tbody tr .d100_ext").html(parseFloat(data[j].i_ext).toFixed(2));
				$("#" +  j + " .incidencias tbody tr .d100_sec").html(parseFloat(data[j].i_sec).toFixed(2));
				
				$("#" + j).append(getTable3());
				$("#" +  j + " .totales tbody tr .poblacion").html(parseFloat(data[j].incidencia).toFixed(2));
				$("#" +  j + " .totales tbody tr .c_negra").html(parseFloat(data[j].c_negra).toFixed(2));
				$("#" +  j + " .totales tbody tr .total_sent").html(parseFloat(data[j].total_sent).toFixed(2));
				$("#" +  j + " .totales tbody tr .impunidad").html(parseFloat(data[j].impunidad).toFixed(2));
				$("#" +  j + " .totales tbody tr .eficiencia").html(parseFloat(data[j].eficiencia).toFixed(2));
				$("#" +  j + " .totales tbody tr .incidencia").html(parseFloat(data[j].incidencia).toFixed(2));
				
				
				text[i]  = Array(j, parseInt(data[j].d100_rvv), parseInt(data[j].d100_rvt), parseInt(data[j].d100_rsvv), parseInt(data[j].d100_rsvt), parseInt(data[j].d100_lda), parseInt(data[j].d100_hd), parseInt(data[j].d100_ext), parseInt(data[j].d100_sec));
				text2[i] = Array(j, parseInt(data[j].i_rvv), parseInt(data[j].i_rvt), parseInt(data[j].i_rsvv), parseInt(data[j].i_rsvt), parseInt(data[j].i_lda), parseInt(data[j].i_hd), parseInt(data[j].i_ext), parseInt(data[j].i_sec));
			}
			
		},

		error: function(jqXHR, textStatus){

		},

		complete: function(jqXHR, textStatus){
			$.scrollTo('#auto', 800);
			drawChart(text);
			drawChart2(text2);
		}
	});
	
   var estados_abr = [ "AGS","BC","BCS","CAM","CHIS","CHIH","COA","COL",
			  "DF","DGO","MEX","GTO","GRO","HGO","JAL","MICH",
			  "MOR","NAY","NL","OAX","PUE","QUE","QROO","SLP",
			  "SIN","SON","TAB","TAMPS","TLAX","VER","YUC","ZAC" ];

	var estados = [ "Aguascalientes","Baja California Norte","Baja California Sur",
		          "Campeche","Chiapas","Chihuahua","Coahuila","Colima",
		  "Distrito Federal","Durango","Estado de México","Guanajuato",
		  "Guerrero","Hidalgo","Jalisco","Michoacán","Morelos","Nayarit",			
		  "Nuevo León","Oaxaca","Puebla","Querétaro","Quintana Roo",					
		  "San Luis Potosí","Sinaloa","Sonora","Tabasco","Tamaulipas",					
		  "Tlaxcala","Veracruz","Yucatán","Zacatecas" ];
		  
	$("a#toTop").on("click", function(e){
			$.scrollTo('#top', 800);
			return false;
	})	 
	
	
	$(".Estado").hover(
		function(){ $(this).css("fill","#9ae5e5");},
		function(){ $(this).css("fill","#00b1b0");}
	)

	$(".Estado").on("click", function(){
		var id   = $(this).attr("id");
		var text  = new Array;
		var text2 = new Array;
		
		$.ajax({
			type: "POST",
			url: PATH + "/get/" + $(this).attr("id"),
			data: "",
			dataType: "json",
			beforeSend: function(jqXHR, settings){
				$(".loadgif").show();
			},
			
			success: function(response, textStatus, jqXHR) {
				
				for(var i in estados) {
				  if(id == estados_abr[i]) {
					$(".title-city ").text(estados[i]);
				  }
				}
			
				var data = response["response"];
				$("#timeline").fadeIn();
				
				text[0] = Array('Year', 'Robo de Vehículos', 'Robo de Transeuntes', 'Robo de Vehículos s/v', 'Robo de Transeuntes s/v', 'Lesiones con arma blanca', 'Homicidios Dolosos', 'Extorsión', 'Secuestro');
				text2[0] = Array('Year', 'Robo de Vehículos', 'Robo de Transeuntes', 'Robo de Vehículos s/v', 'Robo de Transeuntes s/v', 'Lesiones con arma blanca', 'Homicidios Dolosos', 'Extorsión', 'Secuestro');
				var i=0;
				
				for(var j in data) {
					i=i+1;
					$("#" + j).html(getTable());
					$("#" +  j + " .denuncias tbody tr .d100_rvv").html(parseFloat(data[j].d100_rvv).toFixed(2));
					$("#" +  j + " .denuncias tbody tr .d100_rvt").html(parseFloat(data[j].d100_rvt).toFixed(2));
					$("#" +  j + " .denuncias tbody tr .d100_rsvv").html(parseFloat(data[j].d100_rsvv).toFixed(2));
					$("#" +  j + " .denuncias tbody tr .d100_rsvt").html(parseFloat(data[j].d100_rsvt).toFixed(2));
					$("#" +  j + " .denuncias tbody tr .d100_lda").html(parseFloat(data[j].d100_lda).toFixed(2));
					$("#" +  j + " .denuncias tbody tr .d100_hd").html(parseFloat(data[j].d100_hd).toFixed(2));
					$("#" +  j + " .denuncias tbody tr .d100_ext").html(parseFloat(data[j].d100_ext).toFixed(2));
					$("#" +  j + " .denuncias tbody tr .d100_sec").html(parseFloat(data[j].d100_sec).toFixed(2));
					
					$("#" + j).append(getTable2());
					$("#" +  j + " .incidencias tbody tr .d100_rvv").html(parseFloat(data[j].i_rvv).toFixed(2));
					$("#" +  j + " .incidencias tbody tr .d100_rvt").html(parseFloat(data[j].i_rvt).toFixed(2));
					$("#" +  j + " .incidencias tbody tr .d100_rsvv").html(parseFloat(data[j].i_rsvv).toFixed(2));
					$("#" +  j + " .incidencias tbody tr .d100_rsvt").html(parseFloat(data[j].i_rsvt).toFixed(2));
					$("#" +  j + " .incidencias tbody tr .d100_lda").html(parseFloat(data[j].i_lda).toFixed(2));
					$("#" +  j + " .incidencias tbody tr .d100_hd").html(parseFloat(data[j].i_hd).toFixed(2));
					$("#" +  j + " .incidencias tbody tr .d100_ext").html(parseFloat(data[j].i_ext).toFixed(2));
					$("#" +  j + " .incidencias tbody tr .d100_sec").html(parseFloat(data[j].i_sec).toFixed(2));
					
					$("#" + j).append(getTable3());
					$("#" +  j + " .totales tbody tr .poblacion").html(parseFloat(data[j].incidencia).toFixed(2));
					$("#" +  j + " .totales tbody tr .c_negra").html(parseFloat(data[j].c_negra).toFixed(2));
					$("#" +  j + " .totales tbody tr .total_sent").html(parseFloat(data[j].total_sent).toFixed(2));
					$("#" +  j + " .totales tbody tr .impunidad").html(parseFloat(data[j].impunidad).toFixed(2));
					$("#" +  j + " .totales tbody tr .eficiencia").html(parseFloat(data[j].eficiencia).toFixed(2));
					$("#" +  j + " .totales tbody tr .incidencia").html(parseFloat(data[j].incidencia).toFixed(2));
					
					
					text[i]  = Array(j, parseInt(data[j].d100_rvv), parseInt(data[j].d100_rvt), parseInt(data[j].d100_rsvv), parseInt(data[j].d100_rsvt), parseInt(data[j].d100_lda), parseInt(data[j].d100_hd), parseInt(data[j].d100_ext), parseInt(data[j].d100_sec));
					text2[i] = Array(j, parseInt(data[j].i_rvv), parseInt(data[j].i_rvt), parseInt(data[j].i_rsvv), parseInt(data[j].i_rsvt), parseInt(data[j].i_lda), parseInt(data[j].i_hd), parseInt(data[j].i_ext), parseInt(data[j].i_sec));
				}
				
			},

			error: function(jqXHR, textStatus){
	
			},

			complete: function(jqXHR, textStatus){
				$.scrollTo('#auto', 800);
				drawChart(text);
				drawChart2(text2);
			}
		});
		
	});
});

function getTable() {
	return '<h4>Denuncia</h4><table class="denuncias table table-striped"><thead><tr><th>Robo de Veh&iacute;culos</th><th>Robo de Transeuntes</th><th>Robo de Veh&iacute;culos s/v</th><th>Robo de Transeuntes s/v</th><th>Lesiones con arma blanca</th><th> Homicidios Dolosos</th><th>Extorsi&oacute;n</th><th>Secuestro</th></tr></thead><tbody><tr><td class="d100_rvv"></td><td class="d100_rvt"></td><td class="d100_rsvv"></td><td class="d100_rsvt"></td><td class="d100_lda"></td><td class="d100_hd"></td><td class="d100_ext"></td><td class="d100_sec"></td></tr></tbody></table>';
}

function getTable2() {
	return '<h4>Incidencias</h4><table class="incidencias table table-striped"><thead><tr><th>Robo de Veh&iacute;culos</th><th>Robo de Transeuntes</th><th>Robo de Veh&iacute;culos s/v</th><th>Robo de Transeuntes s/v</th><th>Lesiones con arma blanca</th><th> Homicidios Dolosos</th><th>Extorsi&oacute;n</th><th>Secuestro</th></tr></thead><tbody><tr><td class="d100_rvv"></td><td class="d100_rvt"></td><td class="d100_rsvv"></td><td class="d100_rsvt"></td><td class="d100_lda"></td><td class="d100_hd"></td><td class="d100_ext"></td><td class="d100_sec"></td></tr></tbody></table>';
}

function getTable3() {
	return '<h4>Totales</h4><table class="totales table table-striped"><thead><tr><th>Poblaci&oacute;n</th><th>Cifra negra</th><th>Sentenciados</th><th>Inpunidad</th><th>Eficiencia</th><th>Incidencia Delectiva</th></tr></thead><tbody><tr><td class="poblacion"></td><td class="c_negra"></td><td class="total_sent"></td><td class="impunidad"></td><td class="eficiencia"></td><td class="incidencia"></td></tr></tbody></table>';
}

function drawChart(text) {
	console.log(text);
	var data = google.visualization.arrayToDataTable(text);

	var options = {
	  title: 'Denuncia'
	};

	var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
	chart.draw(data, options);
}

function drawChart2(text) {
	console.log(text);
	var data = google.visualization.arrayToDataTable(text);

	var options = {
	  title: 'Incidencia'
	};

	var chart = new google.visualization.LineChart(document.getElementById('chart_div2'));
	chart.draw(data, options);
}
