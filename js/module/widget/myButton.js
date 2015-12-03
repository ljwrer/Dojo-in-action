/**
 * Created by Administrator on 2015/11/23.
 */
define([
    "dojo/_base/declare",
    "dijit/form/Button"
], function (declare, Button) {
    return declare(Button, {
        label: "My Button",
        onClick: function (evt) {
            console.log("I was clicked!");
            this.inherited(arguments);
        }
    });
});