function strTrim(str) {
	var i,j;
	i = 0;
	j = str.length-1;
	str = str.split("");
	while(i < str.length) {
		if(str[i]==" ") {
			str[i] = "";
		} else {
			break;
		}
		i++;
	}
	while(j > 0) {
		if(str[j]== " ") {
			str[j]="";
		} else {
			break;
		}
		j--;
	}
	return str.join("");
}

function igEncodeHTML(igHTML) {
	var regExLT = /</g;
	var regExGT = />/g;
	igHTML = igHTML.replace(regExLT, "&lt;");
	igHTML = igHTML.replace(regExGT, "&gt;");
	return igHTML;
}

function getTagCode(sID) {
	var myBrowser = strTrim(navigator.appName.substring(0, 9));
	myBrowser = myBrowser.toLowerCase();
	if(document.getElementById) {
		oDoc = document.getElementById(sID);
	} else if(document.all) {
		oDoc = document.all[sID];
	}
	var getTxt = "";
	if(typeof(oDoc.innerText) != 'undefined') {
		getTxt = strTrim(oDoc.innerText);
	} else {
		getTxt = strTrim(oDoc.innerHTML);	//textContent doesn't keep \n with <LI>, so use innerHTML
		var regExLi = /<\/li>/gi;		//RegEx to find </li>
		var regExHTML = /<\S[^>]*>/g;	//RegEx to find HTML Tags
		var regExAnd = /&amp;/g;		//to find ampersand as HTML entity
		var regExSpace = /&nbsp;/g;		//to find whitespace as HTML entity
		var regExLT = /&lt;/g;			//to find < as HTML entity
		var regExGT = /&gt;/g;			//to find > as HTML entity
		getTxt = getTxt.replace(regExLi, "\n");		//replace </li> with \n
		getTxt = getTxt.replace(regExHTML, "");		//strip out all HTML Tags
		getTxt = getTxt.replace(regExAnd, "&");		//replace &amp; with &
		getTxt = getTxt.replace(regExSpace, " ");	//replace &nbsp; with simple whitespace
		getTxt = getTxt.replace(regExLT, "<");		//replace &lt; with <
		getTxt = getTxt.replace(regExGT, ">");		//replace &gt; with >
	}
	return getTxt;
}

function showCodeTxt(sId) {
	var cdTxt = igEncodeHTML(getTagCode(sId));
	var cdTxtPrefix = '<html><head><title>Code from http://iolecal.blogspot.com</title><style>body{white-space:nowrap;} .close{background: transparent url(http://iolecal.googlepages.com/close.bmp) no-repeat; display: block; width: 65px; height: 22px; float: right; cursor: pointer;}</style></head><body><div class="close" onclick="window.close();"></div><br/><pre>\n';
	var cdTxtSuffix = '\n</pre><div class="close" onclick="window.close();"></div></body></html>';
	cdWin = window.open("about:blank", "cdWin", "toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=1,width=410,height=500,left=200,top=100");
	cdWin.document.open();
	cdWin.document.write(cdTxtPrefix+cdTxt+cdTxtSuffix);
	cdWin.document.close();
}