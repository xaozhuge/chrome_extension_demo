// 注意，必须设置了run_at=document_start 此段代码才会生效
//当 DOMContentLoaded 事件触发时，仅当DOM加载完成，不包括样式表，图片，flash
document.addEventListener('DOMContentLoaded', function() {
	const body_el = document.querySelector('body');
	body_el.addEventListener('click', () => {
		//创建 input 元素
		const input = document.createElement('input');
		//获取选中的文字
		var selectedText = window.getSelection().toString(); 
		if (selectedText == "" || selectedText == undefined || selectedText == null){
			return;
		}
		//将选中的文字设置为input的值
		input.setAttribute('value', selectedText);
		input.select();
		if (document.execCommand('copy')) {
			document.execCommand('Copy', 'false', null);
			console.log(selectedText);
		}
	})
});
