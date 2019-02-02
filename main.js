var x = 0.6;

var fungsi = 0;
var turunan = 0;


var x_1 = 0;



for(var i = 0; i<100; i++){
    fungsi = (x*x*x) - 3*x + 1;
    turunan = 9*(x*x) - 3;
    x_1 = x - (fungsi/turunan);
    console.log(i+1);
    console.log("------------");
    console.log(x);
    console.log(fungsi);
    console.log(turunan);
    console.log(x_1);
    console.log("------------");
    x = x_1;
}









function foo(){

}