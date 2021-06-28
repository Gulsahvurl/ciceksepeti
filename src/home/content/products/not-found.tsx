import * as React from 'react';
import { useStoreState } from '../../../store';

interface INotFoundProps {}

const NotFound: React.FunctionComponent<INotFoundProps> = (props) => {
  const { recentSearch } = useStoreState((state) => state.App);
  return (
    <div className="not-found">
      <h1>:(</h1>
    {!recentSearch || recentSearch?.trim() === '' ? (
        <>
          <p>Üzgünüz, aradığınız kategoriye ait sonuç bulunamadı.</p>
        </>
      ) : (
        <>
          <p>
            Üzgünüz, <strong>"{recentSearch}"</strong> aramanız için sonuç
            bulunamadı.
          </p>
          <p>
            - Lütfen kelimelerin doğru yazıldığından emin olun.
            <br /> - Benzer bir kelime girmeyi deneyin.
          </p>
        </>
      )}
    </div>
  );
};

export default NotFound;
