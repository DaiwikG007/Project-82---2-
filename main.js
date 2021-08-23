var mouse_event = "empty";
var last_x,last_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
line_width = 1;
radius = 40;

canvas.addEventListener("mousedown" , my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color_input").value;
    line_width = document.getElementById("width_input").value;
    radius = document.getElementById("radius_input").value;

    mouse_event = "mouseDown"
}

canvas.addEventListener("mouseleave" , my_mouseleave);

function my_mouseleave(e)
{
    mouse_event = "mouseLeave";
}

canvas.addEventListener("mouseup" , my_mouseup);

function my_mouseup(e)
{
    mouse_event = "mouseUp";
}

canvas.addEventListener("mousemove" , my_mousemove);

function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouse_event == "mouseDown")
    {
      ctx.beginPath();  
      ctx.strokeStyle = color;
      ctx.lineWidth = line_width;
      ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius, 0 , 2*Math.PI);
      ctx.stroke();
    }
}

function cleararea() 
    { ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);   }


