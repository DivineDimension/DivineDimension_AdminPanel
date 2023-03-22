import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";

import Icon1 from '../../assets/images/partners-investors-icon1.png'
import Icon2 from '../../assets/images/partners-investors-icon2.png'
import Icon3 from '../../assets/images/partners-investors-icon3.png'
import Icon4 from '../../assets/images/partners-investors-icon4.png'
import Icon5 from '../../assets/images/partners-investors-icon5.png'
import Icon6 from '../../assets/images/partners-investors-icon6.png'
import Icon7 from '../../assets/images/partners-investors-icon7.png'
import Icon8 from '../../assets/images/partners-investors-icon8.png'
import Icon9 from '../../assets/images/partners-investors-icon9.png'
// import Shape from '../../assets/images/partners-investors-shape-2.png'
import algorand from '../../assets/images/algorand-logo.png'
import algorandFoundation from '../../assets/images/algorand-foundation.png'
import mastermind from '../../assets/images/mastermind.png'

const PartnersInvestors = () => {
    return (
        <div className='partners-investors position-relative'>
            {/* <img src={Shape} className='partners-investors-shape' alt="shape" /> */}
            <Container>
                <h2 className='text-center text-noshadow text-uppercase'>Partners & Investors</h2>

                <Row>
                <Col lg={6} sm={12} className='mb-4'>
                        <div className="avatar-info d-flex align-items-center">
                            <img src={algorand} alt="pic" />
                            <span>Algorand</span>
                        </div>
                    </Col>
                    <Col lg={6} sm={12} className='mb-4'>
                        <div className="avatar-info d-flex align-items-center">
                            <img src={algorandFoundation} alt="pic" />
                            <span>Algorand Foundation</span>
                        </div>
                    </Col>
                    <Col lg={6} sm={12} className='mb-4'>
                        <div className="avatar-info d-flex align-items-center">
                            <img src={mastermind} alt="pic" />
                            <span>MasterMind</span>
                        </div>
                    </Col>
                {/* <Col lg={6} sm={6} className='mb-4'>
                        <div className="avatar-info d-flex align-items-center">
                            <img src={algorand} alt="pic" />
                            <span>Algorand</span>
                        </div>
                    </Col>
                    <Col lg={6} sm={6} className='mb-4'>
                        <div className="avatar-info d-flex align-items-center">
                            <img src={algorandFoundation} alt="pic" />
                            <span>Algorand Foundation</span>
                        </div>
                    </Col> */}
                   
                    {/* <Col lg={4} sm={6} className='mb-4'>
                        <div className="avatar-info d-flex align-items-center">
                            <img src={Icon1} alt="pic" />
                            <span>Seascape</span>
                        </div>
                    </Col>
                    <Col lg={4} sm={6} className='mb-4'>
                        <div className="avatar-info d-flex align-items-center">
                            <img src={Icon2} alt="pic" />
                            <span>PolkaPet World</span>
                        </div>
                    </Col> */}
                    {/* <Col lg={4} sm={6} className='mb-4'>
                        <div className="avatar-info d-flex align-items-center">
                            <img src={Icon3} alt="pic" />
                            <span>Anyswap</span>
                        </div>
                    </Col>
                    <Col lg={4} sm={6} className='mb-4'>
                        <div className="avatar-info d-flex align-items-center">
                            <img src={Icon4} alt="pic" />
                            <span>Bwarelabs</span>
                        </div>
                    </Col>
                    <Col lg={4} sm={6} className='mb-4'>
                        <div className="avatar-info d-flex align-items-center">
                            <img src={Icon5} alt="pic" />
                            <span>State of the DApps</span>
                        </div>
                    </Col>
                    <Col lg={4} sm={6} className='mb-4'>
                        <div className="avatar-info d-flex align-items-center">
                            <img src={Icon6} alt="pic" />
                            <span>Relay Chain</span>
                        </div>
                    </Col>
                    <Col lg={4} sm={6} className='mb-4'>
                        <div className="avatar-info d-flex align-items-center">
                            <img src={Icon7} alt="pic" />
                            <span>QiDao</span>
                        </div>
                    </Col>
                    <Col lg={4} sm={6} className='mb-4'>
                        <div className="avatar-info d-flex align-items-center">
                            <img src={Icon8} alt="pic" />
                            <span>CoinGecko</span>
                        </div>
                    </Col>
                    <Col lg={4} sm={12} className='mb-4'>
                        <div className="avatar-info d-flex align-items-center">
                            <img src={Icon9} alt="pic" />
                            <span>CoinMarketCap</span>
                        </div>
                    </Col> */}
                </Row>
             </Container>
            <Container>
            <Row className="align-items-center justify-content-between">
                    <Col lg={6} className='mb-lg-0 mb-5'>
                    
                        <h1 className='mb-40 text-uppercase'>Meet the worldwide community</h1>
                       
                        {/* <p>Join a fast-growing community of developers and innovators connected all over the world, building the new era of the internet.</p> */}
                        <div className="pt-md-5 pt-3 d-none">
                            <Link to="/" className='m-md-2 mb-3 btn-sm-full btn btn-white'>Start Staking
                                <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.6389 8.36952L18.8028 8.2H18.567H0.967033C0.700676 8.2 0.486002 8.10872 0.33782 7.95548C0.189347 7.80195 0.1 7.57826 0.1 7.3C0.1 7.02174 0.189347 6.79805 0.33782 6.64452C0.486002 6.49128 0.700676 6.4 0.967033 6.4H18.567H18.8064L18.6382 6.22972L14.0939 1.63048C14.0937 1.63036 14.0936 1.63023 14.0935 1.63011C13.7445 1.26887 13.7447 0.730627 14.0939 0.369516C14.4414 0.0101614 14.9564 0.0101614 15.3039 0.369516L21.7831 7.06952C21.939 7.23075 21.939 7.46925 21.7831 7.63048L15.3039 14.3305C14.9564 14.6898 14.4414 14.6898 14.0939 14.3305C13.7445 13.9692 13.7445 13.4308 14.0939 13.0695L18.6389 8.36952Z" fill="currentColor" stroke="currentColor" strokeWidth="0.2"/>
                                </svg>
                            </Link>
                            <Link to="/" className='m-md-2 mb-3 btn-sm-full btn btn-outline-white'>Enter App
                                <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.6389 8.36952L18.8028 8.2H18.567H0.967033C0.700676 8.2 0.486002 8.10872 0.33782 7.95548C0.189347 7.80195 0.1 7.57826 0.1 7.3C0.1 7.02174 0.189347 6.79805 0.33782 6.64452C0.486002 6.49128 0.700676 6.4 0.967033 6.4H18.567H18.8064L18.6382 6.22972L14.0939 1.63048C14.0937 1.63036 14.0936 1.63023 14.0935 1.63011C13.7445 1.26887 13.7447 0.730627 14.0939 0.369516C14.4414 0.0101614 14.9564 0.0101614 15.3039 0.369516L21.7831 7.06952C21.939 7.23075 21.939 7.46925 21.7831 7.63048L15.3039 14.3305C14.9564 14.6898 14.4414 14.6898 14.0939 14.3305C13.7445 13.9692 13.7445 13.4308 14.0939 13.0695L18.6389 8.36952Z" fill="currentColor" stroke="currentColor" strokeWidth="0.2"/>
                                </svg>
                            </Link>
                        </div>
                    </Col>
                    <Col lg={5}>
                        {/* <div className="social-card">
                            <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_2_6143" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="41">
                            <rect y="0.992188" width="40" height="40" fill="#fff"/>
                            </mask>
                            <g mask="url(#mask0_2_6143)">
                            <path d="M20.0539 29.4658C19.524 30.338 19.0051 31.166 18.4973 32.005C17.8901 33.0097 17.2829 34.0033 16.6646 35.0079C16.1678 35.8249 15.4171 36.145 14.6002 35.9242C13.728 35.6813 13.2643 35.03 13.2643 34.0253C13.2643 32.0712 13.2754 30.1061 13.2533 28.152C13.2422 27.4565 13.4741 26.9045 13.9819 26.4298C18.5635 22.069 23.1231 17.7082 27.7047 13.3474C27.8371 13.2149 28.0138 13.1266 28.1573 13.0272C27.8813 12.5746 27.6936 12.7954 27.517 12.9279C25.8499 14.0871 24.1829 15.2463 22.5269 16.3944C18.685 19.0661 14.8541 21.7268 11.0122 24.4095C10.7803 24.5751 10.6147 24.5972 10.3498 24.4647C8.61647 23.5594 6.88319 22.6541 5.13886 21.7709C4.41022 21.3956 3.96862 20.8436 4.00174 20.0045C4.03486 19.1876 4.50958 18.6797 5.23822 18.3596C14.5339 14.3189 23.8075 10.2672 33.0922 6.21553C33.8319 5.89537 34.5163 5.88433 35.1456 6.41425C35.7749 6.94417 35.8853 7.62865 35.6976 8.40146C33.7877 16.2509 31.8888 24.0893 29.9899 31.9388C29.6698 33.2525 28.4775 33.8045 27.2741 33.1753C25.0219 32.016 22.7698 30.8458 20.5176 29.6866C20.3741 29.6204 20.2416 29.5541 20.0539 29.4658Z" fill="white"/>
                            </g>
                            </svg>
                            <h5>
                            <a href='https://t.me/ElementDeFi' target="_blank" rel="noreferrer" style={{color:"white"}}>
                            Community chat
                            </a></h5>
                            <p>Ask general questions and chat with the worldwide community on Telegram.</p>
                        </div> */}
                        <div className="social-card">
                            <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_2_6157" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="41">
                            <rect y="0.992188" width="40" height="40" fill="#fff"/>
                            </mask>
                            <g mask="url(#mask0_2_6157)">
                            <path d="M38.0011 9.51102C36.5501 10.0552 35.099 10.5993 33.648 10.7807C35.2804 9.87377 36.3687 8.42275 36.9128 6.60897C35.4618 7.51586 33.8294 8.06 32.0156 8.42275C29.1136 5.33933 24.3977 5.15795 21.3143 8.06C19.3192 9.87377 18.4123 12.7758 19.1378 15.3151C13.1523 14.9524 7.34823 12.0503 3.53929 7.33448C2.81378 8.42275 2.6324 9.6924 2.6324 11.1434C2.6324 13.6827 3.90205 16.0406 6.07858 17.4916C4.62756 17.3103 3.53929 17.1289 2.45102 16.4034V16.5848C2.45102 20.2123 4.99031 23.2957 8.61787 24.0212C7.5296 24.384 6.25996 24.384 5.17169 24.2026C6.07858 27.2861 8.98063 29.4626 12.2454 29.4626C8.98063 32.0019 4.99031 33.0901 1 32.546C4.44618 34.7225 8.43649 35.9922 12.6082 35.9922C26.5743 35.9922 34.1921 24.384 34.1921 14.4082C34.1921 14.0455 34.1921 13.6827 34.1921 13.5013C35.6432 12.2317 36.9128 10.962 38.0011 9.51102Z" fill="white"/>
                            </g>
                            </svg>
                            <h5><a href="https://twitter.com/divine_realm_" target="_blank" rel="noreferrer" style={{color:"white"}}>Twitter</a></h5>
                            <p>Follow @ElementDeFi to get the latest news and updates from across the ecosystem.</p>
                        </div>
                        <div className="social-card">
                            <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_2_6150" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="41">
                            <rect y="0.992188" width="40" height="40" fill="#fff"/>
                            </mask>
                            <g mask="url(#mask0_2_6150)">
                            <path d="M16.7825 18.7065C17.6968 18.7065 18.4373 19.3922 18.4206 20.2303C18.4206 21.0684 17.6983 21.7541 16.7825 21.7541C15.8834 21.7541 15.1429 21.0684 15.1429 20.2303C15.1429 19.3922 15.8667 18.7065 16.7825 18.7065ZM22.6461 18.7065C23.5619 18.7065 24.2857 19.3922 24.2857 20.2303C24.2857 21.0684 23.5619 21.7541 22.6461 21.7541C21.747 21.7541 21.008 21.0684 21.008 20.2303C21.008 19.3922 21.7303 18.7065 22.6461 18.7065ZM30.2149 4.99219C31.987 4.99219 33.4286 6.46419 33.4286 8.28819V36.9922L30.0594 33.9522L28.1623 32.1602L26.1554 30.2554L26.9874 33.2162H9.21371C7.44152 33.2162 6 31.7442 6 29.9202V8.28819C6 6.46419 7.44152 4.99219 9.21371 4.99219H30.2133H30.2149ZM24.1653 25.8882C27.629 25.777 28.9623 23.4562 28.9623 23.4562C28.9623 18.3042 26.704 14.1274 26.704 14.1274C24.4488 12.4009 22.3002 12.4482 22.3002 12.4482L22.0808 12.7042C24.7459 13.5362 25.9832 14.7369 25.9832 14.7369C24.5281 13.9171 22.9244 13.395 21.2655 13.2009C20.2132 13.0821 19.1504 13.0923 18.1006 13.2314C18.0061 13.2314 17.9269 13.2482 17.8339 13.2634C17.2853 13.3122 15.952 13.5194 14.2758 14.2722C13.6968 14.5434 13.3509 14.7369 13.3509 14.7369C13.3509 14.7369 14.6522 13.4722 17.4728 12.6402L17.3158 12.4482C17.3158 12.4482 15.1688 12.4009 12.912 14.1289C12.912 14.1289 10.6552 18.3042 10.6552 23.4562C10.6552 23.4562 11.9718 25.7754 15.4354 25.8882C15.4354 25.8882 16.0145 25.1689 16.4869 24.5609C14.4952 23.9514 13.744 22.6714 13.744 22.6714C13.744 22.6714 13.8994 22.7842 14.1813 22.9442C14.1966 22.9594 14.2118 22.9762 14.2438 22.9914C14.291 23.025 14.3383 23.0402 14.3855 23.0722C14.7771 23.2962 15.1688 23.4714 15.5284 23.6162C16.1714 23.8722 16.9394 24.1282 17.8339 24.3049C19.1738 24.5676 20.5515 24.5728 21.8933 24.3202C22.6749 24.1807 23.4375 23.95 24.1653 23.6329C24.7139 23.4242 25.325 23.1194 25.968 22.6882C25.968 22.6882 25.1848 24.0002 23.1307 24.5929C23.6015 25.2009 24.1669 25.8882 24.1669 25.8882H24.1653Z" fill="white"/>
                            </g>
                            </svg>
                            <h5><a href='https://discord.gg/3th9PGjP' target="_blank" rel="noreferrer" style={{color:"white"}}>Developer chat</a></h5>
                            <p>Have technical questions about Element DeFi services? ask a developer on the community discord.</p>
                        </div>
                        <div className="social-card">
                            <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_2_6164" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="41">
                            <rect y="0.992188" width="40" height="40" fill="#fff"/>
                            </mask>
                            <g mask="url(#mask0_2_6164)">
                            <path d="M17.6908 13.9788L18.8623 8.46293C18.9476 8.06211 19.111 7.68201 19.3432 7.34434C19.5753 7.00668 19.8718 6.71806 20.2155 6.49498C20.5593 6.2719 20.9436 6.11872 21.3465 6.0442C21.7495 5.96969 22.1632 5.97528 22.564 6.06067L27.5495 7.12141C28.009 6.61104 28.6242 6.26659 29.2995 6.14147C29.9748 6.01635 30.6725 6.11757 31.2844 6.42942C31.8963 6.74127 32.3883 7.24632 32.6839 7.86624C32.9795 8.48617 33.0623 9.18631 32.9194 9.85808C32.7765 10.5299 32.416 11.1357 31.8937 11.5817C31.3714 12.0276 30.7165 12.2888 30.0306 12.3246C29.3448 12.3605 28.6663 12.169 28.1003 11.7799C27.5344 11.3908 27.1126 10.8258 26.9005 10.1726L21.9151 9.11186L20.8762 14.0022C23.659 14.2159 26.4248 15.1409 28.93 16.654C29.6744 16.2401 30.5126 16.0241 31.3644 16.0266C32.2162 16.0291 33.053 16.2501 33.795 16.6684C34.537 17.0868 35.1593 17.6885 35.6023 18.416C36.0453 19.1434 36.2943 19.9724 36.3255 20.8236V20.8564C36.3374 21.6194 36.1739 22.3749 35.8474 23.0646C35.5209 23.7543 35.0403 24.3597 34.4427 24.8342C34.4399 24.8982 34.4357 24.9622 34.4302 25.026C34.4302 31.2625 27.4886 35.9922 19.1447 35.9922C10.8272 35.9922 4.00109 31.275 4.00577 25.1461C3.99896 25.0521 3.99376 24.958 3.99017 24.8638C2.98265 24.1076 2.29923 22.9975 2.07765 21.7574C1.85606 20.5173 2.11278 19.2393 2.79607 18.1809C3.47935 17.1225 4.53841 16.3625 5.75981 16.054C6.98121 15.7455 8.27416 15.9114 9.37809 16.5183C11.8975 14.9999 14.753 14.1276 17.6908 13.9788ZM32.1761 22.5988C32.8126 22.2822 33.2119 21.6317 33.2072 20.9219C33.191 20.565 33.0723 20.2203 32.8653 19.9291C32.6583 19.6379 32.3718 19.4125 32.04 19.2799C31.7083 19.1472 31.3453 19.113 30.9946 19.1812C30.6439 19.2494 30.3203 19.4173 30.0625 19.6646L29.1499 20.5382L28.1048 19.8284C25.5855 18.1156 22.72 17.1376 19.9465 17.0767H18.3772C15.4524 17.122 12.682 18.0127 10.208 19.6896L9.17374 20.3915L8.26275 19.5336C8.0663 19.3492 7.83212 19.2097 7.57642 19.1248C7.32072 19.0398 7.04961 19.0114 6.78187 19.0416C6.51413 19.0718 6.25614 19.1598 6.02578 19.2996C5.79541 19.4393 5.59817 19.6275 5.44771 19.851C5.29725 20.0745 5.19716 20.3281 5.15438 20.5941C5.1116 20.8601 5.12714 21.1322 5.19993 21.3917C5.27272 21.6511 5.40102 21.8916 5.57595 22.0965C5.75088 22.3015 5.96826 22.4659 6.21304 22.5785L7.20046 23.0309L7.11622 24.115C7.09594 24.3802 7.09594 24.6439 7.1209 25.026C7.1209 29.2534 12.356 32.8724 19.1447 32.8724C25.963 32.8724 31.3104 29.2284 31.3151 24.9075C31.3354 24.6437 31.3354 24.3788 31.3151 24.115L31.234 23.0668L32.1761 22.5988ZM11.2921 22.8468C11.2921 22.2263 11.5386 21.6311 11.9774 21.1923C12.4162 20.7535 13.0114 20.507 13.632 20.507C14.2525 20.507 14.8477 20.7535 15.2865 21.1923C15.7253 21.6311 15.9718 22.2263 15.9718 22.8468C15.9718 23.4674 15.7253 24.0626 15.2865 24.5014C14.8477 24.9402 14.2525 25.1867 13.632 25.1867C13.0114 25.1867 12.4162 24.9402 11.9774 24.5014C11.5386 24.0626 11.2921 23.4674 11.2921 22.8468ZM22.2115 22.8468C22.2115 22.2263 22.458 21.6311 22.8968 21.1923C23.3356 20.7535 23.9307 20.507 24.5513 20.507C25.1719 20.507 25.767 20.7535 26.2058 21.1923C26.6447 21.6311 26.8912 22.2263 26.8912 22.8468C26.8912 23.4674 26.6447 24.0626 26.2058 24.5014C25.767 24.9402 25.1719 25.1867 24.5513 25.1867C23.9307 25.1867 23.3356 24.9402 22.8968 24.5014C22.458 24.0626 22.2115 23.4674 22.2115 22.8468ZM19.1166 30.8071C16.9374 30.8071 14.8003 30.2299 13.061 28.9196C12.956 28.7927 12.902 28.6312 12.9097 28.4667C12.9174 28.3022 12.9862 28.1464 13.1027 28.03C13.2192 27.9135 13.3749 27.8447 13.5394 27.837C13.704 27.8293 13.8654 27.8832 13.9923 27.9883C15.4664 29.0693 17.304 29.5326 19.0916 29.5326C20.8793 29.5326 22.7262 29.1036 24.2144 28.0367C24.3004 27.9527 24.4071 27.8929 24.5236 27.8632C24.6401 27.8336 24.7623 27.8351 24.8781 27.8676C24.9938 27.9002 25.0989 27.9627 25.1829 28.0488C25.2668 28.1348 25.3266 28.2415 25.3562 28.358C25.3815 28.4748 25.3778 28.596 25.3455 28.711C25.3131 28.826 25.2531 28.9314 25.1706 29.0178C24.1036 30.2611 21.2958 30.8071 19.1166 30.8071Z" fill="white"/>
                            </g>
                            </svg>
                            <h5><a href='https://www.reddit.com/user/divine_realm_' target="_blank" rel="noreferrer" style={{color:"white"}}>Reddit forum</a></h5>
                            <p>Thinking about joining the Element revolution - Join the discussion.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PartnersInvestors;