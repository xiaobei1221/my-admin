import React, { Component } from 'react';

// // 引入 ECharts 主模块
// import echarts from 'echarts/lib/echarts';
// // 引入柱状图
// import  'echarts/lib/chart/bar';

var echarts = require('echarts');

class Echart extends Component {

    constructor(props){
        super(props);
        this.state={

        }
    }

    componentDidMount(){
        var myChart = echarts.init(document.getElementById('main_charts'));
        // 绘制图表
        
        var option = {
            lineStyle:{
                color:'red'
            },
            xAxis: {
                type: 'category',
                show:false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value',
                show:false
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                smooth: true,
                showAllSymbol: true,
                // itemStyle:{
                //     color:'white'
                // },
                // symbolSize:0,
                // symbol:'none',
                label : {show: true}
            }]
        };
        myChart.setOption(option);
        
     
    }
    render() {
        return (
            <div id="main_charts" style={{ width: 1000, height: 600 }}>>
                <div>
                    这里是echart是
                </div>
            </div>
        );
    }
}

export default Echart;