import configureMockStore from '../../services/ConfigureMockStore/configureMockStore'
import {
  requestProductsFail,
  requestProducts,
  requestProductsSuccess,

  fetchProducts
} from '../products'

const products = [{}, {}, {}]

const err = new TypeError('ERROR')

describe('#products', () => {
  describe('#actions', () => {
    it('should create an action to fetch products', () => {
      const expectedAction = {
        type: 'PRODUCTS_REQUEST_FETCH'
      }

      expect(requestProducts()).toEqual(expectedAction)
    })

    it('should create an action to fetch products success', () => {
      const expectedAction = {
        type: 'PRODUCTS_SUCCESS_FETCH',
        payload: { products }
      }

      expect(requestProductsSuccess({ products })).toEqual(expectedAction)
    })

    it('should create an action to fetch products fail', () => {
      const expectedAction = {
        type: 'PRODUCTS_FAIL_FETCH',
        payload: err,
        error: true
      }

      expect(requestProductsFail(err)).toEqual(expectedAction)
    })
  })

  describe('#requests', () => {
    let store
    const success = {
      data: {
        entries: products
      }
    }

    const axios = {
      get: jest
        .fn()
        .mockImplementationOnce(() => Promise.resolve(success))
        .mockImplementationOnce(() => Promise.reject(err))
    };

    beforeEach(() => {
      store = configureMockStore({})
    })

    describe('#fetchProducts', () => {
      it('should fetchProducts success', async () => {
        const expectedActions = [
          { type: 'PRODUCTS_REQUEST_FETCH' },
          { type: 'PRODUCTS_SUCCESS_FETCH', payload: { products } }
        ]

        await store.dispatch(fetchProducts({ axios }))

        expect(store.getActions()).toEqual(expectedActions)
      })

      it('should fetchProducts fail', async () => {
        const expectedActions = [
          { type: 'PRODUCTS_REQUEST_FETCH' },
          { type: 'PRODUCTS_FAIL_FETCH', payload: new Error(err), error: true }
        ]

        await store.dispatch(fetchProducts({ axios }))

        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })
})
