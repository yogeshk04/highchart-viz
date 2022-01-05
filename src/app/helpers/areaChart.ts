import { Options } from "highcharts";

 export const areaChart: Options = {
     chart: {
         styledMode: true,         
     },
     plotOptions: {
         series: {
             marker: {
                 enabled: false,
             }
         }
     },
     legend: {
         enabled: false
     },
     credits: {
         enabled: false
     },
     title: {
         text: 'Area Chart'
     },
     yAxis: {
         visible: false,
     },
     xAxis: {
         visible: false,
         categories: [
             'Jan',
             'Feb',
             'Mar',
             'Apr',
             'May',
             'Jun',
             'Jul',
             'Aug',
             'Sep',
             'Oct',
             'Nov',
             'Dec',
         ],
     },
     defs: {
        gradient0: {
            tagName: 'linearGradient',
            id: 'gradient-0',
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
            children: [
                {
                    tagName!: 'stop',
                    offset: 0,
                },
                {
                    tagName: 'stop',
                    offset: 1,
                },
            ],
         },
     } as any,

     series: [
         {
             color: 'red',
             type: 'areaspline',
             keys: ['y', 'selected'],
             data: [
                 [20.9, false],
                 [68.23, false],
                 [142.2, false],
                 [90.8, false],
                 [76.5, false],
                 [125.2, false],
                 [201.3, false],
                 [250.9, false],
                 [120.9, false],
                 [99.9, false],
                 [45.5, false],
             ],
         },
     ],
 };