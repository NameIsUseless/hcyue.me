import {ajax, parseTime} from '../utils';

import ArticleTitle from './_partial/ArticleTitle';
import ArticleText from './_partial/ArticleText';
import ArticleMeta from './_partial/ArticleMeta';

var Lab = React.createClass({
    getInitialState() {
        return {
            body: '<p>Building...</p>'
        };
    },
    render() {
        return (
            <div id="wrapper">
                <article className="Page typo">
                    <ArticleTitle>Lab</ArticleTitle>
                    <ArticleText>{this.state.body}</ArticleText>
                </article>
            </div>
        );
    }
});

export default Lab;