import createTestContext from 'react-cosmos-test/enzyme'

import fixture from '../ListProducts.fixture'

const { mount, getWrapper } = createTestContext({fixture})

beforeEach(mount)

describe('#Item atom', () => {
  it('renders component', () => {
    expect(getWrapper()).toMatchSnapshot({
      list: expect.any([]),
      alt: expect.any(String)
    })
  })
})
