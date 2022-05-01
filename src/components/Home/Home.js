import React from 'react';
import styled from 'styled-components'
import Sections from "./Sections/Sections";


const Home = () => {
    return (
        <Container>
            <Sections
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtn="Custom Order"
                rightBtn="Existing Inventory"
            />
            <Sections
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtn="Custom Order"
                rightBtn="Existing Inventory"/>
            <Sections
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtn="Custom Order"
                rightBtn="Existing Inventory"/>
            <Sections
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtn="Custom Order"
                rightBtn="Existing Inventory"/>
            <Sections
                title="Solar Panels"
                description="Lowest Cost Solar Panels in America"
                backgroundImg="solar-panel.jpg"
                leftBtn="Order Now"
                rightBtn="Learn More"/>
            <Sections
                title="Solar Roof"
                description="Produce Clean Energy From Your Roof"
                backgroundImg="solar-roof.jpg"
                leftBtn="Order Now"
                rightBtn="Learn More"
            /><Sections
                title="Accessories"
                description=""
                backgroundImg="accessories.jpg"
                leftBtn="Shop Now"
            />
        </Container>
    );
};
export default Home;

const Container = styled.div`
  height: 100vh;

`


