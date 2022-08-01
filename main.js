img = "";
status = "";
objects = [];
function preload(){
 img = loadImage('dog_cat.jpg');
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
}
function draw(){
    image(img, 0,0,640,420);
    fill("#FF0000");
    text("Dog",45, 75);
    noFill();
    stroke('#FF0000');
    rect(30,60,450,350);
    fill("#FF0000");
    text("Cat", 320,120)
    noFill();
    stroke("#FF0000");
    rect(300,90,270,320);
    objectDetector.detect(img, gotResult);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    if(status !="")
    {
        for(i = 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status: Object Detected";
            fill("#FF0000");
            percent = floor(object[i].confidence *100);
            text(objects[i].label + " "+ percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF1000");
            rect(objects[i].x, objects[i].y, objects[i].height,objects[1].width);
        }
    }
}
function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
    if(error){
   console.error(error);
    }
    console.log(results);
    objects = results;
}
