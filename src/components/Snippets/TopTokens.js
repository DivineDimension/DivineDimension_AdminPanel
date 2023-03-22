import React from 'react';
import { Dropdown, Button } from 'react-bootstrap';

import Icon1 from '../../assets/images/icon1.png';
import TokenTdChart from './TokenTdChart';

const TopTokens = () => {
    return (
        <div className='mb-5'>
            <h2 className="h3 mb-40">Top tokens</h2>

            <div className="table-group-outer table-group-token">
                <div className="table-group-head">
                    <div className="table-group-tr">
                        <div className="table-group-th">Name</div>
                        <div className="table-group-th">
                            <Dropdown>
                                <Dropdown.Toggle variant="reset" id="dropdown-basic">
                                    Liquidity
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="table-group-th">Volume (24h)</div>
                        <div className="table-group-th">price</div>
                        <div className="table-group-th">24h</div>
                        <div className="table-group-th">7d</div>
                        <div className="table-group-th text-center">last 7 days</div>
                    </div>
                </div>
                <div className="table-group-body text-gray-AA">
                    <div className="table-group-tr">
                        <div className="table-group-td">
                            <div className="d-flex align-items-center td-cell">
                                <img src={Icon1} alt='icon' />
                                <span>usd coin</span>
                            </div>
                        </div>
                        <div className="table-group-td">$19,854,093.26</div>
                        <div className="table-group-td">$5,883,677.35 </div>
                        <div className="table-group-td">$1.00</div>
                        <div className="table-group-td text-red">-0.30</div>
                        <div className="table-group-td text-green">0.59</div>
                        <div className="table-group-td text-center">
                            <div className="td-chart">
                                <TokenTdChart />
                            </div>
                        </div>
                    </div>
                    <div className="table-group-tr">
                        <div className="table-group-td">
                            <div className="d-flex align-items-center td-cell">
                                <img src={Icon1} alt='icon' />
                                <span>usd coin</span>
                            </div>
                        </div>
                        <div className="table-group-td">$19,854,093.26</div>
                        <div className="table-group-td">$5,883,677.35 </div>
                        <div className="table-group-td">$1.00</div>
                        <div className="table-group-td text-red">-0.30</div>
                        <div className="table-group-td text-green">0.59</div>
                        <div className="table-group-td text-center">
                            <div className="td-chart">
                                <TokenTdChart />
                            </div>
                        </div>
                    </div>
                    <div className="table-group-tr">
                        <div className="table-group-td">
                            <div className="d-flex align-items-center td-cell">
                                <img src={Icon1} alt='icon' />
                                <span>usd coin</span>
                            </div>
                        </div>
                        <div className="table-group-td">$19,854,093.26</div>
                        <div className="table-group-td">$5,883,677.35 </div>
                        <div className="table-group-td">$1.00</div>
                        <div className="table-group-td text-red">-0.30</div>
                        <div className="table-group-td text-green">0.59</div>
                        <div className="table-group-td text-center">
                            <div className="td-chart">
                                <TokenTdChart />
                            </div>
                        </div>
                    </div>
                    <div className="table-group-tr">
                        <div className="table-group-td">
                            <div className="d-flex align-items-center td-cell">
                                <img src={Icon1} alt='icon' />
                                <span>usd coin</span>
                            </div>
                        </div>
                        <div className="table-group-td">$19,854,093.26</div>
                        <div className="table-group-td">$5,883,677.35 </div>
                        <div className="table-group-td">$1.00</div>
                        <div className="table-group-td text-red">-0.30</div>
                        <div className="table-group-td text-green">0.59</div>
                        <div className="table-group-td text-center">
                            <div className="td-chart">
                                <TokenTdChart />
                            </div>
                        </div>
                    </div>
                    <div className="table-group-tr">
                        <div className="table-group-td">
                            <div className="d-flex align-items-center td-cell">
                                <img src={Icon1} alt='icon' />
                                <span>usd coin</span>
                            </div>
                        </div>
                        <div className="table-group-td">$19,854,093.26</div>
                        <div className="table-group-td">$5,883,677.35 </div>
                        <div className="table-group-td">$1.00</div>
                        <div className="table-group-td text-red">-0.30</div>
                        <div className="table-group-td text-green">0.59</div>
                        <div className="table-group-td text-center">
                            <div className="td-chart">
                                <TokenTdChart />
                            </div>
                        </div>
                    </div>
                    <div className="table-group-tr">
                        <div className="table-group-td">
                            <div className="d-flex align-items-center td-cell">
                                <img src={Icon1} alt='icon' />
                                <span>usd coin</span>
                            </div>
                        </div>
                        <div className="table-group-td">$19,854,093.26</div>
                        <div className="table-group-td">$5,883,677.35 </div>
                        <div className="table-group-td">$1.00</div>
                        <div className="table-group-td text-red">-0.30</div>
                        <div className="table-group-td text-green">0.59</div>
                        <div className="table-group-td text-center">
                            <div className="td-chart">
                                <TokenTdChart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pagination-footer d-flex align-items-center justify-content-between">
                <p>showing 1-5 from 150</p>

                <div className="d-flex align-items-center">
                    <Button variant='arrow'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        </svg>
                    </Button>
                    <Button variant='arrow'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default TopTokens;