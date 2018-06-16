import createTestContext from 'react-cosmos-test/enzyme'

import fixture from '../Item.fixture'

const { mount, getWrapper, get } = createTestContext({fixture})

beforeEach(mount)

describe('#Item atom', () => {
  it('renders component', () => {
    expect(getWrapper()).toMatchSnapshot()
  })

  it('has all data passed through props', () => {
    expect(get('props').brandName).toEqual(getWrapper('.card-title').text())
    expect(get('props').description).toEqual(getWrapper('.card-subtitle').text())
    expect(get('props').priceFormatted).toContain(getWrapper('.item__price').text())
    expect('12x 83.33 €').toContain(getWrapper('.item__parcels').text())
  })
})
