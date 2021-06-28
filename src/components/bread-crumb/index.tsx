import React from 'react';
import { Container, Image } from 'react-bootstrap';

interface IBreadCrumbCustomProps {}

const BreadCrumbCustom: React.FunctionComponent<IBreadCrumbCustomProps> = (
  props
) => {
  return (
    <Container>
      <div className="d-flex mt-2 mb-2">
        <div className="bread">
          <a>
            <span>Çiçek Sepeti Market </span>
            <Image src="/icons/bread-icon.svg"></Image>
          </a>
        </div>
        <div className="bread">
          <a>
            <span>İstanbul </span>
            <Image src="/icons/bread-icon.svg"></Image>
          </a>
        </div>
        <div className="bread-active">
          <a>
            <span>CiceksepetiBreadCrumb</span>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default BreadCrumbCustom;
