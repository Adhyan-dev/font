function setup()
{
    video = createCapture(VIDEO);
    video.size(550,550);
    canvas = createCanvas(550,550);
    canvas.position(820,150);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose",gotposes);
 
}
function modelLoaded()
{
    console.log("Model is Loaded");

}
function gotposes(results)
{
    if(results.length > 0 )
        {
            console.log(results);
            noseX = results[0].pose.nose.x;
            noseY = results[0].pose.nose.y;
            console.log("noseX = "+ noseX+"noseY = "+noseY);

            leftwristX = results[0].pose.leftWrist.x;  
            rightwristX = results[0].pose.rightWrist.x;
            difference =floor( leftwristX - rightwristX);

            console.log("leftWristX = "+ leftwristX +"rightWristX ="+ rightwristX+ "difference = "+ difference);
            
        }
    
}
function draw()
{
    document.getElementById("status").innerHTML = "font size of the text  wil be = "+ difference +"px"
    background('white');
    fill('black');
    stroke('F90003');
    textsize(difference);
    text("Adhyan",800,150 )
}

