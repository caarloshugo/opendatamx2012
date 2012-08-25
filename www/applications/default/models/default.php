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
	
	public function getYearApi($key) {
		foreach($this->years as $year) {
			$query  = "select * from datasets where estado='" . $key . "' and ano='" . $year . "'";
			$result = $this->Db->query($query);
			$data[] = $result[0];
		}
		
		return $data;	
	}
	
}
