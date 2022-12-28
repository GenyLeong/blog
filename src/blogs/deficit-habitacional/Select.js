
import React from 'react';

import Graphs from './graphs.js';

export default function Select() {
    const [selectValue, setSelectValue] = React.useState("");

    const [value_ingresos, selectChart_ingresos] = React.useState("ingresos_quantiles_dependientes")
    
    const [value_beneficiados, selectChart_beneficiados] = React.useState("beneficiados_quantiles_dependientes")

    const onChange = (event) => {

      const value = event.target.value;     
      
      setSelectValue(value);

      console.log(value)

      if (value === "Trabajador(a) Independiente") {
          const value_ingresos = "ingresos_quantiles_independientes"
          const value_beneficiados = "beneficiados_quantiles_independientes"
          selectChart_ingresos(value_ingresos)
          selectChart_beneficiados(value_beneficiados)

        // return {selectChart_ingresos, selectChart_beneficiados}
      }

      if (value === "Trabajador(a) Dependiente") {
        const value_ingresos = "ingresos_quantiles_dependientes"
        const value_beneficiados = "beneficiados_quantiles_dependientes"

        selectChart_ingresos(value_ingresos)
          selectChart_beneficiados(value_beneficiados)
        // return {selectChart_ingresos, selectChart_beneficiados}
      }

    };
    return (
<>
  <select onChange={(e) => onChange(e)} id="select_trabajo">
    <option defaultValue value="Trabajador(a) Dependiente">Trabajador(a) Dependiente</option>
    <option value="Trabajador(a) Independiente">Trabajador(a) Independiente</option>
  </select>
  <div className="legend_color">
    <span>
    <div className="color-1"></div>
    Primer cuartil
    </span>
    <span>
    <div className="color-2"></div>
    Segundo cuartil
    </span>
    <span>
    <div className="color-3"></div>
    Tercer cuartil
    </span>
  </div>
        <h4>Ingresos por cuartil de la ocupación principal según ENAHO</h4>
        
        {/* {selectValue === "Trabajador(a) Independiente" && (<Graphs chart="ingresos_quantiles_independientes"/>)} */}
        <Graphs chart= {value_ingresos} /> 
        <h4> Cantidad de beneficiados de productos Mi Vivienda por cuartiles </h4>

        <Graphs chart={value_beneficiados} /> 
  
        </>
    );
}
