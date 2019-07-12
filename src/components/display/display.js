import React from 'react';
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
                        <i className="fab fa-btc fa-7x text-info" />
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

export default display;
