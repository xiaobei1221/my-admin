import React, { Component } from 'react';
import {Link} from 'react-router';
import logo from './logo.svg';
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import './App.css';


const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

const sub_style={
  color:'#e5e5e5',
  backgroundColor:"#323332",
  // textAlign:"center"
}

class App extends Component {

  handleClick = (e) => {
    console.log('click ', e);
  }

  render() {
    return (
      <div className="App" style={{width:'100%',height:'100%'}}>
        <div className="left_Menu" style={{height:"100%",width:"15%",float:"left",backgroundColor:"#323332",position:"fixed",left:0,top:0,overflowX:"hidden",textAlign:"left",padding:"0 8px"}}>
        <img src={logo} width="80" style={{display:"block",margin:"30px auto",}} alt="头像"/>

        <Menu
        onClick={this.handleClick}
        style={{ width:"100%",height:"100%",backgroundColor:"#323332",color:"#ffffff",paddingTop:"20px"}}
        defaultSelectedKeys={['1']}
        mode="inline"
      >
        <Menu.Item key="1" style={{color:"#ffffff"}}><Icon type="home"></Icon>首页</Menu.Item>
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span> 导航一</span></span>} style={sub_style}>
            <Menu.Item key="2" style={{paddingLeft:"0"}}><Link to="/table" style={{color:"#e5e5e5"}}> 表格</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/form" style={{color:"#e5e5e5"}}>表单</Link></Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>显示组件</span></span>} style={{backgroundColor:"#323332"}}>
          <Menu.Item key="4" style={{backgroundColor:"#323332"}}>
          <Link to="/carousel" style={{color:"#e5e5e5"}}>轮播图</Link>
          </Menu.Item>
          <Menu.Item key="5" style={{backgroundColor:"#323332"}}>Option 6</Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>导航三</span></span>}>
          <Menu.Item key="6">Option 9</Menu.Item>
          <Menu.Item key="7">Option 10</Menu.Item>
        </SubMenu>
      </Menu>
        </div>
        <div className="right_content" style={{width:"85%",padding:"23px",marginLeft:"15%",backgroundColor:"#F0F2F5"}}> 
            <p style={{}}><i>刘贝</i></p>
            <hr/>
            <div>
              {this.props.children}
            </div>
        </div>
          
      </div>
    );
  }
}

export default App;
