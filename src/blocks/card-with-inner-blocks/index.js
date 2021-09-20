import {registerBlockType} from '@wordpress/blocks';
import {__} from '@wordpress/i18n';
import './style.scss';

import Edit from './edit';
import save from './save';

registerBlockType('mgb/card-with-inner-blocks', {
    apiVersion: 2,
    title: __('UiKit Card with Inner Blocks', 'my-gutenberg-blocks'),
    description: __(
        'UiKit Card with  Inner Blocks',
        'my-gutenberg-blocks'
    ),
    category: 'uikit',
    icon: 'smiley',
    keywords: [
        __('Card With Inner Blocks', 'my-gutenberg-blocks'),
        __('inner Component', 'my-gutenberg-blocks'),
        __('ui kit UiKit card inner', 'my-gutenberg-blocks')
    ],
    attributes: {
        cardTitle: {
            type: 'string',
            source: 'html',
            selector: '.uk-card-title',
        },
        jobTitle: {
            type: 'string',
            source: 'html',
            selector: '.job-title',
        },
        imgSrc: {
            type: 'text',
            source: 'attribute',
            attribute: 'src',
            selector: '.uk-border-circle',
        },
        buttonLabel: {
            type: 'string',
            source: 'text',
            selector: '.mgb-btn-url',
            default: __('Read More', 'my-gutenberg-blocks')
        },
        buttonUrl: {
            type: 'string',
            source: 'attribute',
            attribute: 'href',
            selector: '.mgb-btn-url'
        }
    },

    /**
     * @see ./edit.js
     */
    edit: Edit,

    /**
     * @see ./save.js
     */
    save,
});
