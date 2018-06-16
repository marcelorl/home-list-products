import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap'

const Col = styled.div`
  font-size: 0.8rem;
  padding-bottom: 5px;
  text-align: center;
  width: 90%;
  
  @media (min-width: 540px) {
    width: 50%;
    
    &:nth-child(2n+2) {
      padding-left: 5px;
    }
  }
  
  @media (min-width: 720px) {
    width: 33%;
    
    &:nth-child(2n+2) {
      padding-left: 0px;
    }
    
    &:nth-child(3n+2), &:nth-child(3n+3) {
      padding-left: 5px;
    }
  }
  
  @media (min-width: 960px) {
    width: 25%;
    
    &:nth-child(2n+2) {
      padding-left: 0px;
    }
    
    &:nth-child(3n+2), &:nth-child(3n+3) {
      padding-left: 0px;
    }
    
    &:nth-child(4n+2), &:nth-child(4n+3), &:nth-child(4n+4) {
      padding-left: 5px;
    }
  }
`

const CustomCardImg = styled(CardImg)`
  background-color: #fff;
  height: 17rem;
`

const CustomCardTitle = styled(CardTitle)`
  font-size: 0.8rem;
  text-transform: uppercase;
`

const CustomCardSubtitle = styled(CardSubtitle)`
  font-size: 0.8rem;
  font-weight: normal;
  height: 2rem;
`

const Item = props => {
  const calcParcels = () => {
    const parcel = Number(props.price / 12).toFixed(2)

    return `12x ${parcel} €`
  }

  return (
    <Col>
      <Card>
        <CustomCardImg top width='100%' src={props.image} alt={props.slug} />
        <CardBody>
          <CustomCardTitle>{props.brandName}</CustomCardTitle>
          <CustomCardSubtitle>{props.description}</CustomCardSubtitle>
          <div>
            <div className='item__price'>{props.priceFormatted}</div>
            <div className='item__parcels'>{calcParcels()}</div>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

Item.propTypes = {
  brandName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  priceFormatted: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
}

export default Item
