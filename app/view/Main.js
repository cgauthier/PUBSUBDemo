Ext.define('ExtTrigCmb.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.layout.container.HBox',
        'Ext.panel.Panel',
        'Ext.layout.container.Anchor',
        'ExtTrigCmb.view.ExtendedTriggerCombo',
        'ExtTrigCmb.view.TextArea'
    ],
    
    xtype: 'app-main',

    constructor: function(cfg) {
        var me = this;
        Ext.apply(cfg);
        me.callParent(arguments);
    },
    initComponent: function() {
        var me = this;
        
        me.layout = {
            type: 'hbox',
            align: 'stretch'
        };
        
        me.items = [{
            xtype: 'panel',
            anchor: '100%',
            bodyPadding: '10',
            layout: {
                type: 'anchor',
                anchor: '100%'
            },
            items: [{
                xtype: 'extendedtriggercombo',
                flex: ".3",
                channel: "test"
            }]
        }, {
            flex: "1",
            xtype: 'view-textarea'
        }];
        
        me.callParent(arguments);
    }

});