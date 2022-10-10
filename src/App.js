import { Fragment } from "react";
import Graph from "./components/graph/graph.component";
import Header from "./components/header/header.component";
import InputForm from "./components/input-form/input-form.component";
import TaxViewer from "./components/tax-viewer/tax-viewer.component";
import ProvinceDropDown from "./components/province-dropdown/province-dropdown.component";

const App = () => {
    
    
    return (
        <Fragment>
            <Header />
            <ProvinceDropDown />
            <Graph />
            <InputForm />
            <TaxViewer />
        </Fragment>
        
    )
}

export default App;