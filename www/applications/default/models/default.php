<?php
/**
 * Access from index.php:
 */
if(!defined("_access")) {
	die("Error: You don't have permission to access here...");
}

class Default_Model extends ZP_Model {
	
	public function __construct() {
		$this->Db = $this->db();
		
		$this->helpers();
	
		$this->table = "contacts";
		$this->years = array("2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011");
	}

	public function getData($key) {
		foreach($this->years as $year) {
			$query  = "select * from datasets where estado='" . $key . "' and ano='" . $year . "'";
			$result = $this->Db->query($query);
			$data[$year] = $result[0];
		}
		
		return $data;	
	}
	
	public function getCountry() {
		foreach($this->years as $year) {
			$query  = "select estado, ano, avg(c_negra) as c_negra, sum(poblacion) as poblacion, sum(d_totales) as d_totales, sum(d_rvv) as d_rvv, sum(d_rvt) as d_rvt, sum(d_rsvv) as d_rsvv, sum(d_rsvt) as d_rsvt, sum(d_lda) as d_lda, sum(d_hd) as d_hd, sum(d_ext) as d_ext, sum(d_sec) as d_sec, sum(d100_totales) as d100_totales, sum(d100_rvv) as d100_rvv, sum(d100_rvt) as d100_rvt, sum(d100_rsvv) as d100_rsvv, sum(d100_rsvt) as d100_rsvt, sum(d100_lda) as d100_lda, sum(d100_hd) as d100_hd, sum(d100_ext) as d100_ext, sum(d100_sec) as d100_sec, sum(i_totales) as i_totales, sum(i_rvv) as i_rvv, sum(i_rvt) as i_rvt, sum(i_rsvv) as i_rsvv, sum(i_rsvt) as i_rsvt, sum(i_lda) as i_lda, sum(i_hd) as i_hd, sum(i_ext) as i_ext, sum(i_sec) as i_sec, avg(impunidad) as impunidad, avg(eficiencia) as eficiencia, sum(incidencia) as incidencia,  sum(total_sent) as total_sent from datasets where ano='" . $year . "'";
			$result = $this->Db->query($query);
			
			$data[$year] = $result[0];
		}
		
		return $data;	
	}

	
	public function getYearApi($key) {
		foreach($this->years as $year) {
			$query  = "select * from datasets where estado='" . $key . "' and ano='" . $year . "'";
			$result = $this->Db->query($query);
			$data[] = $result[0];
		}
		
		return $data;	
	}
	
}
