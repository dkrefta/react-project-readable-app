import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import * as actions from '../actions';

import {ButtonToolbar, ToggleButtonGroup, ToggleButton} from 'react-bootstrap';

class SortButtons extends Component {
  static PropTypes = {
    onByDate: PropTypes.func,
    onByScore: PropTypes.func,
  }

  sortByDate() {
    this.props.setSortingPreferenceByDate({type: actions.SET_SORTING_PREFERENCE_BY_DATE});
    const {onByDate} = this.props;
    if (onByDate) {
      onByDate();
    }
  }

  sortByScore(){
    this.props.setSortingPreferenceByScore({type: actions.setSortingPreferenceByScore});
    const {onByDate} = this.props;
    if (onByDate) {
      onByDate();
    }
  }

  getActiveButton() {
    const {sorting} = this.props.prefrences;
    if (sorting) {
      return (sorting == 'byDate') ? 1 : 2;
    }
    return 0;

  }
 render() {
   return (
     <div className="sortButtons">
       <h4> Sort Posts</h4>
       <ButtonToolbar>
         <ToggleButtonGroup type="radio" name"options" defaultValue={this.getActiveButton()}>
           <ToggleButton value={1} onClick={() => {this.sortByDate()}}><strong>By Date</strong> newer on top</ToggleButton>
           <ToggleButton value={2} onClick={() =>{this.sortByScore()}}><strong>By Score </strong> Higher on Top</ToggleButton>
           </ToggleButtonGroup>
         </ButtonToolbar>
       </div>
   )
 }
}

function mapStateToProps ({prefrences}) {
  return {prefrences}
}

function mapDispatchToProps (dispatch) {
  return {
    setSortingPreferenceByDate: () => dispatch(actions.setSortingPreferenceByDate()),
    setSortingPreferenceByScore: () => dispatch(action.setSortingPreferenceByScore()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortButtons);
