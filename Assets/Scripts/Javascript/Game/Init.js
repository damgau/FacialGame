/**
 * 
 * Call the correct RequestAnimationFrame matching the browser else use the setTimout
 *
 * */
window.RequestAnimationFrame = (function()
{
    return  window.requestAnimationFrame         || 
            window.webkitRequestAnimationFrame   || 
            window.mozRequestAnimationFrame      || 
            window.oRequestAnimationFrame        || 
            window.msRequestAnimationFrame       || 
    function(_callback, _element)
    {
        window.setTimeout(_callback, 1000 / 60);
    };
})();



/********************
		Event
*********************/
/**
 * Handle the Input Event (Keyboard/Mouse)
 * */
window.addEventListener("keydown", Input.KeyDown);
window.addEventListener("keyup", Input.KeyUp);
window.addEventListener("mouseup", Input.MouseUp);
window.addEventListener("mousedown", Input.MouseDown);
window.addEventListener("mousemove", Input.MouseMove);


/********************
		Start
*********************/

/**
 * 
 * - Set the Time when for when game begin
 * - Call and load a scene 
 * 
 * */



Time.SetTimeWhenGameBegin();
Scenes["Loader"] = new Loader();
Application.LoadedScene = Scenes["Loader"];


/**
 * 
 * @function LoadImages
 * @description
 * Create and load all image from the ImagesPath array and put it on Images object
 * 
 * */
function LoadImages() 
{
	//Model: Images[name].src = "Assets/Graphics" + ImagesPath[name].path;
	for (var i = 0; i < ImagesPath.length; i++) 
	{
		var name = ImagesPath[i].name;
		Images[name] = new Image();
		Images[name].src = "Assets/Graphics/" + ImagesPath[i].path;
		Images[name].onload = function() 
		{
			imagesLoaded ++;
			Scenes.Loader.imageLoaded = imagesLoaded;
			// Scene.loader.imageLoaded = imagesLoaded
			if (imagesLoaded == ImagesPath.length) 
			{
				// All Image are Loaded
				ImageLoaded(imagesLoaded);
			}
		}
	}
}

/**
 * 
 * @function ImageLoaded
 * @description
 * print counter of loaded image on console
 * 
 * */
function ImageLoaded(_imageLoaded) 
{
	Print('System: ' + _imageLoaded + " Loaded !");

	/* Place your first Scene 
		Application.LoadedScene = Scenes["SceneName"];
	*/

	Application.LoadedScene = Scenes["Game"];
}
/**
 * 
 * set window innerWidth to canvas width
 * set window innerHeight to canvas height
 * 
 * */
canvas.width = 320;
canvas.height = 240;
video.width = 320;
video.height = 240;
canvas.style.position = video.style.position = "absolute";
canvas.style.position = video.style.zIndex = 0;
canvas.style.left = video.style.left = (window.innerWidth * 0.5 - canvas.width * 0.5) + "px";
canvas.style.top = video.style.top = (window.innerHeight * 0.5 - canvas.height * 0.5) + "px";

Run();