<?php
	$html = $pre_canvas = '';
	$errExit = 0;
	$test = 1;
	$canvas = NULL;
	
	header('Content-type:text/html;charset=utf-8');
	
	$html = <<<EOS
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <title>JSCad DevBox</title>
    <script type='text/javascript' src='/jscad/js/x3dom.js'> </script>
    <link rel='stylesheet' type='text/css' href='/jscad/css/x3dom.css'/>
    <link rel='stylesheet' type='text/css' href='/wp-content/themes/forever/assets/css/bulma.css'/>
    <link rel='stylesheet' type='text/css' href='/jscad/css/devbox.css'/>
    	<script>
		
		function getInfo(){
			shapes = document.getElementsByTagName('Shape');
			console.log(shapes[0]);
		}
			
	</script>
</head>
<body class="has-text-centered">

	<div class="container"> 
  
        <div class="buttons is-centered"> 
            
            <button class="button is-primary is-outlined"> 
                Button 1 
            </button> 
             
            
            <button class="button is-info" onclick="getInfo()"> 
                Button 2 
            </button> 
             
            
            <button class="button is-danger is-rounded"> 
                Button 3 
            </button> 
             
        </div> 
  
    </div> 
<!---
 has-text-centered
is-flex-direction-row content 
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Documentation
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>-->
<div>
<x3d width='100vh' height='100vh' class="site-content">
    <scene>
            <viewpoint position="0.0 0.0 400.0" orientation="0.0 0.0 0.0 0.0"></viewpoint>
            <Inline nameSpaceName="starlogo" mapDEFToID="true"
                    onclick='getInfo();' url="/jscad/starlogo-2.1.x3d" />
    </scene>
</x3d>
</div>
</div>
</body>
</html>
EOS;
	
	echo $html;
	exit();	
?>

