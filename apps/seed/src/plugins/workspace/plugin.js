define([
    'plugins/workbench/plugin',
    'widgets/views/view',
    'dojo/topic',
    'lodash'
], function(workbench, View, topic, _) {
    'use strict';

    var view;
    var templ = '<div id="ws-contents" style="width:100%; height:100%;"></div>';

    var workspaceView = {
        // for webida.common.workbench:views extension point
        getView: function() {
            if (!view) {
                view = new View('workspaceView', 'Workspace');
                view.setContent(templ);
            }

            return view;
        },

        // for webida.common.workbench:views extension point
        onViewAppended: function() {
            var opt = {};
            opt.title = 'Workspace';
            opt.key = 'W';
            workbench.registToViewFocusList(view, opt);

            $('#ws-contents').jstree({
                'core': {
                    'multiple': false,
                    'data': [{
                            "id": "ajson1",
                            "parent": "#",
                            "text": "Service"
                        }, {
                            "id": "ajson2",
                            "parent": "#",
                            "text": "Script"
                        }, {
                            "id": "ajson3",
                            "parent": "ajson2",
                            "text": "Script-1.test"
                        }, {
                            "id": "ajson4",
                            "parent": "ajson2",
                            "text": "Script-2.js"
                        }
                    ]
                },
                'plugins': ['wholerow']
            }).bind('dblclick.jstree', function(evt) {
                var self = $(this);
                var id = self.jstree().get_selected();
                var text = self.jstree().get_text(id[0]);

                var path = _.uniqueId('script_') + '.svc';
                topic.publish('#REQUEST.openFile', path);
            });

            topic.subscribe('view.selected', function(event) {
                var view = event.view;
                if (view.getId() === 'workspaceView') {
                    // tree.focus();
                }
            });
        }
    };

    return workspaceView;
});
