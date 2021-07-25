leftWristX = 0;
rightWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(350, 350);
    video.position(100, 160);

    canvas = createCanvas(550, 330);
    canvas.position(570, 165);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0 )
  {
      console.log(results)

      leftWristX = results[0].pose.leftWrist.x;
      rightWristX = results[0].pose.rightWrist.x;
  }
}

function draw()
{
    background('#FFB6C1');
    fill('#0000FF');
    text('Saanvi', 50, 300);
    textSize(floor(leftWristX - rightWristX));
}
