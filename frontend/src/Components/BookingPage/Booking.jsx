import React, { useState } from 'react'
import { Blog } from './Blog'
import './Booking.css'
import { BusTimings } from './BusTimings'
const Booking =()=> {
    const [modify, setModify]= useState(false)
    const [view, setView]= useState(false)
    const [button , setButton] = useState(true) //for checking purpose remove it later
    return (
        <div className="full_body">
            {/* Top search and Modify button */}
          { !modify? <div className="modify">
               <p>Mumbai</p>
               <p>&#8594;</p>
               <p>Delhi</p>
               <p>&#60;</p>
               <p><li>21 Jul</li><li>Wed</li></p>
               <p>&#62;</p>
               <button onClick={()=> setModify(!modify)}>Modify</button>
           </div>: 
           <div className="search">
                <div>
                    <p>FROM</p>
                    <input />
                </div>
                <div>
                    <p>TO</p>
                    <input />
                </div>
                <div>
                    <p>DATE</p>
                    <input type="date"/>
                </div>
                <div>
                    <button onClick={()=> setModify(!modify)}>Search</button>
                </div>
            </div>}
           <hr/>
           <div className="bookingPageMiddle"> 
               {/* Filter buttons */}
               <div className="filterbuttons">  
                   <div>
                   <p>FILTERS</p>
                   <hr/>
                   <input type="button" value="Live Tracking (11)                              ✓" />
                     <hr/>
                   <input type="button" value="Reschedulable (13)                              ✓" />
                   <hr/>
                    </div>     
                    
                   <div>
                   <p>DEPARTURE TIME </p>
                   <input  type="checkbox" name="midnight" value="" />
                      <label>Before 6 am (0)</label>
                     <hr/>
                     <input  type="checkbox" name="morning" value="6 am to 12 pm (0)" />
                     <label>6 am to 12 pm (0)</label>
                     <hr/>
                     <input  type="checkbox" name="evening" value="12 pm to 6 pm (12)" />
                     <label>12 pm to 6 pm (12)</label>
                     <hr/>
                     <input  type="checkbox" name="afternoon" value="After 6 pm (11)" />
                     <label>After 6 pm (11)</label>
               </div>
               <div>
                   <p>BUS TYPES</p>
                   <input type="checkbox" name="seater" value="" />
                    <label>SEATER (10)</label>
                     <hr/>

                     <input type="checkbox" name="sleeper" value="" />
                    <label>SLEEPER (0)</label>
                     <hr/>

                     <input type="checkbox" name="ac" value="" />
                    <label>AC (12)</label>
                     <hr/>

                     <input type="checkbox" name="nonac" value="" />
                    <label>NONAC (1)</label>

               </div>
               <div>
                   <p>ARRIVAL TIME </p>
                     <input  type="checkbox" name="midnight" value="" />
                      <label>Before 6 am (0)</label>
                     <hr/>
                     <input  type="checkbox" name="morning" value="6 am to 12 pm (0)" />
                     <label>6 am to 12 pm (0)</label>
                     <hr/>
                     <input  type="checkbox" name="evening" value="12 pm to 6 pm (12)" />
                     <label>12 pm to 6 pm (12)</label>
                     <hr/>
                     <input  type="checkbox" name="afternoon" value="After 6 pm (11)" />
                     <label>After 6 pm (11)</label>

               </div>
               <div className="lowerbuttons">
                   <p>BOARDING POINT</p>
                   <input type="button" value="BOARDING POINT"/>
               </div>
               <div className="lowerbuttons">
                   <p>DROPPING POINT</p>
                   <input type="button" value="DROPPING POINT"/>
               </div>
               <div className="lowerbuttons">
                   <p>OPERATOR</p>
                   <input type="button" value="OPERATOR"/>
               </div>
                <div className="lastbuttons">
                    <p>AMENITIES</p>
                    <input type="button" value="WIFI (3)"/><br/>
                    <input type="button" value="Water Bottle (3)"/><br/>
                    <input type="button" value="Blankets (3)"/><br/>
                    <input type="button" value="Charging Point (8)"/> <br/>
                    <input type="button" value="Track My Bus (11)"/><br/>
                    <input type="button" value="Emergency Contact Nu... (7)"/>
                    

                </div>
               </div>
                
               <div>
                     {/* Advertising Cards */}
                    <div className="topImages">
                      <img src="https://s3.rdbuz.com/Images/ReddealsCards/IND/SafetyPlus_MainCard.svg" alt="safety+"/>
                      <img src="https://s3.rdbuz.com/Images/ReddealsCards/IND/FlexiTicket_MainCard.svg" alt="flexi-ticket"/>
                      <img src="https://s3.rdbuz.com/Images/ReddealsCards/IND/2_20_MainCard.svg" alt="top-raeted-buses"/>
                      <img src="https://s3.rdbuz.com/Images/ReddealsCards/IND/3_10_MainCard.svg" alt="early-bus"/>
                     </div>
                     <div>All bus ratings include safety as a major factor</div>
                     <hr/>
                     {/* Headings for bus details */}
                     <div className="heading">
                         <div>
                             <span><b>22 buses</b>  Found</span>
                        
                         </div>
                         <div>
                              <p><b>SORT BY:</b></p>
                              <p>Departure</p>
                              <p>Duration</p>
                              <p>Arrival</p>
                              <p>Ratings</p>
                              <p>Fare</p>
                         </div>
                         <div>
                             <p>Seats Available</p>
                         </div>
                     </div>
                      {/* Card of each bus details  */}
                     <div className="busDetails">
                         <div className="busDetailsOne">
                              <div> <p>Konkan Travels National</p></div>
                              <div> 
                                  <p>18:02</p>
                                  <p>16h 10m</p>
                                  <p>10:12</p>
                                  <p>4.3</p>
                                  <p>INR <b>1000</b></p>
                              </div>

                         </div>
                         <div className="busDetailsTwo">
                             <div><p>A/C Sleepers(2+1)</p></div>
                             <div>
                                 <p>24 Jul</p>
                                 <p>232</p>
                                 
                             </div>
                             <div>
                             <p>22 Seats available</p>
                             <p>8 Single</p>
                             </div>
                         </div>
                         <button className={view?"viewActiveButton":"viewPassiveButton"} onClick={()=> setView(!view)}>{view?"Hide Seats":"View Seats"}</button>
                    </div>
                    {/* Search button according to price */}
                    { view &&<div className="view"> 
                        <div className="seatPrice">
                            <p>Seat Price</p>
                            <button className={button?"activeButton":"passiveButton"} onClick={()=> setButton(!button)}>All</button>
                            <button className={button?"activeButton":"passiveButton"} onClick={()=> setButton(!button)}>1210</button>
                            <button className={button?"activeButton":"passiveButton"} onClick={()=> setButton(!button)}>1110</button>
                        </div>
                        <hr/>
                        {/* This div will open when we click on view */}
                      <div className="viewSeats">
                       <div>
                           <div>Click on an Available seat to proceed with your transaction.</div>
                           <div>
                               <p>Lower Deck</p>
                                   <div className="gridContainer">
                                      { [...Array(10)].map((item,i)=> {
                                        return  <div className="gridItem" key={i}>{item}</div>
                                      })}

                                     { [...Array(5)].map((item,i)=> {
                                        return  <div className="gridItem" key={i}>{item}</div>
                                      })} 
                                   </div>
                           </div>
                           <div>
                               <p>Upper Deck</p>
                           <div className="gridContainer">
                                      { [...Array(10)].map((item,i)=> {
                                        return  <div className="gridItem" key={i}>{item}</div>
                                      })}

                                     { [...Array(5)].map((item,i)=> {
                                        return  <div className="gridItem" key={i}>{item}</div>
                                      })} 
                                   </div>
                           </div>

                       </div>
                       <div className="seatLegend">
                           <h3>SEAT LEGEND</h3>
                           <div>
                               <div className="gridItem"></div>
                               <div>Available</div>     
                               <div className="gridItem"></div> 
                               <div>Unavailable</div>     
                           </div>
                            <div>
                               <div className="gridItem"></div>
                               <div>Female</div>
                            </div>
                                
                       </div>
                       </div>

                    </div>}
               </div>

           </div>
           <Blog/>
           <hr/>
           <BusTimings/>
        </div>
    )
}
export {Booking}