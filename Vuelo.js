

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
