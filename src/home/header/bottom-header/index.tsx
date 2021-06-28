import * as React from 'react';
import { Container } from 'react-bootstrap';
import './style.scss';
interface IBottomHeaderProps {}

const BottomHeader: React.FunctionComponent<IBottomHeaderProps> = (props) => {
  return (
    <div
      className="bottom-header"
      style={{
        backgroundImage: 'url(/images/bg.png)',
      }}
    >
      <Container>
        <h1>ÇiçekSepeti H1</h1>
      </Container>
    </div>
  );
};

export default BottomHeader;
