var pre = document.querySelectorAll('pre'),
pl = pre.length;
for (var i = 0; i < pl; i++) {
    pre[i].classList.add("line-numbers");
	pre[i].classList.add("language-css");
}
