import createTestContext from 'react-cosmos-test/enzyme'

import fixture from '../Item.fixture'

const { mount, getWrapper, get } = createTestContext({fixture})

beforeEach(mount)

describe('#Item atom', () => {
  it('renders component', () => {
    expect(getWrapper()).toMatchSnapshot()
  })

  it('should have all data passed through props', () => {
    expect(getWrapper('.card-title').text()).toEqual(get('props').brandName)
    expect(getWrapper('.card-subtitle').text()).toEqual(get('props').description)
    expect(getWrapper('.item__price').text()).toContain(get('props').priceFormatted)
    expect(getWrapper('.item__parcels').text()).toContain('12x 83.33 €')
  })
})
