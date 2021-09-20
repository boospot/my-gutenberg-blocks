/**
 * Retrieve the required functions from WordPress Data module
 */
import {
    withSelect,
} from '@wordpress/data';
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
    InspectorControls
} from '@wordpress/block-editor';


import {
    PanelBody,
    SelectControl
} from '@wordpress/components';

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
export default withSelect(
    (select) => {

        const postArgs = {
            per_page: -1,
            _embed: true,
        };

        return {
            posts: select('core').getEntityRecords('postType', 'post', postArgs),
        };
    }
)(
    (props) => {

        const {posts, className, attributes, setAttributes} = props;

        const blockProps = useBlockProps();

        const getImageUrl = function (post) {

            let imageUrl = 'https://getuikit.com/docs/images/light.jpg';
            try {
                const featuredImageUrl = post._embedded["wp:featuredmedia"][0].source_url;
                if (featuredImageUrl) {
                    imageUrl = featuredImageUrl;
                }
            } catch (err) {
                return imageUrl;
            }
            return imageUrl;
        }

        const getPostDate = function (post) {
            return new Date(post.date).toDateString();
        }

        const getSelectPostOptions = function (posts) {
            const options = [];
            for (const index in posts) {
                options.push(
                    {
                        'label': posts[index].title.rendered,
                        'value': posts[index].id
                    }
                )

            }
            return options;
        }

        /**
         * Create a component that can be reused even if no posts are found.
         * @returns {JSX.Element}
         */
        const inspector = function () {
            return (
                <InspectorControls>
                    <PanelBody title={__('Post Settings', 'my-gutenberg-blocks')}>
                        <div className="components-base-control">
                            <div className="components-base-control__field">
                                <SelectControl
                                    value={attributes.selectedPost}
                                    onChange={selectedPost => setAttributes({selectedPost})}
                                    label={__('Selected Post', 'my-gutenberg-blocks')}
                                    options={getSelectPostOptions(posts)}
                                />
                            </div>
                        </div>
                    </PanelBody>
                </InspectorControls>
            )

        }

        // Wait for Posts to be returned
        if (!posts) {
            return [
                inspector(),
                <div {...blockProps}>
                    {__('Loading', 'my-gutenberg-blocks')}
                </div>
            ]
        }

        // if we have posts returned with no record
        if (posts && posts.length === 0) {
            return [
                inspector(),
                <div {...blockProps}>
                    {__('No Posts', 'my-gutenberg-blocks')}
                </div>
            ]
        }

        if (!attributes.selectedPost) {
            return [
                inspector(),
                <div {...blockProps}>
                    <div className="uk-card uk-card-body uk-width-1-2 uk-margin-auto">
                        <p className="uk-card-title">
                            {__('First select a post from panel to display', 'my-gutenberg-blocks')}
                        </p>
                        <SelectControl
                            value={attributes.selectedPost}
                            onChange={selectedPost => setAttributes({selectedPost})}
                            label={__('Selected Post', 'my-gutenberg-blocks')}
                            options={getSelectPostOptions(posts)}
                        />
                    </div>
                </div>
            ]
        }

        // Till this point, we have the posts available, so get the first post from array of posts
        const post = posts.filter(obj => {
            return obj.id === parseInt(attributes.selectedPost);
        }).pop();

        // If due to any reason, there is no post in post array
        if (!post) {
            return (
                <div {...blockProps}>
                    {__('No Post Found', 'my-gutenberg-blocks')}
                </div>
            )
        }


        return [
            inspector(),
            <div {...blockProps}>
                <div className={`uk-card uk-card-default`}>
                    <div className="uk-card-header">
                        <div className="uk-card-media-top">
                            <img src={getImageUrl(post)} alt=""/>
                        </div>
                        <div className="uk-grid-small uk-flex-middle uk-grid">
                            <div className="uk-width-expand">
                                <h3 className="uk-card-title uk-margin-remove-bottom">
                                    <RichText.Content value={post.title.rendered}/>
                                </h3>
                                <p className="uk-text-meta uk-margin-remove-top">
                                    <div className={'job-title'}>
                                        <RichText.Content value={getPostDate(post)}/>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="uk-card-body">
                        <RichText.Content value={post.excerpt.rendered}/>
                    </div>
                    <div className="uk-card-footer">
                        <a href="#"
                           className="mgb-btn-url uk-button uk-button-default">
                            <RichText.Content
                                value={'read more'}
                            />
                        </a>
                    </div>
                </div>
            </div>
        ];

    }
);