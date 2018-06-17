import createTestContext from 'react-cosmos-test/enzyme'

import fixture from '../App.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

describe('#Breadcrumb atom', () => {
  it('renders component', () => {
    expect(getWrapper()).toMatchSnapshot()
  })

  it('should have breadcrumbs', () => {
    expect(getWrapper('.container > div div')).toHaveLength(2)
  })
})
