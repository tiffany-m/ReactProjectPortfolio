import React from 'react';
import OrderForm from './subComponents/OrderForm';
import AccordionPrices from './subComponents/AccordionPrices';
import { Link } from 'react-router-dom';

function Order(props) {
    return (
        <div className="container">
    <br />
            <div className="row row-content align-items-center boxStyle">
                <div className="col-sm-3 mb-3 m-sm-auto">
                    <img className="img-thumbnail" src="/assets/images/largeQuantities.jpg" width="275" alt="Many Cupcakes" />
                </div>
                <div className="col-sm">
                    <h3>Ordering Large Quantities</h3>
                    <p>We sell a variety of small treats (donuts, cupcakes, cookies and special seaonal items) for daily pickup.  Please see our <Link to="/menu">Menu</Link> for our product selection.  We try to keep our products as fresh as possible by making small batches more frequently.  Please <a href="tel:+8675309">call</a> ahead of time for large quantities - anything more than 3 dozen donuts/cupcakes or 15 pounds of cookies.
                    </p>
                </div>
            </div>
    <br />
            <div className="row row-content align-items-center boxStyle">
                <div className="col">
                    <h2 className="text-center">Ordering Custom Cakes</h2>
                    <p><strong>We do NOT take custom orders by phone or e-mail. You must set up a consulatation with the owner or a decorator.</strong>  You can call, e-mail or use the form below to set up a consultation.</p>
                    <hr />
                    <h3 className="text-center">Ordering FAQ</h3>
                    <p><strong>Why do I have to set up a consulation?</strong>
                        <br />The main reason is so time can be set aside for you.  It's also helpful if you're talking to the person that is actually going to be decorating the cake.  This causes less miscimunications - especially with prices.
                    </p>
                    <p><strong>How far in advance do I need to place my order?</strong>
                        <br />2 months advance is recommended but it's never too soon to order!  During holiday and wedding season we are busier and book up quickly.  <strong>Holidays: Nov - Dec | Wedding/Graduation Season: April - June</strong>
                    </p>
                    <p><strong>How much do custom cakes cost?</strong>
                        <br />Final price is based off design and size.  If you would like to order a cake that is already on our website/social media pages we can give you an estimate just <a href="tel:+8675309">call</a>.  Please see our Example Cake Prices below for an idea of prices.
                    </p>
                    <p><strong>Can I have my cake delivered?</strong>
                        <br />Yes!  Price of delivery depends on day, time and location.  You can <a href="tel:+8675309">call</a> or talk about prices at consultation.  We <strong>DO NOT</strong> ship or deliver over a 10mile distance from the bakery.
                    </p>
                    <p><strong>Is a deposit required?</strong>
                        <br />50% of the total is required to confirm your order.  This is non-refundable.  If you need to reschedule please <a href="tel:+8675309">call</a> <strong>ASAP</strong>.  Full payment is required 14 days before scheduled deliveries, otherwise at the time of pick up.
                    </p>
                    <p><strong>What is the deadline for alterations to the design?</strong>
                        <br />We require 14 days notice for any changes requested.  Some decorations must be made far in advance to be given time to fully dry.  We still may be able to make changes in less than 14 days notice but there will be a fee of at least $50.  This fee must also be paid ahead of time.
                    </p>
                </div>
            </div>
    <br />
        <AccordionPrices />
    <br />
        <OrderForm />
    <br />
        </div> 
    );
    }


export default Order;