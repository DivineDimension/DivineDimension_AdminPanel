import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const PotentialCard = (props) => {
    return (
        <Card className='card-potential'>
            <Card.Body>
                <h5 className='text-gray text-uppercase'>{props.title}</h5>
                <img src={props.icon} alt="icon" />
                <p className="h3" style={{color:"white"}}>{props.text}</p>
                {/* {props.comingSoon && <h5 className='text-gray text-normal text-uppercase'>coming Soon</h5>} */}
                {/* <div className="text-center">
                    <Link to="/stableswap" className='text-start m-md-2 mb-3 btn btn-lg btn-grad'>Enter AMM</Link>
                </div> */}
            </Card.Body>
        </Card>
    );
};

export default PotentialCard;