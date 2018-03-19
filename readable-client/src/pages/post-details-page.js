	import React, { Component } from "react";

	import { connect } from "react-redux";
	import * as actions from "../actions";
	import { arrayFromObject } from "../utils/helpers";
	import APIHelper from "../utils/api-helper";
	import Post from "../components/post";
	import Comment from "../components/comment";
	import CommentForm from "../forms/comment-form";
	import NotFound from '../components/NotFound';

		class PostDetailsPage extends Component {
		componentDidMount () {
			const { post_id } = this.props.match.params;
			APIHelper.fetchPostComments(post_id).then(comments => {
		  this.props.loadComments({ type: actions.LOAD_COMMENTS, comments });
			});
		}
		render() {
			const { post_id } = this.props.match.params;
			const { posts, comments } = this.props;
			const post = posts[post_id];
			const commentsArray = arrayFromObject(comments, "id");
			const postComments = commentsArray.filter(c => c.parentId === post_id);

			if (post) {
				     return (
							 <div>
						<Post post={post} is_detail={true} />
						<h2>Comments</h2>
						<ol>{postComments.map(c => <Comment key={c.id} comment={c} />)}</ol>
						<div className="addCommentContainer">
							<h3>Add Comment Here</h3>
							<CommentForm parent_id={post_id} />
						</div>
					</div>
				);
			}else {
			 return <NotFound/>;
			 }
			}
		}

	function mapStateToProps({ posts, comments }) {
		return { posts, comments };
	}

	function mapDispatchToProps(dispatch) {
		return {
			loadComments: comments => dispatch(actions.loadComments(comments))
		};
	}

	export default connect(mapStateToProps, mapDispatchToProps)(PostDetailsPage);
