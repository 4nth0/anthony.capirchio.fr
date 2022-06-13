import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import { Layout } from '../components/index';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Icon from '../components/Icon';
import { getPageUrl, Link, withPrefix } from '../utils';

export default class Home extends React.Component {
    renderPost(post, index, hasMoreLink, moreLinkText) {
        const title = _.get(post, 'title');
        const thumbImage = _.get(post, 'thumb_img_path');
        const excerpt = _.get(post, 'excerpt');
        const date = _.get(post, 'date');
        const dateTimeAttr = moment(date).strftime('%Y-%m-%d %H:%M');
        const formattedDate = moment(date).strftime('%B %d, %Y');
        let postUrl = getPageUrl(post, { withPrefix: true });
        const isExtarnalPost = "object" == typeof post.origin && !!post.origin.platform
        
        if(post.status && post.status != "live") {
            return null
        }

        if('object' == typeof post.origin && post.origin.path) {
            postUrl = post.origin.path;
        }

        return (
            <article key={index} className="post">
                <header className="post-header">
                    <h2 className="post-title">
                        {isExtarnalPost ? <Icon className="external-icom" icon="link" /> : ""}
                        <Link href={postUrl}>{title}</Link>
                    </h2>
                    <div className="post-meta">
                        Publié le <time className="published" dateTime={dateTimeAttr}>{formattedDate}</time>
                    </div>
                </header>
                {thumbImage && (
                    <Link className="post-thumbnail" style={{ backgroundImage: `url(${thumbImage})` }} href={postUrl}></Link>
                )}
                {excerpt && (
                    <div className="post-content">
                        <p>{excerpt}</p>
                    </div>
                )}
                {hasMoreLink && moreLinkText && (
                    <p className="read-more">
                        <Link className="read-more-link" href={postUrl}>{moreLinkText} <span className="icon-arrow-right" aria-hidden="true" /></Link>
                    </p>
                )}
            </article>
        );
    }

    render() {
        const data = _.get(this.props, 'data');
        const config = _.get(data, 'config');
        const header = _.get(config, 'header');
        const headerImage = _.get(header, 'background_img');
        const page = _.get(this.props, 'page');
        const hasMoreLink = _.get(page, 'has_more_link');
        const moreLinkText = _.get(page, 'more_link_text');
        const posts = _.orderBy(_.get(this.props, 'posts', []), 'date', 'desc');
        const photographies = _.orderBy(_.get(this.props, 'photographies', []), 'date', 'desc');

        return (
            <Layout page={page} config={config}>
                <Header config={config} page={page} image={headerImage} />
                <div id="content" className="site-content">
                    <main id="main" className="site-main inner">
                        <div className="post-feed">
                            {_.map(posts, (post, index) => this.renderPost(post, index, hasMoreLink, moreLinkText))}
                        </div>
                        <div className="photography-feed">
                            {_.map(photographies, (photography, index) => this.renderPost(photography, index, hasMoreLink, moreLinkText))}
                        </div>
                    </main>
                    <Footer config={config} />
                </div>
            </Layout>
        );
    }
}
