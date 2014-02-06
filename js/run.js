//!Load Scripts with LABjs
$LAB.setGlobalDefaults({CacheBust : true});

$LAB
//vendor libraries
.script("js/vendor/jquery-1.8.2.min.js")
.script("js/vendor/underscore-min.js").wait()
//.script("js/vendor/backbone-min.js").wait()
//.script("js/vendor/mustache.js").wait()

//dependencies
.script("js/toolbelt.js").wait()
.script("js/main.js")

//put any other javascript in here
.wait(function(){	

});


