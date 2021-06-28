import * as React from "react";
import { Container, Image } from "react-bootstrap";
import CategoryButton from "../../../components/category-button";
import contentData from "../../../data";

interface ICategoriesProps {}

const Categories: React.FunctionComponent<ICategoriesProps> = (props) => {
  return (
    <Container>
      <div className='category'>
        <div>
          <Image src='/icons/category-icon.png'></Image>
        </div>
        <div>
          <h1>Kategoriler</h1>
        </div>
      </div>
      <div className='type-button'>
        <CategoryButton id={0} text={"Tüm Kategoriler"}></CategoryButton>
        {contentData?.categories.map((result) => (
          <CategoryButton key={result.id} id={result?.id} text={result?.label}></CategoryButton>
        ))}
      </div>
    </Container>
  );
};

export default React.memo(Categories);
