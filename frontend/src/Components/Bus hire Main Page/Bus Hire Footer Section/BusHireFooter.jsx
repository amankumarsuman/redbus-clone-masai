
import React from 'react'
import Styles from './busHireFooter.module.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
const BusHireFooter = () => {
    return (
        <div>
            <div className={Styles.busHire_Footer}>
                <div className={Styles.busHireFooterTextSection}>
                    <div className={Styles.busHireFooterEachTextSection}>
                        <h3>Book</h3>
                        <p>Bus Ticket</p>
                        <p>Bus hire</p>
                        <p>Tempo Travellers</p>
                        <p>Car Rentals</p>
                    </div>
                    <div className={Styles.busHireFooterEachTextSection}>
                        <h3>About</h3>
                        <p>About us</p>
                        <p>Contact us</p>
                    </div>
                    <div className={Styles.busHireFooterEachTextSection}>
                        <h3>Info</h3>
                        <p>T & C</p>
                        <p>Privacy Policy</p>
                        <p>Cookie Policy</p>
                        <p>FAQ</p>
                    </div>
                    <div className={Styles.busHireFooterEachTextSection}>
                        <h3>Global Sites</h3>
                        <p>India</p>
                        <p>Singapore</p>
                        <p>Malaysia</p>
                        <p>Indonesia</p>
                        <p>Peru</p>
                        <p>Colombia</p>
                    </div>
                    <div className={Styles.busHireFooterEachTextSection}>
                        <h3>Our Partners</h3>
                        <p>Goibibo</p>
                        <p>Makemytrip</p>
                    </div>
                </div>
                <div className={Styles.busHireFooterimageSection}>
                <div><img src="https://www.redbus.in/bushire/static/mwebv2/header/logo_rb.svg" alt="" /></div>
                    <div className={Styles.footerPara}>redBus is the world's largest online bus ticket booking service trusted by over 25 million happy customers globally. redBus offers bus ticket booking through its website,iOS and Android mobile apps for all major routes.</div>
                   <div style={{display:"flex",color:"white",marginRight:"10px"}}>
                   <div className={Styles.fb}><FacebookIcon/></div>
                   <div className={Styles.twit}><TwitterIcon/></div>
                   </div>
                   
                    <div className={Styles.copyRightText}>Ⓒ 2020 ibibogroup All rights reserved</div>
                </div>
            </div>
        </div>
    )
}

export default BusHireFooter
