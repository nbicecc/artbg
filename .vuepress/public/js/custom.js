//更改meta ,不允许手机设备缩放页面
var metaViewport = document.getElementsByTagName('meta')[1];
metaViewport.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";

//百度统计代码
var _hmt = _hmt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?ce3d7bd6a727190f677d7898504a9bfd";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();
//结束 百度统计代码
//百度链接自动推送代码
(function () {
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();

//结束 百度链接自动推送代码