
var array=[];
//         0,1,2,3
/*
for (var i=0;i<array.length;i++){
    console.log(array[i]);
}
*/
/*
var i=0;
while(i<array.length){
    console.log(array[i]);
    i++;
}
*/

var i=0;
do{
    if(array[i]==null){
        console.log('No ha elementos');
    }
    else{
        console.log(array[i]);
    }
    i++;
}while(i<array.length);
