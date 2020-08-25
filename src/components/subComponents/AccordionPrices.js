import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function AccordionPrices() {

    const [activeId, setActiveId] = useState('0');

    function toggleActive(id) {
      if (activeId === id) {
        setActiveId(null);
      } else {
        setActiveId(id);
      }
    }

    return (
        <React.Fragment>
            <Accordion defaultActiveKey={activeId} className="container accordionB">
                <div className={activeId === '0' ? 'panel-wrap active-panel' : 'panel-wrap'}>
                    <div className="row panel-header panel-header-main">
                        <Accordion.Toggle onClick={() => toggleActive('0')} eventKey="0">
                            <h3>Cake Price Examples</h3>
                        </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="0">
                        <div className="row panel-body">
                            <p className="mx-3 mt-2">Below are sample cake designs with different price points.  Final price is based off design and size.  Most of the cost is the design/decorations.  Going up or down in size will not greatly change the price.  Most custom cakes start at $150.</p>
                        </div>
                    </Accordion.Collapse>
                </div>

                <div className={activeId === '1' ? 'panel-wrap active-panel' : 'panel-wrap'}>
                    <div className="row panel-header">
                        <Accordion.Toggle onClick={() => toggleActive('1')} eventKey="1">
                            <h4>$150 +</h4>
                        </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="1">                
                  <div className="row p-body">
                      <div className="col-sm-4 align-self-center">
                          <p>Simple scroll design and hand made gumpaste flowers.</p>
                      </div>
                      <div className="col-sm-4 mb-2 m-sm-auto">
                          <img className="img-thumbnail my-2" src="/assets/images/101.jpg" width="350" alt="Flowers and Scroll" />
                      </div>
                      <div className="col-sm align-self-center">
                          <img className="img-thumbnail my-2" src="/assets/images/102.jpg" width="350" alt="Flowers and Scroll" />
                      </div>
                  </div>
                    </Accordion.Collapse>
                </div>

                <div className={activeId === '2' ? 'panel-wrap active-panel' : 'panel-wrap'}>
                    <div className="row panel-header">
                        <Accordion.Toggle onClick={() => toggleActive('2')} eventKey="2">
                            <h4>$200 +</h4>
                        </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="2">
                    <div className="row p-body">
                        <div className="col-sm-4 align-self-center">
                            <p>This cake's decorations are mostly made with icing and some simple fondant decorations.</p>
                        </div>
                        <div className="col-sm-4 mb-2 m-sm-auto">
                            <img className="img-thumbnail my-2" src="/assets/images/201.jpg" width="350" alt="Autumn" />
                        </div>
                        <div className="col-sm-4">
                            <img className="img-thumbnail my-2" src="/assets/images/202.jpg" width="350" alt="Closeup Autumn" />
                        </div>
                    </div>
                    </Accordion.Collapse>
                </div>

                <div className={activeId === '3' ? 'panel-wrap active-panel' : 'panel-wrap'}>
                    <div className="row panel-header">
                        <Accordion.Toggle onClick={() => toggleActive('3')} eventKey="3">
                            <h4>$300 +</h4>
                        </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="3">
                    <div className="row p-body">
                        <div className="col-sm-4 align-self-center">
                            <p>The first cake has mostly simple fondant decorations.  The second cake has an intricate design piped on the entire side of the cake.</p>
                        </div>
                        <div className="col-sm-4 mb-2 m-sm-auto">
                            <img className="img-thumbnail my-2" src="/assets/images/301.jpg" width="350" alt="Fairy Door Stump" />
                        </div>
                        <div className="col-sm-4">
                            <img className="img-thumbnail my-2" src="/assets/images/302.jpg" width="350" alt="Frame Based" />
                        </div>
                    </div>
                    </Accordion.Collapse>
                </div>

                <div className={activeId === '4' ? 'panel-wrap active-panel' : 'panel-wrap'}>
                    <div className="row panel-header">
                        <Accordion.Toggle onClick={() => toggleActive('4')} eventKey="4">
                            <h4>$400 +</h4>
                        </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="4">
                    <div className="row p-body">
                        <div className="col-sm-4 align-self-center">
                            <p>Cake based off of a specific character with detailed figurine.</p>
                        </div>
                        <div className="col-sm-4 mb-2 m-sm-auto">
                            <img className="img-thumbnail my-2" src="/assets/images/401.jpg" width="250" alt="RWBY Ruby" />
                        </div>
                        <div className="col-sm-4">
                            <img className="img-thumbnail my-2" src="/assets/images/402.jpg" width="350" alt="Ruby Closeup" />
                        </div>
                    </div>
                    </Accordion.Collapse>
                </div>

                <div className={activeId === '5' ? 'panel-wrap active-panel' : 'panel-wrap'}>
                    <div className="row panel-header">
                        <Accordion.Toggle onClick={() => toggleActive('5')} eventKey="5">
                            <h4>$500 +</h4>
                        </Accordion.Toggle>
                    </div>
                    <Accordion.Collapse eventKey="5">
                    <div className="row p-body">
                        <div className="col-sm-4 align-self-center">
                            <p>Cake with lots of small fondant details.</p>
                        </div>
                        <div className="col-sm-4 mb-2 m-sm-auto">
                            <img className="img-thumbnail my-2" src="/assets/images/501.jpg" width="370" at="Christmas" />
                        </div>
                        <div className="col-sm-4">
                            <img className="img-thumbnail my-2" src="/assets/images/502.jpg" width="370" alt="Closeup" />
                        </div>
                    </div>
                    </Accordion.Collapse>
                </div>
            </Accordion>
      
      </React.Fragment>
    );
}

export default AccordionPrices;