/* eslint-disable*/
import React from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import { putDataInStore, calculateChange } from '../../actions/actions';
import PriceTable from '../priceTable/priceTable';
import './display.scss';

class Display extends React.Component {

    callApi = () => {
        axios.get(`https://api.coindesk.com/v1/bpi/currentprice.json`)
        .then((resp) => {
            this.props.putDataInStore(resp.data.bpi);
            // console.log(this.props.apiResult);
        })
        .catch(() => { });
    };

    componentDidMount() {
        // ===== Making API CALL =====        
        // axios.get(`https://api.coindesk.com/v1/bpi/currentprice.json`)
        //     .then((resp) => {
        //         this.props.putDataInStore(resp.data.bpi);
        //         console.log(this.props.apiResult);
        //     })
        //     .catch(() => { });
        setInterval(this.callApi, 5000);
    }

   

    render() {

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
                            <PriceTable apiResult={this.props.apiResult} />
                    </div>
                </div>
            </div>
        );
    }
}
// Will get the state data and associate actions here and pass them as a props to priceTable component
const mapStateToProps = (state) => {
    return { apiResult: state.apiResult };
};

const mapDispatchToProps = dispatch => ({
    putDataInStore: (data) => dispatch(putDataInStore({ data })),
    calculateChange: () => dispatch(calculateChange)
});


export default connect(mapStateToProps, mapDispatchToProps)(Display);
