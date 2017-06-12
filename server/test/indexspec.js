var should = require("chai").should(),
expect = require("chai").expect,
supertest = require("supertest"),
app = require("../index");
var url = supertest("http://localhost:3000");
describe("Testing the route", function(err)
{
    it("checking status code", function(done)
    {
        url  
        .get("/search")   
        .expect(200)   
        .end(function(err,res)
        {
            done();
            }); 
            });
        it("checking the type of data",function(done)
        {
            url
            .get("/search?moviename : ko")
            .expect('Content-Type',/json/)
            .end(function(err,res)
            {
                should.not.exist(err);
                var myobj = res.text;
                
                 expect(typeof myobj ).to.deep.equal('string');
                 done();
            });
        });
        });

            