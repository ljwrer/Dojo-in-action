/**
 * Created by Administrator on 2015/10/29.
 */
define(['dojo/on', 'dojo/dom', 'dojo/dom-style', 'dojo/mouse', 'dojo/_base/lang', 'dojo/query', 'dojo/topic','dojo/dom-construct'], function (on, dom, style, mouse, lang, query, topic,domConstruct) {
    var myButton = dom.byId('myButton');
    var myDiv = dom.byId('myDiv');
    on(myButton, 'click', function () {
        style.set(myDiv, 'backgroundColor', 'blue');
    });
    on(myDiv, mouse.enter, function () {
        style.set(myDiv, 'backgroundColor', 'red');
    });
    on(myDiv, mouse.leave, function () {
        style.set(myDiv, 'backgroundColor', '#fff');
    });
    var myScopedButton1 = dom.byId("myScopedButton1"),
        myScopedButton2 = dom.byId("myScopedButton2"),
        myObject = {
            id: "myObject",
            onClick: function (evt) {
                alert("The scope of this handler is " + this.id);
            }
        };
    // This will alert "myScopedButton1"
    on(myScopedButton1, "click", myObject.onClick);
    // This will alert "myObject" rather than "myScopedButton2"
    on(myScopedButton2, "click", lang.hitch(myObject, "onClick"));
    //query('.clickMe').on('click', myObject.onClick);
    query('.clickMeAlso').on('click', lang.hitch(myObject, 'onClick'));
    on(dom.byId('parentDiv'), '.clickMe:click', myObject.onClick);
    var alertButton = dom.byId("alertButton"),
        createAlert = dom.byId("createAlert");

    on(alertButton, "click", function () {
        // When this button is clicked,
        // publish to the "alertUser" topic
        topic.publish("alertUser", "I am alerting you.");
    });

    on(createAlert, "click", function (evt) {
        // Create another button
        var anotherButton = domConstruct.create("button", {
            innerHTML: "Another alert button"
        }, createAlert, "after");

        // When the other button is clicked,
        // publish to the "alertUser" topic
        on(anotherButton, "click", function (evt) {
            topic.publish("alertUser", "I am also alerting you.");
        });
    });

    // Register the alerting routine with the "alertUser" topic.
    topic.subscribe("alertUser", function (text) {
        alert(text);
    });
})