'use client'
import React from 'react';
import './Cards.scss';
// import { HeartOutlined, EyeOutlined,EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card as AntCard } from 'antd';
import { Rate } from 'antd';
import { FloatButton } from 'antd';
import { HeartOutlined,EyeOutlined } from '@ant-design/icons';
// import { Button } from "antd";

const { Meta } = AntCard;

interface CardsProps {
  width?: string;
  height?: string;
  image: string;
  bordered?: boolean;
  hoverable?: boolean;
  actions?: Array<{ icon: React.ReactNode; label: string; onClick?: () => void }>;
  title?: string;
  actualPrice?: string;
  discountedPrice?: string;
  rateDefaultValue?: number;
  discountPercentage?: string;
  hoverButtonLabel?: string;
  type?:string
}
let handleClick = (id:any) => {
  if(id === 'heart'){
    console.log("clicked on heart")
  }else if(id == 'eye'){
    console.log("clicked on eye")
  }
}
const Cards: React.FC<CardsProps> = ({
  width,
  height,
  image,
  bordered = false,
  hoverable = true,
  actions = [],
  title,
  actualPrice,
  discountedPrice,
  rateDefaultValue,
  discountPercentage,
  hoverButtonLabel,
  type
}) => {
  return (
    <div>
      {type !== "viewAll" ? <AntCard
        className='Antcard'
        bordered={bordered}
        hoverable={hoverable}
        cover={<img alt="Card Image" src={image} />}
        actions={actions.map(action => (
          <div key={action.label} onClick={action.onClick}>
            {action.icon} {action.label}
          </div>
        ))}
        style={{ width: 250 }}
      >
        <Meta
          title={title}
          description={
            <span>
              <span className='discounted_price'>{ discountedPrice}</span>
              <span className='actual_price'>{ actualPrice}</span>
            </span>
          }
        />
        <div style={{ marginTop: 10 }}>
          <Rate disabled={true} style={{ fontSize: '12px' }} allowHalf defaultValue={rateDefaultValue} /> <span>(78)</span>
        </div>
        <div className="floating_buttons">
        <FloatButton className="float-hover"
              type="default"
              icon={<HeartOutlined/>}
              onClick={() => handleClick('heart')}
              style={{
                fontSize: '11px',
                width: '25px',
                height: '25px',
                marginBottom:  35 
              }}
            />
            <FloatButton className="float-hover"
              type="default"
              icon={<EyeOutlined/>}
              onClick={() => handleClick('eye')}
              style={{
                fontSize: '11px',
                width: '25px',
                height: '25px',
                marginBottom: 0
              }}
            />
        </div>
        {discountPercentage && <div className="discountPercentage">{discountPercentage}</div>}
        {/* {hoverButtonLabel && (
          <Button className="hover-button" color="default" variant="solid">
            {hoverButtonLabel}
          </Button>
        )} */}
      </AntCard>
      :
      <div className='viewAllCard'>
        <span className='viewAllText'>View All</span>
      </div>
      }
    </div>
  );
}

export default Cards;
