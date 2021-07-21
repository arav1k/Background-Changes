var ButtonRed
var r=0 
var g=0
var b=0
var ButtonGreen
function setup()
{
  createCanvas(400,400)
ButtonRed = createButton('red')
ButtonRed.position(100,50)
ButtonRed.mousePressed(red_bg)
ButtonGreen = createButton('green')
ButtonGreen.position(200,50)
ButtonGreen.mousePressed(green_bg)
}
function draw()
{
background(r,g,b)

}
//Rgb for red=255,0,0
//Rgb for blue=0,0,255
//Rgb for green=0,255,0

function red_bg()
{
  r=255
  g=0
  b=0
}

function green_bg()
{
  r=0
  g=255
  b=0
}

