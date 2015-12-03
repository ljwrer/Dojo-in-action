define(["dojo/_base/fx", "dojo/on", "dojo/dom","dojo/fx",'dojo/dom-style'], function(baseFx, on, dom,fx,style) {
    var fadeOutButton = dom.byId("fadeOutButton"),
        fadeInButton = dom.byId("fadeInButton"),
        fadeTarget = dom.byId("fadeTarget");

    on(fadeOutButton, "click", function(evt){
        baseFx.fadeOut({ node: fadeTarget }).play();
    });
    on(fadeInButton, "click", function(evt){
        baseFx.fadeIn({ node: fadeTarget }).play();
    });
    var wipeOutButton = dom.byId("wipeOutButton"),
        wipeInButton = dom.byId("wipeInButton"),
        wipeTarget = dom.byId("wipeTarget");

    on(wipeOutButton, "click", function(evt){
        fx.wipeOut({ node: wipeTarget}).play();
    });
    on(wipeInButton, "click", function(evt){
        fx.wipeIn({ node: wipeTarget }).play();
    });
    //var slideAwayButton = dom.byId("slideAwayButton"),
    //    slideBackButton = dom.byId("slideBackButton"),
    //    slideTarget = dom.byId("slideTarget");
    //
    //on(slideAwayButton, "click", function(evt){
    //    fx.slideTo({ node: slideTarget, left: "200", top: "200" }).play();
    //});
    //on(slideBackButton, "click", function(evt){
    //    fx.slideTo({ node: slideTarget, left: "0", top: "100" }).play();
    //});
    //var slideAwayButton = dom.byId("slideAwayButton"),
    //    slideBackButton = dom.byId("slideBackButton"),
    //    slideTarget = dom.byId("slideTarget");
    //
    //on(slideAwayButton, "click", function(evt){
    //    // Note that we're specifying the beforeBegin as a property of the animation
    //    // rather than using connect. This ensures that our beforeBegin handler
    //    // executes before any others.
    //    var anim = fx.slideTo({
    //        node: slideTarget,
    //        left: "200",
    //        top: "200",
    //        beforeBegin: function(){
    //
    //            console.warn("slide target is: ", slideTarget);
    //
    //            style.set(slideTarget, {
    //                left: "0px",
    //                top: "100px"
    //            });
    //        }
    //    });
    //
    //    // We could have also specified onEnd above alongside beforeBegin,
    //    // but it's just as easy to connect like so
    //    on(anim, "End", function(){
    //        style.set(slideTarget, {
    //            backgroundColor: "blue"
    //        });
    //    }, true);
    //
    //    // Don't forget to actually start the animation!
    //    anim.play();
    //});
    //
    //on(slideBackButton, "click", function(evt){
    //    var anim = fx.slideTo({
    //        node: slideTarget,
    //        left: "0",
    //        top: "100",
    //        beforeBegin: function(){
    //
    //            style.set(slideTarget, {
    //                left: "200px",
    //                top: "200px"
    //            });
    //        }
    //    });
    //
    //    on(anim, "End", function(){
    //        style.set(slideTarget, {
    //            backgroundColor: "red"
    //        });
    //    }, true);
    //
    //    anim.play();
    //});
    //var slideAwayButton = dom.byId("slideAwayButton"),
    //    slideBackButton = dom.byId("slideBackButton"),
    //    slideTarget = dom.byId("slideTarget");
    //
    //// Set up a couple of click handlers to run our chained animations
    //on(slideAwayButton, "click", function(evt){
    //    fx.chain([
    //        baseFx.fadeIn({ node: slideTarget }),
    //        fx.slideTo({ node: slideTarget, left: "200", top: "200" }),
    //        baseFx.fadeOut({ node: slideTarget })
    //    ]).play();
    //});
    //on(slideBackButton, "click", function(evt){
    //    fx.chain([
    //        baseFx.fadeIn({ node: slideTarget }),
    //        fx.slideTo({ node: slideTarget, left: "0", top: "100" }),
    //        baseFx.fadeOut({ node: slideTarget })
    //    ]).play();
    //});
    var slideAwayButton = dom.byId("slideAwayButton"),
        slideBackButton = dom.byId("slideBackButton"),
        slideTarget = dom.byId("slideTarget");

    // Set up a couple of click handlers to run our combined animations
    on(slideAwayButton, "click", function(evt){
        fx.combine([
            baseFx.fadeIn({ node: slideTarget }),
            fx.slideTo({ node: slideTarget, left: "200", top: "200" })
        ]).play();
    });
    on(slideBackButton, "click", function(evt){
        fx.combine([
            fx.slideTo({ node: slideTarget, left: "0", top: "100" }),
            baseFx.fadeOut({ node: slideTarget })
        ]).play();
    });
});