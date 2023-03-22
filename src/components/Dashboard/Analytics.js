import React from 'react';
// import Layout from './Layout';
import Layout from '../DashboardNew/LayoutT';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Container, Tab, Tabs } from 'react-bootstrap';

// import AnalyticChart from '../Sections/AnalyticCharts';
//import TopLiquidity from '../Snippets/TopLiquidity';
import TopTokens from '../Snippets/TopTokens';

const animatedComponents = makeAnimated();

function AnalyticsPage() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    });
    const colourStyles = {
        option: (styles, { isFocused }) => {
          // const color = chroma(data.color);
        //   console.log({ data, isDisabled, isFocused, isSelected });
          return {
            ...styles,
            backgroundColor: isFocused ? "rgba(255, 255, 255, 0.5)" : null,
          };
        }
    };

    const Category = [
        { value: 'CloneX', label: 'CloneX'},
        { value: 'BoredApeYachtClub', label: 'BoredApeYachtClub'},
        { value: 'Sandbox', label: "Sandbox's LANDs"},
        { value: 'RTFKT', label: "RTFKT - CloneX Mintvial"},
        { value: 'Town', label: "Town Star"},
        { value: 'MutantApeYachtClub', label: "MutantApeYachtClub"},
        { value: 'Wizards', label: "Wizards & Dragons Game"},
        { value: 'adidas', label: "adidas Originals: Into the Metaverse"},
        { value: 'Wolf', label: "Wolf Game"},
        { value: 'Ape', label: "Ape Kids Club (AKC)"},
        { value: 'Art', label: "Art Blocks Factory"},
        { value: 'Crypto', label: "Crypto Bull Society"},
        { value: 'Chain', label: "Chain Runners"},
        { value: 'Neo', label: "Neo Tokyo: Outer Identities"},
        { value: 'Doodles', label: "Doodles"},
        { value: 'VOX', label: "VOX Series 1"},
        { value: 'JRNY', label: "JRNY NFT Club"},
        { value: 'Wolf', label: "Wolf Game"},
    ]
    return (
        <Layout>
            <div>
                {/* className="page-analytic" */}
                <Container fluid="lg">
                    <div className="filter-item analytic-search mb-20">
                        {/* <Select
                            styles={colourStyles}
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            placeholder="Search here..."
                            options={Category}
                            formatOptionLabel={option => (
                                <div className="custom-select-option d-flex align-items-center">
                                    {option.icon && <img src={option.icon} alt="icon" />}
                                    {option.label}
                                </div>
                            )}
                        /> */}
                    </div>

                    {/* <Tabs defaultActiveKey="first" id="uncontrolled-tab-example" className="tabs-normal mb-4"> */}
                        {/* <Tab eventKey="first" title="Money Market">
                            

                            <TopLiquidity />
                        </Tab> */}
                        {/* <Tab eventKey="second" title="Exchange">
                            <TopTokens />
                        </Tab> */}
                    {/* </Tabs> */}
                    {/* <TopLiquidity /> */}
                    
                    
                    {/* <div>
                    <br></br>
                    <button></button>
                    <br></br>
                    </div> */}
                    {/* <TopTokens /> */}
                </Container>
            </div>
        </Layout>
    );
}

export default AnalyticsPage;