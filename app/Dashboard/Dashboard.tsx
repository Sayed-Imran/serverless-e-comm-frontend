'use client'
import React from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import AntCarousel from '../Components/AntCarousel/AntCarousel';
import './Dashboard.scss'
import Image from 'next/image';
import bannerImage1 from '../Utils/Assets/Images/Banners/banner_1.png';
import bannerImage2 from '../Utils/Assets/Images/Banners/banner_2.png';
import bannerImage3 from '../Utils/Assets/Images/Banners/banner_3.png';
import CardHolder from '../Components/CardHolder/CardHolder';
import cardsList from '../Utils/Assets/Jsons/CardData.json'
import categoriesList from '../Utils/Assets/Jsons/categoriesNav.json'

const allCardsData:any = cardsList.cardsList
allCardsData.push({type:"viewAll"})
const onClick: MenuProps['onClick'] = (e) => {
    console.log('click', e);
};
const contentStyle: React.CSSProperties = {
    height: '300px',
    color: '#fff',
    width: "100%",
    textAlign: 'center',
    background: '#364d79',
};
function Dashboard() {
    return (
        <div >
            <div className='dasboard_navAndBanner_container'>
                <div className='dashboard_sideMenu_container'>
                    <Menu onClick={onClick} style={{ width: '100%' }} mode="vertical" items={categoriesList.items}  className='dashboard_menu'/>
                </div>
                <div className='dashboard_carousel'>
                    <AntCarousel>
                        <div style={contentStyle}>
                            <Image
                                src={bannerImage1} 
                                alt="Description of image"
                                style={contentStyle}
                            />
                        </div>
                        <div style={contentStyle}>
                            <Image
                                src={bannerImage2} 
                                alt="Description of image"
                                style={contentStyle}
                            />
                        </div>
                        <div style={contentStyle}>

                            <Image
                                src={bannerImage3} 
                                alt="Description of image"
                                style={contentStyle}
                            />
                        </div>
                        <div style={contentStyle}>
                            <Image
                                src={bannerImage2}
                                alt="Description of image"
                                style={contentStyle}

                            />
                        </div>
                    </AntCarousel>
                </div>
            </div>
            <CardHolder cardsList={allCardsData} holderName={cardsList.holderName}/>
            <CardHolder cardsList={allCardsData} holderName='Trending'/>
            <CardHolder cardsList={allCardsData} holderName='Our Products'/>
        </div>
    )
}

export default Dashboard