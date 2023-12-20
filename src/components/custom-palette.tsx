import { useEffect, useRef } from "react"; 
import BpmnModeler from 'bpmn-js/lib/Modeler';
import { xmlStr } from '@/utils/xmlStr';
import customModule  from "./custom";
import {
  BpmnPropertiesPanelModule,
  BpmnPropertiesProviderModule,
  CamundaPlatformPropertiesProviderModule
} from 'bpmn-js-properties-panel';
import CamundaExtensionModule from 'camunda-bpmn-moddle/resources/camunda.json';
// import camundaModdleDescriptors from 'camunda-bpmn-moddle/resources/camunda';
import 'bpmn-js/dist/assets/diagram-js.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css'
import './index.less'

const CustomPalette = () => {
  useEffect(() => {
    init();
  }, []);
  const init  = () => {
    const bpmnModeler = new BpmnModeler({
      container: '#canvas',
      // propertiesPanel: {
      //   parent: '#properties'
      // },
      additionalModules: [
        BpmnPropertiesPanelModule,
        BpmnPropertiesProviderModule,
        customModule,
        CamundaPlatformPropertiesProviderModule,
        CamundaExtensionModule
      ],
      // moddleExtensions: {
      //   camunda: camundaModdleDescriptors
      // }
    })
    createNewDiagram(bpmnModeler)
  };
  const createNewDiagram = (bpmnModeler: any) => {
    try{
      const { warnings } = bpmnModeler.importXML(xmlStr);
      success();
    }catch(err) {
      console.log(err);
    }
  }
  const success = () => {

  }
  return(
    <>
       <div className="containers">
        <div id="canvas"></div>
        <div id="properties"></div>
      </div>
    </>
  )
}
export default CustomPalette;