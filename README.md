waterfalls-flow
===============
- 技术：html + css + javascript + WampServer
- 该项目内容：后台获取网站api，得到图片数据，使用瀑布流布局将图片展示出来。
- WampServer是一款由法国人开发的Apache Web服务器、PHP解释器以及MySQL数据库的整合软件包。
- 这款软件非常好用，一键安装后打开就能用。在没有服务器的情况下使用它可以创建一个本地服务器。
- 官网地址：http://www.wampserver.com/en/

- index中的js部分做的事情就是接收ajax传回来的数据，永辉调函数将json格式解析，后得到数据，得以创建图片，每次创建图片的时候给它一个随机的高度，在进行一次排序。findMin函数就是找到每一列中高度最低的图片。sort函数做的就是将包裹img的div在屏幕可限的宽度中按顺序排好。window.onresize方法可以让我们在浏览器窗口大小改变时重新布局排序。window.onscroll方法可以让我们知道浏览器滚动了，然后当滚动距离+浏览器窗口高度大于当前ajax获取的数据的全部图片布局后的高度时我们再次调用ajax去获取下一页的数据。
- 简单的使用原生JS封装了ajax。
- ajax： 我设置了五个参数。method：设置使用的方法是get或post， url：你需要去申请的地址， flag： 设置是否异步， data： 需要传入的数据， callback： 回调函数。
- ajax 对象
AJAX 最重要的两个对象:
1. XMLHttpRequest() // 主流浏览器
2. ActiveXObject(‘Microsoft.XMLHTTP’) // ie

通过这两个对象使 ajax 可以获取数据

- ajax 优缺点
AJAX 优点:
1. 页面无刷新
2. 使用异步的形式与服务器进行通信
3. 减轻服务器的负担
4. 不需要插件或者小程序

AJAX缺点:
1. 不支持浏览器的后退机制
2. 对搜索引擎支持较弱
3. 违背了 url 和 资源定位 的初衷

- ajax 步骤
1. 创建 ajax 对象
var xhr = XMLHttpRequest()
var xhr = ActiveXObject(‘Mircosoft.XMLHTTP’)

2. 创建与服务器的连接和调用
xhr.open(get/post, url, true/false) // 第三个参数是否异步

3. 监听对象状态改变
xhr.onReadyStateChange
xhr.readyState == 4
xhr.status == 200
callBack(responseText) // 若成功，通过回掉函数接收 ajax 返回的数据

4. 向服务器发送数据
xhr.send()