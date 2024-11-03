import React, { useRef } from "react";
import Cards from "../Cards/Cards";
import { HeartOutlined, EyeOutlined, SettingOutlined, EllipsisOutlined } from '@ant-design/icons';
import CardData from '../../Utils/Assets/Jsons/CardData.json';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './CardHolder.scss';

const CardHolder: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        // <div>
        //     <Cards
        //         width="300px"
        //         image="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        //         bordered={false}
        //         hoverable={true}
        //         // actions={[
        //         //   { icon: <SettingOutlined />, label: 'Settings', onClick: () => console.log('Settings clicked') },
        //         //   { icon: <HeartOutlined />, label: 'Favorites', onClick: () => console.log('Favorites clicked') },
        //         //   { icon: <EllipsisOutlined />, label: 'More', onClick: () => console.log('More clicked') },
        //         // ]}
        //         title="Arctic Fox"
        //         actualPrice="$321"
        //         discountedPrice="$350"
        //         rateDefaultValue={4}
        //         floatingButtons={[
        //             { icon: <HeartOutlined />, onClick: () => console.log('Heart clicked') },
        //             { icon: <EyeOutlined />, onClick: () => console.log('Eye clicked') },
        //         ]}
        //         banner="-45%"
        //         hoverButtonLabel="Add To Cart"
        //     />
        // </div>
        //     <div className="card-holder">
        //   {CardData.map((cardData, index) => (
        //     <Cards
        //       key={index}
        //       width={cardData.width}
        //       height={cardData.height}
        //       image={cardData.image}
        //       bordered={cardData.bordered}
        //       hoverable={cardData.hoverable}
        //     //   actions={cardData.actions.map(action => ({
        //     //     icon: React.createElement(require('@ant-design/icons')[action.icon]),
        //     //     label: action.label,
        //     //     onClick: () => console.log(action.label)
        //     //   }))}
        //       title={cardData.title}
        //       actualPrice={cardData.actualPrice}
        //       discountedPrice={cardData.discountedPrice}
        //       rateDefaultValue={cardData.rateDefaultValue}
        //       floatingButtons={cardData.floatingButtons.map(btn => ({
        //         icon: React.createElement(require('@ant-design/icons')[btn.icon]),
        //         onClick: () => console.log(btn.icon)
        //       }))}
        //       banner={cardData.banner}
        //     //   hoverButtonLabel={cardData.hoverButtonLabel}
        //     />
        //   ))}
        // </div>

        <div className="card-holder-container">
            <button className="scroll-btn left" onClick={scrollLeft}>
                <LeftOutlined />
            </button>

            <div className="card-holder" ref={scrollRef}>
                {CardData.map((cardData, index) => (
                    <Cards
                        key={index}
                        width="200px"
                        image={cardData.image}
                        bordered={cardData.bordered}
                        hoverable={cardData.hoverable}
                        // actions={cardData.actions.map(action => ({
                        //   icon: React.createElement(require('@ant-design/icons')[action.icon]),
                        //   label: action.label,
                        //   onClick: () => console.log(action.label)
                        // }))}
                        title={cardData.title}
                        actualPrice={cardData.actualPrice}
                        discountedPrice={cardData.discountedPrice}
                        rateDefaultValue={cardData.rateDefaultValue}
                        floatingButtons={cardData.floatingButtons.map(btn => ({
                            icon: React.createElement(require('@ant-design/icons')[btn.icon]),
                            onClick: () => console.log(btn.icon)
                        }))}
                        banner={cardData.banner}
                    // hoverButtonLabel={cardData.hoverButtonLabel}
                    />
                ))}
            </div>

            <button className="scroll-btn right" onClick={scrollRight}>
                <RightOutlined />
            </button>
        </div>
    );
}

export default CardHolder;
