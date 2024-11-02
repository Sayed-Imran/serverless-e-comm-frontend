import React from "react";
import Cards from "../Cards/Cards";
import { HeartOutlined, EyeOutlined, SettingOutlined, EllipsisOutlined } from '@ant-design/icons';


function CardHolder() {
    return (
        <div>
            <Cards
                width="300px"
                image="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                bordered={false}
                hoverable={true}
                // actions={[
                //   { icon: <SettingOutlined />, label: 'Settings', onClick: () => console.log('Settings clicked') },
                //   { icon: <HeartOutlined />, label: 'Favorites', onClick: () => console.log('Favorites clicked') },
                //   { icon: <EllipsisOutlined />, label: 'More', onClick: () => console.log('More clicked') },
                // ]}
                title="Arctic Fox"
                actualPrice="$321"
                discountedPrice="$350"
                rateDefaultValue={4}
                floatingButtons={[
                    { icon: <HeartOutlined />, onClick: () => console.log('Heart clicked') },
                    { icon: <EyeOutlined />, onClick: () => console.log('Eye clicked') },
                ]}
                banner="-45%"
                hoverButtonLabel="Add To Cart"
            />
        </div>
    );
}

export default CardHolder;
