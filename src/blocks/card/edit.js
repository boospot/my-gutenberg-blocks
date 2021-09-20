import {TextControl} from '@wordpress/components';
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import {__} from '@wordpress/i18n';

import classnames from 'classnames';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
    useBlockProps,
    RichText
} from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({attributes, className, setAttributes}) {

    const blockProps = useBlockProps;
    return (
        <div {...blockProps}>
            <div className={`uk-card uk-card-default uk-card-body`}>
                <h3 className="uk-card-title">
                    <RichText
                        value={attributes.cardTitle}
                        onChange={cardTitle => setAttributes({cardTitle})}
                        placeholder={__('Card Title', 'my-gutenberg-blocks')}
                    />
                </h3>
                <div className={"uk-card-description"}>
                    <RichText
                        value={attributes.cardDescription}
                        onChange={cardDescription => setAttributes({cardDescription})}
                        placeholder={__('Card Description', 'my-gutenberg-blocks')}
                    />
                </div>
            </div>
        </div>

    );
}

