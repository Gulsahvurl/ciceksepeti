import * as React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import contentData from '../../../data';

import Information from './information';

interface ISubMenuProps {}

const SubMenu: React.FunctionComponent<ISubMenuProps> = (props) => {
  return (
    <>
      <Row className="sub-menu">
        <Col md={6} lg={4}>
          <div className="main-social-media">
            <div>
              <Image src="/images/logo.svg"></Image>
            </div>
            <div className="social-media">
              {contentData?.footer?.social_media.map((result) => (
                <div key={result?.id}>
                  <Image src={result?.src}></Image>
                </div>
              ))}
            </div>
            <div className="agreement">
              <p>
                CicekSepeti.com olarak kişisel verilerinizin gizliliğini
                önemsiyoruz. 6698 sayılı Kişisel Verilerin Korunması Kanunu
                kapsamında oluşturduğumuz aydınlatma metnine
                <a> buradan</a> ulaşabilirsiniz.
              </p>
            </div>
          </div>
        </Col>
        <Col md={6} lg={8}>
          <Row>
            <Col>
              <ul>
                <li>
                  <a className="sub-menu-title">Faydalı Bilgiler</a>
                </li>

                <ul>
                  {contentData?.footer?.sub_menu_link_1?.map((data, index) => (
                    <li key={index}>
                      <a>{data?.text}</a>
                    </li>
                  ))}
                </ul>
              </ul>
            </Col>
            <Col>
              <ul>
                <li>
                  <a className="sub-menu-title">Kurumsal</a>
                </li>

                <ul>
                  {contentData?.footer?.sub_menu_link_3?.map((data, index) => (
                    <li key={index}>
                      <a>{data?.text}</a>
                    </li>
                  ))}
                </ul>
              </ul>
            </Col>
            <Col>
              <ul>
                <li>
                  <a className="sub-menu-title">İletişim</a>
                </li>

                <ul>
                  {contentData?.footer?.sub_menu_link_2?.map((data, index) => (
                    <li key={index}>
                      <a>{data?.text}</a>
                    </li>
                  ))}
                </ul>
              </ul>
            </Col>
            <Col>
              <ul>
                <li>
                  <a className="sub-menu-title">Gizlilik Sözleşmesi</a>
                </li>

                <ul>
                  {contentData?.footer?.sub_menu_link_4?.map((data, index) => (
                    <li key={index}>
                      <a>{data?.text}</a>
                    </li>
                  ))}
                </ul>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
      <Information></Information>
    </>
  );
};

export default SubMenu;
