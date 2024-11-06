'use client'
import React from 'react';
import './Cards.scss';
// import { HeartOutlined, EyeOutlined,EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card as AntCard } from 'antd';
import { Rate } from 'antd';
import { FloatButton } from 'antd';
// import { Button } from "antd";

const { Meta } = AntCard;

interface CardsProps {
  width?: string;
  height?: string;
  image: string;
  bordered?: boolean;
  hoverable?: boolean;
  actions?: Array<{ icon: React.ReactNode; label: string; onClick?: () => void }>;
  title: string;
  actualPrice: string;
  discountedPrice: string;
  rateDefaultValue: number;
  floatingButtons?: Array<{id:string, icon: React.ReactNode; onClick?: () => void }>;
  banner?: string;
  hoverButtonLabel?: string;
}
let handleClick = (data:any) => {
  if(data?.id === 'heart'){
    console.log("clicked on heart")
  }else if(data?.id == 'eye'){
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
  floatingButtons = [],
  banner,
  hoverButtonLabel,
}) => {
  return (
    <AntCard
      className='Antcard'
      bordered={bordered}
      hoverable={hoverable}
      cover={<img alt="Card Image" src={image} />}
      actions={actions.map(action => (
        <div key={action.label} onClick={action.onClick}>
          {action.icon} {action.label}
        </div>
      ))}
      style={{ width: 440 }}
    >
      <Meta
        title={title}
        description={
          <span>
            <span className='actual_price'>{actualPrice}</span>
            <span className='discounted_price'>{discountedPrice}</span>
          </span>
        }
      />
      <div style={{ marginTop: 10 }}>
        <Rate disabled={true} style={{ fontSize: '12px' }} allowHalf defaultValue={rateDefaultValue} /> <span>(78)</span>
      </div>
      <div className="floating_buttons">
        {floatingButtons.map((btn:any, index) => (
          <FloatButton className="float-hover"
            key={index}
            type="default"
            icon={btn.icon}
            onClick={() => handleClick(btn)}
            style={{
              fontSize: '11px',
              width: '25px',
              height: '25px',
              marginBottom: index === 0 ? 35 : 0
            }}
          />
        ))}
      </div>
      {banner && <div className="banner">{banner}</div>}
      {/* {hoverButtonLabel && (
        <Button className="hover-button" color="default" variant="solid">
          {hoverButtonLabel}
        </Button>
      )} */}
    </AntCard>
  );
}

export default Cards;
