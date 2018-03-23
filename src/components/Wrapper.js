import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite/no-important';

import ReactLoading from 'react-loading';

const Wrapper = props => (
    props.isLoading
        ? <ReactLoading className={css(style.loading)} color="#f0f0f0" />
        : <div className={css(style.siteWrapper)}>{props.children}</div>
);

const style = StyleSheet.create({
    siteWrapper: {
        maxWidth: '980px',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    loading: {
        margin: '20px auto'
    }
});

function mapStateToProps(state) {
    return {
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps)(Wrapper);