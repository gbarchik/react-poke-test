import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite/no-important';

const Header = props => (
    <header className={css(styles.header)}>
        <h1 className={css(styles.headerTitle)}>
            <Link to="/" className={css(styles.headerTitleLink)}>{props.title}</Link>
        </h1>
    </header>
);

const styles = StyleSheet.create({
    header: {
        marginBottom: '20px',
        padding: '15px 20px',
        backgroundColor: '#EF5350',
        boxShadow: '0 2px 0 rgba(0, 0, 0, 0.2)'
    },
    headerTitle: {
        margin: '0',
        fontFamily: 'sans-serif',
        fontSize: '28px',
        textAlign: 'center',
        color: 'white'
    },
    headerTitleLink: {
        textDecoration: 'none',
        color: 'white',

        ':hover': {
            textDecoration: 'underline'
        }
    }
})

function mapStateToProps(state) {
    return {
        title: state.config.siteTitle
    }
}

export default connect(mapStateToProps)(Header);