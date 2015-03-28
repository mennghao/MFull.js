# MFull.js
create full screen pages simple in mobile; 
一个简单的移动端全屏页面切换插件
#使用规则
##JavaScript:
引入MFull.js
```javascript
MFull.init({
	box : "activity", //外层容器
	len : 4, //页面个数
	type : "c" //切换类型 "c"->横滑 "v"->纵滑
});
```
##HTML:
页面结构如下
```html
<div id="activity" class="show-0" data-id="0">
	<div class="page page-a">
		<h1>Page 1</h1>
	</div>
</div>
```

