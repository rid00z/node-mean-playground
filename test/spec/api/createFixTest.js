//create fix
'use strict';

describe('API: create fix', function () {

	var ms = 20000;
	ms += new Date().getTime();
	while (new Date() < ms){}

  var api = exports;

  it('should create new Fix', function () {
    
    api.createFix({
		  title: 'new fix',
		  desc: 'description',
		  image1: 'image1',
		  image2: 'image2'
		}, {});

  });

});
