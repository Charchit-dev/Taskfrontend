import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Chart, ChartXAxis, ChartXAxisItem, ChartYAxis, ChartYAxisItem, ChartSeries, ChartSeriesItem, ChartCategoryAxis, ChartCategoryAxisItem, ChartTitle, ChartLegend } from '@progress/kendo-react-charts';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import data from './curves.json';
const lineStyles = ['normal', 'smooth'];
const ChartContainer = () => (

    <div className="row mb-3">
        <div className="col-6">
            <div className="k-card">
                <Chart
                    style={{
                        height: 600,
                    }}
                >

                    <ChartTitle text="Line Chart" />
                    <ChartLegend position="bottom" orientation="horizontal" />
                     <ChartCategoryAxis>
              <ChartCategoryAxisItem categories={id} startAngle={45} />
            </ChartCategoryAxis> 
                    <ChartSeries>
                        {data.map((item, idx) => (
                            <ChartSeriesItem
                                key={idx}
                                type="line"
                                tooltip={{
                                    visible: true,
                                }}
                                data={item.x}
                        
                                name={item.id}
                            />
                        ))}
                    </ChartSeries>
                </Chart>
            </div>
        </div>
    </div>

);




// const [lineStyle, setLineStyle] = React.useState('normal');
// const [id, setId] = useState(1093)

// const [array, setArray] = useState(1093)

// var idColletion = []
// const getId = (data) => {
//     for (var id = 0; i < getId; id++) {
//         idCollection.push(id());
//     } //  loop thorough data grabbing id
//     // push id to idcllection idColletion.push(id)
// }

// const grabData = (id) => {
//     // loop through data
//     for (var id = 0; id < data; id++) {
//         if(id=getId){

//             return (array)
//         }
//         const arr = []
//     for (var i= 0; i<length(x);i++){
//         arr.push[x[i],y[i]];
//     }


//     }

//     // check which object has id equals to arg id

//     // we get x=[1,2,5] and y=[5,8,7] array

//     // intialize empty array arr = []

//     // loop thorugh 0 to len(x) and push arr.push[x[i],y[i]]

//     // setstate: setArray(arr)

// }

// return <div>
//     {/* checkbox to display id collection & select id  using useststate setId */}
//     {/* onClick funciton which would then run grabData function */}
//     <select></select>
//     <DropDownList
//         data={lineStyles}
//         value={lineStyle}
//         onChange={(event) => {
//             setLineStyle(event.value);
//         }}
//     />

//     <Chart>
//         <ChartSeries>
//             <ChartSeriesItem type="scatterLine" data={array}
//                 xfield="{x}"
//                 yfield="{y}"


//                 style={lineStyle}
//                 markers={{
//                     visible: false,
//                 }} />
//         </ChartSeries>
//         <ChartXAxis>
//             <ChartXAxisItem title={{
//                 text: 'X'
//             }} />
//         </ChartXAxis>
//         <ChartYAxis>
//             <ChartYAxisItem title={{
//                 text: ' Y '
//             }} />
//         </ChartYAxis>
//     </Chart>
// </div>;
//};
//ReactDOM.render(<ChartContainer />, document.querySelector('my-app'));

export default ChartContainer;

 // xField=" x.map((dots, index) => {
                    //         let dotsObject = {};
                    //         dotsObject.dots = dots;
                    //         dotsObject.x = {};
                    //         dotsObject.x.y=y[index]"
                    // yField=" y.map((dots, index) => {
                    //          let dotsObject = {};
                    //          dotsObject.dots = dots;
                    //          dotsObject.y = {};
                    //          dotsObject.y.x=x[index]"

 // const xx = x.map((dots, index) => {
    //     let dotsObject = {};
    //     dotsObject.dots = dots;
    //     dotsObject.xx = {};
    //     console.log(dots);
    //     console.log(y[index]);
    // })