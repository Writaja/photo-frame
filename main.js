function preload(){

}
function setup(){
canvas=createCanvas(500,400);
canvas.position(70,200);
video=createCapture(VIDEO);
video.hide();
colour="";
}
function draw(){
    image(video,100,80,300,250);
    stroke(160,10,10);

    fill(245, 69, 136);
    circle(40,40,50);
    circle(460,40,50);
    circle(40,360,50);
    circle(460,360,50);

    stroke(50,160,80);
    fill(198, 69, 245);
    
    rect(63,27,375,25);
    rect(63,347,375,25);
    rect(27,63,25,275);
    rect(448,63,25,275);
   
    tint(colour);
}
function take_snapshot(){
    save("frame.png");
}
function filter_tint(){
    colour=document.getElementById("colourname").value;
    
}




