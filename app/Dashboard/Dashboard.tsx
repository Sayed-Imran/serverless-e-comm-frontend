'use client'
import React from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import AntCarousel from '../Components/AntCarousel/AntCarousel';
import './Dashboard.scss'
import Image from 'next/image';
import bannerImage1 from '../Utils/Assets/Images/Banners/banner_1.png'
import bannerImage3 from '../Utils/Assets/Images/Banners/banner_2.png'
const items: any[] = [
    {
        key: 'sub1',
        label: 'Navigation One',
        children: [
            {
                key: '1-1',
                label: 'Item 1',
                type: 'group',
                children: [
                    { key: '1', label: 'Option 1' },
                    { key: '2', label: 'Option 2' },
                ],
            },
            {
                key: '1-2',
                label: 'Item 2',
                type: 'group',
                children: [
                    { key: '3', label: 'Option 3' },
                    { key: '4', label: 'Option 4' },
                ],
            },
        ],
    },
    {
        key: 'sub2',
        label: 'Navigation Two',
    },
    {
        key: 'sub4',
        label: 'Navigation Three',
    },
];

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
                <div>
                    <Menu onClick={onClick} style={{ width: 256 }} mode="vertical" items={items} className='dashboard_menu'/>
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
                                src={bannerImage1} 
                                alt="Description of image"
                                style={contentStyle}
                            />
                        </div>
                        <div style={contentStyle}>

                            <Image
                                src={bannerImage1} 
                                alt="Description of image"
                                style={contentStyle}
                            />
                        </div>
                        <div style={contentStyle}>
                            <Image
                                src={bannerImage1} 
                                alt="Description of image"
                                style={contentStyle}
                            />
                        </div>
                    </AntCarousel>
                </div>
            </div>
        </div>
    )
}

export default Dashboard