import React, { Component } from 'react';
import { Carousel } from 'antd';

import './carousel.css';
//轮播图组件页面

function onChange(a, b, c) {
  console.log(a, b, c);
}

class Carousels extends Component {

    
    render() {
        return (
            <div class="carousel_wrap">
                <div class="carousel_tips">
                    <h3>何时使用</h3>
                    <hr/>
                    <p>当有一组平级的内容。</p>
                    <p>当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。</p>
                    <p>常用于一组图片或卡片轮播。</p>      
                </div>
                <div class="carousel_cont">
                     <Carousel afterChange={onChange}>
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                        <div><h3>4</h3></div>
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default Carousels;