<div id="sinaloa2" class="span8">
<h2>EL que m&aacute;s miente!</h2>
<table class="table-sinaloa2 table table-striped">
 <a name="auto" id="auto"></a>
  <thead>
	<tr>
	  <th>#</th>
	  <th>Nombre</th>
	  <th>Municipio</th>
	  <th>Lo que gana (portal Internet)</th>
	  <th>Lo que gana (n&oacute;mina)</th>
	  <th>Diferencia ($)</th>
	  <th>Diferencia (%)</th>
	  <th>$ + percepciones</th>
	</tr>
  </thead>
  <tbody>
	<?php $i=0; ?>
	<?php foreach($results as $key => $data) { ?>
		<tr class="<?php echo $data["id_"];?>" <?php echo ($i==0) ? ' style="color:red;"' : "";?>>
			<td><?php echo $key+1;?></td>
			<td><?php echo utf8_decode($data["nombre"]);?></td>
			<td><?php echo utf8_decode($data["municipio"]);?></td>
			<td><?php echo money_format('%=#10.2n', $data["suelo_int"]);?></td>
			<td><?php echo money_format('%=#10.2n', $data["sueldo_nom"]);?></td>
			<td><?php echo money_format('%=#10.2n', $data["diferencia"]);?></td>
			<td><?php echo $data["diferencia_porc"];?>%</td>
			<td><?php echo money_format('%=#10.2n',$data["sueldo_prestaciones"]);?></td>
			<?php $i++;?>
		</tr>
	<?php } ?>
  </tbody>
</table>
</div>
