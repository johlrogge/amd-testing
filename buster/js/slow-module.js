define([], function(slow) {
    function wait(msecs) {
	var start = new Date().getTime();
	var cur = start
	while(cur - start < msecs)
	{
	    cur = new Date().getTime();
	}	
    }

    wait(300);
    return "finally done";
});