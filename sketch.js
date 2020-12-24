var ball;
var database, position;
function setup(){
    createCanvas(400,400);
    ball = createSprite(50,50,10,10);
    ball.shapeColor = "red";
    

    database = firebase.database();

    var position = database.ref("car");
    position.on("value", readPosition, showError); 

    // ref() :  location for read and write eg: car  position
    // set() :  write to the database - update to dB 
    // on() : read from the database - get data from dB
    
}


function readPosition(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}

function writePosition(x, y){
    database.ref("car").set({
        x:position.x + x, y:position.y + y
    })

}

function showError(){
    console.log("Sorry Error occurred");
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0, -1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0, +1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
