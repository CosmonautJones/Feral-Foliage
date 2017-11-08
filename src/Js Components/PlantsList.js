import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { grabPlants } from '../actions/actions';

class PlantsList extends Component {
    render() {
        return(
            <div>
                <h1> List of Plants </h1>
                <ul>
                    {this.props.plants.map(plant => {
                        return (
                            <li key={plant.id}>
                              <Link to={`/plants/${plant.id}`}>
                                {plant.name}
                              </Link>
                            </li>

                        );
                    })}
                </ul>
            </div>
        );
    }
    componentDidMount() {
        this.props.getPlants();
    }
}

const mapStateToProps = (state) => {
    return {
        plants: state.plants,
    };
};

export default connect(mapStateToProps, { getPlants: grabPlants })(PlantsList);