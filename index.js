'use strict';

module.exports = {
    'extends': 'stylelint-config-suitcss',
    'rules': {
        'indentation': 4,

        // Order based on https://gist.github.com/MadLittleMods/929bcdefb2b29c9b97c3
        'rule-properties-order': [
            {
                '-group-overview': [
                    'all',
                    'content',
                    'box-sizing',
                    'will-change',
                ],
            },

            'zoom',
            'z-index',
            'overflow',
            'overflow-x',
            'overflow-y',

            {
                '-group-positioning': [
                    'position',
                    'top',
                    'right',
                    'bottom',
                    'left',
                    'perspective',
                    'transform',
                ],
            },


            {
                '-group-display': [
                    'flex',
                    {
                        'flex-basis': null,
                        'flex-grow': null,
                        'flex-shrink': null,
                        'align-self': null,
                        'order': null,
                    },
                    'clear',
                    'float',
                    'visibility',
                    'display',
                    'vertical-align',
                    {
                        'table-layout': null,
                        'empty-cells': null,
                        'direction': null,
                    },
                    {
                        'flex-flow': null,
                        'flex-wrap': null,
                        'flex-direction': null,
                        'justify-content': null,
                        'align-items': null,
                        'align-content': null,
                    },
                ],
            },


            {
                '-group-dimensioning': [
                    'width',
                    'min-width',
                    'max-width',
                    'height',
                    'min-height',
                    'max-height',
                ],
            },

            'margin',
            'padding',


            {
                '-group-aesthetic': [
                    'opacity',
                    'object-fit',
                    'object-position',
                    'clip-path',
                    'background',

                    'border',
                    'outline',

                    'border-radius',
                    'box-shadow',
                    'filter',
                ],
            },

            'list-style',

            {
                '-group-text': [
                    'color',
                    'font',
                    {
                        'font-family': null,
                        'font-variant': null,
                        '0': [
                            'font-size',
                            'font-size-adjust',
                            'line-height',
                        ],
                        'word-spacing': null,
                        'font-kerning': null,
                        'font-weight': null,
                        'font-stretch': null,
                        'font-style': null,
                    },
                    {
                        '0': {
                            'text-decoration': null,
                            'text-underline-position': null,
                        },
                        '1': {
                            'text-transform': null,
                            'text-shadow': null,
                            'text-overflow': null,
                            'text-align': null,
                            'text-justify': null,
                        },
                    },
                ],
            },

            {
                'tab-size': null,
                'text-indent': null,
                'white-space': null,
            },

            {
                '-group-paragraphs-and-wrapping': {
                    'word-break': null,
                    'hyphens': null,
                    'orphans': null,
                    'widows': null,
                },
            },

            {
                '-group-cursor': {
                    'pointer-events': null,
                    'user-select': null,
                    '0': [
                        'cursor',
                        'resize',
                    ],
                },
            },


            'animation',
            'animation-name',
            {
                'animation-play-state': null,
                'animation-direction': null,
                'animation-fill-mode': null,
                'animation-duration': null,
                'animation-delay': null,
                'animation-iteration-count': null,
                'animation-timing-function': null,
            },

            'transition',
        ],
    },
};
