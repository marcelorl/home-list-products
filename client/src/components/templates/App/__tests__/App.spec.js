import createTestContext from 'react-cosmos-test/enzyme'

import fixture from '../App.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

describe('#App template', () => {
  it('renders component', () => {
    expect(getWrapper()).toMatchSnapshot()
  })

  describe('#breadcrumb', () => {
    it('should exist', () => {
      expect(getWrapper('.container ul.breadcrumb')).toHaveLength(1)
    })

    it('should have 3 items', () => {
      expect(getWrapper('.container ul.breadcrumb li')).toHaveLength(3)
    })
  })

})
