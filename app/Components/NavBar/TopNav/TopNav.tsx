import React from 'react';
import './TopNav.scss';
import { SearchOutlined,HeartOutlined,ShoppingCartOutlined,UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
function TopNav() {

    return (
        <div className='navbar_container'>
                <div className="top_row">
                    <h3 className="logo">E-COMM</h3>
                    <div className="search_bar_desktop">
                        <Input style={{ width: '100%' }} size="small" placeholder="What are you Looking for" addonAfter={<SearchOutlined />} />
                    </div>
                    <div className="icon_container">
                        <HeartOutlined className='nav_icon'/>
                        <ShoppingCartOutlined className='nav_icon'/>
                        <UserOutlined className='nav_icon'/>    
                    </div>
                </div>
                <div className="search_bar_mobile">
                    <Input style={{ width: '100%' }} size="small" placeholder="What are you Looking for" addonAfter={<SearchOutlined />} />
                </div>
        </div>
    )
}

export default TopNav