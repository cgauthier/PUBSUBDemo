Ext.define('ExtTrigCmb.view.TextArea', {
    extend: 'Ext.form.field.TextArea',
    xtype: 'view-textarea',
    constructor: function(cfg) {
        var me = this;
        Ext.apply(me, cfg);
        me.callParent(arguments);
    },
    initComponent: function(cfg) {
        var me = this;
        PUBSUB.sub("test", "test", me.loadData, me);
        me.callParent(arguments);
    },
    loadData: function(data) {
        var me = this,
            strData = JSON.stringify(data.data, null, '\t');
            
        me.setValue(strData);        
    }
});
