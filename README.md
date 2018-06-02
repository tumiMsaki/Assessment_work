# 基本思路
1.实现日历的基本功能</br>
2.通过滚轮切换月份以及年份</br>
3.点击具体日期出现备忘录（直接在日历下面）</br>
4.备忘录编写，通过node链接MySQL并保存</br>
5.节假日高亮，查询数据库中提前设置的节假日日期，匹配后对前端渲染
## 1
js动态生成7*6的table</br>
利用getDate()，getDay()获取天数及每月开始的第一天日期</br>
循环向td中添加日期
```javascript
for (let i = 0; i < days; i++) {
        daysum.item(i + week).innerHTML = i + 1;
    }
```
通过元素遍历，若该td的value值大于0，则添加class
```javascript
for (let i = 0; i < 42; i++) {
   if (remind[i].className != 0)
      remind[i].classList.remove(remind[i].className);
}
```
同时，在切换时间的时候，将class进行更新
```javascript
for (let i = 0; i < 42; i++) {
    if (remind[i].innerHTML > 0) {
       remind[i].classList.add(year + month + remind[i].innerHTML);
     }
}
```
将所有td添加监听事件，以便后面进行ajax访问后台
```javascript
for (let i = 0; i < 42; i++) {
    remind[i].addEventListener('click', function() {
    ...
     })
}
```
在remind中将后台的到的数据进行输出
```javascript
text.innerHTML = remind[i].className//className暂定，为后台返回数据
  ``` 
npm install mysql
配置连接参数
```javascript
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'newpass',
    database: 'remind'
});
```
获取get请求ID
```javascript
var params = url.parse(req.url, true).query
```
查询数据库
```javascript
var query = 'SELECT * FROM remindc where ID = ' + params.ID
```

