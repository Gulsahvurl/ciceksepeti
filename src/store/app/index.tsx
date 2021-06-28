import { action, Action, persist } from "easy-peasy";
import { IShoppingCart } from "../../models/shopping-cart";

interface IAppStoreState {
  recentSearch: string;
  categories: number[];
  shoppingCart: IShoppingCart[];
}
export interface IAppStoreModel extends IAppStoreState {
  setRecentSearch: Action<IAppStoreState, string>;
  setCategories: Action<IAppStoreState, number[]>;
  setShoppingCart: Action<IAppStoreState, IShoppingCart[]>;
}

const App: IAppStoreModel = persist(
  {
    recentSearch: '',
    categories: [],
    shoppingCart: [],

    setRecentSearch: action((state, payload) => {
      state.recentSearch = payload;
    }),
    setCategories: action((state, payload) => {
      state.categories = payload;
    }),
    setShoppingCart: action((state, payload) => {
      state.shoppingCart = payload;
    }),
  },
  { storage: "localStorage" }
);

export default App;
