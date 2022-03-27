canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

rover_width=250;
rover_height=200;
rover_x=10;
rover_y=300;
background_image="valet.jpeg";
rover_image="bluecar.png";

function add(){
    bg_tag=new Image();
 bg_tag.onload=uploadbg;
 bg_tag.src=background_image;

 rover_tag=new Image();
 rover_tag.onload=uploadrover;
 rover_tag.src=rover_image;

}
function uploadbg(){
    ctx.drawImage(bg_tag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_tag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypress=e.keyCode;
    console.log(keypress);
    if(keypress=='38'){
        up();
        console.log("up");
    }
    if(keypress=='39'){
        right();
        console.log("right");
    }
    if(keypress=='37'){
        left();
        console.log("left");
    }
    if(keypress=='40'){
        down();
        console.log("down");
    }
}
function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        console.log("when up arrow is pressed x="+rover_x+",y="+rover_y);
        uploadbg();
        uploadrover();
    }
}
function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        console.log("when down arrow is pressed x="+ rover_x+",y="+rover_y);
        uploadbg();
        uploadrover();
    }
}
function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        console.log("when left arrow is pressed x="+rover_x+",y="+rover_y);
        uploadbg();
        uploadrover();
    }
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("when right arrow is pressed x="+rover_x+",y="+rover_y);
        uploadbg();
        uploadrover();
    }
}