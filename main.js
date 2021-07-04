function preload()
{

}

function setup()
{
    canvas = createCanvas(640,480);
    canvas.position(100,250)
    video = createCapture(VIDEO);
    video.hide();
    tint_colour = "";
}

function draw()
{
    image(video,0,0,640,480);

    
    fill(0,200,0);
    stroke(0,120,100)

    rect(20,100,20,300);
    rect(100,400,450,20);
    rect(90,20,450,20);
    rect(570,100,20,300);

    fill(255,0,0);
    stroke(255,0,0);

    circle(50,50,100);
    circle(50,430,100);
    circle(590,50,100);
    circle(590,430,100);

    fill(0,200,0);
    stroke(0,120,100)
    
}

function take_snapshot()
{
    save('student_name.png')
}

