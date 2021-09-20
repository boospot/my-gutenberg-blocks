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
import {useBlockProps, RichText} from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

export default function Save({attributes, className}) {
    const blockProps = useBlockProps.save();
    return (
        <div {...blockProps}>
            <div className={`uk-card uk-card-default`}>
                <div className="uk-card-header">
                    <div className="uk-grid-small uk-flex-middle uk-grid">
                        <div className="uk-width-auto">
                            <img className="uk-border-circle" width={100} height={100} src={attributes.imgSrc}/>
                        </div>
                        <div className="uk-width-expand">
                            <h3 className="uk-card-title uk-margin-remove-bottom">
                                <RichText.Content value={attributes.cardTitle}/>
                            </h3>
                            <p className="uk-text-meta uk-margin-remove-top">
                                <div className={'job-title'}><RichText.Content value={attributes.jobTitle}/></div>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="uk-card-body">
                    <div className={"uk-card-description"}><RichText.Content value={attributes.cardDescription}/></div>
                </div>
                <div className="uk-card-footer">
                    <a href={attributes.buttonUrl} className="mgb-btn-url uk-button uk-button-default"><RichText.Content value={attributes.buttonLabel} /></a>
                </div>
            </div>
        </div>
    );
}
