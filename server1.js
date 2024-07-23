/*function callback(){
    console.log('now adding is successful complete'); 
}

const add = function(a,b, callback){
    var result = a+b;
    console.log('result: '+result); // main finction work completely
    callback();
}

add(11,4, callback);
*/


const add = function(a,b, kajal){
    var result = a+b;
    console.log('result: '+result); // main finction work completely
    kajal();
}

//add(2,3, function(){
  //  console.log('add completed')
//});

add(5,3, ()=> console.log('add is completed'));