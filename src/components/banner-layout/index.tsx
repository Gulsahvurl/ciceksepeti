import * as React from "react";
import { IBanner } from "../../models/banner";
import {Image} from 'react-bootstrap'
import "./style.scss";

interface IBannerLayoutProps {
  banner: IBanner;
}

const BannerLayout: React.FunctionComponent<IBannerLayoutProps> = ({ banner, ...props }) => {
  return (
    <div className='banner' style={{ backgroundColor: banner?.bg }}>
      <div>
        <Image src={banner?.src}></Image>
      </div>
      <div className='banner-right'>
        <div>
          <p>{banner?.content}</p>
        </div>
        <div>
          <button>{banner?.buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(BannerLayout);
