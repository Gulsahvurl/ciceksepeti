import * as React from "react";
import { Navbar, Image, Form, Button, Container } from "react-bootstrap";
import { useStoreActions, useStoreState } from "../../../store";
import { debounce } from "lodash";

interface ICustomNavbarProps {}

const CustomNavbar: React.FunctionComponent<ICustomNavbarProps> = (props) => {
  const { setRecentSearch } = useStoreActions((action) => action.App);
  const { recentSearch, shoppingCart } = useStoreState((state) => state.App);
  const [totalQuantity, setTotalQuantity] = React.useState<number | undefined>();
  const [totalPrice, setTotalPrice] = React.useState<number | undefined>();
  const [progress, setProgress] = React.useState<number>(0);
  const handler = React.useCallback(
    debounce((nextValue: string) => onSearch(nextValue), 200),
    []
  );

  const onSearch = (value: string) => {
    setRecentSearch(value.length > 2 ? value : "");
  };

  React.useEffect(() => {
    let newTotalQuantity = 0;
    let newTotalPrice = 0;
    shoppingCart.map((item) => {
      newTotalPrice += item.price * item.quantity;
      newTotalQuantity += item.quantity;
    });
    setTotalQuantity(newTotalQuantity);
    setTotalPrice(newTotalPrice);
    setProgress(newTotalPrice / 5);
  }, [shoppingCart]);

  return (
    <Navbar bg='#fffff'>
      <Container>
        <div className='header-left'>
          <Navbar.Brand href='#home'>
            <Image src='/images/logo.svg'></Image>
            <Button className='mobile-cart'>
              {totalQuantity && totalQuantity > 0 ? <span className='badge'>{totalQuantity}</span> : <></>}
              <Image src='/icons/cart-icon.svg' alt='Sepetim'></Image>
            </Button>
          </Navbar.Brand>
          <Form inline className='search-form'>
            <Image src='/icons/search-icon.svg' alt='Ara'></Image>
            <input type='text' defaultValue={recentSearch ? recentSearch : undefined} onChange={(e) => handler(e.target.value)} placeholder='Ürün Ara' />
            <button>Ara</button>
          </Form>
        </div>

        <div className='cart'>
          <Button>
            {totalQuantity && totalQuantity > 0 ? <span className='badge'>{totalQuantity}</span> : <></>}
            <Image src='/icons/cart-icon.svg' alt='Sepetim'></Image> Sepetim
          </Button>
          {totalPrice && totalPrice >= 500 ? (
            <div className='cart-tooltip'>
              <Image src='/icons/flash-icon.svg'></Image>
              <span></span>
              <span>Kargonuz Bedava</span>
              <div className='progress-bar'>
                <span style={{ width: 100 + "%" }}></span>
              </div>
            </div>
          ) : (
            <></>
          )}
          {totalPrice && totalPrice >= 250 && totalPrice < 500 ? (
            <div className='cart-tooltip'>
              <Image src='/icons/flash-icon.svg'></Image>
              <span></span>
              <span>{(500 - totalPrice).toFixed(2)} TL ürün daha ekleyin kargo bedava</span>
              <div className='progress-bar'>
                <span style={{ width: progress + "%" }}></span>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
