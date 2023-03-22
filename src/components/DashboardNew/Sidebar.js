import React, { useState } from 'react';
import { Badge, Button, Dropdown } from 'react-bootstrap';
// import { ScrollArea } from 'react-nano-scrollbar';
import {
    NavLink as Link
  } from "react-router-dom";

//import Account from '../../assets/images/icons/account.png';
import Analytics from '../../assets/images/icons/analytics.png';
import Auction from '../../assets/images/icons/auction.png';
import Faucet from '../../assets/images/icons/faucet.png';
import GenerateDid from '../../assets/images/icons/generate-did.png';
import GenesisMarket from '../../assets/images/icons/genesis-market.png';
import shop from '../../assets/images/shop.jpg';
import game from '../../assets/images/play.jpg';
import map from '../../assets/images/map.png';
import asst from '../../assets/images/asst.jpg';
import earn from '../../assets/images/earn.jpg';
import info from '../../assets/images/info.jpg';
import community from '../../assets/images/community.jpg';
import create from '../../assets/images/create.jpg';
import avatar from '../../assets/images/avatar.jpg';
import assets from '../../assets/images/assets.png';
import createlog from '../../assets/images/createicon.png';
import eventslogo from '../../assets/images/eventslogo.png';
import setting from '../../assets/images/setting.png';
import settings from '../../assets/images/settings.png';
import play from '../../assets/images/play.png';
import todolist from '../../assets/images/to-do-list.png';
import createlist from '../../assets/images/create-list.png';
import calendar from '../../assets/images/calendar.png';
import pin from '../../assets/images/pin.png';
//import HotCollections from '../../assets/images/icons/hot-collections.png';
import Kyc from '../../assets/images/icons/kyc.png';
//import Lend from '../../assets/images/icons/lend.png';
import MyNFT from '../../assets/images/icons/my-NFT.png';
import NftMarketplace from '../../assets/images/icons/nft-marketplace.png';
import Particiapte from '../../assets/images/icons/particiapte.png';
//import RiskFreeLending from '../../assets/images/icons/risk-free-lending.png';
//import Saas from '../../assets/images/icons/saas.png';
import avatarimg from '../../assets/images/avatar.png';
import profile from '../../assets/images/profile.png';
import stake from '../../assets/images/stake.png';
import inventory from '../../assets/images/inventory.png';
import refund from '../../assets/images/refund.png';
import ZeroFeeExchange from '../../assets/images/icons/zero-fee-exchange.png';

