var today = new Date();
if(today.getDate() == dC && today.getMonth() == mC) {
var folder = today.getFullYear() - yC;
document.writeln('<scr' + 'ipt type="text/javascript">');
document.writeln('// script personalizzato da iolecal.blogspot.it');
document.writeln('// Floating image script- By Virtual_Max (http://www.geocities.com/siliconvalley/lakes/8620)');
document.writeln('// Modified by Dynamic Drive for various improvements');
document.writeln('// Visit Dynamic Drive at http://www.dynamicdrive.com/ for full source code');
for (var p=0; p<pallonciniCompleanno.length; p++) {
document.writeln('var palloncinoC' + pallonciniCompleanno[p] + ';');
}
document.writeln('function pagestartBlogBDay(){');
for (var p=0; p<pallonciniCompleanno.length; p++) {
document.writeln('palloncinoC' + pallonciniCompleanno[p] + '=new Chip("palloncinoC' + pallonciniCompleanno[p] + '",64,128);');
}
for (var p=0; p<pallonciniCompleanno.length; p++) {
document.writeln('movechip("palloncinoC' + pallonciniCompleanno[p] + '");');
}
document.writeln('}');
document.writeln('if (window.addEventListener)');
document.writeln('window.addEventListener("load", pagestartBlogBDay, false)');
document.writeln('else if (window.attachEvent)');
document.writeln('window.attachEvent("onload", pagestartBlogBDay)');
document.writeln('else if (document.getElementById)');
document.writeln('window.onload=pagestartBlogBDay');
for (var p=0; p<pallonciniCompleanno.length; p++) {
document.writeln('var d' + pallonciniCompleanno[p] + ' = document.createElement("div");');
document.writeln('d' + pallonciniCompleanno[p] + '.id="palloncinoC' + pallonciniCompleanno[p] + '";');
document.writeln('document.body.appendChild(d' + pallonciniCompleanno[p] + ');');
document.writeln('document.getElementById("palloncinoC' + pallonciniCompleanno[p] + '").style.position="absolute";');
document.writeln('document.getElementById("palloncinoC' + pallonciniCompleanno[p] + '").style.top="0";');
document.writeln('document.getElementById("palloncinoC' + pallonciniCompleanno[p] + '").style.left="-500px";');
document.writeln('document.getElementById("palloncinoC' + pallonciniCompleanno[p] + '").style.width="90px";');
document.writeln('document.getElementById("palloncinoC' + pallonciniCompleanno[p] + '").style.height="180px";');
document.writeln('document.getElementById("palloncinoC' + pallonciniCompleanno[p] + '").style.background="transparent";');
document.writeln('document.getElementById("palloncinoC' + pallonciniCompleanno[p] + '").style.border="none";');
document.writeln('document.getElementById("palloncinoC' + pallonciniCompleanno[p] + '").innerHTML= \'<a href="http://iolecal.blogspot.it/2014/03/palloncini-per-il-compleanno-del-blog.html" target="_blank"><a href="https://shaddaikawaii.blogspot.com/" target="_blank"><img title="&copy; Fiesta de Katy" src="https://1.bp.blogspot.com/-WwClbbiN580/W_djGw-oGvI/AAAAAAAAZUo/IRPndqbmEp0rh7HDlPcCzWCV6EM3nS-CgCLcBGAs/s320/kittykaty.png" style="width: 70px; height: 150px; border: none;" /></a>\';');
}
document.writeln('</scr' + 'ipt>');
}
else {
var mesi = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"];
document.writeln('<div style="width: 180px; height: 50px; font-family: Tahoma; font-size: 10px; font-weight: normal; line-height: 12px; color: #DA3256; cursor: pointer; border: none; background: url(https://www.iolecal.it/blog/posts400/post445/pallonciniByIole.png) no-repeat top left;" onclick="window.open(\'http://iolecal.blogspot.it/2014/03/palloncini-per-il-compleanno-del-blog.html\',\'ioleblog\');"><div style="position: relative; top: 8px; left: 36px; width: 128px; background: none;">Palloncini per il compleanno del blog (' + dC + ' ' + mesi[mC] + ')</div></div>');
}