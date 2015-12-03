/**
 * Created by Administrator on 2015/10/29.
 */
define(['dojo/dom','dojo/dom-construct','dojo/on'],function(dom,domConstruct,on){
    function setText(node,text){
        node=dom.byId(node);
        node.innerHTML=text;
    }
    setText(dom.byId('1'),'node 1');
    setText(dom.byId('2'),'node 2');
    setText('3','node 3');
    var list=dom.byId('list');
    domConstruct.create('li',{
        innerHTML:'node 6'
    },list);
    domConstruct.create('li',{
        innerHTML:'node 7',
        className:'seven',
        style:{
            fontWeight:'bold'
        }
    },list);
    domConstruct.create('li',{
        innerHTML:'node 3.5'
    },dom.byId('3'),'after');
    function moveFirst(){
        domConstruct.place('3','list','first');
    }
    function moveBeforeTwo(){
        domConstruct.place('3','2','before');
    }
    function moveAfterFour(){
        domConstruct.place('3','4','after');
    }
    function moveLast(){
        domConstruct.place('3','list','last');
    }
    on(dom.byId('moveFirst'),'click',moveFirst);
    on(dom.byId('moveBeforeTwo'),'click',moveBeforeTwo);
    on(dom.byId('moveAfterFour'),'click',moveAfterFour);
    on(dom.byId('moveLast'),'click',moveLast);
    function destroyFirst(){
        var list=dom.byId('list'),
            items=list.getElementsByTagName('li');
        items.length&&domConstruct.destroy(items[0]);
    }
    function destroyAll(){
        domConstruct.empty('list');
    }
    on(dom.byId('destroyFirst'),'click',destroyFirst);
    on(dom.byId('destroyAll'),'click',destroyAll);
})