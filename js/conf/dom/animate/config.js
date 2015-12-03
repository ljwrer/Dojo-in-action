/**
 * Created by Administrator on 2015/10/28.
 */
define([
    'dojo/dom',
    'dojo/fx',
    'dojo/_base/fx',
    'dojo/on',
    'dojo/fx/easing',
    'dojo/window',
    'dojo/dom-style',
    'dojo/aspect'
], function (dom, fx, baseFx, on, easing, win, domStyle,aspect) {
    //fx.wipeIn({
    //    node:dom.byId('wipeTarget'),
    //    duration:500,
    //    width:100,
    //    height:300
    //}).play();
    baseFx.animateProperty({
        node: dom.byId('anim8target'),
        properties: {
            borderWidth: 200,
            top: {start: 25, end: 200},
            left: 0,
            opacity: {start: 0, end: 1},
        },
        duration: 2000
    }).play();
    on(dom.byId('startButton'), 'click', function (e) {
        baseFx.animateProperty({
            node: dom.byId('anim8target'),
            easing: easing.bounceOut,
            properties: {
                borderWidth: 200
            },
            duration: 1000
        }).play();
    });
    on(dom.byId('reverseButton'), 'click', function (e) {
        baseFx.animateProperty({
            easing: easing.backInOut,
            node: dom.byId('anim8target'),
            properties: {
                borderWidth: 0
            },
            duration: 1000
        }).play();
    });
    var dropButton = dom.byId("dropButton"),
        ariseSirButton = dom.byId("ariseSirButton"),
        anim8target2 = dom.byId("anim8target2");

    // Set up a couple of click handlers to run our animations
    on(dropButton, "click", function (evt) {
        // get the dimensions of our viewport
        var viewport = win.getBox(win.doc);
        baseFx.animateProperty({
            // use the bounceOut easing routine to have the box accelerate
            // and then bounce back a little before stopping
            easing: easing.bounceOut,
            duration: 500,
            node: anim8target2,
            properties: {
                // calculate the 'floor'
                // and subtract the height of the node to get the distance from top we need
                top: {start: 0, end: viewport.h - anim8target2.offsetHeight}
            }
        }).play();
    });
    on(ariseSirButton, 'click', function (evt) {
        baseFx.animateProperty({
            node: anim8target2,
            properties: {top: 0}
        }).play();
    });
    var originalOrder = true;
    var container = dom.byId('container'),
        content1 = originalOrder?dom.byId('content1'):dom.byId('content2'),
        content2 = originalOrder?dom.byId('content2'):dom.byId('content1'),
        swapButton = dom.byId('swapButton');
    function swapAnim(node1, node2) {
        var node1Left = domStyle.get(node1, 'left'),
            node2Left = domStyle.get(node2, 'left');
        return fx.combine([
            fx.slideTo({
                node: node1,
                left: node2Left,
                duration: 1500
            }),
            fx.slideTo({
                node: node2,
                left: node1Left,
                duration: 1500
            })
        ])
    }
    on(swapButton, 'click',function(e){
        var self=this;
        var swap = fx.chain([
            swapAnim(content1, content2),
            baseFx.animateProperty({
                node: container,
                properties: {
                    backgroundColor: '#eee'
                }
            })
        ]);
        aspect.before(swap,"beforeBegin", function(){
            domStyle.set(container,'backgroundColor','#bbb');
            self.disabled=true;
        });
        //on(swap,'End',function(){
        //    var ex=content1;
        //    content1=content2;
        //    content2=ex;
        //    ex=null;
        //})

        on(swap, "End", function(){
            originalOrder = !originalOrder;
            console.log(originalOrder);
            self.disabled=false;
        });
        swap.play();

    });
});


