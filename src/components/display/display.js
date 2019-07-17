/*eslint-disable*/
import React from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import { putDataInStore } from '../../actions/actions';
import PriceTable from '../priceTable/priceTable';
import Loading from '../loading/loading';
import './display.scss';

class Display extends React.Component {
    componentDidMount() {
        axios.get(`https://api.coindesk.com/v1/bpi/currentprice.json`)
            .then((resp) => {
                this.props.putDataInStore(resp.data);
            });
        setInterval(this.callApi, 5000);
    }
    callApi = () => {
        axios.get(`https://api.coindesk.com/v1/bpi/currentprice.json`)
            .then((resp) => {
                this.props.putDataInStore(resp.data);
            })
            .catch(() => { });
    };

    render() {
        const { apiResult, change, usdRate, gbpRate, eurRate,lastUpdated } = this.props;
        let updateTime = new Date(`${this.props.lastUpdated}`).toString();
        return (
            <div className="container">
                <div className="row mt-5">
                    {/* ====== For Displaying 1B ===== */}
                    <div className="col-lg-2">
                        <p>
                            <span className="xlg text-info">1</span>
                            <span><i className="fab fa-btc fa-5x text-info" /></span>
                            <span><i className="fas fa-equals fa-2x text-info" /></span>
                        </p>
                    </div>

                    {/* ====== For Displaying Price table ===== */}
                    <div className="col-lg-9">
                        <PriceTable
                            apiResult={apiResult}
                            change={change}
                            usdRate={usdRate}
                            gbpRate={gbpRate}
                            eurRate={eurRate}
                        />
                        <div className="card bg-default mt-3">
                            <div className="card-body">Last Updated: {lastUpdated ? updateTime : <Loading />}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Will get the state data and associate actions here and pass them as a props to priceTable component
const mapStateToProps = (state) => {
    return {
        apiResult: state.apiResult,
        usdRate: state.usdRate,
        gbpRate: state.gbpRate,
        eurRate: state.eurRate,
        change: state.change,
        lastUpdated: state.lastUpdated
    };
};

const mapDispatchToProps = dispatch => ({
    putDataInStore: (data) => { dispatch(putDataInStore({ data })); }
});

export default connect(mapStateToProps, mapDispatchToProps)(Display);
