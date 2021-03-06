<!DOCTYPE html>
<html lang="<?php print get("webLang"); ?>">
	<head>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<title><?php print $this->getTitle(); ?></title>
		
		<link href="<?php print path("vendors/css/frameworks/bootstrap/css/bootstrap.min.css", "zan"); ?>" rel="stylesheet">
		<link href="<?php print path("vendors/css/frameworks/bootstrap/css/bootstrap-responsive.min.css", "zan"); ?>" rel="stylesheet">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
		<script type="text/javascript" src="https://www.google.com/jsapi"></script>
		<script src="<?php print $this->themePath; ?>/js/bigtext.js"></script>
		
		<script src="<?php print $this->themePath; ?>/js/jquery.scrollTo.js"></script>
		
		<?php if(!segment(0)) { ?>
			<script src="<?php print $this->themePath; ?>/js/functions.js"></script>
			<script src="<?php print $this->themePath; ?>/js/jquery.timelinr-0.9.51.js"></script>
			
			<script>
				$(function(){
					$().timelinr({
						arrowKeys: 'true'
					})
				});
			</script>
		<?php } else { ?>
			<script src="<?php print $this->themePath; ?>/js/sonora.js"></script>
		<?php } ?>
		
		<script>
			var PATH = "<?php print get('webURL'); ?>";
		</script>
		
		<link href="<?php print $this->themePath; ?>/css/style.css" rel="stylesheet">
		<?php print $this->getCSS(); ?>
		
		<!-- Le HTML5 shim, for IE6-8 support of HTML elements -->
			<!--[if lt IE 9]>
			  <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
			<![endif]-->
		<!-- Le styles -->
	</head>

	<body>
		<div class="navbar navbar-inverse navbar-fixed-top">
		  <div class="navbar-inner">
			<div class="container">
			  <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			  </button>
			  <a class="brand" href="<?php print get('webURL'); ?>">Denuncialos!</a>
			  <div class="nav-collapse collapse">
				<ul class="nav">
					<li><a href="<?php print get('webURL'); ?>/alcaldes">Alcaldes</a></li>
					<?php if(!segment(0)) { ?>
						<span class="title-city">Nacional</span>
					<?php } ?>
				</ul>
			  </div>
			</div>
		  </div>
		</div>
		 <a id="top" name="top"></a>
		<div class="container">
			<div class="content">
				<div class="page-header">
					<h1>Denuncialos! <small>
						<?php if(!segment(0)) { ?>
							Da clic en un estado para ver la informaci&oacute;n
						<?php } else { ?>
							Da clic en un municipio para ver la informaci&oacute;n del alcalde
							<a href="<?php print get('webURL'); ?>/mejor-pagado">El que m&aacute;s gana!</a>
	                        <a href="<?php print get('webURL'); ?>/miente">El que m&aacute;s miente!</a>
						<?php } ?>
					</small></h1>
				</div>
				
				<div class="row">
