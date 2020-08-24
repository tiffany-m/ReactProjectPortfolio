import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

const Menu = (props) => {
  return (
    <div className="container">
    <br />
        <CardDeck>
            <Card className="boxStyle">
                <CardImg className="imgBorder" top width="100%" src="/assets/images/cupcakesMenu.jpg" alt="Cupcakes" />
                <CardBody>
                    <CardTitle><h3>Cupcakes</h3></CardTitle>
                    <CardSubtitle><strong>$3 each | $30/dozen</strong></CardSubtitle>
                        <CardText className="d-none d-sm-block">
                            <li>Vanilla w/ Vanilla/Chocolate Icing</li>
                            <li>Chocolate w/ Chocolate Icing</li>
                            <li>Lemon w/ Lemon Icing</li>
                            <li>Strawberry w/ Strawberry Icing</li>
                        </CardText>
                </CardBody>
            </Card>
            <Card className="boxStyle">
                <CardImg className="imgBorder" top width="100%" src="/assets/images/donutsMenu.jpg" alt="Donuts" />
                    <CardBody>
                    <CardTitle><h3>Donuts</h3></CardTitle>
                    <CardSubtitle><strong>$1.50 each | $12/dozen</strong></CardSubtitle>
                        <CardText className="d-none d-sm-block">
                            <li>Plain w/ Vanilla/Chocolate Icing</li>
                            <li>Chocolate w/ Vanilla/Chocolate Icing</li>
                            <li>Plain/Chocolate with Icing and Jimmies</li>
                            <li>Plain Powdered/Tossed in Cinnamon</li>
                        </CardText>
                    </CardBody>
            </Card>
            <Card className="boxStyle">
                <CardImg className="imgBorder" top width="100%" src="/assets/images/cookiesMenu.jpg" alt="Cookies" />
                <CardBody>
                <CardTitle><h3>Cookies</h3></CardTitle>
                <CardSubtitle><strong>$16/lb - 2.5" diameter</strong></CardSubtitle>
                <CardText className="d-none d-sm-block">
                    <li>Butter (plain, dipped in chocolate, w/ jimmies, fruit topped)</li>
                    <li>Chocolate Chip</li>
                    <li>Sugar Cookies (colored sugar sprinkled on top)</li>
                    <li>Ginger Snaps</li>
                </CardText>
                </CardBody>
            </Card>
        </CardDeck>
    <br />
        <CardDeck>
            <Card className="boxStyle">
                <CardImg className="imgBorder" top width="100%" src="/assets/images/summerMenu.png" alt="Cupcakes" />
                <CardBody>
                <CardTitle><h3>Seasonal</h3></CardTitle>
                <CardSubtitle><strong>Summer Treats -</strong> While supplies last!</CardSubtitle>
                <CardText className="d-none d-sm-block">
                    <li>Cupcake Cones!</li>
                    <li>Pineapple Donuts w/ Vanilla Glaze</li>
                    <li>Neapolitan Cookies</li>
                </CardText>
                </CardBody>
            </Card>
            <Card className="boxStyle">
                <CardImg className="imgBorder" top width="100%" src="/assets/images/customMenu.jpg" alt="Donuts" />
                <CardBody>
                <CardTitle><h3>Custom Cakes</h3></CardTitle>
                <CardSubtitle><strong>Making Delicious Memories With Every Cake!</strong></CardSubtitle>
                <CardText className="d-none d-sm-block">
                    Please see our <Link to="/order">Order Page</Link> for details.
                </CardText>
                </CardBody>
            </Card>
            </CardDeck>
    <br />
    </div>
  );
};

export default Menu;