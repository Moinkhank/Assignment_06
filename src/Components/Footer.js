import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faRocket,faUsers,faCircleInfo} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer(props){
    library.add(faRocket,faUsers,faCircleInfo);

    return(
        <div style={{display:"flex",justifyContent:"space-around"}}>
            <div style={{fontSize:"125px"}}>
            <FontAwesomeIcon icon="rocket" />
            <p style={{fontSize:"15px",color:"grey"}}>enterprise organizations sucessfully launched</p>
            </div>
            <div style={{fontSize:"125px"}}>
            <FontAwesomeIcon icon="fa-solid fa-circle-info" />
            <p style={{fontSize:"15px",color:"grey"}}>enterprise users onboarded seamlessly</p>
            </div>
            <div style={{fontSize:"125px"}}>
            <FontAwesomeIcon icon="fa-solid fa-users" />
            <p style={{fontSize:"15px",color:"grey"}}>professional trained on product and strategy</p>
            </div>
        </div>
    );
}
export default Footer;
