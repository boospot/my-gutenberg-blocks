/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import {registerBlockType} from '@wordpress/blocks';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import {__} from '@wordpress/i18n';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType('mgb/latest-post-card', {
    apiVersion: 2,
    title: __('UiKit Latest Post Card', 'my-gutenberg-blocks'),
    description: __(
        'UiKit Latest Post Card',
        'my-gutenberg-blocks'
    ),
    category: 'uikit',
    icon: 'smiley',
    keywords: [
        __('dynamic block, latest post', 'my-gutenberg-blocks')
    ],
    attributes: {
        cardTitle: {
            type: 'string',
            source: 'html',
            selector: '.uk-card-title',
        },
        cardDescription: {
            type: 'array',
            source: 'children',
            selector: '.uk-card-description',
        },
        backgroundColor: {
            type: 'string'
        },
        textColor: {
            type: 'string'
        },
        descriptionAlignment: {
            type: 'string',
            default: 'left'
        }
    },

    /**
     * @see ./edit.js
     */
    edit: Edit,

    /**
     * @see ./save.js
     */
    save: () => {
        return null;
    },
});
