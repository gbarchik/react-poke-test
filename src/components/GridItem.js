import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const GridItem = props => {

    const styles = createItemStyle(props);

    return <div className={css(styles.gridItem)}>{props.children}</div>
};

function createItemStyle(props) {
    const { cols, gutter } = props;

    const breakPoints = ['small', 'medium', 'large']
    const defaultGutter = '10px';

    const itemPercentageWidth = breakPoints.reduce((obj, breakPoint, index) => {
        obj[breakPoint] = (100 / Number(cols[index] || 1)) + '%';
        return obj;
    }, {});

    const getWidth = (breakPoint, gutter = defaultGutter) => `calc(${itemPercentageWidth[breakPoint]} - ${gutter})`;

    return StyleSheet.create({
        gridItem: {
            width: getWidth('small', gutter),
            marginBottom: `${gutter || defaultGutter}`,

            '@media (min-width: 667px)': {
                width: getWidth('medium', gutter),
            },

            '@media (min-width: 1024px)': {
                width: getWidth('large', gutter),
            }
        }
    });
}

export default GridItem;