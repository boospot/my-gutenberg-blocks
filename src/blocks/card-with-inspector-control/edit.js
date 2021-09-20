import {
    TextControl,
    PanelBody,
    ColorIndicator,
    RadioControl,
    ButtonGroup,
    Button,
    IconButton
} from '@wordpress/components';
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
    RichText,
    InspectorControls,
    ColorPalette,
    BlockControls,
    AlignmentToolbar

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

    const blockProps = useBlockProps();

    const isSelectedAlignment = (alignment = 'left') => {
        return alignment === attributes.descriptionAlignment
    };

    return [
        <InspectorControls>
            <PanelBody title={__('Color Settings', 'my-gutenberg-blocks')}>
                <div className="components-base-control">
                    <div className="components-base-control__field">
                        <label className="components-base-control__label">
                            {__('Background Color', 'my-gutenberg-blocks')}
                            <ColorIndicator colorValue={attributes.backgroundColor}/>
                        </label>
                        <ColorPalette
                            value={attributes.backgroundColor}
                            onChange={backgroundColor => setAttributes({backgroundColor})}
                        />
                    </div>
                    <div className="components-base-control__field">
                        <label className="components-base-control__label">
                            {__('text Color', 'my-gutenberg-blocks')}
                        </label>
                        <ColorPalette
                            value={attributes.textColor}
                            onChange={textColor => setAttributes({textColor})}
                        />
                    </div>
                </div>
            </PanelBody>
            <PanelBody title={__('Text Settings', 'my-gutenberg-blocks')}>
                <div className="components-base-control">
                    <div className="components-base-control__field">
                        <label className="components-base-control__label">
                            {__('Text Alignment', 'my-gutenberg-blocks')}
                        </label>
                        <RadioControl
                            selected={attributes.descriptionAlignment}
                            options={[
                                {'label': __('Left', 'my-gutenberg-blocks'), 'value': 'left'},
                                {'label': __('Center', 'my-gutenberg-blocks'), 'value': 'center'},
                                {'label': __('Right', 'my-gutenberg-blocks'), 'value': 'right'}
                            ]}
                            onChange={descriptionAlignment => {
                                setAttributes({descriptionAlignment})
                            }}
                        />
                        <ButtonGroup>
                            <Button
                                isPrimary={isSelectedAlignment('left')}
                                onClick={() => setAttributes({descriptionAlignment: 'left'})}
                            >{__('Left', 'my-gutenberg-blocks')}</Button>
                            <Button
                                isPrimary={isSelectedAlignment('center')}
                                onClick={() => setAttributes({descriptionAlignment: 'center'})}
                            >{__('Center', 'my-gutenberg-blocks')}</Button>
                            <Button
                                isPrimary={isSelectedAlignment('right')}
                                onClick={() => setAttributes({descriptionAlignment: 'right'})}
                            >{__('Right', 'my-gutenberg-blocks')}</Button>
                        </ButtonGroup>
                        <br/>
                        <br/>
                        <ButtonGroup>
                            <IconButton
                                icon={'editor-alignleft'}
                                isPrimary={isSelectedAlignment('left')}
                                onClick={() => setAttributes({descriptionAlignment: 'left'})}
                                label="More"
                            />
                            <IconButton
                                icon={'editor-aligncenter'}
                                isPrimary={isSelectedAlignment('center')}
                                onClick={() => setAttributes({descriptionAlignment: 'center'})}
                                label="More"
                            />
                            <IconButton
                                icon={'editor-alignright'}
                                isPrimary={isSelectedAlignment('right')}
                                onClick={() => setAttributes({descriptionAlignment: 'right'})}
                                label="More"
                            />
                        </ButtonGroup>

                    </div>
                </div>
            </PanelBody>
        </InspectorControls>,
        <div {...blockProps}>
            <BlockControls>
                <AlignmentToolbar
                    value={attributes.descriptionAlignment}
                    onChange={descriptionAlignment => {
                        setAttributes({descriptionAlignment})
                    }}
                />
            </BlockControls>
            <div
                className={`uk-card uk-card-default uk-card-body`}
                style={{
                    backgroundColor: attributes.backgroundColor,
                    color: attributes.textColor,
                    textAlign: attributes.descriptionAlignment
                }}
            >
                <h3 className="uk-card-title">
                    <RichText
                        value={attributes.cardTitle}
                        onChange={cardTitle => setAttributes({cardTitle})}
                        placeholder={__('Card Title', 'my-gutenberg-blocks')}
                        style={{
                            color: attributes.textColor
                        }}
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
    ];
}

