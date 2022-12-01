import "https://d3js.org/d3.v6.min.js";
// import "/node_modules/d3-time-format/";
// import "https://unpkg.com/billboard.js/dist-esm/billboard.js"

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

const productos_MV = bb.generate({
    padding: {
        // top: 20,
        // right: 50,
        bottom: 20,
        left: 0,
    },
    data: {
        columns: [
            ["data1", 3250, 3328.5, 3650.4],
            ["data2", 4406.74, 5003.68, 4947.7],
            ["data3", 3900, 2752.5, 3228, 5441.6],
            ["data4", 3800, 3800, 4114, 4202, 4451.14, 4148.21, 4140],
            ["data5", 1500, 1393, 1570.4, 1781.9, 1939.76, 2000, 2100],
            ["data6", 2127, 2155, 2594, 2529, , 2624, 2038],
        ],
        type: "bar", // for ESM specify as: bar()
        types: {
            data6: "line", // for ESM specify as: spline()
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
    },
    axis: {
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
    },
    bar: {
        padding: 3,
        width: {
            ratio: 0.6,
            max: 40,
        },
    },
    tooltip: {
        format: {
            value: function(value, ratio, id) {
                return "S/ " + fformat(value);
            },
        },
    },
    legend: {
        show: false,
    },
    bindto: "#productos_MV",
});

const ingresos_quantiles = bb.generate({
    padding: {
        top: 20,
        right: 50,
        bottom: 20,
        left: 50,
    },
    // title: {
    //   text: "Ingresos por cuartil de la ocupación principal según ENAHO",
    // },
    data: {
        columns: [
            ["data1", 200, 230, 240, 240, 250, 220, 240],
            ["data2", 712, 750, 840, 850, 850, 850, 800],
            ["data3", 1300, 1500, 1500, 1530, 1600, 1700, 1500],
        ],
        type: "line", // for ESM specify as: bubble()
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
    },
    // bubble: {
    //     maxR: 25,
    // },
    axis: {
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
            // tick: {
            //   values: [10, 500, 800, 1000, 1500, 2000],
            // },
        },
    },
    tooltip: {
        grouped: true,
        format: {
            value: function(value, ratio, id) {
                return "S/ " + fformat(value);
            },
        },
    },
    legend: {
        show: false,
    },
    point: {
        focus: {
            only: true,
        },
    },
    bindto: "#ingresos_quantiles",
});

const prestamos_quantiles = bb.generate({
    // title: {
    //   text: "Cantidad de beneficiados de productos Mi Vivienda por cuartiles",
    // },
    data: {
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
    },
    // bubble: {
    //     maxR: 25,
    // },
    axis: {
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
    },
    tooltip: {
        grouped: true,
        format: {
            value: function(value, ratio, id) {
                return "Personas: " + fformat(value);
            },
        },
    },
    legend: {
        show: false,
    },
    bindto: "#prestamos_quantiles",
});
const deficit_cualitativo = bb.generate({
    // title: {
    //   text: "DÉFICIT HABITACIONAL CUALITATIVO APROXIMADO",
    // },
    data: {
        columns: [
            [
                "Cantidad de hogares",
                815003,
                858800,
                747616,
                674685,
                1011090,
                1470000,
            ],
        ],
        type: "line",
        colors: {
            "Cantidad de hogares": "#B5C39F",
        },
    },
    axis: {
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
    },
    point: {
        focus: {
            only: true,
        },
    },
    tooltip: {
        grouped: true,
        format: {
            value: function(value, ratio, id) {
                return fformat(value);
            },
        },
    },
    bindto: "#deficit_cualitativo",
});
const deficit_cualitativo_cepal = bb.generate({
    // title: {
    //   text: "DÉFICIT HABITACIONAL CUALITATIVO SEGÚN CEPAL",
    // },
    data: {
        columns: [
            [
                "Cantidad de hogares",
                2707859,
                2779755,
                2829730,
                2856769,
                2923306,
            ],
        ],
        type: "line",
        colors: {
            "Cantidad de hogares": "#B5C39F",
        },
    },
    axis: {
        x: {
            type: "category",
            categories: ["2015", "2016", "2017", "2018", "2019"],
        },
        y: {
            show: true,
            tick: {
                format: function(x) {
                    return fformat(x);
                },
            },
        },
    },
    point: {
        focus: {
            only: true,
        },
    },
    tooltip: {
        grouped: true,
        format: {
            value: function(value, ratio, id) {
                return fformat(value);
            },
        },
    },
    bindto: "#deficit_cualitativo_cepal",
});
document
    .getElementById("select_trabajo")
    .addEventListener("change", function() {
        var obj = document.getElementById("select_trabajo");
        obj_select = obj.options[obj.selectedIndex].text;
        if (obj_select == "Trabajador(a) Dependiente") {
            ingresos_quantiles.load({
                columns: [
                    ["data1", 200, 230, 240, 240, 250, 220, 240],
                    ["data2", 712, 750, 840, 850, 850, 850, 800],
                    ["data3", 1300, 1500, 1500, 1530, 1600, 1700, 1500],
                ],
            });
            prestamos_quantiles.load({
                columns: [
                    ["data1", 5, 1, 8, 9, 4, 1, 7],
                    ["data2", 156, 299, 203, 427, 550, 486, 317],
                    ["data3", 7251, 6777, 6032, 7662, 9729, 6742, 10067],
                ],
            });
        }
        if (obj_select == "Trabajador(a) Independiente") {
            ingresos_quantiles.load({
                columns: [
                    ["data1", 123, 131, 117, 113, 122, 135, 150],
                    ["data2", 457, 483, 365, 369, 399, 400, 500],
                    ["data3", 1307.75, 1403.5, 940, 950, 990, 1170, 1443.25],
                ],
            });
            prestamos_quantiles.load({
                columns: [
                    ["data1", 0, 0, 0, 0, 0, 0, 1],
                    ["data2", 48, 24, 3, 49, 14, 12, 92],
                    ["data3", 1630, 981, 853, 995, 1924, 1120, 2387],
                ],
            });
        }
    });