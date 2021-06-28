import * as React from "react";
import BannerLayout from "../../../components/banner-layout";
import contentData from "../../../data";
import { Row, Col, Container } from "react-bootstrap";

interface IBannerProps {}

const Banner: React.FunctionComponent<IBannerProps> = (props) => {
  return (
    <div className='section-banner'>
      <Container>
        <Row>
          {contentData?.banner?.map((result,i) => (
            <Col xl={4} lg={6} md={12} key={i}>
              <BannerLayout banner={result}></BannerLayout>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default React.memo(Banner);
