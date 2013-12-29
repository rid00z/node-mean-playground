
require('../../lib/db/mongo.js');
require('../../lib/models/fix.js');

var request = require('superagent');
var expect = require('expect.js');
var mongoose = require('mongoose'),
    Fix = mongoose.model('Fix');


describe('Fix Tests', function(){
 
 before(function(done){
 	
	Fix.remove({}, function(err) { 
	   done();
	});
    
 });
                   
 it ('should create new fix', function(done){
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

