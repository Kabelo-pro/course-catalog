describe('Test my courseCost function' , function(){
    it("Write a function that checks which day a student intends on starting a course and gives them the appropriate discount", function(){
        assert.deepEqual({
            "status" : "success",
            "code": "r1",
            "description" : "Ruby on Rails intro",
            "cost" : 5675.00,
            "discount" : 2270.00, 
            "amountDue" : 3405.00
        }, courseCost("r1", "2023-05-21"));

    });     
    
});
describe('Test my courseCost function' , function(){
    it("Write a function that checks which day a student intends on starting a course and gives them the appropriate discount", function(){
        assert.deepEqual({
            "status" : "success",
            "code": "r1",
            "description" : "Ruby on Rails intro",
            "cost" : 5675.00,
            "discount" : 1135.00, 
            "amountDue" : 4540.00
        }, courseCost("r1", "2023-07-13"));

    });     
    
});
//     it("Write a function called allFromTown that takes a string parameter with registration numbers separated with commas and the registration number start string. It should return all the registration numbers in the string that is for that town.", function(){
//       assert.deepEqual();

      
//     });
//     it("Write a function called allFromTown that takes a string parameter with registration numbers separated with commas and the registration number start string. It should return all the registration numbers in the string that is for that town.", function(){
//       assert.deepEqual();
      
//     });
// }); 