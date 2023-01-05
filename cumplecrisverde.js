var today = new Date();
document.writeln('<scr' + 'ipt type="text/javascript">');
document.writeln('// script personalizzato da iolecal.blogspot.it');
document.writeln('// Floating image script- By Virtual_Max (http://www.geocities.com/siliconvalley/lakes/8620)');
document.writeln('// Modified by Dynamic Drive for various improvements');
document.writeln('// Visit Dynamic Drive at http://www.dynamicdrive.com/ for full source code');
for (var p=0; p<pallonciniMV1.length; p++) {
document.writeln('var balloonC1' + pallonciniMV1[p] + ';');
}
document.writeln('function MVBDay(){');
for (var p=0; p<pallonciniMV1.length; p++) {
document.writeln('balloonC1' + pallonciniMV1[p] + '=new Chip("balloonC1' + pallonciniMV1[p] + '",70,150);');
}
for (var p=0; p<pallonciniMV1.length; p++) {
document.writeln('movechip("balloonC1' + pallonciniMV1[p] + '");');
}
document.writeln('}');
document.writeln('if (window.addEventListener)');
document.writeln('window.addEventListener("load", MVBDay, false)');
document.writeln('else if (window.attachEvent)');
document.writeln('window.attachEvent("onload", MVBDay)');
document.writeln('else if (document.getElementById)');
document.writeln('window.onload=MVBDay');
for (var p=0; p<pallonciniMV1.length; p++) {
document.writeln('var d' + pallonciniMV1[p] + ' = document.createElement("div");');
document.writeln('d' + pallonciniMV1[p] + '.id="balloonC1' + pallonciniMV1[p] + '";');
document.writeln('document.body.appendChild(d' + pallonciniMV1[p] + ');');
document.writeln('document.getElementById("balloonC1' + pallonciniMV1[p] + '").style.position="absolute";');
document.writeln('document.getElementById("balloonC1' + pallonciniMV1[p] + '").style.top="0";');
document.writeln('document.getElementById("balloonC1' + pallonciniMV1[p] + '").style.left="-500px";');
document.writeln('document.getElementById("balloonC1' + pallonciniMV1[p] + '").style.width="90px";');
document.writeln('document.getElementById("balloonC1' + pallonciniMV1[p] + '").style.height="180px";');
document.writeln('document.getElementById("balloonC1' + pallonciniMV1[p] + '").style.background="transparent";');
document.writeln('document.getElementById("balloonC1' + pallonciniMV1[p] + '").style.border="none";');
document.writeln('document.getElementById("balloonC1' + pallonciniMV1[p] + '").innerHTML= \'<a href="https://shaddaikawaii.blogspot.com/" target="_blank"><img title="&copy; Fiesta de Katy" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiolu2YGbwVSPs3OMJnqJY1xqgsgBTrFhWmyyAZB8sfYRfyNPon3GqyvcvuQsWR2JZT93wwmh1FxJtqgRmWdNoFUyehqnANMTLicOtNXxDrb96I11_w4Wqd7nA3MI8XqoXsqgwKh05ALM9WQV5y0_1LWumAGWc5v8g_xCt8a1yEia6MGh4PJuKt-VQr9A/s1600/globo20cris20verde.png" style="width: 70px; height: 150px; border: none;" /></a>\';');
}
document.writeln('</scr' + 'ipt>');