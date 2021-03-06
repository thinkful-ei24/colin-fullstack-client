import React from 'react';
import {connect} from 'react-redux';
import {getSearchHits} from '../actions/recipes.js';
import ListResult from './list-result.js';
import './results.css';

export class ResultsList extends React.Component {


  componentDidMount() {
    this.props.dispatch(getSearchHits())
  }

  render() {
    const listOfRecipes = this.props.hits.map((hit, index) => {
      return <ListResult key={index} index={index} {...hit}/>
    })

    return (
      <div className="search-results row">
        <ul className="col-12">{listOfRecipes}</ul>
      </div>
    )

  }
}

const mapStateToProps = state => ({
  loading: state.recipe.loading,
  hits: state.recipe.hits,
  isHidden: state.recipe.isHidden
});

export default connect(mapStateToProps)(ResultsList);
