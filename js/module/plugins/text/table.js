define(['dojo/text!module/plugins/text/templates/table.html'], function (template) {
    console.log(template)
    function Table(boundingBox,num) {
        boundingBox.innerHTML = template;
        var tds=boundingBox.getElementsByTagName('td');
        Array.prototype.forEach.call(tds,function(item){
            item.innerHTML=num;
        })
    }
    return Table;
})