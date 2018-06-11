import {
  requestProductsFail,
  requestProducts,
  requestProductsSuccess
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
})
