/***********************************************
* Floating image script- By Virtual_Max (http://www.geocities.com/siliconvalley/lakes/8620)
* Modified by Dynamic Drive for various improvements
* Visit Dynamic Drive at http://www.dynamicdrive.com/ for full source code
***********************************************/

//Step 1: Define unique variable names depending on number of flying images (ie:3):
var flyimage1, flyimage2, flyimage3

function pagestart(){
//Step 2: Using the same variable names as 1), add or delete more of the below lines (60=width, height=80 of image):
 flyimage1=new Chip(&quot;flyimage1&quot;,47,68);
 flyimage2=new Chip(&quot;flyimage2&quot;,47,68);
 flyimage3=new Chip(&quot;flyimage3&quot;,47,68);


//Step 3: Using the same variable names as 1), add or delete more of the below lines:
movechip(&quot;flyimage1&quot;);
movechip(&quot;flyimage2&quot;);
movechip(&quot;flyimage3&quot;);

}

if (window.addEventListener)
window.addEventListener(&quot;load&quot;, pagestart, false)
else if (window.attachEvent)
window.attachEvent(&quot;onload&quot;, pagestart)
else if (document.getElementById)
window.onload=pagestart



<!-- Step 4: Define your flying images. For each image's ID tag, use the same variable names as 1) above -->

<DIV ID='flyimage1' STYLE='position:absolute; left: -500px; width:47; height:68;'>
<a HREF='http://dynamicdrive.com'><IMG BORDER='0' SRC='https://3.bp.blogspot.com/-fcvSXxJ0WPQ/W-T3y4y0TGI/AAAAAAAAZQo/of9Uv7h7HDAcqpNqzZvgJYFSz3ZWmcerQCLcBGAs/s1600/Globo%2Bfiesta.png'/></a>
</DIV>

<DIV ID='flyimage2' STYLE='position:absolute; left: -500px; width:47; height:68;'>
<a HREF='http://dynamicdrive.com'><IMG BORDER='0' SRC='https://1.bp.blogspot.com/-WwClbbiN580/W_djGw-oGvI/AAAAAAAAZUo/IRPndqbmEp0rh7HDlPcCzWCV6EM3nS-CgCLcBGAs/s320/kittykaty.png'/></a>
</DIV>

<DIV ID='flyimage3' STYLE='position:absolute; left: -500px; width:47; height:68;'>
<a HREF='http://dynamicdrive.com'><IMG BORDER='0' SRC='https://3.bp.blogspot.com/-87WDs1VpIEk/W-T_Eo_9xlI/AAAAAAAAZRA/qpAj94fL1IAI44KudBOtBopZutFNoSnOQCLcBGAs/s1600/Globo%2BCaritas.png'/></a>
</DIV>