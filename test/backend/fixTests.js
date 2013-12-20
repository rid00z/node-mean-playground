
require('../../lib/db/mongo.js');
require('../../lib/models/fix.js');

var request = require('superagent');
var expect = require('expect.js');
var mongoose = require('mongoose'),
    Fix = mongoose.model('Fix');


describe('Fix Tests', function(){
 
 before(function(done){
 	console.log('hello im here, hello im here');

	Fix.remove({}, function(err) { 
	   console.log('collection removed');
	   done();
	});
    
 });
                   
 it ('test one', function(done){
   var fix = { title : 'the title', desc : 'desc 2.0' };
   
   request.post('localhost:9000/api/createFix')
    .send(fix)
   	.end(function(res){
   		
   		request.get('localhost:9000/api/listFix')
   			.end(function(resget){
   				
	   			expect(resget.body[0].title).to.equal('the title'); 
    
	   			done();	 
   		});	    
   });
 	
  });
});

