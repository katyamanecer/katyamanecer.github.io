document.writeln('<scr' + 'ipt type="text/javascript">');
document.writeln('// script personalizzato da iolecal.blogspot.it');
document.writeln('// Floating image script- By Virtual_Max (http://www.geocities.com/siliconvalley/lakes/8620)');
document.writeln('// Modified by Dynamic Drive for various improvements');
document.writeln('// Visit Dynamic Drive at http://www.dynamicdrive.com/ for full source code');
for (var p=0; p<palloncini.length; p++) {
document.writeln('var palloncino' + palloncini[p] + ';');
}
document.writeln('function pagestartPalloncini(){');
for (var p=0; p<palloncini.length; p++) {
document.writeln('palloncino' + palloncini[p] + '=new Chip("palloncino' + palloncini[p] + '",90,180);');
}
for (var p=0; p<palloncini.length; p++) {
document.writeln('movechip("palloncino' + palloncini[p] + '");');
}
document.writeln('}');
document.writeln('if (window.addEventListener)');
document.writeln('window.addEventListener("load", pagestartPalloncini, false)');
document.writeln('else if (window.attachEvent)');
document.writeln('window.attachEvent("onload", pagestartPalloncini)');
document.writeln('else if (document.getElementById)');
document.writeln('window.onload=pagestartPalloncini');
for (var p=0; p<palloncini.length; p++) {
document.writeln('var d' + palloncini[p] + ' = document.createElement("div");');
document.writeln('d' + palloncini[p] + '.id="palloncino' + palloncini[p] + '";');
document.writeln('document.body.appendChild(d' + palloncini[p] + ');');
document.writeln('document.getElementById("palloncino' + palloncini[p] + '").style.position="absolute";');
document.writeln('document.getElementById("palloncino' + palloncini[p] + '").style.top="0";');
document.writeln('document.getElementById("palloncino' + palloncini[p] + '").style.left="-500px";');
document.writeln('document.getElementById("palloncino' + palloncini[p] + '").style.width="90px";');
document.writeln('document.getElementById("palloncino' + palloncini[p] + '").style.height="180px";');
document.writeln('document.getElementById("palloncino' + palloncini[p] + '").style.background="transparent";');
document.writeln('document.getElementById("palloncino' + palloncini[p] + '").style.border="none";');
document.writeln('document.getElementById("palloncino' + palloncini[p] + '").innerHTML= \'<a href="https://shaddaikawaii.blogspot.com/" target="_blank"><img title="&copy; Felicidades Hijo" src="https://3.bp.blogspot.com/--4LqaiRGrxQ/XEE8INlWSEI/AAAAAAAAaH4/UEfBXlkFt9sEIDNQOc9psiSGrcCvQjdwACLcBGAs/s320/palloncini%2Bfelicidades%2Bg.png" style="width: 70px; height: 150px; border: none;" /></a>\';');
}
document.writeln('</scr' + 'ipt>');