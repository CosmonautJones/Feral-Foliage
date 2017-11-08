import React, { Component } from 'react';
import { connect } from 'react-redux';

import { grabPlantDetails } from '../actions/actions';

class PlantDetails extends Component {
    

    render() {
        console.log('are you with me?');
        if (!this.props.targetPlant) {
            return <h2>Growing your Plant...</h2>;
        } else {
            return (
                <div>
                    <h1> Details for {this.props.targetPlant.family} </h1>
                </div>
            );
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getPlantDetails(id);
    }
}

const mapStateToProps = (state) => {
    return {
        targetPlant: state.targetPlant,
    };
};

export default connect(mapStateToProps, { getPlantDetails : grabPlantDetails })(PlantDetails);