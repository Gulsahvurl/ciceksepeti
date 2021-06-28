import * as React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import CardItem from '../../../components/card-item';
import contentData from '../../../data';
import { useStoreState } from '../../../store';
import NotFound from './not-found';

interface IProductsProps {}

const Products: React.FunctionComponent<IProductsProps> = (props) => {
  const { recentSearch, categories } = useStoreState((state) => state.App);

  const filtered = React.useMemo(
    () =>
      contentData?.products?.filter((res) => {
        if (
          recentSearch &&
          !res.content
            .toLocaleLowerCase('tr')
            .includes(recentSearch.toLocaleLowerCase('tr'))
        ) {
          return false;
        }
        if (categories.length > 0 && !categories.includes(res.categoryId)) {
          return false;
        }
        return true;
      }),
    [recentSearch, categories]
  );

  const categoryNames = React.useMemo(() => {
    return contentData?.categories
      ?.filter((res) => categories?.includes(res.id))
      .map((result) => result.label)
      .join(' - ');
  }, [categories]);

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <div className="category-title">
              <div>
                <Image src="/icons/path.png"></Image>
              </div>

              <div className="d-flex">
                <p>
                  {categories?.length === 0 ? 'Tüm Kategoriler' : categoryNames}
                </p>
              </div>
            </div>

            {filtered?.length > 0 ? (
              <div className="product-area">
                {filtered?.map((result) => (
                  <div key={result.id}>
                    <CardItem product={result}></CardItem>
                  </div>
                ))}
              </div>
            ) : (
              <NotFound></NotFound>
            )}
          </Col>
        </Row>
      </Container>
      <div className="line"></div>
    </React.Fragment>
  );
};

export default Products;
