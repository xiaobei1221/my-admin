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
  backgroundColor:"#323332"
}

class App extends Component {

  handleClick = (e) => {
    console.log('click ', e);
  }

  render() {
    return (
      <div className="App" style={{width:'100%',height:'100%'}}>
        <div className="left_Menu" style={{height:"100%",width:"16%",float:"left",backgroundColor:"#323332",position:"fixed",left:0,top:0,overflowX:"hidden"}}>
        <img src={logo} width="80" style={{marginTop:"30px"}} alt="头像"/>

        <Menu
        onClick={this.handleClick}
        style={{ width:"100%",height:"100%",backgroundColor:"#323332",color:"#e5e5e5",paddingTop:"20px"}}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span> 导航一</span></span>} style={sub_style}>
          {/* <MenuItemGroup key="g1" title="Item 1"> */}
            <Menu.Item key="1" style={sub_style}><Link to="/table" style={{color:"#e5e5e5"}}>表格</Link></Menu.Item>
            <Menu.Item key="2" style={sub_style}><Link to="/form" style={{color:"#e5e5e5"}}>表单</Link></Menu.Item>
          {/* </MenuItemGroup> */}
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>导航二</span></span>} style={{backgroundColor:"#323332"}}>
          <Menu.Item key="5" style={{backgroundColor:"#323332"}}>Option 5</Menu.Item>
          <Menu.Item key="6" style={{backgroundColor:"#323332"}}>Option 6</Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>导航三</span></span>}>
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
        </SubMenu>
      </Menu>
        </div>
        <div className="right_content" style={{width:"84%",padding:"23px",marginLeft:"16%"}}> 
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
