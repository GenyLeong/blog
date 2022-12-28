
import React from 'react';
import * as d3 from "d3";
import BillboardChart from 'react-billboardjs'
import 'billboard.js/dist/billboard.css';

const month = new Array();
month[0] = "Enero";
month[1] = "Febrero";
month[2] = "Marzo";
month[3] = "Abril";
month[4] = "Mayo";
month[5] = "Junio";
month[6] = "Julio";
month[7] = "Agosto";
month[8] = "Septiembre";
month[9] = "Octubre";
month[10] = "Noviembre";
month[11] = "Diciembre";

const myLocale = d3.formatLocale({
    decimal: ",",
    thousands: "\u00a0",
    grouping: [3],
    currency: ["", "\u00a0"],
    minus: "\u2212",
    percent: "\u202f%",
});

const fformat = myLocale.format("$,");

export default function Graphs ({chart}) {
    
    if (chart === "productos_MV") {

        const productos_MV = () => {

            let padding = {
                bottom: 20,
                left: 0,
            }

            let data  = {
                columns: [
                    ["data1", 3250, 3328.5, 3650.4],
                    ["data2", 4406.74, 5003.68, 4947.7],
                    ["data3", 3900, 2752.5, 3228, 5441.6],
                    ["data4", 3800, 3800, 4114, 4202, 4451.14, 4148.21, 4140],
                    ["data5", 1500, 1393, 1570.4, 1781.9, 1939.76, 2000, 2100],
                    ["data6", 2127, 2155, 2594, 2529, , 2624, 2038]
                ],
                type: 'bar', // for ESM specify as: bar()
                types: {
                    data6: 'line', // for ESM specify as: spline()
                },
                names: {
                    data1: "Mi construcción",
                    data2: "Mi Casa Más",
                    data3: "Mi Terreno",
                    data4: "Nuevo Mi Vivienda",
                    data5: "Techo Propio",
                    data6: "Ingreso familiar NSE D",
                },
                colors: {
                    data1: "#816674",
                    data2: "#F48A59",
                    data3: "#A4A380",
                    data4: "#B5C39F",
                    data5: "#522927",
                    data6: "#000",
                },
            }

            let axis = {
                x: {
                    type: "category",
                    categories: [
                        "2015",
                        "2016",
                        "2017",
                        "2018",
                        "2019",
                        "2020",
                        "2021",
                    ],
                },
                y: {
                    show: true,
                },
            }
            let tooltip = {
                format: {
                    value: function(value, ratio, id) {
                        return "S/ " + fformat(value);
                    },
                },
            }

            let bar = {
                padding: 3,
                width: {
                    ratio: 0.6,
                    max: 40,
                },
            }

            let legend = {
                show: false,
            }

            return <BillboardChart data={data} axis={axis} padding={padding} tooltip = {tooltip} legend= {legend} bar={bar}/>
        }

        return productos_MV()
        
  }

    if (chart==="ingresos_quantiles_dependientes") {

        const ingresos_quantiles = () => {  

            let padding = {
                top: 20,
                right: 50,
                bottom: 20,
                left: 50,
            }

            let data  = {
                columns: [
                    ["data1", 200, 230, 240, 240, 250, 220, 240],
                    ["data2", 712, 750, 840, 850, 850, 850, 800],
                    ["data3", 1300, 1500, 1500, 1530, 1600, 1700, 1500],
                ],
                type: 'line', // for ESM specify as: bubble()
                names: {
                    data1: "Primer cuantil",
                    data2: "Segundo cuantil",
                    data3: "Tercer cuantil",
                },
                colors: {
                    data2: "#F48A59",
                    data1: "#A4A380",
                    data3: "#816674",
                },
                labels: false,
            }

            let axis = {
                x: {
                    type: "category",
                    categories: [
                        "2015",
                        "2016",
                        "2017",
                        "2018",
                        "2019",
                        "2020",
                        "2021",
                    ],
                }
            }

            let tooltip = {
                grouped: true,
                format: {
                    value: function(value, ratio, id) {
                        return "S/ " + fformat(value);
                    },
                },
            }

            let legend = {
                show: false,
            }

            let point = {
                focus: {
                    only: true,
                },
            }

        return (
                <BillboardChart unloadBeforeLoad data={data} axis={axis} padding={padding} tooltip = {tooltip} legend= {legend} point={point}/>
        ) 
        
        } 
        return ingresos_quantiles()
    }

    if (chart==="ingresos_quantiles_independientes") {

        const ingresos_quantiles = () => {  

            let padding = {
                top: 20,
                right: 50,
                bottom: 20,
                left: 50,
            }

            let data  = {
                columns: [
                    ["data1", 123, 131, 117, 113, 122, 135, 150],
                    ["data2", 457, 483, 365, 369, 399, 400, 500],
                    ["data3", 1307.75, 1403.5, 940, 950, 990, 1170, 1443.25],
                ],
                type: 'line', // for ESM specify as: bubble()
                names: {
                    data1: "Primer cuantil",
                    data2: "Segundo cuantil",
                    data3: "Tercer cuantil",
                },
                colors: {
                    data2: "#F48A59",
                    data1: "#A4A380",
                    data3: "#816674",
                },
                labels: false,
            }

            let axis = {
                x: {
                    type: "category",
                    categories: [
                        "2015",
                        "2016",
                        "2017",
                        "2018",
                        "2019",
                        "2020",
                        "2021",
                    ],
                }
            }

            let tooltip = {
                grouped: true,
                format: {
                    value: function(value, ratio, id) {
                        return "S/ " + fformat(value);
                    },
                },
            }

            let legend = {
                show: false,
            }

            let point = {
                focus: {
                    only: true,
                },
            }

        return (
                <BillboardChart unloadBeforeLoad data={data} axis={axis} padding={padding} tooltip = {tooltip} legend= {legend} point={point}/>
        ) 
        
        } 
        return ingresos_quantiles()
    }

    if(chart==="beneficiados_quantiles_dependientes"){
        const prestamos_quantiles = () => {

            let data = {
                columns: [
                    ["data1", 5, 1, 8, 9, 4, 1, 7],
                    ["data2", 156, 299, 203, 427, 550, 486, 317],
                    ["data3", 7251, 6777, 6032, 7662, 9729, 6742, 10067],
                ],
                type: "bar", // for ESM specify as: bubble()
                names: {
                    data1: "Primer cuantil",
                    data2: "Segundo cuantil",
                    data3: "Tercer cuantil",
                },
                colors: {
                    data2: "#F48A59",
                    data1: "#A4A380",
                    data3: "#816674",
                },
                labels: false,
            }

            let axis = {
                x: {
                    type: "category",
                    categories: [
                        "2015",
                        "2016",
                        "2017",
                        "2018",
                        "2019",
                        "2020",
                        "2021",
                    ],
                },
                y: {
                    tick: {
                        values: [10, 500, 1000, 5000, 10000],
                    },
                },
            }

            let tooltip = {
                grouped: true,
                format: {
                    value: function(value, ratio, id) {
                        return "Personas: " + fformat(value);
                    },
                },
            }

            let legend = {
                show: false,
            }

            return <BillboardChart data={data} axis={axis} tooltip = {tooltip} legend= {legend}/>

        }

        return prestamos_quantiles()
    }

    if(chart==="beneficiados_quantiles_independientes"){
        const prestamos_quantiles = () => {

            let data = {
                columns: [
                    ["data1", 0, 0, 0, 0, 0, 0, 1],
                    ["data2", 48, 24, 3, 49, 14, 12, 92],
                    ["data3", 1630, 981, 853, 995, 1924, 1120, 2387],
                  ],
                type: "bar", // for ESM specify as: bubble()
                names: {
                    data1: "Primer cuantil",
                    data2: "Segundo cuantil",
                    data3: "Tercer cuantil",
                },
                colors: {
                    data2: "#F48A59",
                    data1: "#A4A380",
                    data3: "#816674",
                },
                labels: false,
            }

            let axis = {
                x: {
                    type: "category",
                    categories: [
                        "2015",
                        "2016",
                        "2017",
                        "2018",
                        "2019",
                        "2020",
                        "2021",
                    ],
                },
                y: {
                    tick: {
                        values: [10, 500, 1000, 5000, 10000],
                    },
                },
            }

            let tooltip = {
                grouped: true,
                format: {
                    value: function(value, ratio, id) {
                        return "Personas: " + fformat(value);
                    },
                },
            }

            let legend = {
                show: false,
            }

            return <BillboardChart data={data} axis={axis} tooltip = {tooltip} legend= {legend}/>

        }

        return prestamos_quantiles()
    }

    if(chart==="deficit_cualitativo") {
        const deficit_cualitativo = () => {
            let data = {
                columns: [
                    ["Cantidad de hogares", 815003, 858800, 747616, 674685, 1011090, 1054000, 1470000],
                ],
                type: "line", // for ESM specify as: bubble()
                colors: {
                    "Cantidad de hogares": "#58643F",
                },
                labels: false,
            }

            let axis = {
                x: {
                    type: "category",
                    categories: [
                        "2015",
                        "2016",
                        "2017",
                        "2018",
                        "2019",
                        "2020",
                        "2021",
                    ],
                },
                y: {
                    show: true,
                },
            }

            let point = {
                focus: {
                    only: true,
                },
            }

            let tooltip = {
                grouped: true,
                format: {
                    value: function(value, ratio, id) {
                        return fformat(value);
                    },
                },
            }

            return <BillboardChart data={data} axis={axis} point = {point} tooltip = {tooltip} />
        }

        return deficit_cualitativo()
    }

    if(chart==="deficit_cualitativo_cepal") {
        const deficit_cualitativo_cepal = () => {
            let data = {
                columns: [
                    ["Cantidad de hogares", 2707859, 2779755, 2829730, 2856769, 2923306],
                ],
                type: "line", // for ESM specify as: bubble()
                colors: {
                    "Cantidad de hogares": "#58643F",
                },
                labels: false,
            }

            let axis = {
                x: {
                    type: "category",
                    categories: [
                        "2015",
                        "2016",
                        "2017",
                        "2018",
                        "2019",
                    ],
                },
                y: {
                    show: true,
                    tick: {
                        format: function(x) {
                            return fformat(x);
                        },
                    },
                },
            }

            let point = {
                focus: {
                    only: true,
                },
            }

            let tooltip = {
                grouped: true,
                format: {
                    value: function(value, ratio, id) {
                        return fformat(value);
                    },
                },
            }

            return <BillboardChart data={data} axis={axis} point = {point} tooltip = {tooltip} />
        }

        return deficit_cualitativo_cepal()
    }

}