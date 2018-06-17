import createTestContext from 'react-cosmos-test/enzyme'

import fixture from '../SubHeader.fixture'

const { mount, getWrapper } = createTestContext({ fixture })

beforeEach(mount)

describe('#Breadcrumb atom', () => {
  it('renders component', () => {
    expect(getWrapper()).toMatchSnapshot()
  })

  it('should have breadcrumbs', () => {
    expect(getWrapper('.breadcrumb')).toHaveLength(2)
  })

  it('should have a title', () => {
    expect(getWrapper('h1').text()).toEqual('NOVIDADES DA MODA MASCULINA INTERNACIONAL')
  })

  it('should have a description', () => {
    expect(getWrapper('.subheader__description').text())
      .toEqual('O melhor da moda masculina atual e as peças mais recentes das marcas internacionais chegaram à ' +
        'seleção online da Farfetch. Descubra novidades da moda masculina e tendências que grandes designers para ' +
        'renovar o guarda-roupas, de Salvatore Ferragamo à Burberry.')
  })
})
