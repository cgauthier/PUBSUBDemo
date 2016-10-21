Ext.define('ExtTrigCmb.view.ExtendedTriggerCombo', {
   extend: 'Ext.form.field.ComboBox',
   xtype: 'extendedtriggercombo',
   constructor: function(cfg) {
       var me = this;
       Ext.apply(me, cfg);
       me.callParent(arguments);
   },
   triggerClickState: false,
   curIndex: 0,
   channel: null,
   onTriggerClick: function() {
        var me = this,    
            args = arguments,
            xhrCall = false,
            fn;
       
        if(me.getPicker().isVisible() == false) {
            me.triggerClickState = false;
            fn = function() {
                var me = this, idx, url;
                if(me.triggerClickState == true) {
                    me.triggerClickState = false;
                    me.superclass.onTriggerClick.call(me);               
                } else {
                    if(xhrCall === false) {
                        xhrCall = true;
                        idx = me.idxFunc();
                        url = me.prefix + idx + me.suffix;
                        me.loadAndDispatch(url);
                    }
                    setTimeout(Ext.Function.pass(fn, me, me), 100);
               }
           };
           fn.call(me);            
        } else {
           me.callSuper();
        }
       
   },
   initComponent: function() {
       var me = this;
       me.forceSelection = true;
       me.queryMode = 'local';
       me.displayTpl = new Ext.XTemplate (
           '<tpl for=".">',
                '{agent}, {state}',
           '</tpl>'
       );
       me.store = "ExtendedTriggerCombo";
       me.listConfig = {
           getInnerTpl: function() {
               return '{agent}, {state}';
           }
       };       
       me.listeners = {
           'afterrender': {
               fn: function(cmb) {
                    var me = this,
                        idx = me.idxFunc(),
                        url = me.prefix + idx + me.suffix;
                    me.loadAndDispatch(url);
               },
               scope: me
           }
       };
       me.callParent(arguments);
   },
   prefix: "resources/data/data",
   suffix: ".json",
   idxFunc: function() {
       var me = this,
           val = Math.floor(Math.random() * 4) + 1;
       while(me.curIndex === val) {
           val = Math.floor(Math.random() * 4) + 1;
       }
       me.curIndex = val;
       return val;
   },
   loadAndDispatch: function(url) {
        var me = this;
        Ext.Ajax.request({
            url: url,
            success: function(resp, opts) {
                var me = this,
                    data = Ext.decode(resp.responseText).data;
                me.triggerClickState = true;
                PUBSUB.pub(me.channel, { data: data });
                me.getStore().loadData(data);
            },
            scope: me
        });        
   }
});
