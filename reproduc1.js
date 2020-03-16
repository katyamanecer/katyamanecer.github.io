/** Modif-Katy Mar Amanecer**/

/** Venusina.A**/


// START
// FLASH MP3 VERSION 2.02m -- VARIABLES YOU CAN EDIT


var MPMautostart	= "0"		// AUTO START (1 = START / 0 = NO START)
var MPMshowsflash	= "yes"		// SHOW FLASH & TESTING MODE
var MPMTwidth		= "59"		// TOTAL PLAYER WIDTH
var MPMwidth		= "59"		// WIDTH OF THE FLASH
var MPMheight		= "17"		// HEIGHT OF THE FLASH
var MPMmode		= "opaque"	// FLASH WMODE | window | opaque | transparent |

// SET MP3 TO PLAY ON NEXT LINE

var playernumber	= "5"					 // NUMBER YOUR PLAYER!!!
var song_name		= "xmp3Player-mini/song-5.mp3"		 // MP3 SONG FILE NAME
var song_nameOGG	= "xmp3Player-mini/sample_song.ogg"	 // ALTERNATE OGG FILE


var buttonColor		= "colors/BLACK"  // BUTTON COLORS
var backgroundi		= "BLACK"	  // BACKGROUND IMAGE - USE COLOR FOLDER NAME
var MPMcolor		= "000000"	  // BACKGROUND COLOR
var mxmpborder_color	= "000000"	  // BORDER COLOR
var mxmpborder_width	= "0"		  // BORDER WIDTH IN PIXELS




// Allwebco Design Corporation
// YOU DO NOT NEED TO EDIT BELOW THIS LINE
// FLASH WITH DETECTION VER 4.0

document.write('<style type="text/css">#xmp3Player-mini { display: block; margin: 0; padding: 0; }</style>');

   if (MPMautostart == "1") {
var autoPplay="autoplay=\"autoplay\"";
var autoQTplay="true";
	}
	else{
var autoPplay="";
var autoQTplay="false";
	}

// SHOW HTML5 CODE IF FLASH SOFTWARE IS NOT DETECTED

            var myAudio = document.createElement('audio');
            if (myAudio.canPlayType) {
var alternateContent = 	'<table cellpadding="0" cellspacing="0" border="0" width="'+MPMTwidth+'" bgcolor="#'+MPMcolor+'" style="border: #'+mxmpborder_color+' '+mxmpborder_width+'px solid; backgroUnd-color: #'+MPMcolor+'; background-image: url(\'xmp3Player-mini/skins/'+backgroundi+'/background-mxmp.jpg\');"><tr><td style="width:22px;padding:0px;">'
  			+ '<img src="xmp3Player-mini/skins/'+backgroundi+'/play-mxmp.jpg" onclick="Playmp3'+playernumber+'()" width="22" height="17" style="cursor:pointer; display:block;">'
  			+ '</td><td style="padding:0px;">'
  			+ '<img src="xmp3Player-mini/skins/'+backgroundi+'/stop-mxmp.jpg" onclick="Stopmp3'+playernumber+'()" width="20" height="17" style="cursor:pointer; display:block;">'
  			+ '</td></tr></table>'
  			+ '<audio '+autoPplay+' id="mp3audio'+playernumber+'" style="margin:0;padding:0;height:0;width:0;">'
  			+ '<source src="'+song_name+'" type="audio/mpeg">'
  			+ '<source src="'+song_nameOGG+'" type="audio/ogg">'
  			+ '</audio>'
  			+ '<script language="JavaScript" type="text/javascript">'
  			+ 'var myaudio'+playernumber+' = document.getElementById(\'mp3audio'+playernumber+'\');'
  			+ 'function Playmp3'+playernumber+'() {'
  			+ '    myaudio'+playernumber+'.play();'
  			+ '}'
  			+ 'function Stopmp3'+playernumber+'() {'
  			+ '    myaudio'+playernumber+'.pause();'
  			+ '}'
  			+ '</script>'
			;
            }
            else {
var alternateContent = 	'<embed src="'+song_name+'" type="audio/mpeg" controller="true" height="16" width="'+MPMTwidth+'" controls="true" autoplay="'+autoQTplay+'" autostart="'+autoQTplay+'" loop="false"></embed>'
			;
            }
   if (MPMshowsflash == "yes") {
// Version check based upon the values entered in "FLASH Globals" in FlashDetect.js
var hasReqestedVersion = DetectFlashVer(requiredMajorVersion, requiredMinorVersion, requiredRevision);

// Check to see if the version meets the requirements for playback
if (hasReqestedVersion) {
document.write('<table cellpadding="0" cellspacing="0" border="0" width="'+MPMTwidth+'" bgcolor="#'+MPMcolor+'" style="max-height: 10px; border: #'+mxmpborder_color+' '+mxmpborder_width+'px solid;  backgroUnd-color: #'+MPMcolor+'; background-image: url(\'xmp3Player-mini/skins/'+backgroundi+'/background-mxmp.jpg\');"><tr><td style="padding:0px; text-align:left;">');

	// if we've detected an acceptable version
	// embed the Flash Content SWF when all tests are passed
	AC_FL_RunContent(
				"src", "xmp3Player-mini/xmp3Player-mini.swf?file=xmp3Player-mini%2F"+buttonColor+"%2Etxt&amp;song="+song_name+"&amp;astart="+MPMautostart,
				"width", MPMwidth,
				"height", MPMheight,
				"align", "center",
				"id", "xmp3Player-mini",
				"quality", "high",
				"wmode", MPMmode,
				"bgcolor", "#"+MPMcolor,
				"name", "xmp3Player-mini",
				"allowScriptAccess","sameDomain",
				"type", "application/x-shockwave-flash",
				'codebase', 'http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab',
				"pluginspage", "http://www.adobe.com/go/getflashplayer"
	);
document.write('</td></tr></table>');
} else {  // flash is too old or we can't detect the plugin
document.write(alternateContent);  // insert non-flash content
}
}
else {
document.write(alternateContent);  // insert non-flash content
}