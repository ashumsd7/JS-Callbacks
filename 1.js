function doHomework(subject,callback){

    console.log(`I am doing homework of ${subject}`);
    callback();

}

doHomework("math",function(){
    console.log("homework finished");
});
