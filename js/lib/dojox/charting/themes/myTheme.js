/**
 * Created by Administrator on 2015/11/26.
 */
define(['../SimpleTheme','./common'],function(Theme,common){
    common.myTheme=new Theme({
        colors:[
            '#fff',
            '#ccc',
            '#eee',
            '#ddd'
        ]
    });
    return common.myTheme;
})