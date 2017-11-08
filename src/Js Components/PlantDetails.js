import React, {Component} from 'react';
import { connect } from 'react-redux';

import { grabPlantDetails } from '../actions/actions';

class PlantDetails extends Component {
    render() {
        if (!this.props.plant) {
            return <h2>Growing your Plant...</h2>;
        } else {
            return (
                <div>
                    <h1> Details for {this.props.plant.family} </h1>
                </div>
            );
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.grabPlantDetails(id);
    }
}

const mapStateToProps = state => {
    return {
        plants: state.targetPlant,
    };
};

export default connect(mapStateToProps, { grabPlantDetails })(PlantDetails);