import Breadcrumb from './Breadcrumb'

export default {
  component: Breadcrumb,
  props: {
    items: [
      { link: '/inicio', label: 'Início' },
      { link: '/homem', label: 'Homem' },
      { link: '/', label: 'Novidades Internacionais' }
    ]
  }
}
