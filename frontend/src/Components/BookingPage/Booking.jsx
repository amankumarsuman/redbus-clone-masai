import React, { useState } from 'react'
import './Booking.css'
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
               {/* Filter button */}
               <div>       
                   <p>FILTERS</p>
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
        </div>
    )
}
export {Booking}