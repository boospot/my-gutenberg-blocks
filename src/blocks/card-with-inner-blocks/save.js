import {useBlockProps, RichText, InnerBlocks} from '@wordpress/block-editor';

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
                    <InnerBlocks.Content/>
                </div>
                <div className="uk-card-footer">
                    <a href={attributes.buttonUrl} className="mgb-btn-url uk-button uk-button-default"><RichText.Content
                        value={attributes.buttonLabel}/></a>
                </div>
            </div>
        </div>
    );
}
