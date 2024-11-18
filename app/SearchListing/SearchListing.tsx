'use client'
import React from 'react';
import './SearchListing.scss'
import { Row, Col, Image, Divider } from 'antd';
import SearchListingData from '../Utils/Assets/Jsons/SearchListingData.json' 

function SearchListing() {
    const { searchQuery, products } = SearchListingData;  

    return (
        <Row>
            <Col span={18} push={6}>
                <h2>Showing Results for <span>"{searchQuery}"</span></h2>  
                {products.map((product) => (
                    <Row key={product.id} className='searchCard Antcard'>
                    <Col xs={24} sm={8} md={6} lg={4}>
                        <Image
                            width={150}
                            className="searchImage"
                            src={product.image}
                        />
                    </Col>
                    <Col xs={24} sm={16} md={12} lg={14} xl={16} push={2}>
                        <h3>{product.name}</h3>
                        <div 
                            className="rating" 
                            style={{ width: "45px",backgroundColor: product.rating >= 3.5 ? 'green' : product.rating >= 2.5 ? 'orange' : 'red' }}>
                        
                            {product.rating}★
                        </div>
                        <div>
                            <ul>
                                {product.attributes.map((attribute, index) => (
                                    <li key={index}><span>{attribute.label}: {attribute.value}</span></li>
                                ))}
                            </ul>
                        </div>
                    </Col>
                    <Col xs={24} sm={8} md={6} lg={4}>
                        <h2>${product.price}</h2>
                        <div>
                            <h4 style={{ textDecoration: "line-through", display: "inline" }}>
                                ${product.originalPrice}
                            </h4>
                            <span style={{ color: "green", marginLeft: "10px" }}>
                                {product.discount}% Off
                            </span>
                        </div>
                        {product.freeDelivery && <h4>Free Delivery</h4>}
                        {product.onlyFewLeft && <h4 style={{ color: "red" }}>Only few left</h4>}
                    </Col>
                    <Divider style={{ borderColor: 'white' }} />
                </Row>                
                ))}
            </Col>
            <Col span={6} pull={18} sm={6} md={6} lg={6} xl={6} xs={0}>
                <h1>Filter</h1>
            </Col>
        </Row>
    );
}

export default SearchListing;
