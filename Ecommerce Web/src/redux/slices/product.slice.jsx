import { createDraftSafeSelector, createSlice } from '@reduxjs/toolkit';
import { getAllData } from '../action/product.action';

const initialState = {
  list: [],
  product: {},
  cartProduct: {},
  loading: false,
  error: null,
  category: 'all'

};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload
    },
    AddtoCart: (state, { payload }) => {
      if (payload) {
        const { id, qty } = payload
        const getProduct = state.product[id + '_product']
        const cardProduct = state.cartProduct
        const data = {
          ...getProduct,
          qty
        }
        state.cartProduct = {
          ...cardProduct,
          [id + "_card"]: data
        }
      }
    },
    removeProduct: (state, { payload }) => {
      if (payload) {
        const removeCart = { ...state.cartProduct }
        delete removeCart[payload + "_card"]
        state.cartProduct = removeCart
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllData.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.product = payload?.products?.reduce((acc, singleproduct) => ({
          ...acc,
          [singleproduct.id + '_product']: singleproduct
        }), {});
        state.error = null;
      })
      .addCase(getAllData.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { setCategory, AddtoCart, removeProduct } = productSlice.actions
export default productSlice.reducer;


const selectCategory = createDraftSafeSelector([
  state => state.product.category
], category => category)


export const selectProducts = createDraftSafeSelector([
  state => state.product.product
], products => products)

export const getAllProducts = createDraftSafeSelector([state => state.product.product]
  , allProduct => Object.values(allProduct))

export const getAllCAt = createDraftSafeSelector([state => state.product.cartProduct]
  , allCart => Object.values(allCart))

export const selectFilteredProducts = createDraftSafeSelector([
  getAllProducts, selectCategory
], (products, category) => category === 'all' ? products : products.filter(product => product.category === category))


