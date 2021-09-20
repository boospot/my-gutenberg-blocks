import {
    IconButton
} from '@wordpress/components';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import {__} from '@wordpress/i18n';


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
    useBlockProps,
    RichText,
    MediaUpload,
    URLInputButton
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
export default function Edit({attributes, className, setAttributes, isSelected}) {

    const onImageSelect = media => {
        setAttributes({imgSrc: media.sizes.full.url})
    };

    const blockProps = useBlockProps({className: 'gte-custom-class-card-with-button'});

    return (
        <div {...blockProps}>
            <div className={`uk-card uk-card-default`}>
                <div className="uk-card-header">
                    <div className="uk-grid-small uk-flex-middle uk-grid">
                        <div className="uk-width-auto image-holder">
                            <img className="uk-border-circle" width={100} height={100} src={attributes.imgSrc}/>
                            <MediaUpload
                                value={attributes.imgSrc}
                                onSelect={onImageSelect}
                                render={({open}) => (
                                    <IconButton
                                        icon={'upload'}
                                        className={'overlay-button'}
                                        onClick={open}
                                        label={__('Upload Images', 'my-gutenberg-blocks')}
                                    />

                                )}
                            />
                        </div>
                        <div className="uk-width-expand">
                            <h3 className="uk-card-title uk-margin-remove-bottom">
                                <RichText
                                    value={attributes.cardTitle}
                                    onChange={cardTitle => setAttributes({cardTitle})}
                                    placeholder={__('Card Title', 'my-gutenberg-blocks')}
                                />
                            </h3>
                            <p className="uk-text-meta uk-margin-remove-top">
                                <div className={'job-title'}>
                                    <RichText
                                        value={attributes.jobTitle}
                                        onChange={jobTitle => setAttributes({jobTitle})}
                                        placeholder={__('Job Title', 'my-gutenberg-blocks')}
                                    />
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="uk-card-body">
                    <RichText
                        value={attributes.cardDescription}
                        onChange={cardDescription => setAttributes({cardDescription})}
                        placeholder={__('Card Description', 'my-gutenberg-blocks')}
                    />
                </div>
                <div className="uk-card-footer">
                    {
                        isSelected &&
                        <div className="uk-alert uk-alert-primary uk-text-small">
                            <a className="uk-alert-close" ukClose={true}></a>
                            {__('Click on the button to edit label', 'my-gutenberg-blocks')}
                        </div>
                    }
                    <a href="#"
                       className="mgb-btn-url uk-button uk-button-default">
                        <RichText
                            value={attributes.buttonLabel}
                            onChange={buttonLabel => setAttributes({buttonLabel})}
                            placeholder={__('CLick to Edit Label', 'my-gutenberg-blocks')}
                        />
                    </a>
                    <URLInputButton
                        url={attributes.buttonUrl}
                        onChange={buttonUrl => setAttributes({buttonUrl})}
                    />
                </div>
            </div>
        </div>
    );
}

