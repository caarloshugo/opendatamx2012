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
		$vars["response"] = $this->Default_Model->getData(segment(1));
		echo json_encode($vars);
	}

	public function api() {
		if(segment(1)) {
			$data["results"] = $this->Default_Model->getYearApi(segment(1));
			echo json_encode($data);
		} else {
			$this->apiDesc();
		}
	}
	
	public function apiDesc() {
		$vars["view"] = $this->view("api", TRUE);
		
		$this->render("content", $vars);
	}
}
