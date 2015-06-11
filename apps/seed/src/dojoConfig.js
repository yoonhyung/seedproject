/*
 * Copyright (c) 2012-2015 S-Core Co., Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var dojoConfig = {
    async: true,
    baseUrl: '.',
    parseOnLoad: false,
    packages: [{
        name: 'dojo',
        location: 'lib/dojo'
    }, {
        name: 'dijit',
        location: 'lib/dijit'
    }, {
        name: 'dojox',
        location: 'lib/dojox'
    }, {
        name: 'dgrid',
        location: 'lib/dgrid'
    }],
    locale: location.search.match(/locale=([\w\-]+)/) ? RegExp.$1 : 'en-us',
    paths: {
        'lib': 'lib',
        'util': 'util',
        'webida-lib': '../../../common/src/webida',
        'lodash': 'lib/lodash/lodash.min',
        'plugins': 'plugins',
        'widgets': 'widgets'
    },
    aliases: [
        ['text', 'dojo/text'],
        ['popup-dialog', 'webida-lib/widgets/dialogs/popup-dialog/PopupDialog']
    ]
};
