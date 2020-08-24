import React from 'react';
import { Link } from 'react-router-dom';

function AboutUs(props) {
    return (
        <div className="container">
            <br />
            <div className="row row-content align-items-center boxStyle">
                <div className="col-sm-3">
                    <img className="mb-3 m-sm-auto img-thumbnail" src="/assets/images/aboutUs.png" width="250" alt="Cupcake and Icing Bag" />
                </div>
                <div className="col-sm">
                    <h3>We Beat It, You Eat It!</h3>
                    <p className="d-none d-sm-block">
                        <strong>Edible Delights </strong>
                        opened it's doors on March 20th, 2020.  Our mission is to provide small, healthy and fresh treats to our community.  We also offer larger custom cakes for celebrations - please see our <Link to="/order">Order Page</Link> for details.  
                    </p>
                    <p><strong>Treat yourself! </strong>
                        People don't normally think of cakes as being both healthy and tasty - we can change your mind!  We bake everything from scratch with fresh ingredients (local when possible).  Our products are vegan (dairy, gelatin and egg free), gluten free, peanut free, soy free and we avoid using processed sugars and perservatives.  The flours we use include garbanzo bean/chickpea flour, lentil flour and brown rice flour.  These wheat alternatives provide more fiber and protein so you can feel good about eating our treats!
                    </p>
                    <div><strong>Fresh Fresh Baby! </strong>
                        We make small batches of our <strong>Daily Treats</strong> everyday to make sure they are always fresh.  Beacuse of this you should call ahead of time to order large quanities.  In order to be able to do this, we also have a limited menu.
                    </div>
                </div>
            </div>
            <br />
            <div className="row row-content align-items-center boxStyle">
                <div className="col-sm-3">
                    <img className="mb-3 m-sm-auto img-thumbnail" src="assets/images/aboutOwner2.jpg" width="300" alt="Puppet Cake" />
                </div>
                <div className="col-sm">
                    <h3>About the Owner</h3>
                    <p>
                        <strong>Tiffany Mollica </strong> graduated from The Restaurant at Walnut Hill College in Philadelphia with a Pastry Arts degree in 2010.  She has worked at several different bakeries including Sohpisticakes, Viso's and Traub's.  This helped her fine tune her decorating skills and knowledge of how bakeries run.  She opened <strong>Edible Delights</strong> with the goal of providing fresh healthy and tasty treats to the community.
                    </p>
                </div>
                <div className="col-sm-3">
                    <img className="img-thumbnail" src="/assets/images/aboutOwner1.jpg" width="240" alt="Mini Easter Basket" />
                </div>
            </div>
            <br />
        </div>
    );
}

export default AboutUs;