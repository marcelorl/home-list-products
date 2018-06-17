import createTestContext from 'react-cosmos-test/enzyme'

import fixture from '../Header.fixture'

const { mount, getWrapper } = createTestContext({fixture})

beforeEach(mount)

describe('#Header atom', () => {
  it('renders component', () => {
    expect(getWrapper()).toMatchSnapshot()
  })

  it('should have a logo image', () => {
    expect(getWrapper('nav img')).toHaveLength(1)
  })
})
