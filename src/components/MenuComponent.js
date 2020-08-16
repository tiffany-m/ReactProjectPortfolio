import React from 'react';
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
                <CardTitle>Cupcakes</CardTitle>
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
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                </CardBody>
            </Card>
            <Card className="boxStyle">
                <CardImg className="imgBorder" top width="100%" src="/assets/images/cookiesMenu.jpg" alt="Cookies" />
                <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                </CardBody>
            </Card>
        </CardDeck>
    <br />
        <CardDeck>
            <Card className="boxStyle">
                <CardImg className="imgBorder" top width="100%" src="/assets/images/summerMenu.png" alt="Cupcakes" />
                <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                </CardBody>
            </Card>
            <Card className="boxStyle">
                <CardImg className="imgBorder" top width="100%" src="/assets/images/customMenu.jpg" alt="Donuts" />
                <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                </CardBody>
            </Card>
            </CardDeck>
    <br />
    </div>
  );
};

export default Menu;