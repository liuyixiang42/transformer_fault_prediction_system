import React from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@antv/g2plot';
import * as _ from '@antv/util';
import insertCss from 'insert-css';



export class TrendChart extends React.Component {
    chartNodeRef = React.createRef();
    chartRef = React.createRef();

    state = {
        tooltipItems: [],
        activeTooltipTitle: null,
        activeSeriesList: [],
    };

    componentDidMount() {
        // Step 2: 创建图表
        const chartDom = this.chartNodeRef.current;

        const data = [
            { "Date": '2022-01-01', "value": 7.5, "series": '氢气' },
            { "Date": '2022-01-02', "value": 7.5, "series": '氢气' },
            { "Date": '2022-01-03', "value": 7.6, "series": '氢气' },
            { "Date": '2022-01-04', "value": 7.7, "series": '氢气' },
            { "Date": '2022-01-05', "value": 7.5, "series": '氢气' },
            { "Date": '2022-01-06', "value": 7.3, "series": '氢气' },
            { "Date": '2022-01-07', "value": 7.8, "series": '氢气' },
            { "Date": '2022-01-08', "value": 7.1, "series": '氢气' },
            { "Date": '2022-01-09', "value": 7.4, "series": '氢气' },

            { "Date": '2022-01-01', "value": 7, "series": '一氧化碳' },
            { "Date": '2022-01-02', "value": 7.2, "series": '一氧化碳' },
            { "Date": '2022-01-03', "value": 7.1, "series": '一氧化碳' },
            { "Date": '2022-01-04', "value": 7.3, "series": '一氧化碳' },
            { "Date": '2022-01-05', "value": 6.9, "series": '一氧化碳' },
            { "Date": '2022-01-06', "value": 6.8, "series": '一氧化碳' },
            { "Date": '2022-01-07', "value": 7, "series": '一氧化碳' },
            { "Date": '2022-01-08', "value": 7.1, "series": '一氧化碳' },
            { "Date": '2022-01-09', "value": 6.9, "series": '一氧化碳' },

            { "Date": '2022-01-01', "value": 5.2, "series": '甲烷' },
            { "Date": '2022-01-02', "value": 5.3, "series": '甲烷' },
            { "Date": '2022-01-03', "value": 5.5, "series": '甲烷' },
            { "Date": '2022-01-04', "value": 10.3, "series": '甲烷' },
            { "Date": '2022-01-05', "value": 30.5, "series": '甲烷' },
            { "Date": '2022-01-06', "value": 75.3, "series": '甲烷' },
            { "Date": '2022-01-07', "value": 80.2, "series": '甲烷' },
            { "Date": '2022-01-08', "value": 102.2, "series": '甲烷' },
            { "Date": '2022-01-09', "value": 101.3, "series": '甲烷' },

            { "Date": '2022-01-01', "value": 1, "series": '乙烯' },
            { "Date": '2022-01-02', "value": 0.8, "series": '乙烯' },
            { "Date": '2022-01-03', "value": 1.1, "series": '乙烯' },
            { "Date": '2022-01-04', "value": 1.2, "series": '乙烯' },
            { "Date": '2022-01-05', "value": 0.9, "series": '乙烯' },
            { "Date": '2022-01-06', "value": 1.4, "series": '乙烯' },
            { "Date": '2022-01-07', "value": 1.2, "series": '乙烯' },
            { "Date": '2022-01-08', "value": 1.1, "series": '乙烯' },
            { "Date": '2022-01-09', "value": 1.3, "series": '乙烯' },

            { "Date": '2022-01-01', "value": 0, "series": '乙炔' },
            { "Date": '2022-01-02', "value": 0, "series": '乙炔' },
            { "Date": '2022-01-03', "value": 0, "series": '乙炔' },
            { "Date": '2022-01-04', "value": 0, "series": '乙炔' },
            { "Date": '2022-01-05', "value": 0, "series": '乙炔' },
            { "Date": '2022-01-06', "value": 0, "series": '乙炔' },
            { "Date": '2022-01-07', "value": 0, "series": '乙炔' },
            { "Date": '2022-01-08', "value": 0, "series": '乙炔' },
            { "Date": '2022-01-09', "value": 0, "series": '乙炔' },

            { "Date": '2022-01-01', "value": 3.4, "series": '乙烷' },
            { "Date": '2022-01-02', "value": 3.2, "series": '乙烷' },
            { "Date": '2022-01-03', "value": 3.6, "series": '乙烷' },
            { "Date": '2022-01-04', "value": 4.6, "series": '乙烷' },
            { "Date": '2022-01-05', "value": 12.6, "series": '乙烷' },
            { "Date": '2022-01-06', "value": 17.8, "series": '乙烷' },
            { "Date": '2022-01-07', "value": 30.1, "series": '乙烷' },
            { "Date": '2022-01-08', "value": 51.2, "series": '乙烷' },
            { "Date": '2022-01-09', "value": 62.3, "series": '乙烷' },

            { "Date": '2022-01-01', "value": 9.4, "series": '总烃' },
            { "Date": '2022-01-02', "value": 9.6, "series": '总烃' },
            { "Date": '2022-01-03', "value": 9.9, "series": '总烃' },
            { "Date": '2022-01-04', "value": 50.3, "series": '总烃' },
            { "Date": '2022-01-05', "value": 80.6, "series": '总烃' },
            { "Date": '2022-01-06', "value": 153.2, "series": '总烃' },
            { "Date": '2022-01-07', "value": 162.9, "series": '总烃' },
            { "Date": '2022-01-08', "value": 201.5, "series": '总烃' },
            { "Date": '2022-01-09', "value": 224.3, "series": '总烃' },

            { "Date": '2022-01-01', "value": 23.4, "series": '总可燃气体' },
            { "Date": '2022-01-02', "value": 24.3, "series": '总可燃气体' },
            { "Date": '2022-01-03', "value": 23.1, "series": '总可燃气体' },
            { "Date": '2022-01-04', "value": 60.4, "series": '总可燃气体' },
            { "Date": '2022-01-05', "value": 85.7, "series": '总可燃气体' },
            { "Date": '2022-01-06', "value": 169.3, "series": '总可燃气体' },
            { "Date": '2022-01-07', "value": 182.6, "series": '总可燃气体' },
            { "Date": '2022-01-08', "value": 236.2, "series": '总可燃气体' },
            { "Date": '2022-01-09', "value": 272.1, "series": '总可燃气体' },

        ]
        const formattedData = data.map(d => ({
            Date: new Date(d.Date),
            value: d.value,
            series: d.series,
          }));

        const line = new Line(chartDom, {
            data: formattedData,
            autoFit: true,
            xField: 'Date',
            yField: 'value',
            seriesField: 'series',
            xAxis: {
                title: {
                    text: 'date/d',
                },
                type: 'time',
            },
            yAxis: {
                grid: {
                    line: {
                        style: {
                            lineWidth: 0.5,
                        },
                    },
                },
                title: {
                    text: 'concentration/ppm',
                },
            },
            point: {
                shape: 'circle',
                size: 2,
                style: () => {
                    return {
                        fillOpacity: 0,
                        stroke: 'transparent',
                    };
                },
            },
            appendPadding: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            legend: false,
            smooth: true,
            lineStyle: {
                lineWidth: 1.5,
            },
            tooltip: {
                showMarkers: false,
                follow: false,
                position: 'top',
                customContent: () => null,
            },
            theme: {
                geometries: {
                    point: {
                        circle: {
                            active: {
                                style: {
                                    r: 4,
                                    fillOpacity: 1,
                                    stroke: '#000',
                                    lineWidth: 1,
                                },
                            },
                        },
                    },
                },
            },
            interactions: [{ type: 'marker-active' }, { type: 'brush' }],


            annotations: [
                {
                  type: 'region',
                  start: ['2022-01-04','value', 0],  // 起点坐标，这里将纵坐标设为0
                  end: ['2022-01-09','value', 15],    // 终点坐标，这里将纵坐标设为0
                  text: {
                    content: '标注文本',
                    position: 'start',
                  },
                  style: {
                    fill: 'red',
                  },
                },
              ],
        });

        line.render();
        this.chartRef = line;
        // 初始化，默认激活
        const lastData = _.last(data);
        const point = line.chart.getXY(lastData);
        line.chart.showTooltip(point);
        const activeTooltipTitle = lastData.Date;
        this.setState({ tooltipItems: data.filter((d) => d.Date === activeTooltipTitle), activeTooltipTitle });

        line.on('plot:mouseleave', () => {
            line.chart.hideTooltip();
        });
        line.on('tooltip:change', (evt) => {
            const { title } = evt.data;
            const tooltipItems = data.filter((d) => d.Date === title);
            this.setState({ tooltipItems, activeTooltipTitle: title });
        });
    }

