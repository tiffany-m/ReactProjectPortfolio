import React from 'react';
import CarouselDaily from './CarouselDailyComponent';
import { Link } from 'react-router-dom';

function Home(props) {
    return (
<div className="container">
<br />
    <div className="row COVID-row-content align-items-center boxStyle">
        <div className="col-sm-2">
            <img className="img-thumbnail" src="/assets/images/COVID.jpg" width="175" alt="COVID Responce" />
        </div>
        <div className="col-sm">
            <h5><strong>COVID - Following State Guidelines</strong></h5>
            <p className="d-none d-sm-block">We are following state guidelines for COVID-19 to ensure the safety of our employees and customers.
                <br /><strong>Update: </strong> 
                July 3, 2020 - We are open!  Currently closed on Mondays.  Otherwise business as usual.
            </p>
        </div>
    </div>
<br />
    <div className="row row-content align-items-center boxStyle">
        <div className="col-sm-3 mb-3 m-sm-auto">
            <img className="img-thumbnail" src="/assets/images/howWeRoll1.jpg" width="250" alt="Baked Cakes" />
        </div>
        <div className="col-sm">
            <h3>How we roll...</h3>
            <div>We sell a variety of small treats (donuts, cupcakes, cookies and seaonal items) for daily pickup. 
                Please see our <Link to="/menu">Menu</Link> for our product selection.  Large quantities and custom cakes must be ordered ahead of time.  Please see our <Link to="/order">Order Page</Link> for details.
            </div>
        </div>
        <div className="col-sm-3 mt-3 m-sm-auto">
            <img className="img-thumbnail" src="/assets/images/howWeRoll2.jpg" width="250" alt="Icing Bags" />
        </div>
    </div>
<br />
</div>
    );
}

export default Home;