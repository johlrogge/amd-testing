require.config({
    baseUrl: 'js/'
});

define(['slow-module','slow-module2','slow-module3','slow-module4','slow-module5' ], function(slow) {
    buster.testCase("slow test", {
	"testing a slow module": function() {
	    assert.equals(slow, "finally done");
	}
    });
});