    changeActiveSeries = (activeSeries) => {
        const { activeTooltipTitle, activeSeriesList } = this.state;
        let newList = [];
        if (!activeSeriesList.includes(activeSeries)) {
            newList = [...activeSeriesList, activeSeries];
        } else {
            newList = activeSeriesList.filter((s) => s !== activeSeries);
        }
        this.setState({ activeSeriesList: newList }, () => {
            // @ts-ignore
            const chart = this.chartRef?.chart;
            if (chart && activeSeries) {
                chart.filter('series', (series) => {
                    return newList.includes(series) ? false : true;
                });
                chart.render(true);
                chart.geometries
                    .find((geom) => geom.type === 'point')
                    .elements.forEach((ele) => {
                        const { Date, series } = ele.getModel().data;
                        if (Date === activeTooltipTitle && series === activeSeries) {
                            ele.setState('active', true);
                        }
                    });
            }
        });
    };

    generateTooltip = () => {
        // @ts-ignore
        const chart = this.chartRef?.chart;
        if (!chart) {
            return;
        }
        const { tooltipItems, activeSeriesList, activeTooltipTitle } = this.state;
        const { colors10 } = chart.themeObject;
        return (
            <div className="g2-tooltip">
                <div className="g2-tooltip-title">{activeTooltipTitle}</div>
                <div className="g2-tooltip-items">
                    {tooltipItems.map((item, idx) => {
                        const changeActiveSeries = () => this.changeActiveSeries(item.series);
                        return (
                            <div
                                className={`g2-tooltip-item tooltip-${item.series} ${activeSeriesList.includes(item.series) ? 'inactive' : ''
                                    }`}
                                onClick={changeActiveSeries}
                            >
                                <div className="g2-tooltip-item-marker" style={{ background: colors10[idx] }}></div>
                                <div className="g2-tooltip-item-label">{item.series}</div>
                                <div className="g2-tooltip-item-value">{item.value || '-'}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };

    render() {
        return (
            <section className={'wrapper trend-wrapper'}>
                {this.generateTooltip()}
                <div className={'chart-wrapper'} ref={this.chartNodeRef} />
            </section>
        );
    }
}

// 我们用 insert-css 演示引入自定义样式
// 推荐将样式添加到自己的样式文件中
// 若拷贝官方代码，别忘了 npm install insert-css
// 我们用 insert-css 演示引入自定义样式
// 推荐将样式添加到自己的样式文件中
// 若拷贝官方代码，别忘了 npm install insert-css
insertCss(`
    .trend-wrapper .g2-tooltip {
      position: absolute;
      z-index: 8;
      transition: left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s, top 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s;
      background-color: transparent;
      color: rgb(89, 89, 89);
      padding: 0px 12px;
      margin: 0px;
      overflow-x: auto;
      width: 100%;
      left: 0px;
      top: 0px;
      pointer-events: auto;
    }
    .trend-wrapper .g2-tooltip-title {
      margin: 10px 0;
      font-weight: 700;
      height: 12px;
      line-height: 12px;
    }
    .trend-wrapper .g2-tooltip-items {
      display: flex;
      flex-direction: row;
      align-items: center;
      overflow: auto;
      width: 100%;
    }
    .trend-wrapper .g2-tooltip-item {
      opacity: 1;
      cursor: pointer;
      position: relative;
      display: flex;
      flex-direction: column;
      width: 92px;
      min-width: 92px;
      padding-left: 12px;
      justify-content: space-between;
    }
    .trend-wrapper .g2-tooltip-item.inactive {
      opacity: 0.25;
    }
    .trend-wrapper .g2-tooltip-item-marker {
      width: 3px;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      height: 48px;
      left: 0px;
    }
    .trend-wrapper .g2-tooltip-item-label {
      font-size: 14px;
      line-height: 14px;
      margin: 2px 0px 12px;
    }
    .trend-wrapper .g2-tooltip-item-value {
      font-weight: 700;
      font-size: 18px;
      line-height: 18px;
      color: rgba(0, 0, 0, 0.65);
      margin: 0px 0px 4px;
    }
    #container {
      width: 100%;
      height: 100%;
    }
    .wrapper {
      position: relative;
      width: 100%;
      height: 100%;
    }
    .wrapper .chart-wrapper {
      position: absolute !important;
      top: 94px;
      bottom: 0px;
      right: 10px;
      left: 10px;
      height: calc(100% - 88px);
    }
  `);


