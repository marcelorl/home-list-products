import createTestContext from 'react-cosmos-test/enzyme'

import fixture from '../Breadcrumb.fixture'

const { mount, getWrapper, get } = createTestContext({fixture})

beforeEach(mount)

describe('#Breadcrumb atom', () => {
  it('renders component', () => {
    expect(getWrapper()).toMatchSnapshot()
  })

  it('should have 3 items', () => {
    expect(getWrapper('ul li')).toHaveLength(3)
  })

  it('should have labels and links passed through props', () => {
    const items = get('props').items
    const li = getWrapper('ul li')

    expect(li.at(0).text()).toEqual(items[0].label)
    expect(li.at(0).find('a').prop('href')).toEqual(items[0].link)

    expect(li.at(1).text()).toEqual(items[1].label)
    expect(li.at(1).find('a').prop('href')).toEqual(items[1].link)

    expect(li.at(2).text()).toEqual(items[2].label)
    expect(li.at(2).find('a').prop('href')).toEqual(items[2].link)
  })
})
