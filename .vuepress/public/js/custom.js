//更改meta ,不允许手机设备缩放页面
var metaViewport = document.getElementsByTagName('meta')[1];
metaViewport.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
