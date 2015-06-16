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

define([], function() {
    'use strict';

    var fileMenuItems = {
        '&Save': ['cmnd', 'plugins/editors/plugin', 'saveFile'],
        'Sav&e All': ['cmnd', 'plugins/editors/editors-commands', 'saveAllFiles'],
        '&Close': ['cmnd', 'plugins/editors/plugin', 'closeFile'],
        'Cl&ose Others': ['cmnd', 'plugins/editors/editors-commands', 'closeOtherFiles'],
        'C&lose All': ['cmnd', 'plugins/editors/editors-commands', 'closeAllFiles'],
        'Recent Files': ['enum', 'plugins/editors/editors-commands', 'openRecentFile'],
    };

    var editMenuItems = {
        '&Undo': ['cmnd', 'plugins/editors/editors-commands', 'undo'],
        '&Redo': ['cmnd', 'plugins/editors/editors-commands', 'redo'],
        '&Delete': ['cmnd', 'plugins/editors/editors-commands', 'del'],
        'Select &All': ['cmnd', 'plugins/editors/editors-commands', 'selectAll'],
        'Select L&ine': ['cmnd', 'plugins/editors/editors-commands', 'selectLine'],
        '&Line': {
            '&Indent': ['cmnd', 'plugins/editors/editors-commands', 'lineIndent'],
            '&Dedent': ['cmnd', 'plugins/editors/editors-commands', 'lineDedent'],
            'Move Line U&p': ['cmnd', 'plugins/editors/editors-commands', 'lineMoveUp'],
            'Move Line Dow&n': ['cmnd', 'plugins/editors/editors-commands', 'lineMoveDown'],
            'D&elete Lines': ['cmnd', 'plugins/editors/editors-commands', 'lineDelete'],
            'Move Cursor Line to Middle': ['cmnd',
                'plugins/editors/editors-commands', 'cursorLineToMiddle'
            ],
            'Move Cursor Line to Top': ['cmnd', 'plugins/editors/editors-commands', 'cursorLineToTop'],
            'Move Cursor Line to Bottom': ['cmnd',
                'plugins/editors/editors-commands', 'cursorLineToBottom'
            ],
        },
        '&Source': {
            '&Toggle Line Comments': ['cmnd', 'plugins/editors/editors-commands', 'lineComment'],
            'Toggle Block Comment': ['cmnd', 'plugins/editors/editors-commands', 'blockComment'],
            'Comment Out Selection': ['cmnd', 'plugins/editors/editors-commands', 'commentOutSelection'],
            '&Fold': ['cmnd', 'plugins/editors/editors-commands', 'foldCode'],
            '&Beautify': ['cmnd', 'plugins/editors/editors-commands', 'beautifyCode'],
            'B&eautify All': ['cmnd', 'plugins/editors/editors-commands', 'beautifyAllCode'],
            '&Rename Variables': ['cmnd', 'plugins/editors/editors-commands', 'rename'],
        }
    };

    var findMenuItems = {
        '&Replace': ['cmnd', 'plugins/editors/editors-commands', 'replace'],
        'F&ind': ['cmnd', 'plugins/editors/editors-commands', 'find'],
        '&Highlight to Find': ['cmnd', 'plugins/editors/editors-commands', 'quickFind'],
        'Find &Next': ['cmnd', 'plugins/editors/editors-commands', 'findNext'],
        'Find &Previous': ['cmnd', 'plugins/editors/editors-commands', 'findPrev'],
    };

    var navMenuItems = {
        '&Go to Definition': ['cmnd', 'plugins/editors/editors-commands', 'gotoDefinition'],
        'G&o to Line': ['cmnd', 'plugins/editors/editors-commands', 'gotoLine'],
        'Go to &Matching Brace': ['cmnd', 'plugins/editors/editors-commands', 'gotoMatchingBrace'],
        '&Navigate Editors': {
            '&Ex-Selected Tab': ['cmnd',
                'plugins/editors/editors-commands', 'switchEditorTabToExSelected'
            ],
            '&Previous Tab': ['cmnd', 'plugins/editors/editors-commands', 'goPrevTab'],
            '&Next Tab': ['cmnd', 'plugins/editors/editors-commands', 'goNextTab'],
            '&Select Tab from List': ['cmnd', 'plugins/editors/editors-commands', 'switchEditorTab'],
            'Switch &Tab Container': ['cmnd',
                'plugins/editors/editors-commands', 'focusMoveToNextTabContainer'
            ],
            'Move Tab to &Other Container': ['cmnd',
                'plugins/editors/editors-commands',
                'moveToOtherTabContainer'
            ],
        }
    };

    var viewMenuItems = {
        'Spl&it Editors': {
            '&Vertical': ['cmnd', 'plugins/editors/editors-commands', 'rotateToVertical'],
            '&Horizontal': ['cmnd', 'plugins/editors/editors-commands', 'rotateToHorizontal'],
        }
    };

    return {
        fileMenuItems: fileMenuItems,
        editMenuItems: editMenuItems,
        findMenuItems: findMenuItems,
        navMenuItems: navMenuItems,
        viewMenuItems: viewMenuItems
    };
});
