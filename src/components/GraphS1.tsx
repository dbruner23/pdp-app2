import React from 'react';
// import * as d3 from 'd3';



const GraphS1 = () => {
  return (
    <div>GraphS1</div>
  )
}

export default GraphS1

// interface IProps {
  
// }

// interface IState {
  
// }

// class GraphS1 extends React.Component<IProps, IState> {
//   ref!: SVGSVGElement;  
  
//   private buildGraph(data: Array<number>) {
//     const width = 400,
//     scaleFactor = 10,
//     barHeight = 20;

//     const graph = d3.select(this.ref)
//       .attr("width", width)
//       .attr("height", barHeight * data.length);

//     const bar = graph.selectAll("g")
//       .data(data)
//       .enter()
//       .append("g")
//       .attr("transform", function(d, i) {
//             return "translate(0," + i * barHeight + ")";
//       });

//     bar.append("rect")
//       .attr("width", function(d) {
//                 return d * scaleFactor;
//       })
//       .attr("height", barHeight - 1);
       
//     bar.append("text")
//       .attr("x", function(d) { return (d*scaleFactor); })
//       .attr("y", barHeight / 2)
//       .attr("dy", ".35em")
//       .text(function(d) { return d; });
    
//   }
  
//   // componentDidMount() {
//     // activate   
// //     this.buildGraph([3, 14, 12]);
// //   }

// //   render() {
// //     return (<div className="svg">
// //       <svg className="container" ref={(ref: SVGSVGElement) => this.ref = ref} width='100' height='100'></svg>
// //     </div>);
// //   }
// // }

// export default GraphS1;