import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadPokemons } from '../actions';

import Wrapper from './Wrapper';
import Grid from './Grid';
import GridItem from './GridItem';
import Card from './Card';

class Home extends Component {
    componentDidMount() {
        if (this.props.pokemons.length < 1) {
            this.props.loadPokemons();
        }
    }

    render() {
        const { pokemons } = this.props;

        return (
            <Wrapper>
                <Grid>
                    {pokemons.map((pokemon) => (
                        <GridItem key={pokemon.id} cols={[2, 3, 5]}>
                            <Card {...pokemon} link={`/${pokemon.id}`} />
                        </GridItem>)
                    )}
                </Grid>
            </Wrapper>
        )
    }
}

function mapStateToProps(state) {
    return {
        pokemons: state.pokemons
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadPokemons: bindActionCreators(loadPokemons, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);