
$(document).ready(function(){
	var url= document.location.href;
	url=url.split("/");
	var artid=url[url.length-1];
	var title=artid.replace(".html","");
	//$("#divmsg").html("<div class=\"ds-thread\" data-thread-key=\""+artid+"\" data-title=\""+title+"\" data-url=\"http:\/\/flyher.github.io\/shumeipai\/md\/"+artid+"\"></div>");
	$("#divmsg").html("<div class=\"ds-thread\" data-thread-key=\""+"index"+"\" data-title=\""+title+"\" data-url=\"http:\/\/flyher.github.io\/shumeipai\/md\/"+artid+"\"></div>");
});
<!-- ��˵���ۿ� end -->
var duoshuoQuery = {short_name:"smp"};
(function() {
	var ds = document.createElement('script');
	ds.type = 'text/javascript';
	ds.async = true;
	ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
	ds.charset = 'UTF-8';
	(document.getElementsByTagName('head')[0] 
	 || document.getElementsByTagName('body')[0]).appendChild(ds);
	
})();
<!-- ��˵����JS���� end -->

function setpower(){
	$(".ds-powered-by").html("<a href=\"http://flyher.github.io/shumeipai/\" target=\"_blank\" rel=\"nofollow\">������ݮ��Ŀ¼</a>");
}