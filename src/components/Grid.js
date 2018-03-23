import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const Grid = props => (
    <div className={css(styles.grid)}>{props.children}</div>
);

const styles = StyleSheet.create({
    grid: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    }
});

export default Grid;