import React from "react"
import './BusinessPage.css'


export default function BusinessPage({business}) {
    
    




    return(
        <>
        {/* <h1>BusinessPage</h1>
        <p>{business.name}</p> */}
        <div className="MainBusinessDiv">

            <div className="business-container">
                <div className="top-portion">
                    <div className="business-profile-bg-image">
                        <img id="prf-bg-img" src="https://www.eruimbemisadot.co.il/media/Minisites/Gallery/florentina/1.jpg" alt="" srcSet=""/>
                    </div>
                    <div className="business-logo-img">
                        <img id="prf-img" src="https://media-cdn.tripadvisor.com/media/photo-p/16/42/3a/fe/logo.jpg" alt="" srcSet=""/>
                    </div>
                    <div className="businessName">
                        {business.name? business.name.toUpperCase() : ''}
                    </div>

                </div>
                <div className="bottom-portion">
                    <div className="right-side">

                    </div>
                    <div className="left-side">

                    </div>
                </div>
            </div>
            

        </div>
        </>
    )
}




