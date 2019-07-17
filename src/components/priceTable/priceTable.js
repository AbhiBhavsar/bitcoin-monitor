/*eslint-disable */
import React from 'react';
import Loading from '../loading/loading';

const priceTable = (props) => {
  const iconStyle = {
    transform: 'rotate(90deg)'
  };
  return (
    <div className="row">
      <div className="col-sm-3">
        <div className="card">
          <h5 className="card-header">USD</h5>
          <div className="card-body">
            {props.usdRate ?
              <h6 className="card-title">
                {props.usdRate}</h6> :
              <Loading />
            }
          </div>
        </div>
      </div>

      <div className="col-sm-3">
        <div className="card">
          <h5 className="card-header">GBP</h5>
          <div className="card-body">
            {props.usdRate ?
              <h6 className="card-title">{props.gbpRate}</h6> :
              <Loading />}
          </div>
        </div>
      </div>

      <div className="col-sm-3">
        <div className="card">
          <h5 className="card-header">EUR</h5>
          <div className="card-body">
            {props.usdRate ?
              <h6 className="card-title">{props.eurRate}</h6> :
              <Loading />}
          </div>
        </div>
      </div>

      <div className="col-sm-3">
        <div className="card">
          <h5 className="card-header">Change <span> <i className="fas fa-exchange-alt" style={iconStyle} /></span></h5>
          <div className="card-body">
            <h6 className="card-title">
              {props.change > 0 ? <span className="text-success">{`${props.change.toFixed(4)}%`} <i className="fas fa-angle-double-up" /> </span> :
                props.change === 0 ? <span className="text-default">{`${props.change.toFixed(4)}%`}</span> :
                  <span className="text-danger">{`${props.change.toFixed(4)}%`} <i className="fas fa-angle-double-down" /></span>}
            </h6>
          </div>
        </div>
      </div>
    </div>


    // {/* ===== will use map to render the rows =====  */}
    // {   props.apiResult.length > 0 && props.apiResult.reverse().slice(0,7).map((item, key) => (
    //     <tr key={`row__${key}`}>
    //         <td>{item.data.USD.rate}</td>
    //         <td>{item.data.GBP.rate}</td>
    //         <td>{item.data.EUR.rate}</td>
    //         <td>{props.change > 0 ? <span className="text-success">{`${props.change.toFixed(4)}%`} <i className="fas fa-angle-double-up" /> </span> :
    //              props.change === 0? <span className="text-default">{`${props.change.toFixed(4)}%`}</span> :
    //              <span className="text-danger">{`${props.change.toFixed(4)}%`} <i className="fas fa-angle-double-down" /></span>}</td>
    //     </tr>
    // ))}
  )
};

export default priceTable;
