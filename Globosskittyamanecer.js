var today = new Date();
document.writeln('<scr' + 'ipt type="text/javascript">');
document.writeln('// script personalizzato da iolecal.blogspot.it');
document.writeln('// Floating image script- By Virtual_Max (http://www.geocities.com/siliconvalley/lakes/8620)');
document.writeln('// Modified by Dynamic Drive for various improvements');
document.writeln('// Visit Dynamic Drive at http://www.dynamicdrive.com/ for full source code');
for (var p=0; p<pallonciniMV3.length; p++) {
document.writeln('var balloonC3' + pallonciniMV3[p] + ';');
}
document.writeln('function MVBDay(){');
for (var p=0; p<pallonciniMV3.length; p++) {
document.writeln('balloonC3' + pallonciniMV3[p] + '=new Chip("balloonC3' + pallonciniMV3[p] + '",70,150);');
}
for (var p=0; p<pallonciniMV3.length; p++) {
document.writeln('movechip("balloonC3' + pallonciniMV3[p] + '");');
}
document.writeln('}');
document.writeln('if (window.addEventListener)');
document.writeln('window.addEventListener("load", MVBDay, false)');
document.writeln('else if (window.attachEvent)');
document.writeln('window.attachEvent("onload", MVBDay)');
document.writeln('else if (document.getElementById)');
document.writeln('window.onload=MVBDay');
for (var p=0; p<pallonciniMV3.length; p++) {
document.writeln('var d' + pallonciniMV3[p] + ' = document.createElement("div");');
document.writeln('d' + pallonciniMV3[p] + '.id="balloonC3' + pallonciniMV3[p] + '";');
document.writeln('document.body.appendChild(d' + pallonciniMV3[p] + ');');
document.writeln('document.getElementById("balloonC3' + pallonciniMV3[p] + '").style.position="absolute";');
document.writeln('document.getElementById("balloonC3' + pallonciniMV3[p] + '").style.top="0";');
document.writeln('document.getElementById("balloonC3' + pallonciniMV3[p] + '").style.left="-500px";');
document.writeln('document.getElementById("balloonC3' + pallonciniMV3[p] + '").style.width="90px";');
document.writeln('document.getElementById("balloonC3' + pallonciniMV3[p] + '").style.height="180px";');
document.writeln('document.getElementById("balloonC3' + pallonciniMV3[p] + '").style.background="transparent";');
document.writeln('document.getElementById("balloonC3' + pallonciniMV3[p] + '").style.border="none";');
document.writeln('document.getElementById("balloonC3' + pallonciniMV3[p] + '").innerHTML= \'<a href="https://shaddaikawaii.blogspot.com/" target="_blank"><img title="&copy; Fiesta de Katy" src="https://1.bp.blogspot.com/-WwClbbiN580/W_djGw-oGvI/AAAAAAAAZUo/IRPndqbmEp0rh7HDlPcCzWCV6EM3nS-CgCLcBGAs/s320/kittykaty.png" style="width: 70px; height: 150px; border: none;" /></a>\';');
}
document.writeln('</scr' + 'ipt>');