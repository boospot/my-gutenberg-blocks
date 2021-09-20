import {
    IconButton
} from '@wordpress/components';
import {__} from '@wordpress/i18n';
import {
    useBlockProps,
    RichText,
    MediaUpload,
    URLInputButton,
    InnerBlocks
} from '@wordpress/block-editor';

import './editor.scss';

export default function Edit({attributes, className, setAttributes, isSelected}) {

    const ALLOWED_BLOCKS = ['core/button', 'core/heading', 'core/paragraph'];

    const TEMPLATE = [['core/columns', {}, [
        ['core/column', {}, [
            ['core/image'],
        ]],
        ['core/column', {}, [
            ['core/paragraph', {placeholder: 'Enter side content...'}],
        ]],
    ]]];

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
                                    placeholder={__('Card Title', 'my-gutenberg-blocks')}
                                    value={attributes.cardTitle}
                                    onChange={cardTitle => setAttributes({cardTitle})}
                                />
                            </h3>
                            <p className="uk-text-meta uk-margin-remove-top">
                                <div className={'job-title'}>
                                    <RichText
                                        placeholder={__('Job Title', 'my-gutenberg-blocks')}
                                        value={attributes.jobTitle}
                                        onChange={jobTitle => setAttributes({jobTitle})}
                                    />
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="uk-card-body">
                    <InnerBlocks allowedBlocks={ALLOWED_BLOCKS}/>
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

