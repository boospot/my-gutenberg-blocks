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
registerBlockType('mgb/card-with-image', {


    /**
     * This is the display title for your block, which can be translated with `i18n` functions.
     * The block inserter will show this name.
     */
    title: __('UiKit Card with Image', 'my-gutenberg-blocks'),

    /**
     * This is a short description for your block, can be translated with `i18n` functions.
     * It will be shown in the Block Tab in the Settings Sidebar.
     */
    description: __(
        'UiKit Card with Image component',
        'my-gutenberg-blocks'
    ),

    /**
     * Blocks are grouped into categories to help users browse and discover them.
     * The categories provided by core are `text`, `media`, `design`, `widgets`, and `embed`.
     */
    category: 'uikit',

    /**
     * An icon property should be specified to make it easier to identify a block.
     * These can be any of WordPress’ Dashicons, or a custom svg element.
     */
    icon: 'smiley',


    /**
     * Keywords for easy search of Blocks
     */
    keywords: [
        __('Card Title', 'my-gutenberg-blocks'),
        __('Card Description', 'my-gutenberg-blocks'),
        __('ui kit UiKit card ', 'my-gutenberg-blocks')
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
        imgSrc: {
            type: 'text',
            source: 'attribute',
            attribute: 'src',
            selector: '.uk-card-media-top img',
        },
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
