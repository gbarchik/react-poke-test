import React from 'react';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite/no-important';

const Card = props => {
    const { image, name, link } = props;
    return (
        <div className={css(styles.card)}>
            <Link to={link} className={css(styles.cardLink)}>
                <img className={css(styles.cardImage)} src={image} alt={name} />
                <h2 className={css(styles.cardTitle)}>{name}</h2>
            </Link>
        </div>
    )
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f5f5f5',
        border: '1px solid #f0f0f0'
    },
    cardLink: {
        display: 'block',
        padding: '10px',
        textDecoration: 'none',
        
        ':hover': {
            backgroundColor: '#f0f0f0'
        }
    },
    cardImage: {
        display: 'block',
        margin: '0 auto 10px'
    },
    cardTitle: {
        margin: 0,
        fontFamily: 'sans-serif',
        fontSize: '20px',
        textAlign: 'center',
        color: 'black'
    }
});

export default Card;