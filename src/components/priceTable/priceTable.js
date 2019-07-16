/*eslint-disable */
import React from 'react';

const priceTable = (props) => {
    const iconStyle = {
        transform: 'rotate(90deg)'
    };
    return (
        <table className="table text-center">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">
                        <span>USD </span>
                        <i className="fas fa-dollar-sign" />
                    </th>
                    <th scope="col">
                        <span>GBP </span>
                        <i className="fas fa-pound-sign" />
                    </th>
                    <th scope="col">
                        <span>EUR </span>
                        <i className="fas fa-euro-sign" />
                    </th>
                    <th scope="col">
                        <span>Change </span>
                        <i className="fas fa-exchange-alt" style={iconStyle} />
                    </th>
                </tr>
            </thead>
            <tbody>
                {/* ===== will use map to render the rows =====  */}
                {   props.apiResult.length > 0 && props.apiResult.map((item, key) => (
                    <tr key={`row__${key}`}>
                        <td>{item.data.USD.rate}</td>
                        <td>{item.data.GBP.rate}</td>
                        <td>{item.data.EUR.rate}</td>
                        <td>{true ? <span className="text-success">{`${props.change}%`} <i className="fas fa-angle-double-up" /> </span> :
                            <span className="text-danger">{`${props.change}%`} <i className="fas fa-angle-double-down" /> </span>}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default priceTable;