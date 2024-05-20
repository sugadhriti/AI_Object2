video = "";

function setup()
{
    canvas = createCanvas(480, 280);
    canavs.center();
}

function start()
{
    objectDectector = ml5.objectDectector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Dectecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
}

function draw()
{
    image(video, 0, 0, 480, 280);
}