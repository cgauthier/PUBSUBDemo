Ext.define('ExtTrigCmb.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.layout.container.Fit',
        'ExtTrigCmb.view.Main',
        'ExtTrigCmb.util.PUBSUB'
    ],
    layout: {
        type: 'fit'
    },
    items: [{
        xtype: 'app-main'
    }]
});
