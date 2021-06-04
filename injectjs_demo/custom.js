// 注意，必须设置了run_at=document_start 此段代码才会生效
//当 DOMContentLoaded 事件触发时，仅当DOM加载完成，不包括样式表，图片，flash
document.addEventListener('DOMContentLoaded', function() {
	//创建一个HTML元素
	var panel = document.createElement('button');
	//class属性设置
	panel.className = 'injectjs_class';
	//设置开始和结束之间的HTML
	panel.innerHTML = `复制`;
	//设置元素的字体大小
	panel.style.fontSize='100px';
	//设置文本的颜色
	panel.style.color='red';
	//向节点添加最后一个子节点
	document.body.appendChild(panel);
});
