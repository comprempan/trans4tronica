$(function(){
    //var s = skrollr.init();
    var windowHeight;
	init();

	$( window ).resize(function() {
		init();
	});

    function init() {
        s = skrollr.init();
    }
});
