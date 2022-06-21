import React from 'react';
import _ from 'lodash';
import Icon from '../components/Icon';

export default class Link extends React.Component {
    render() {
        const page = _.get(this.props, 'page');

        return (
            <div className="link-tree twitter">
                <h1>Anthony Capirchio</h1>
                <h2>Tech Lead / Archi / Freelance</h2>
                {page.links.map(link => {
                    return <div className="link-wrapper">
                        <Icon className="icon" icon={link.icon} />
                        <a href={link.value}>{link.name}</a>
                    </div>
                })}
            </div>
        );
    }
}
