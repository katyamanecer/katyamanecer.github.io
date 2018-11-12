/*compartido por Katy Mar Amanecer*/
/*Pag Reciente*/
/*en gadget*/

#mas-terbaru{border:1px solid #000000;width:100%;margin:0 auto}
#terbaru{margin:0px}
.mas-elemen{border:1px solid #ccc;margin:5px 0;padding:5px;height:109px}
.mas-elemen img{background:#e5cbd0;padding:4px;float:left;height:64px;margin-right:8px;width:64px}
.mas-elemen h6,.mas-elemen h6 a{font-size:14px!important;font-weight:700!important;margin:0;color:#111}
.mas-elemen:hover{background-color:#f8ffff}
.mas-elemen p{font:12px Arial;text-align:justify;color:#555;line-height:12px;margin:5px 0}
#mas-loading{color:#fffbfb;font-family:Tahoma;font-size:100px;letter-spacing:-10px;text-align:center;text-shadow:-5px 0 1px #444;background:#fffbfb url(http://1.bp.blogspot.com/-vBDcLG_CXzU/UBqEMTknKcI/AAAAAAAAIHE/pZTfBZLbPwY/s1600/loading.gif) no-repeat 50% 50%;height:470px;border:1px solid #c3c3c3}
#mas-navigasifeed{border:1px solid #c3c3c3;color:#bbb;font-family:Verdana;font-size:10px;text-align:center;margin:0px}
#mas-navigasifeed:hover{background-color:#deffff}
#mas-navigasifeed a{color:#141414!important;font-family:Tahoma!important;font-size:12px!important;font-weight:400!important;display:block;padding:5px 10px}
#mas-navigasifeed span{padding:5px 10px}
#mas-navigasifeed .next{float:right}
#mas-navigasifeed .previous{float:left}
#mas-navigasifeed .home{text-align:center}
#mas-navigasifeed a:hover,#mas-navigasifeed span.noactived{color:transparant!important}
</style>
<script type='text/javascript'>
//<![CDATA[
var numfeed = 6;
var startfeed = 0;
var urlblog = "https://shaddaikawaii.blogspot.com/";
var charac = 150;
var urlprevious, urlnext;

function maskolisfeed(johny,banget){
var showfeed = johny.split("<");
for(var i=0;i<showfeed.length;i++){
if(showfeed[i].indexOf(">")!=-1){
showfeed[i] = showfeed[i].substring(showfeed[i].indexOf(">")+1,showfeed[i].length);
}
}
showfeed =  showfeed.join("");
showfeed = showfeed.substring(0,banget-1);
return showfeed;
}
function showterbaru(json) {
var entry, posttitle, posturl, postimg, postcontent;
var showblogfeed = "";
urlprevious = "";
urlnext = "";
for (var k = 0; k < json.feed.link.length; k++) {
if (json.feed.link[k].rel == 'previous') {
urlprevious = json.feed.link[k].href;
}
if (json.feed.link[k].rel == 'next') {
urlnext = json.feed.link[k].href;
}
}
for (var i = 0; i < numfeed; i++) {
if (i == json.feed.entry.length) { break; }
entry = json.feed.entry[i];
posttitle = entry.title.$t;
for (var k = 0; k < entry.link.length; k++) {
if (entry.link[k].rel == 'alternate') {
posturl = entry.link[k].href;
break;
}
}
if ("content" in entry) {
postcontent = entry.content.$t;
} else if ("summary" in entry) {
postcontent = entry.summary.$t;
} else {
postcontent = "";
}
if ("media$thumbnail" in entry) {
postimg = entry.media$thumbnail.url;
} else {
postimg = "http://2.bp.blogspot.com/-uitX7ROPtTU/Tyv-G4NA_uI/AAAAAAAAFBY/NcWLPVnYEnU/s1600/no+image.jpg";
}
showblogfeed += "<div class='mas-elemen'>";
showblogfeed += "<a href='" + posturl + "' target='_blank'><img src='" + postimg + "' /></a>";
showblogfeed += "<h6><a href='" + posturl + "'>" + posttitle + "</a></h6>";
showblogfeed += "<p>" + maskolisfeed(postcontent,charac) + "...</p>";
showblogfeed += "</div>";
}
document.getElementById("terbaru").innerHTML = showblogfeed;
showblogfeed = "";
if(urlprevious) {
showblogfeed += "<a href='javascript:navigasifeed(-1);' class='previous'>&#9668; Previous</a>";
} else {
showblogfeed += "<span class='noactived previous'>&#9668; Previous</span>";
}
if(urlnext) {
showblogfeed += "<a href='javascript:navigasifeed(1);' class='next'>Next &#9658;</a>";
} else {
showblogfeed += "<span class='noactived next'>Next &#9658;</span>";
}
showblogfeed += "<a href='javascript:navigasifeed(0);' class='home'>Home</a>";
document.getElementById("mas-navigasifeed").innerHTML = showblogfeed;
}

function navigasifeed(url){
var p, parameter;
if(url==-1) {
p = urlprevious.indexOf("?");
parameter = urlprevious.substring(p);
} else if (url==1) {
p = urlnext.indexOf("?");
parameter = urlnext.substring(p);
} else {
parameter = "?start-index=1&max-results=" + numfeed + "&orderby=published&alt=json-in-script"
}
parameter += "&callback=showterbaru";
incluirscript(parameter);
}
function incluirscript(parameter) {
if(startfeed==1) {removerscript();}
document.getElementById("terbaru").innerHTML = "<div id='mas-loading'></div>";
document.getElementById("mas-navigasifeed").innerHTML = "";
var archievefeed = urlblog + "/feeds/posts/default"+ parameter;
var terbaru = document.createElement('script');
terbaru.setAttribute('type', 'text/javascript');
terbaru.setAttribute('src', archievefeed);
terbaru.setAttribute('id', 'MASLABEL');
document.getElementsByTagName('head')[0].appendChild(terbaru);
startfeed = 1;
}
function removerscript() {
var elemen = document.getElementById("MASLABEL");
var parent = elemen.parentNode;
parent.removeChild(elemen);
}
onload=function() { navigasifeed(0); }
//]]>
</script>
<div id="terbaru"></div>
<div id="mas-navigasifeed"></div>