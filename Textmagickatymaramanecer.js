/*Compartido por : Katy Mar Amanecer*/

//Secify scroller contents
var line=new Array()
line[1]="Si algo no quedo claro o entendible"
line[2]="Si tienes alguna sugerencia"
line[3]="Algo te gusto y no encuentras el link"
line[4]="Simplemente quieres hacer una pregunta"
line[5]="Con gusto en los comentarios o al final de la pagina contactame"
line[6]="Atte: Katy Mar Amanecer"
//Specify font size for scoller
var ts_fontsize="16px"

//--Don't edit below this line

var longestmessage=1
for (i=2;i<line.length;i++){
if (line[i].length>line[longestmessage].length)
longestmessage=i
}

//Auto set scroller width
var tscroller_width=line[longestmessage].length

lines=line.length-1 //--Number of lines

//if IE 4+ or NS6
if (document.all||document.getElementById){
document.write('<form name="bannerform">')
document.write('<input type="text" name="banner" size="'+tscroller_width+'"')
document.write('  style="background-color: '+document.bgColor+'; color: '+document.body.text+'; font-family: Georgia; font-size: '+ts_fontsize+'; font-weight:bold; border: medium none" onfocus="blur()">')
document.write('</form>')
}

temp=""
nextchar=-1;
nextline=1;
cursor="\\"
function animate(){
if (temp==line[nextline] & temp.length==line[nextline].length & nextline!=lines){
nextline++;
nextchar=-1;
document.bannerform.banner.value=temp;
temp="";
setTimeout("nextstep()",1000)}
else if (nextline==lines & temp==line[nextline] & temp.length==line[nextline].length){
nextline=1;
nextchar=-1;
document.bannerform.banner.value=temp;
temp="";
setTimeout("nextstep()",1000)}
else{
nextstep()}}

function nextstep(){

if (cursor=="\\"){
cursor="|"}
else if (cursor=="|"){
cursor="/"}
else if (cursor=="/"){
cursor="-"}
else if (cursor=="-"){
cursor="\\"}


nextchar++;
temp+=line[nextline].charAt(nextchar);
document.bannerform.banner.value=temp+cursor
setTimeout("animate()",25)}

//if IE 4+ or NS6
if (document.all||document.getElementById)
window.onload=animate