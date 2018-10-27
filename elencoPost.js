function elencoPost(img_post) {
	var elenco = '';
	for(var i=0; i<img_post.length; i++) {
		elenco += '<a href="' + img_post[i][0] + '" target="_top"><img style="width: 180px; height: 180px; border: none; background: none; padding: 0; box-shadow: none;" src="' + img_post[i][1] + '" alt=""></a>';
	}
	document.getElementById('posts').innerHTML = elenco;
}
elencoPost(img_post);