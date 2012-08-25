<?php
/**
 * Access from index.php:
 */


class Default_Controller extends ZP_Controller {
	
	public function __construct() {
		$this->app("default");
		
		$this->Templates = $this->core("Templates");

		$this->Templates->theme();

		$this->Default_Model = $this->model("Default_Model");
	}
	
	public function index() {
		$vars["view"] = $this->view("home", TRUE);
		
		$this->render("content", $vars);
	}

	public function getData() {
		if(!segment(1)) {
			$vars["response"] = $this->Default_Model->getCountry();
		} else {
			$vars["response"] = $this->Default_Model->getData(segment(1));
		}
		
		echo json_encode($vars);
	}

	public function api() {
		if(segment(1)) {
			if(segment(1) == "all") {
				$data["results"] = $this->Default_Model->getCountry();
			} else {
				$data["results"] = $this->Default_Model->getYearApi(segment(1));
			}
			echo json_encode($data);
		} else {
			$this->apiDesc();
		}
	}
	
	public function apiDesc() {
		$vars["view"] = $this->view("api", TRUE);
		
		$this->render("content", $vars);
	}
	
	public function diputados() {
		$vars["results"] = $this->Default_Model->getDiputados();
		$vars["view"]    = $this->view("diputados", TRUE);
		
		$this->render("content", $vars);
	}
	
	public function pagado() {
		$vars["results"] = $this->Default_Model->getAlcaldes("sueldo_nom");
		$vars["view"] = $this->view("pagado", TRUE);
		
		$this->render("content", $vars);
	}
	
	public function miente() {
		$vars["results"] = $this->Default_Model->getAlcaldes("diferencia_porc");
		$vars["view"] = $this->view("miente", TRUE);
		
		$this->render("content", $vars);
	}
}
