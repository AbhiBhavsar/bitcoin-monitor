import React from 'react';
import { connect } from "react-redux";
import { fetchData, calculateChange } from '../../actions/actions';
import PriceTable from '../priceTable/priceTable';
import './display.scss';

const display = () => {
    return (
        <div className="container">
            <div className="row">
                {/* ====== For Displaying 1B ===== */}
                <div className="col-lg-3">
                    <p>
                        <span className="xlg text-info">1</span>
                        <span><i className="fab fa-btc fa-7x text-info" /></span>
                        <span><i className="fas fa-equals fa-5x text-info" /></span>
                    </p>
                </div>
            
            {/* ====== For Displaying Price table ===== */}
                <div className="col-lg-7">
                    <PriceTable />
                </div>
            </div>
        </div>
    );
};

// Will get the state data and associate actions here and pass them as a props to priceTable component
const mapStateToProps = state => ({
    ...state
  });
  
  const mapDispatchToProps = dispatch => ({
    fetchData: () => dispatch(fetchData),
    calculateChange: () => dispatch(calculateChange)
  });

export default connect(mapStateToProps, mapDispatchToProps)(display);