const Sidebar = ({activeClass, handleLink}) => {
    const location = window.location.pathname;
    const device = window.innerWidth;
    // console.log(device)
    const handleSide = () => handleLink()
    const handleSide2 = () => handleLink()
    const [sidebar, setSidebar] = useState(false);
    return (
        <div onMouseEnter={handleSide} onMouseLeave={handleSide} className={`side-navigation ${activeClass ? '' : 'active'}`}>
            <ul className='side-navigation-list list-unstyled'>
            {/* <li>
                    <Dropdown>
                        {device > 1199 && activeClass ? (
                        <Dropdown.Toggle onClick={handleSide} variant='transparent' className={`noarrow ${location === "/swap" ? 'active' : '' }`} id="dropdown-basic">
                            <img src={ZeroFeeExchange} alt="ZeroFeeExchange" />
                        </Dropdown.Toggle>
                        ) : (
                            <Dropdown.Toggle variant='transparent' className={`noarrow ${location === "/swap" ? 'active' : '' }`} id="dropdown-basic">
                                <img src={ZeroFeeExchange} alt="ZeroFeeExchange" /> Single-Sided AMM
                            </Dropdown.Toggle>
                        )}                        
                        {device > 1199 && activeClass ? null : (
                            <Dropdown.Menu show={location === "/swap" || location === "/stableswap" || location === "/liquidity" || location === "/faucet" || location === "/dashboardAMM" || location === "/pool-new" || location === "/analytics" ? true : false} as="ul" className={`list-unstyled position-relative mb-0 p-0 ${location === "/swap" || location === "/swap" || location === "/pool" || location === "/faucet" || location ==="/dashboardAMM" || location === "/pool-new" || location === "/analytics" ? 'd-block' : ''}`} style={{minWidth: 'auto'}}>                          
                                <li><Link to="/dashboardAMM"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49967 15H9.16634V16.6667H10.833V15H12.4997V16.6667H13.333C13.7932 16.6667 14.1663 17.0398 14.1663 17.5C14.1663 17.9602 13.7932 18.3333 13.333 18.3333H6.66634C6.2061 18.3333 5.83301 17.9602 5.83301 17.5C5.83301 17.0398 6.2061 16.6667 6.66634 16.6667H7.49967V15Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M3.33366 5L3.33366 11.6667C3.33366 12.5871 4.07985 13.3333 5.00033 13.3333L15.0003 13.3333C15.9208 13.3333 16.667 12.5871 16.667 11.6667L16.667 5C16.667 4.07953 15.9208 3.33333 15.0003 3.33333L5.00033 3.33333C4.07985 3.33333 3.33366 4.07953 3.33366 5ZM1.66699 11.6667C1.66699 13.5076 3.15938 15 5.00033 15L15.0003 15C16.8413 15 18.3337 13.5076 18.3337 11.6667L18.3337 5C18.3337 3.15905 16.8413 1.66667 15.0003 1.66667L5.00033 1.66667C3.15938 1.66667 1.66699 3.15905 1.66699 5L1.66699 11.6667Z" fill="currentColor"></path><path d="M5.83333 5C5.3731 5 5 5.3731 5 5.83333C5 6.29357 5.3731 6.66667 5.83333 6.66667H11.6667C12.1269 6.66667 12.5 6.29357 12.5 5.83333C12.5 5.3731 12.1269 5 11.6667 5H5.83333Z" fill="currentColor"></path><path d="M5.83333 8.33333C5.3731 8.33333 5 8.70643 5 9.16667C5 9.6269 5.3731 10 5.83333 10H7.5C7.96024 10 8.33333 9.6269 8.33333 9.16667C8.33333 8.70643 7.96024 8.33333 7.5 8.33333H5.83333Z" fill="currentColor"></path></svg> Dashboard </Link></li>
                                <li><Link to="/stableswap"  activeClassName='active'><img src={StableSwap} alt="StableSwap" /> Stable Swap<Badge className='badge1'>New!</Badge></Link></li>
                                <li><Link to="/liquidity"  activeClassName='active'><img src={StableSwap} alt="StableSwap" /> Liquidity<Badge className='badge1'>New!</Badge></Link></li>                    
                                <li><Link to="/pool-new" activeClassName='active'><svg stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M15.91 13.34l2.636-4.026-.454-.406-3.673 3.099c-.675-.138-1.402.068-1.894.618-.736.823-.665 2.088.159 2.824.824.736 2.088.665 2.824-.159.492-.55.615-1.295.402-1.95zm-3.91-10.646v-2.694h4v2.694c-1.439-.243-2.592-.238-4 0zm8.851 2.064l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.927-1.5-1.328zm-18.851 4.242h8v2h-8v-2zm-2 4h8v2h-8v-2zm3 4h7v2h-7v-2zm21-3c0 5.523-4.477 10-10 10-2.79 0-5.3-1.155-7.111-3h3.28c1.138.631 2.439 1 3.831 1 4.411 0 8-3.589 8-8s-3.589-8-8-8c-1.392 0-2.693.369-3.831 1h-3.28c1.811-1.845 4.321-3 7.111-3 5.523 0 10 4.477 10 10z"/></svg> Farm</Link></li>
                                <li><Link to="/analytics" activeClassName='active'><img src={Analytics} alt="Analytics" /> {device > 1199 && activeClass ? '' : 'Analytics'}</Link></li>
                                <li><Link to="/faucet" activeClassName='active'><img src={Faucet} alt="Faucet" /> {device > 1199 && activeClass ? '' : 'Faucet'}</Link></li>
                            </Dropdown.Menu>
                        )}
                    </Dropdown>
            </li>                 */}
            
            {/* <li>
                <Dropdown>                     
                        {device > 1199 && activeClass ? (
                            <Dropdown.Toggle onClick={handleSide} variant='transparent' className={`noarrow`} id="dropdown-basic">
                                <svg width="24" height="24" className='ms-0' fill='currentColor' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g id="sprout" transform="translate(-49.874 -14.287)"><path id="Path_5" data-name="Path 5" d="M123.9,42.355V35.841c3.63-.24,10.153-1.326,14.655-5.828,6.4-6.4,5.9-16.892,5.874-17.335a2.556,2.556,0,0,0-2.411-2.411c-.443-.025-10.936-.526-17.335,5.874a16.521,16.521,0,0,0-1.816,2.165,23.98,23.98,0,0,0-5.993-11.27C109.231-.609,96.652-.008,96.121.022A2.556,2.556,0,0,0,93.71,2.433c-.029.532-.631,13.11,7.013,20.754,5.6,5.6,13.847,6.775,18.067,6.991V42.355a22.731,22.731,0,0,1,5.112,0Z" transform="translate(-20.875 22)"></path><path id="Path_6" data-name="Path 6" d="M130.26,344.721a16.633,16.633,0,0,0-5.217.837,23.327,23.327,0,0,0-42.912,0,16.66,16.66,0,0,0-21.874,15.82v6.669a3.32,3.32,0,0,0,3.32,3.32H143.6a3.32,3.32,0,0,0,3.32-3.32v-6.669a16.676,16.676,0,0,0-16.657-16.657Z" transform="translate(-3.116 -264.181)"></path></g></svg>
                            </Dropdown.Toggle>
                            ) : (
                                <Dropdown.Toggle variant='transparent' className={`noarrow ${location === "/swap" ? 'active' : '' }`} id="dropdown-basic">
                                    <svg width="24" height="24" className='ms-0' fill='currentColor' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g id="sprout" transform="translate(-49.874 -14.287)"><path id="Path_5" data-name="Path 5" d="M123.9,42.355V35.841c3.63-.24,10.153-1.326,14.655-5.828,6.4-6.4,5.9-16.892,5.874-17.335a2.556,2.556,0,0,0-2.411-2.411c-.443-.025-10.936-.526-17.335,5.874a16.521,16.521,0,0,0-1.816,2.165,23.98,23.98,0,0,0-5.993-11.27C109.231-.609,96.652-.008,96.121.022A2.556,2.556,0,0,0,93.71,2.433c-.029.532-.631,13.11,7.013,20.754,5.6,5.6,13.847,6.775,18.067,6.991V42.355a22.731,22.731,0,0,1,5.112,0Z" transform="translate(-20.875 22)"></path><path id="Path_6" data-name="Path 6" d="M130.26,344.721a16.633,16.633,0,0,0-5.217.837,23.327,23.327,0,0,0-42.912,0,16.66,16.66,0,0,0-21.874,15.82v6.669a3.32,3.32,0,0,0,3.32,3.32H143.6a3.32,3.32,0,0,0,3.32-3.32v-6.669a16.676,16.676,0,0,0-16.657-16.657Z" transform="translate(-3.116 -264.181)"></path></g></svg>Organization 
                                </Dropdown.Toggle>
                            )}                    
                    {device > 1199 && activeClass ? null : (
                        <Dropdown.Menu show={location === "/createteam" || location === "/createorg" || location === "/createclub" || location === "/createtoken" || location ===  "/viewtoken" ? true : false} as="ul" className={`list-unstyled position-relative mb-0 p-0 ${location === "/createteam" || location === "/createorg" || location === "/createclub" || location === "/createtoken" || location === "/viewtoken" ? 'd-block' : ''}`} style={{minWidth: 'auto'}}>                                
                            <li><Link to="/createclub"><img src={Kyc} alt="Kyc" /> Create Clubs </Link></li>
                            <li><Link to="/createteam"><img src={GenerateDid} alt="GenerateDid" /> Create Teams</Link></li>
                            <li><Link to="/createtoken"><img src={Particiapte} alt="Particiapte" /> Create Tokens</Link></li>
                            <li><Link to="/viewtoken"><img src={Auction} alt="Auction" />View Tokens</Link></li>
                        </Dropdown.Menu>
                    )}
                </Dropdown>
            </li> */}
            {/* <li>
            <Dropdown>     
                    {device > 1199 && activeClass ? (
                    <Dropdown.Toggle onClick={handleSide2} variant='transparent' className={`noarrow`} id="dropdown-basic">
                        <img src={NftMarketplace} alt="NftMarketplace" />
                    </Dropdown.Toggle>
                    ) : (
                        <Dropdown.Toggle variant='transparent' className={`noarrow ${location === "/swap" ? 'active' : '' }`} id="dropdown-basic">
                            <img src={NftMarketplace} alt="NftMarketplace" /> NFT Market
                        </Dropdown.Toggle>
                    )}       
                    {device > 1199 && activeClass ? null : (                                    
                        <Dropdown.Menu show={location === "/Erc1155-details" || location === "/viewsplnft" || location === "/top-erc1155collection" || location === "/NFTn-details" || location === "/Mint-NFT1155" || location === "/MintSpecial-NFT" || location === "/top-nftcollection" || location === "/dashboardnft" || location === "/Mint-NFT" || location === "/NFT-detailsauction" || location === "/top-auctioncollection" || location === "/top-fcollection" || location === "/NFT-detailsfra" || location === "/create-artists" || location === "/hot-collections" || location === "/genesis-market"  || location === "/top-categories" || location === "/NFT-details"  || location === "/my-NFTcopyy" || location === "/my-NFTcopy" || location === "/Mint-NFTNoImage" ? true : false} as="ul" className={`list-unstyled position-relative mb-0 p-0 ${location === "/hot-collections" || location === "/genesis-market" || location === "/my-NFT" || location === "/top-categories" || location === "/my-NFTcopy" || location === "/my-NFTcopyy" || location === "/Mint-NFTNoImage" || location === "/create-artists" || location === "/top-fcollection" || location === "/NFT-detailsfra" || location === "/top-nftcollection" || location === "/NFT-detailsauction" || location === "/top-auctioncollection" || location === "/Mint-NFT" || location === "/dashboardnft" || location === "/viewsplnft" || location === "/MintSpecial-NFT" || location === "/Mint-NFT1155" || location === "/NFTn-details"  || location === "/top-erc1155collection" || location === "/Erc1155-details" ? 'd-block' : ''}`} style={{minWidth: 'auto'}}>                                
                            <li><Link to="/dashboardnft"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49967 15H9.16634V16.6667H10.833V15H12.4997V16.6667H13.333C13.7932 16.6667 14.1663 17.0398 14.1663 17.5C14.1663 17.9602 13.7932 18.3333 13.333 18.3333H6.66634C6.2061 18.3333 5.83301 17.9602 5.83301 17.5C5.83301 17.0398 6.2061 16.6667 6.66634 16.6667H7.49967V15Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M3.33366 5L3.33366 11.6667C3.33366 12.5871 4.07985 13.3333 5.00033 13.3333L15.0003 13.3333C15.9208 13.3333 16.667 12.5871 16.667 11.6667L16.667 5C16.667 4.07953 15.9208 3.33333 15.0003 3.33333L5.00033 3.33333C4.07985 3.33333 3.33366 4.07953 3.33366 5ZM1.66699 11.6667C1.66699 13.5076 3.15938 15 5.00033 15L15.0003 15C16.8413 15 18.3337 13.5076 18.3337 11.6667L18.3337 5C18.3337 3.15905 16.8413 1.66667 15.0003 1.66667L5.00033 1.66667C3.15938 1.66667 1.66699 3.15905 1.66699 5L1.66699 11.6667Z" fill="currentColor"></path><path d="M5.83333 5C5.3731 5 5 5.3731 5 5.83333C5 6.29357 5.3731 6.66667 5.83333 6.66667H11.6667C12.1269 6.66667 12.5 6.29357 12.5 5.83333C12.5 5.3731 12.1269 5 11.6667 5H5.83333Z" fill="currentColor"></path><path d="M5.83333 8.33333C5.3731 8.33333 5 8.70643 5 9.16667C5 9.6269 5.3731 10 5.83333 10H7.5C7.96024 10 8.33333 9.6269 8.33333 9.16667C8.33333 8.70643 7.96024 8.33333 7.5 8.33333H5.83333Z" fill="currentColor"></path></svg> Dashboard </Link></li>                                
                            <li><Link to="/top-categories" activeClassName='active'>                                    
                                <img src={Kyc} alt="Kyc" />
                            Trending Collections</Link></li>                                     
                            <li><Link to="/top-nftcollection" activeClassName='active'> <img src={GenesisMarket} alt="HotNFT" /> NFT Collections</Link></li> 
                            <li><Link to="/genesis-market" activeClassName='active'><img src={GenesisMarket} alt="market" /> Royalty NFTs</Link></li>                                                                
                            <li><Link to="/top-auctioncollection" activeClassName='active'><img src={GenesisMarket} alt="auctioncollection" /> Auction-NFT's</Link></li>
                            <li><Link to="/top-erc1155collection" activeClassName='active'><img src={GenesisMarket} alt="erc1155collection" /> ERC1155</Link></li>
                            <li><Link to="/viewsplnft" activeClassName='active'><img src={GenesisMarket} alt="viewsplnft" /> View-NFT's</Link></li>
                            <li><Link to="/my-NFT" activeClassName='active'><img src={MyNFT} alt="MyNFT" /> My Profile</Link></li>                                
                        </Dropdown.Menu>
                    )}
                </Dropdown>
            </li>  */}
             <li>
                <Dropdown>
                    {device > 1199 && activeClass ? (
                        <Dropdown.Toggle onClick={handleSide} variant='transparent' className="noarrow" id="dropdown-basic">
                            <img src={setting} alt="CBDC Hub" />
                        </Dropdown.Toggle>
                    ) : (                            
                        <Dropdown.Toggle variant='transparent' className="noarrow" id="dropdown-basic">
                            
                            <Link to="/approval_page"><img src={setting} alt="CBDC Hub"  ></img>Admin Page</Link>
                             
                        </Dropdown.Toggle>
                    )} 
                    </Dropdown>
                    </li>
            {/* <li>
                <Dropdown>                     
                        {device > 1199 && activeClass ? (
                            <Dropdown.Toggle onClick={handleSide} variant='transparent' className={`noarrow`} id="dropdown-basic">
                                <svg width="24" height="24" className='ms-0' fill='currentColor' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g id="sprout" transform="translate(-49.874 -14.287)"><path id="Path_5" data-name="Path 5" d="M123.9,42.355V35.841c3.63-.24,10.153-1.326,14.655-5.828,6.4-6.4,5.9-16.892,5.874-17.335a2.556,2.556,0,0,0-2.411-2.411c-.443-.025-10.936-.526-17.335,5.874a16.521,16.521,0,0,0-1.816,2.165,23.98,23.98,0,0,0-5.993-11.27C109.231-.609,96.652-.008,96.121.022A2.556,2.556,0,0,0,93.71,2.433c-.029.532-.631,13.11,7.013,20.754,5.6,5.6,13.847,6.775,18.067,6.991V42.355a22.731,22.731,0,0,1,5.112,0Z" transform="translate(-20.875 22)"></path><path id="Path_6" data-name="Path 6" d="M130.26,344.721a16.633,16.633,0,0,0-5.217.837,23.327,23.327,0,0,0-42.912,0,16.66,16.66,0,0,0-21.874,15.82v6.669a3.32,3.32,0,0,0,3.32,3.32H143.6a3.32,3.32,0,0,0,3.32-3.32v-6.669a16.676,16.676,0,0,0-16.657-16.657Z" transform="translate(-3.116 -264.181)"></path></g></svg>
                            </Dropdown.Toggle>
                            ) : (
                                <Dropdown.Toggle variant='transparent' className={`noarrow ${location === "/createteam" ? 'active' : '' }`} id="dropdown-basic">
                                    <Link to="/my-NFT"><img src={avatarimg} />Avatar</Link>
                                </Dropdown.Toggle>
                            )}                    
                    {device > 1199 && activeClass ? null : (
                        <Dropdown.Menu show={location === "/createteam" || location === "/my-NFT" || location === "/createclub" || location === "/upcoming" || location ===  "/viewtoken" || location ==="/create-artists" ? true : false} as="ul" className={`list-unstyled d-xl-none position-relative mb-0 p-0 ${location === "/createteam" || location === "/createorg" || location === "/createclub" || location === "/createtoken" || location === "/viewtoken" ? 'd-block' : ''}`} style={{minWidth: 'auto'}}>                                
                            <li><Link to="/my-NFT"><img src={profile} alt="Kyc" /> Profile </Link></li>
                            <li><Link to="/upcoming"><img src={stake} alt="GenerateDid" /> Staking</Link></li>
                            <li><Link to="/upcoming"><img src={Particiapte} alt="Particiapte" /> Badges</Link></li>
                            <li><Link to="/viewtoken"><img src={inventory} alt="Auction" />Inventory</Link></li>
                            <li><Link to="/viewtoken"><img src={refund} alt="Auction" />Claim</Link></li>
                            <li><Link to="/avatar"><img src={avatar} alt="Auction" />Avatar</Link></li>
                            <li><Link to="/create-artists"><img src={settings} alt="Auction" />Settings</Link></li>
                        </Dropdown.Menu>
                    )}
                </Dropdown>
            </li>                */}
            {/* <li>
                <Dropdown>
                    {device > 1199 && activeClass ? (
                        <Dropdown.Toggle onClick={handleSide} variant='transparent' className="noarrow" id="dropdown-basic">
                            <img src={play} alt="CBDC Hub" />
                        </Dropdown.Toggle>
                    ) : (                            
                        <Dropdown.Toggle variant='transparent' className="noarrow" id="dropdown-basic">
                            
                            <Link to="/play"><img src={play} alt="CBDC Hub"  ></img>Play</Link>
                             
                        </Dropdown.Toggle>
                    )} 
                    {device > 1199 && activeClass ? null : (
                        <Dropdown.Menu show={location === "/play" ||location === "/createclub" || location ==="/created_events"|| location ==="/approval_page"  ? true : false} as="ul" className={`list-unstyled d-xl-none position-relative mb-0 p-0 ${location === "/play" ||location === "/createclub" || location ==="/created_events" || location ==="/approval_page"? 'd-block' : ''}`} style={{minWidth: 'auto'}}>                                
                       <li><Link to="/createclub" activeClassName='active'> <img src={createlist} alt="HotNFT" /> Create Event</Link></li> 
                       <li><Link to="/play" activeClassName='active'> <img src={calendar} alt="HotNFT" />Play Events</Link></li> 
                       <li><Link to="/created_events" activeClassName='active'> <img src={todolist} alt="HotNFT" />Created Events</Link></li> 
                       
                      </Dropdown.Menu>
                    )}                        
                  
                </Dropdown>
            </li>   */}
            {/* <li>
                <Dropdown>
                    {device > 1199 && activeClass ? (
                        <Dropdown.Toggle onClick={handleSide} variant='transparent' className="noarrow" id="dropdown-basic">
                            <img src={pin} alt="CBDC Hub" />
                        </Dropdown.Toggle>
                    ) : (                            
                        <Dropdown.Toggle variant='transparent' className="noarrow" id="dropdown-basic">
                            
                            <Link to="/map"><img src={pin} alt="CBDC Hub"  ></img>Map</Link>
                             
                        </Dropdown.Toggle>
                    )} 
                                                
                                         
                  
                </Dropdown>
            </li>  */}
            {/* <li>
                <Dropdown>
                    {device > 1199 && activeClass ? (
                        <Dropdown.Toggle onClick={handleSide} variant='transparent' className="noarrow" id="dropdown-basic">
                            <img src={shop} alt="CBDC Hub" />
                        </Dropdown.Toggle>
                    ) : (                            
                        <Dropdown.Toggle variant='transparent' className="noarrow" id="dropdown-basic">
                            
                            <Link to="/top-nftcollection"><img src={shop} alt="CBDC Hub"  ></img>Shop</Link>
                             
                        </Dropdown.Toggle>
                    )}   
  {device > 1199 && activeClass ? null : (
                        <Dropdown.Menu show={location === "/top-nftcollection" ||location ==="/top-categories" || location === "/genesis-market" || location === "/top-auctioncollection"  ? true : false} as="ul" className={`list-unstyled position-relative d-xl-none mb-0 p-0 ${location === "/top-nftcollection" || location ==="/top-categories" ||location === "/genesis-market" || location === "/top-auctioncollection" ? 'd-block' : ''}`} style={{minWidth: 'auto'}}>                                
                       <li><Link to="/top-categories" activeClassName='active'>                                    
                                <img src={Kyc} alt="Kyc" />
                            Trending Collections</Link></li> 
                    <li><Link to="/top-nftcollection" activeClassName='active'> <img src={GenesisMarket} alt="HotNFT" /> NFT Collections</Link></li> 
                            <li><Link to="/genesis-market" activeClassName='active'><img src={GenesisMarket} alt="market" /> Royalty NFTs</Link></li>                                                                
                            </Dropdown.Menu>
                    )}                             
                  
                </Dropdown>
            </li>     */}
            {/* <li>
                <Dropdown>
                    {device > 1199 && activeClass ? (
                        <Dropdown.Toggle onClick={handleSide} variant='transparent' className="noarrow" id="dropdown-basic">
                            <img src={shop} alt="CBDC Hub" />
                        </Dropdown.Toggle>
                    ) : (                            
                        <Dropdown.Toggle variant='transparent' className="noarrow" id="dropdown-basic">
                            
                            <img src={create} alt="CBDC Hub"  ></img>Create
                             
                        </Dropdown.Toggle>
                    )}     
                     {device > 1199 && activeClass ? null : (
                        <Dropdown.Menu show={location === "/upcoming" || location === "/Mint-NFT" || location === "/createclub" || location === "/upcoming" || location ===  "/viewtoken" || location ==="/create-artists" ? true : false} as="ul" className={`list-unstyled position-relative mb-0 p-0 ${location === "/createteam" || location === "/createorg" || location === "/createclub" || location === "/createtoken" || location === "/viewtoken" ? 'd-block' : ''}`} style={{minWidth: 'auto'}}>                                
                           
                            <li><Link to="/upcoming"><img src={MyNFT} alt="Kyc" /> Experiences </Link></li>
                            <li><Link to="/Mint-NFT"><img src={asst} alt="GenerateDid" /> Assets</Link></li>
                             </Dropdown.Menu>
                    )}                   
                  
                </Dropdown>
            </li>  */}
            {/* <li>
                <Dropdown>
                    {device > 1199 && activeClass ? (
                        <Dropdown.Toggle onClick={handleSide} variant='transparent' className="noarrow" id="dropdown-basic">
                            <img src={shop} alt="CBDC Hub" />
                        </Dropdown.Toggle>
                    ) : (                            
                        <Dropdown.Toggle variant='transparent' className="noarrow" id="dropdown-basic">
                            
                            <img src={earn} alt="CBDC Hub"  ></img>Earn
                             
                        </Dropdown.Toggle>
                    )}     
                     {device > 1199 && activeClass ? null : (
                        <Dropdown.Menu show={location === "/stake" || location === "/Mint-NFT" || location === "/createclub" || location === "/upcoming" || location ===  "/viewtoken" || location ==="/create-artists" ? true : false} as="ul" className={`list-unstyled position-relative mb-0 p-0 ${location === "/stake" || location === "/createorg" || location === "/createclub" || location === "/createtoken" || location === "/viewtoken" ? 'd-block' : ''}`} style={{minWidth: 'auto'}}>                                
                           
                            <li><Link to="/stake"><img src={MyNFT} alt="Kyc" /> Staking </Link></li>
                            <li><Link to="/Mint-NFT"><img src={assets} alt="GenerateDid" /> Claim</Link></li>
                            <li><Link to="/Mint-NFT"><img src={assets} alt="GenerateDid" /> Referrals</Link></li>

                             </Dropdown.Menu>
                    )}                   
                  
                </Dropdown>
            </li> */}
            {/* <li>
                <Dropdown>
                    {device > 1199 && activeClass ? (
                        <Dropdown.Toggle onClick={handleSide} variant='transparent' className="noarrow" id="dropdown-basic">
                            <img src={shop} alt="CBDC Hub" />
                        </Dropdown.Toggle>
                    ) : (                            
                        <Dropdown.Toggle variant='transparent' className="noarrow" id="dropdown-basic">
                            
                            <img src={community} alt="CBDC Hub"  ></img>Community
                             
                        </Dropdown.Toggle>
                    )}     
                     {device > 1199 && activeClass ? null : (
                        <Dropdown.Menu show={location === "/upcoming" || location === "/Mint-NFT" || location === "/createclub" || location === "/upcoming" || location ===  "/viewtoken" || location ==="/create-artists" ? true : false} as="ul" className={`list-unstyled position-relative mb-0 p-0 ${location === "/createteam" || location === "/createorg" || location === "/createclub" || location === "/createtoken" || location === "/viewtoken" ? 'd-block' : ''}`} style={{minWidth: 'auto'}}>                                
                           
                            <li><Link to="/upcoming"><img src={MyNFT} alt="Kyc" /> News & Article </Link></li>
                            <li><Link to="/Mint-NFT"><img src={assets} alt="GenerateDid" /> Game Maker Academy</Link></li>

                             </Dropdown.Menu>
                    )}                   
                  
                </Dropdown>
            </li>   */}
            {/* <li>
                <Dropdown>
                    {device > 1199 && activeClass ? (
                        <Dropdown.Toggle onClick={handleSide} variant='transparent' className="noarrow" id="dropdown-basic">
                            <img src={shop} alt="CBDC Hub" />
                        </Dropdown.Toggle>
                    ) : (                            
                        <Dropdown.Toggle variant='transparent' className="noarrow" id="dropdown-basic">
                            
                            <img src={info} alt="CBDC Hub"  ></img>Info
                             
                        </Dropdown.Toggle>
                    )}     
                     {device > 1199 && activeClass ? null : (
                        <Dropdown.Menu show={location === "/upcoming" || location === "/Mint-NFT" || location === "/createclub" || location === "/upcoming" || location ===  "/viewtoken" || location ==="/create-artists" ? true : false} as="ul" className={`list-unstyled position-relative mb-0 p-0 ${location === "/createteam" || location === "/createorg" || location === "/createclub" || location === "/createtoken" || location === "/viewtoken" ? 'd-block' : ''}`} style={{minWidth: 'auto'}}>                                
                           
                            <li><Link to="/upcoming"><img src={MyNFT} alt="Kyc" />DivineDimension</Link></li>
                            <li><Link to="/Mint-NFT"><img src={assets} alt="GenerateDid" /> DIME</Link></li>
                            <li><Link to="/Mint-NFT"><img src={assets} alt="GenerateDid" /> ACE</Link></li>
                            <li><Link to="/Mint-NFT"><img src={assets} alt="GenerateDid" /> Avatar</Link></li>
                            <li><Link to="/Mint-NFT"><img src={assets} alt="GenerateDid" /> Find an Agency</Link></li>
                            <li><Link to="/Mint-NFT"><img src={assets} alt="GenerateDid" /> Become a Partner</Link></li>
                            <li><Link to="/Mint-NFT"><img src={assets} alt="GenerateDid" /> Docs & Resources</Link></li>

                             </Dropdown.Menu>
                    )}                   
                  
                </Dropdown>
            </li>                           */}
            </ul>
            
            {/* {device > 1199 && activeClass ? null : (<> */}
                {/* <hr /> */}
                {/* <div className="d-flex side-social align-items-center justify-content-around"> */}
                    {/* <a href="https://www.reddit.com/user/divine_realm_" target="_blank" rel="noopener noreferrer">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 16C3.5816 16 0 12.4184 0 8C0 3.5816 3.5816 0 8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16ZM13.336 8C13.3278 7.77482 13.2546 7.55682 13.1252 7.3723C12.9959 7.18777 12.816 7.0446 12.6071 6.96004C12.3982 6.87548 12.1694 6.85314 11.9481 6.89571C11.7268 6.93829 11.5226 7.04397 11.36 7.2C10.4499 6.58137 9.38016 6.2396 8.28 6.216L8.8 3.72L10.512 4.08C10.5324 4.26919 10.6195 4.44492 10.7577 4.57567C10.896 4.70641 11.0763 4.7836 11.2663 4.79338C11.4563 4.80315 11.6436 4.74488 11.7946 4.62901C11.9455 4.51315 12.0502 4.34728 12.0898 4.16118C12.1295 3.97508 12.1015 3.78094 12.011 3.6136C11.9204 3.44627 11.7731 3.3167 11.5956 3.24815C11.4181 3.1796 11.222 3.17656 11.0425 3.23958C10.8629 3.3026 10.7117 3.42755 10.616 3.592L8.656 3.2C8.62394 3.19297 8.59081 3.19237 8.55852 3.19823C8.52623 3.2041 8.49543 3.21632 8.4679 3.23418C8.44037 3.25204 8.41665 3.27518 8.39813 3.30227C8.37961 3.32937 8.36665 3.35986 8.36 3.392L7.768 6.168C6.65431 6.18479 5.56982 6.52682 4.648 7.152C4.52467 7.03596 4.37759 6.94813 4.21694 6.89458C4.0563 6.84104 3.88593 6.82307 3.71764 6.84191C3.54936 6.86075 3.38719 6.91597 3.24236 7.00372C3.09753 7.09146 2.97352 7.20966 2.87891 7.3501C2.78431 7.49054 2.72137 7.64987 2.69446 7.81706C2.66755 7.98424 2.67732 8.15528 2.72308 8.31831C2.76884 8.48134 2.84951 8.63248 2.95949 8.76124C3.06947 8.89 3.20613 8.99331 3.36 9.064C3.35099 9.18116 3.35099 9.29884 3.36 9.416C3.36 11.208 5.448 12.664 8.024 12.664C10.6 12.664 12.688 11.208 12.688 9.416C12.697 9.29884 12.697 9.18116 12.688 9.064C12.8854 8.96588 13.051 8.81389 13.1657 8.62561C13.2804 8.43732 13.3394 8.22043 13.336 8ZM5.336 8.8C5.336 8.58783 5.42029 8.38434 5.57031 8.23431C5.72034 8.08429 5.92383 8 6.136 8C6.34817 8 6.55166 8.08429 6.70169 8.23431C6.85171 8.38434 6.936 8.58783 6.936 8.8C6.936 9.01217 6.85171 9.21566 6.70169 9.36569C6.55166 9.51571 6.34817 9.6 6.136 9.6C5.92383 9.6 5.72034 9.51571 5.57031 9.36569C5.42029 9.21566 5.336 9.01217 5.336 8.8ZM9.984 11C9.41642 11.4277 8.71809 11.6454 8.008 11.616C7.29791 11.6454 6.59958 11.4277 6.032 11C5.99798 10.9586 5.9806 10.9059 5.98323 10.8524C5.98586 10.7988 6.00832 10.7481 6.04623 10.7102C6.08415 10.6723 6.13481 10.6499 6.18837 10.6472C6.24193 10.6446 6.29455 10.662 6.336 10.696C6.81698 11.0488 7.40409 11.2266 8 11.2C8.59664 11.2324 9.18649 11.0603 9.672 10.712C9.69246 10.6891 9.71742 10.6706 9.74532 10.6578C9.77322 10.6449 9.80346 10.6379 9.83418 10.6372C9.86489 10.6366 9.89541 10.6422 9.92385 10.6538C9.95229 10.6655 9.97803 10.6828 9.99948 10.7048C10.0209 10.7268 10.0376 10.753 10.0485 10.7817C10.0594 10.8104 10.0643 10.8411 10.0628 10.8718C10.0614 10.9025 10.0536 10.9325 10.0401 10.9601C10.0265 10.9876 10.0074 11.0121 9.984 11.032V11ZM9.84 9.632C9.68178 9.632 9.5271 9.58508 9.39554 9.49718C9.26398 9.40927 9.16145 9.28433 9.1009 9.13815C9.04035 8.99197 9.0245 8.83111 9.05537 8.67593C9.08624 8.52074 9.16243 8.3782 9.27431 8.26631C9.3862 8.15443 9.52874 8.07824 9.68393 8.04737C9.83911 8.0165 9.99997 8.03235 10.1461 8.0929C10.2923 8.15345 10.4173 8.25598 10.5052 8.38754C10.5931 8.5191 10.64 8.67377 10.64 8.832C10.6443 8.9404 10.6266 9.04854 10.5878 9.14987C10.5491 9.25119 10.4901 9.34357 10.4145 9.42139C10.339 9.49922 10.2484 9.56086 10.1482 9.60256C10.0481 9.64427 9.94048 9.66517 9.832 9.664L9.84 9.632Z" fill="currentColor"></path></svg>
                    </a> */}
                    {/* <a href="https://medium.com/@divinedimension007" target="_blank" rel="noopener noreferrer">
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.068 4.99828C10.068 7.61208 7.96349 9.73109 5.3674 9.73109C2.77132 9.73109 0.666992 7.61272 0.666992 4.99828C0.666992 2.38383 2.77147 0.265625 5.3674 0.265625C7.96333 0.265625 10.068 2.38447 10.068 4.99828ZM15.2246 4.99828C15.2246 7.45885 14.1722 9.45336 12.8743 9.45336C11.5763 9.45336 10.524 7.45821 10.524 4.99828C10.524 2.53834 11.5763 0.54319 12.8743 0.54319C14.1722 0.54319 15.2246 2.53834 15.2246 4.99828ZM17.3337 4.99828C17.3337 7.20284 16.9635 8.98985 16.507 8.98985C16.0505 8.98985 15.6804 7.2022 15.6804 4.99828C15.6804 2.79436 16.0505 1.0067 16.5072 1.0067C16.9638 1.0067 17.3337 2.79388 17.3337 4.99828Z" fill="currentColor"></path></svg>
                    </a> */}
                    {/* <a href="https://t.me/ElementDeFi" target="_blank" rel="noopener noreferrer">
                        <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2712 0.677924L1.23028 5.32214C0.408471 5.65186 0.413345 6.11023 1.08049 6.31462L4.08353 7.25194L5.23257 10.7748C5.37226 11.1604 5.3034 11.3133 5.70829 11.3133C6.02076 11.3133 6.15937 11.1708 6.3334 11.0008C6.44407 10.8925 7.10115 10.2537 7.83484 9.54035L10.9586 11.8483C11.5334 12.1654 11.9484 12.0011 12.0915 11.3145L14.142 1.65177C14.352 0.810101 13.8212 0.428326 13.2712 0.677924ZM4.55483 7.03659L11.3237 2.76606C11.6616 2.56113 11.9714 2.67131 11.7171 2.89712L5.92113 8.12651L5.69546 10.5335L4.55483 7.03659Z" fill="currentColor"></path></svg>
                    </a> */}
                    {/* <a href="https://twitter.com/divine_realm_" target="_blank" rel="noopener noreferrer">
                        <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.4769 3.74036C14.4826 3.8861 14.4845 4.03178 14.4845 4.17752C14.4845 8.59602 11.3763 13.6969 5.69243 13.6969C3.94646 13.6969 2.32296 13.1405 0.955078 12.1932C1.19688 12.2197 1.44244 12.2396 1.69178 12.2396C3.13943 12.2396 4.47277 11.7029 5.5304 10.802C4.17822 10.7821 3.03643 9.80829 2.64265 8.48341C2.83169 8.52315 3.02637 8.54308 3.22546 8.54308C3.5062 8.54308 3.77877 8.50338 4.04004 8.42389C2.62505 8.11916 1.55926 6.76781 1.55926 5.14482C1.55926 5.12495 1.55926 5.11829 1.55926 5.10504C1.97629 5.35014 2.45359 5.50243 2.96043 5.5223C2.13015 4.91948 1.58437 3.89271 1.58437 2.73344C1.58437 2.12399 1.73636 1.54764 2.00391 1.0508C3.52755 3.07788 5.80549 4.40941 8.37357 4.54853C8.32082 4.30342 8.2938 4.04513 8.2938 3.78678C8.2938 1.93856 9.67738 0.441406 11.3844 0.441406C12.2731 0.441406 13.0757 0.845555 13.6391 1.49475C14.3444 1.34901 15.0051 1.07081 15.603 0.686588C15.3713 1.46827 14.882 2.12396 14.2427 2.53467C14.8682 2.45518 15.4648 2.27645 16.0182 2.01148C15.603 2.68054 15.0805 3.27003 14.4769 3.74036Z" fill="currentColor"></path></svg>
                    </a> */}
                    {/* <a href="https://discord.gg/3th9PGjP" target="_blank" rel="noopener noreferrer">
                        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.3712 10C11.3712 10 10.9346 9.4881 10.5707 9.0357C12.1596 8.59525 12.766 7.61905 12.766 7.61905C12.2688 7.9405 11.7957 8.1667 11.3712 8.32145C10.7648 8.57145 10.1826 8.7381 9.61253 8.83335C8.44813 9.04765 7.38077 8.9881 6.47112 8.82145C5.77974 8.6905 5.18542 8.5 4.68813 8.30955C4.40917 8.2024 4.10594 8.07145 3.80272 7.9048C3.76633 7.88095 3.72994 7.86905 3.69356 7.84525C3.6693 7.83335 3.65717 7.82145 3.64504 7.80955C3.42672 7.6905 3.30543 7.60715 3.30543 7.60715C3.30543 7.60715 3.88762 8.55955 5.428 9.0119C5.06413 9.4643 4.61536 10 4.61536 10C1.93485 9.91665 0.916016 8.1905 0.916016 8.1905C0.916016 4.3572 2.66259 1.25008 2.66259 1.25008C4.40917 -0.035615 6.07086 9.89305e-05 6.07086 9.89305e-05L6.19214 0.142955C4.00891 0.761995 3.0022 1.70247 3.0022 1.70247C3.0022 1.70247 3.26904 1.55961 3.71781 1.35723C5.01562 0.79771 6.04658 0.64295 6.47112 0.607235C6.54388 0.59533 6.60454 0.583425 6.6773 0.583425C7.41715 0.48819 8.25405 0.46438 9.12737 0.559615C10.2796 0.69057 11.5168 1.0239 12.7782 1.70247C12.7782 1.70247 11.82 0.809615 9.75804 0.190573L9.92784 9.89305e-05C9.92784 9.89305e-05 11.5895 -0.035615 13.3361 1.25008C13.3361 1.25008 15.0827 4.3572 15.0827 8.1905C15.0827 8.1905 14.0517 9.91665 11.3712 10ZM5.73123 4.44053C5.03987 4.44053 4.49407 5.03575 4.49407 5.76195C4.49407 6.48815 5.052 7.08335 5.73123 7.08335C6.4226 7.08335 6.96837 6.48815 6.96837 5.76195C6.98051 5.03575 6.4226 4.44053 5.73123 4.44053ZM10.1583 4.44053C9.46697 4.44053 8.92114 5.03575 8.92114 5.76195C8.92114 6.48815 9.47911 7.08335 10.1583 7.08335C10.8497 7.08335 11.3955 6.48815 11.3955 5.76195C11.3955 5.03575 10.8497 4.44053 10.1583 4.44053Z" fill="currentColor"></path></svg>
                    </a> */}
                    {/* <a href="https://github.com/DivineDimension" target="_blank" rel="noopener noreferrer">
                    <svg fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="currentColor"/></svg>
                    </a>                     */}
                {/* </div> */}
            {/* </>)} */}
        </div>
    );
};

export default Sidebar;