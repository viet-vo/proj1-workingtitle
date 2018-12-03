import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import NextBut from "../components/NextBut"

const About = () => (
  <div>
    <Hero backgroundImage="https://i.imgur.com/B22yxVk.jpg">
      <h1>Hi, I'm Viet Vo</h1>
      <h2>Here's some information about me :)</h2>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Who I am:</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p>
            I am a super excited person entering the wonderful world of web development!
          </p>
          <h4>
            My current knowledge-base includes:
          </h4>
          <ul>
            <li></li>
          </ul>
          <p>
            Etiam ut massa efficitur, gravida sapien non, condimentum sapien. Suspendisse massa
            tortor, facilisis in neque sit amet, scelerisque elementum tortor. Nullam eget nibh sit
            amet odio lobortis ullamcorper. Nulla bibendum magna nec sem pulvinar lobortis. Mauris
            et imperdiet urna, vitae lobortis dui. Nunc elementum elit mi, non mattis enim congue
            at. Proin mi lectus, ullamcorper id hendrerit eu, ultricies vitae lacus. Nunc vehicula,
            erat eget laoreet condimentum, felis ante malesuada leo, nec efficitur diam nisi eget
            nisi. Cras arcu lacus, tristique in bibendum vitae, elementum eget lorem. Maecenas
            vestibulum volutpat orci eu pharetra. Praesent vel blandit ante, nec faucibus libero.
            Sed ultrices lorem ex, eu facilisis libero convallis ac. Vivamus id dapibus eros. Nullam
            tempor sem rhoncus porta semper. Proin bibendum vulputate nisl, fringilla interdum elit
            pulvinar eu. Quisque vitae quam dapibus, vestibulum mauris quis, laoreet massa.
          </p>
          <NextBut>Portfolio</NextBut>
        </Col>
      </Row>
      
    </Container>
  </div>
);

export default About;
