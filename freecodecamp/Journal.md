# FreeCodecamp的技术总结

## First day

第一天大概把 FreeCodecamp 的顶端复现了一遍
下面是学到的其他知识。

* 很多元素感觉都需要精确定位才可以达到想要的效果
* 对于多个部分组成的元素可以运用Flexbox布局,同时用justify-content靠右对齐
```
    #icons {
        display: flex; /* 启用 Flexbox 布局 */
        justify-content: flex-end; /* 将子元素靠右对齐 */
        align-items: center; /* 垂直居中对齐 */
        position: absolute; /* 绝对定位到右上角 */
        top: 9px; /* 距离顶部 10px */
        right: 1%; /* 距离右侧 10px */
        gap: 15px; /* 设置子元素之间的间距 */
    }
```
* justify-content 设置容器内元素的水平对齐方式
* 图标的大小实际上是用 font-size 来控制的
* line-height可以控制文本之间 的垂直间距，当只有单行文本，与容器高度设置一致的时候就会有垂直居中的效果，同时inhetit可以继承父值
* word-spacing 可以控制单词之间的间距,letter-spacing 可以控制字母之间的间距
* span标签是行内元素,可以用来包裹文本，给特殊文本添加样式
* form标签可以用来收集用户输入的信息，比如搜索框等，
* type可以指定类型（text,password）, placeholder可以指定提示文本 
* figure标签可以用来包裹图片和文字，给图片添加标题