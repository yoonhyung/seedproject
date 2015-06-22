define([
    'plugins/workbench/plugin',
    'widgets/views/view',
    'dojo/topic',
    'dojo/_base/xhr',
    'dojo/store/Memory',
    'dojo/store/Observable',
    'dijit/tree/ObjectStoreModel',
    'dijit/Tree',
    'lodash'
], function(workbench, View, topic, xhr, Memory, Observable, ObjectStoreModel, Tree, _) {
    'use strict';

    var templ = '<div id="ws-contents" style="width:100%; height:100%;"></div>';

    var view;
    var workspaceView = {
        // for webida.common.workbench:views extension point
        getView: function() {
            if (!view) {
                view = new View('workspaceView', 'Services');
                view.setContent(templ);
            }

            return view;
        },

        // for webida.common.workbench:views extension point
        onViewAppended: function() {

            var myStore = null;

            var xhrArgs = {
                url: 'http://172.21.110.100:8080/workspaces/items',
                handleAs: 'json',
                preventCache: true
            };

            var deferred = dojo.xhrGet(xhrArgs);
            deferred.then(

                // on success
                function(result) {

                    console.log('[SUCCESS] remotecall to workspaces/items');
                    console.log(result);

                    // Store
                    myStore = new Memory({
                        data: result.resultData,

                        getChildren: function(object) {
                            return this.query({
                                parent: object.id
                            });
                        }
                    });

                    myStore = new Observable(myStore);

                    // Model
                    var myModel = new ObjectStoreModel({
                        store: myStore,
                        query: {
                            id: 'SCRIPT'
                        }
                    });

                    // Tree
                    var tree = new Tree({
                        model: myModel,
                        openOnDblClick: true,
                        style: 'width: 100%; height: 100%',

                        getIconClass: function( /*dojo.data.Item*/ item, /*Boolean*/ opened) {
                            console.log('tree getIconClass', item, opened);
                            console.log('tree item type', item.type);
                            return (!item || this.model.mayHaveChildren(item)) ? (opened ? 'dijitFolderOpened' : 'dijitFolderClosed') : 'dijitLeaf';
                        },

                        onClick: function(item, node) {
                            // console.log(item);
                        },

                        onDblClick: function(item, node) {
                            var serviceid = item.id;
                            topic.publish('#REQUEST.openFile', item.id);

                        }
                    });

                    var node = document.querySelector('#ws-contents');
                    tree.placeAt(node);
                    tree.startup();

                    // Tree ContextMenu
                    var menu = new dijit.Menu();
                    menu.bindDomNode(tree.domNode);
                    menu.addChild(new dijit.MenuItem({
                        label: 'Add Service',
                        onClick: function() {
                            topic.publish('#REQUEST.openFile', item.id);
                        }
                    }));
                    menu.startup();
                },

                // on error
                function(error) {
                    toastr.error('Failed to read Service List.');
                    console.log('[ERROR] remotecall to workspaces/items');
                    console.log(error);
                }
            );
        }
    };

    return workspaceView;
});
