/**
 * Created by Administrator on 2015/10/29.
 */
define(['dojo/dom','dojo/on'],function(dom,on){
    var showKey=dom.byId('showKey');
    on(document,'keyup',function(event){
        showKey.innerHTML=event.keyCode;
    })

})