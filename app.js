console.log("Evaluation")
var x ;
x = prompt("Hi, what is your name?") ;
alert("Hey!"+x+" nice too meet you!") ;

var y = prompt("Please enter your grade")
if(y > 50) {
    alert('pass ,Good job') ;
} else if(y <= 50) {
    alert('Fail, you need to work hard!') ;
}else {
    alert('please enter a number') ;
}


  var catType = prompt('please enter the type of cats ') ;
  while (catType !== 'persian' && catType !== 'scottish') {
    catType = prompt('please choose persian or scottish') ;
  }

  var userInput = prompt('please enter the number of cat')
for (var i =0; i< userInput ; i++){
    if (catType =='persian'){
        document.write('<img src="https://vetstreet.brightspotcdn.com/dims4/default/5c40e17/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F51%2F45%2Fa7f47de448fabce6e4a908cb878d%2FPersian-AP-J6XREO-645sm3614.jpg" />') ;
    }else{
        document.write('<img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Scottish_fold_cat.jpg" />') ;
    }
    
}
function printName(){
    catType = prompt('please choose persian or scottish') ;
}
function printConsoleNumber(parm1, parm2){
    for(var i = parm1; i< parm2; i++){

    }
}
printName();
printConsoleNumber(1, 10);
printConsoleNumber(50, 100);