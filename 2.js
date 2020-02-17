function doHomework(subject,callback){

    console.log(`I am doing homework of ${subject}`);
    callback();

}

doHomework("math",finish);

function finish(){
    console.log("homework Finished");

   
}