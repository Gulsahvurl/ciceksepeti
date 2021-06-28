import * as React from "react";

interface ICopyRightProps {}

const CopyRight: React.FunctionComponent<ICopyRightProps> = (props) => {
  return (
    <div className='copy-right'>
      <div>
        <p>Copyright © 2019 Çiçek Sepeti İnternet Hizmetleri A.Ş</p>
      </div>
    </div>
  );
};

export default CopyRight;
