var today = new Date();
document.writeln('<scr' + 'ipt type="text/javascript">');

document.writeln('// Floating image script- By Virtual_Max (http://www.geocities.com/siliconvalley/lakes/8620)');
document.writeln('// Modified by Dynamic Drive for various improvements');
document.writeln('// Visit Dynamic Drive at http://www.dynamicdrive.com/ for full source code');
for (var p=0; p<pallonciniMV2.length; p++) {
document.writeln('var balloonC2' + pallonciniMV2[p] + ';');
}
document.writeln('function MVBDay(){');
for (var p=0; p<pallonciniMV2.length; p++) {
document.writeln('balloonC2' + pallonciniMV2[p] + '=new Chip("balloonC2' + pallonciniMV2[p] + '",70,150);');
}
for (var p=0; p<pallonciniMV2.length; p++) {
document.writeln('movechip("balloonC2' + pallonciniMV2[p] + '");');
}
document.writeln('}');
document.writeln('if (window.addEventListener)');
document.writeln('window.addEventListener("load", MVBDay, false)');
document.writeln('else if (window.attachEvent)');
document.writeln('window.attachEvent("onload", MVBDay)');
document.writeln('else if (document.getElementById)');
document.writeln('window.onload=MVBDay');
for (var p=0; p<pallonciniMV2.length; p++) {
document.writeln('var d' + pallonciniMV2[p] + ' = document.createElement("div");');
document.writeln('d' + pallonciniMV2[p] + '.id="balloonC2' + pallonciniMV2[p] + '";');
document.writeln('document.body.appendChild(d' + pallonciniMV2[p] + ');');
document.writeln('document.getElementById("balloonC2' + pallonciniMV2[p] + '").style.position="absolute";');
document.writeln('document.getElementById("balloonC2' + pallonciniMV2[p] + '").style.top="0";');
document.writeln('document.getElementById("balloonC2' + pallonciniMV2[p] + '").style.left="-500px";');
document.writeln('document.getElementById("balloonC2' + pallonciniMV2[p] + '").style.width="90px";');
document.writeln('document.getElementById("balloonC2' + pallonciniMV2[p] + '").style.height="180px";');
document.writeln('document.getElementById("balloonC2' + pallonciniMV2[p] + '").style.background="transparent";');
document.writeln('document.getElementById("balloonC2' + pallonciniMV2[p] + '").style.border="none";');
document.writeln('document.getElementById("balloonC2' + pallonciniMV2[p] + '").innerHTML= \'<a href="https://shaddaikawaii.blogspot.com/2017/08/" target="_blank"><img title="&copy; iolecal.blogspot.it" src="https://www.shaddaikawaii.blogspot.com/blog/posts/post/palloncini2anni_' + pallonciniMV2[p] + '.png" style="width: 70px; height: 150px; border: none;" /></a>\';');
}
document.writeln('</scr' + 'ipt>');