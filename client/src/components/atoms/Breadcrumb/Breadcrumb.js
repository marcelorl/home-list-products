import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BreadcrumbContainer = styled.ul`
  list-style: none;
  margin: 0 0 0.5rem 0;
  padding: 0;
`

const Item = styled.li`
  color: #a1a1a1;
  display: inline-block;
  
  &:after {
    content: '►';
    padding: 0 0.25em 0 0.5em;
  }
  
  &:last-child {
    &:after {
      content: ' ';
    }
  }
`

const Breadcrumb = ({ items }) =>
  <BreadcrumbContainer>
    {items.map((item, index) =>
      <Item key={item.label}>
        <a href={item.link}>{item.label}</a>
      </Item>
    )}
  </BreadcrumbContainer>

Breadcrumb.propTypes = {
  items: PropTypes.array.isRequired
}

export default Breadcrumb
