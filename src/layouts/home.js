import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import { Layout } from '../components/index';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Icon from '../components/Icon';
import { getPageUrl, Link, withPrefix } from '../utils';

export default class Home extends React.Component {
    renderPost(post, index) {
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
                <p className="read-more">
                    <Link className="read-more-link" href={postUrl}>{"Continuer la lecture"} <span className="icon-arrow-right" aria-hidden="true" /></Link>
                </p>
            </article>
        );
    }

    renderPostsFreed(posts) {
        return <div className="post-feed">
            {posts.map((post, index) => {
                return this.renderPost(post, index);
            })}
        </div>
    }
    
    renderPhotograpiesFreed(photographies) {
        return <div className="photography-feed">
            {photographies.map((photography, index) => {
                return this.renderPost(photography, index)
            })}
        </div>
    }

    render() {
        const data = this.props.data;
        const config = data.config;
        const header = config.header;
        const headerImage = header.background_img;
        const page = this.props.page;
        const posts = _.orderBy(_.get(this.props, 'posts', []), 'date', 'desc');
        const photographies = _.orderBy(_.get(this.props, 'photographies', []), 'date', 'desc');

        return (
            <Layout page={page} config={config}>
                <Header config={config} page={page} image={headerImage} />
                <div id="content" className="site-content">
                    <main id="main" className="site-main inner">
                        {this.renderPostsFreed(posts)}
                        {this.renderPhotograpiesFreed(photographies)}
                    </main>
                    <Footer config={config} />
                </div>
            </Layout>
        );
    }
}
