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
