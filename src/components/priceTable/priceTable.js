import React from 'react';


const priceTable = () => {
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
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
            </tbody>
        </table>
    );
};

export default priceTable;
