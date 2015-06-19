define([
    'util/gene',
    'lodash',
    'plugins/webida.editor.text-editor/TextEditor',
    'plugins/editors/plugin',
    'dojo/topic',
    'dijit/layout/TabContainer',
    'dijit/layout/ContentPane',
    'text!./sample.json'
], function(gene, _, TextEditor, editors, topic, TabContainer, ContentPane, data) {
    'use strict';

    var model = JSON.parse(data);
    var styleTP = 'width: 100%; height: 100%';
    var styleCP = 'border:0; margin:0; padding:1px; background-color: pink;';

    function ServiceEditor() {
        //TODO
    }

    gene.inherit(ServiceEditor, TextEditor, {
        create: function(file, content, elem, started) {
            var tab = tabs;
            var tabs = new TabContainer({
                title: file,
                tabPosition: 'bottom',
                nested: true,
                tabStrip: true,
                style: styleTP
            });

            var formCP = new ContentPane({
                title: 'Form',
                selected: true,
                content: model.form,
                style: styleCP
            });

            var editorCP = new ContentPane({
                title: 'Editor',
                content: model.script.src,
                style: styleCP
            });

            tabs.addChild(formCP);
            tabs.addChild(editorCP);
            tabs.startup();

            elem.appendChild(tabs.domNode);
        },

        show: function(file) {
            console.info('show()');
            file.tabTitle += ' :: XML Editor';
        },

        hide: function( /*file*/ ) {
            console.info('hide()');
        },

        destroy: function( /*file*/ ) {
            console.info('destroy()');
        },

        getValue: function( /*file*/ ) {
            console.info('getValue()');
        },

        addChangeListener: function( /*file, callback*/ ) {
            console.info('addChangeListener()');
        },

        focus: function( /*file*/ ) {
            console.info('focus()');
        },

        pushCursorLocation: function( /*file, cursor, forced*/ ) {
            console.info('pushCursorLocation()');
        },

        moveBack: function() {
            console.info('moveBack()');
        },
        moveForth: function() {
            console.info('moveForth()');
        },
        moveTo: function( /*location*/ ) {
            console.info('moveTo()');
        },

        getLastSavedFoldingStatus: function() {
            console.info('getLastSavedFoldingStatus()');
        },

        markClean: function( /*file*/ ) {
            console.info('markClean()');
        },

        isClean: function( /*file*/ ) {
            console.info('isClean()');
        },

        setMode: function() {
            console.info('setMode()');
        }
    });

    return ServiceEditor;
});
