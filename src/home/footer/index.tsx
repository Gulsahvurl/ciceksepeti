import * as React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import CopyRight from "./copyright";
import "./style.scss";
import SubMenu from "./sub-menu";

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <footer className='footer-bg'>
      <Container>
        <div className='footer-app'>
          <Row>
            <Col className='footer-img-mobile'>
              <Image className='footer-app-img' src='/images/footer-app.png'></Image>
            </Col>
            <Col className='col-store'>
              <div className='d-flex'>
                <div className='mr-4 mb-2'>
                  <Image src='/images/qr_code.png'></Image>
                </div>
                <div className='download-app'>
                  <h1>Çiçek Sepeti Mobil Uygulamayı İndirin</h1>
                  <p>Mobil Uygulamayı QR Kod ile İndirin.</p>
                </div>
              </div>
              <div className='store'>
                <div>
                  <Image src='/images/google_play.svg'></Image>
                </div>
                <div>
                  <Image src='/images/app_store.svg'></Image>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <SubMenu></SubMenu>
      </Container>
      <CopyRight></CopyRight>
    </footer>
  );
};

export default Footer;
