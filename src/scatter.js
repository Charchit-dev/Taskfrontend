import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Chart, ChartTitle, ChartXAxis, ChartXAxisItem, ChartYAxis, ChartYAxisItem, ChartSeries, ChartSeriesItem } from '@progress/kendo-react-charts';
import 'hammerjs';
import data from './points.json';
const ChartContainer = () => <Chart>
    <ChartTitle text="Scatter Plot of Points" />
    <ChartSeries>
      <ChartSeriesItem type="scatter" data={data} xField="row" yField="col" />
    </ChartSeries>
    <ChartXAxis>
      <ChartXAxisItem title={{
      text: 'Row'
    }} />
    </ChartXAxis>
    <ChartYAxis>
      <ChartYAxisItem title={{
      text: 'Column'
    }} />
    </ChartYAxis>
  </Chart>;

export default ChartContainer;