import { createTypedHooks } from "easy-peasy";

import App from "./app";
import IStoreModel from "./model";

const Store = {
  App: App,
};

export const ConfigureStore = {
  name: "QWE",
};

export default Store;

const { useStoreActions, useStoreState, useStoreDispatch, useStore } = createTypedHooks<IStoreModel>();
export { useStoreActions, useStoreState, useStoreDispatch, useStore };
