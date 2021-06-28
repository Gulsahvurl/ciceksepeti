import * as React from "react";
import { Card, Image } from "react-bootstrap";
import { IProduct } from "../../models/product";
import { useStoreActions, useStoreState } from "../../store";
import { Icon } from "react-icons-kit";
import { ic_add } from "react-icons-kit/md/ic_add";
import { ic_remove } from "react-icons-kit/md/ic_remove";
import "./style.scss";

interface ICardItemProps {
  product: IProduct;
}

const CardItem: React.FunctionComponent<ICardItemProps> = ({ product, ...props }) => {
  const { setShoppingCart } = useStoreActions((action) => action.App);
  const { shoppingCart } = useStoreState((state) => state.App);

  const itemQuantity = React.useMemo(() => {
    return shoppingCart.find((d) => d.productId === product.id)?.quantity || 0;
  }, [shoppingCart]);

  const addToCart = (plus: number = 1) => {
    const index = shoppingCart.map((a) => a.productId).indexOf(product?.id);
    if (itemQuantity === 1 && plus === -1) {
      shoppingCart.splice(index, 1);
      setShoppingCart([...shoppingCart]);
      return;
    }
    if (index !== -1) {
      const newQuantity = itemQuantity + plus;
      shoppingCart.splice(index, 1);
      setShoppingCart([
        ...shoppingCart,
        {
          price: product?.price,
          productId: product?.id,
          quantity: newQuantity,
        },
      ]);
    } else {
      setShoppingCart([...shoppingCart, { price: product?.price, productId: product?.id, quantity: 1 }]);
    }
  };

  const nameConverter = React.useCallback((productName: string) => {
    return productName.length > 45 ? `${productName.slice(0, 45)}...` : productName;
  }, []);

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Img src={product?.image}></Card.Img>
          <div className='card-content2'>
            <div>
              <Card.Title>{nameConverter(product.content)}</Card.Title>
              <Card.Text className='delivery'>{product?.delivery}</Card.Text>
              <Card.Text className='price'>{product?.price} TL </Card.Text>
            </div>
            <div>
              {itemQuantity > 0 ? (
                <div className='change-quantity'>
                  <button onClick={() => addToCart(-1)}>
                    <Icon size={24} icon={ic_remove}></Icon>
                  </button>
                  <span>{itemQuantity}</span>
                  <button onClick={() => addToCart()}>
                    <Icon size={24} icon={ic_add}></Icon>
                  </button>
                </div>
              ) : (
                <button className='add-cart-button' onClick={() => addToCart()}>
                  Sepete Ekle
                </button>
              )}
            </div>
          </div>
        </Card.Body>
      </Card>

      <div className='product-card'>
        <div className='product-mobile-image'>
          <Image src={product?.image} style={{ maxWidth: "100%", objectFit: "cover" }}></Image>
        </div>
        <div className='product-content'>
          <div>
            <h5 className='product-name'>{product?.content}</h5>
            <h6 className='delivery'>{product?.delivery}</h6>
            <span className='price'>{product?.price} TL</span>
          </div>
          <div>
            {itemQuantity ? (
              <div className='change-quantity'>
                <button onClick={() => addToCart(-1)}>
                  <Icon size={24} icon={ic_remove}></Icon>
                </button>
                <span>{itemQuantity}</span>
                <button onClick={() => addToCart()}>
                  <Icon size={24} icon={ic_add}></Icon>
                </button>
              </div>
            ) : (
              <button className='add-cart-button' onClick={() => addToCart()}>
                Sepete Ekle
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(CardItem);
