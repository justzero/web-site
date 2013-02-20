/**
 *  ueditor完整配置项
 *  可以在这里配置整个编辑器的特性
 *//**************************提示********************************
 * 所有被注释的配置项均为UEditor默认值。
 * 修改默认配置请首先确保已经完全明确该参数的真实用途。
 * 主要有两种修改方案，一种是取消此处注释，然后修改成对应参数；另一种是在实例化编辑器时传入对应参数。
 * 当升级编辑器时，可直接使用旧版配置文件替换新版配置文件,不用担心旧版配置文件中因缺少新功能所需的参数而导致脚本报错。
 **************************提示********************************/(function(){var e,t=location.protocol.indexOf("file")==-1?location.pathname:location.href;e=window.UEDITOR_HOME_URL||t.substr(0,t.lastIndexOf("/")+1).replace("_examples/","").replace("website/","");window.UEDITOR_CONFIG={UEDITOR_HOME_URL:e,imageUrl:e+"php/imageUp.php",imagePath:e+"php/",scrawlUrl:e+"php/scrawlUp.php",scrawlPath:e+"php/",fileUrl:e+"php/fileUp.php",filePath:e+"php/",catcherUrl:e+"php/getRemoteImage.php",catcherPath:e+"php/",imageManagerUrl:e+"php/imageManager.php",imageManagerPath:e+"php/",snapscreenHost:"127.0.0.1",snapscreenServerUrl:e+"php/imageUp.php",snapscreenPath:e+"php/",wordImageUrl:e+"php/imageUp.php",wordImagePath:e+"php/",getMovieUrl:e+"php/getMovie.php",toolbars:[["bold","italic","underline","strikethrough","forecolor","justifyleft","justifycenter","justifyright","justifyjustify"]],labelMap:{anchor:"",undo:""},webAppKey:""}})();