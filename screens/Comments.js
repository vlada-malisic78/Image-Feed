import React from 'react';
import { SafeAreaView,  ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import NavigationBar from '../components/NavigationBar';
import CommentInput from '../components/CommentInput';
import CommentList from '../components/CommentList'


const Comments = ({style, comments, onClose, onSubmit}) => {
    return ( 
        <SafeAreaView style={style}>
            <NavigationBar 
                title="Comments"
                leftText="Close"
                onPressLeftText={onClose}
            />
            <CommentInput placeholder="Leave a comment" onSumbit={onSubmitComment} />
            <CommentList items={comments} />
        </SafeAreaView>
     );
}

Comments.PropTypes = {
    style: ViewPropTypes.style,
    comments: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmitComment: PropTypes.func.isRequired
}

Comments.defaultProps = {
    style: null
}
export default Comments;