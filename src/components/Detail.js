import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite/no-important';
import { loadPokemon } from '../actions';

import Wrapper from './Wrapper';
import Grid from './Grid';
import GridItem from './GridItem';

class Detail extends Component {
    state = {
        pokemon: null
    }

    componentDidMount() {
        const pokemonId = this.props.match.params.pokemonId;
        const detailedPokemons = this.props.detailedPokemons;

        if (!detailedPokemons.hasOwnProperty(pokemonId)) {
            this.props.loadPokemon(this.props.match.params.pokemonId)
                .then(data => this.setState({
                    pokemon: this.props.detailedPokemons[this.props.match.params.pokemonId]
                }));
        } else {
            this.setState({
                pokemon: this.props.detailedPokemons[this.props.match.params.pokemonId]
            });
        }
    }

    render() {
        const pokemon = this.state.pokemon;
        const pokemonDetail = pokemon && (
            <div className={css(styles.detailContainer)}>
                <Grid>
                    {Object.keys(pokemon.sprites).map((key, index) => {
                        const imageSrc = pokemon.sprites[key];

                        return imageSrc
                            ? (
                                <GridItem key={key} cols={[2, 4, 6]}>
                                    <img className={css(styles.detailImage)} src={imageSrc} alt={key} />
                                </GridItem>
                            ) : '';
                                
                    })}
                </Grid>

                <h1 className={css(styles.detailTitle)}>{pokemon.name}</h1>
                <ul className={css(styles.detailList)}>
                    <li className={css(styles.detailListItem)}>Height: <b>{pokemon.height}</b></li>
                    <li className={css(styles.detailListItem)}>Weight: <b>{pokemon.weight}</b></li>
                </ul>
            </div>
        );

        return (
            <Wrapper>{pokemon && pokemonDetail}</Wrapper>
        )
    }
}

const styles = StyleSheet.create({
    detailContainer: {
        margin: '40px auto',
        padding: '40px 20px',
        maxWidth: '600px',
        backgroundColor: '#f5f5f5',
        border: '1px solid #f0f0f0'
    },
    detailImage: {
        display: 'block',
        margin: '0 auto'
    },
    detailTitle: {
        margin: '20px auto',
        fontFamily: 'sans-serif',
        fontSize: '28px',
        textAlign: 'center',
        color: 'black'
    },
    detailList: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    },
    detailListItem: {
        fontFamily: 'sans-serif',
        fontSize: '14px',
        textAlign: 'center',
        color: 'black'
    }
});

function mapStateToProps(state) {
    return {
        detailedPokemons: state.detailedPokemons
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadPokemon: bindActionCreators(loadPokemon, dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Detail));