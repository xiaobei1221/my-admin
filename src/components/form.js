import React, { Component } from 'react';
import {
  Form, Input,Cascader,Tooltip,Icon,Button
} from 'antd';



const residences = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];


class Myform extends Component {
    constructor(props){
        super(props);
        this.state={
            confirmDirty: false,
            autoCompleteResult: [],
        }
    }
    render() {

        const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

     const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
        return (
            <div style={{width:"500px",margin:"30px auto"}}>
                <Form>
                    <Form.Item {...formItemLayout} label="Name">
                    <Input placeholder="账号" />
                    </Form.Item>

                    <Form.Item {...formItemLayout} label="Password">
                    <Input placeholder="密码" type="password"/>
                    </Form.Item>

                    <Form.Item
                    {...formItemLayout}
                    label="Habitual Residence"
                    >
                    
                        <Cascader options={residences} />
                    
                    </Form.Item>

                    <Form.Item
                    {...formItemLayout}
                    label={(
                        <span>
                        Nickname&nbsp;
                        <Tooltip title="What do you want others to call you?">
                            <Icon type="question-circle-o" />
                        </Tooltip>
                        </span>
                    )}
                    >
                    {/* {getFieldDecorator('nickname', {
                        rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                    })( */}
                        <Input />
                    {/* )} */}
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">Register</Button>
                    </Form.Item>

                </Form>
                <div>dev分支修改</div>
            </div>
        );
    }
}


export default Myform;