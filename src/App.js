import { Fragment } from "react";
import Graph from "./components/graph/graph.component";
import Header from "./components/header/header.component";
import InputForm from "./components/input-form/input-form.component";
import TaxViewer from "./components/tax-viewer/tax-viewer.component";

const App = () => {
    
    
    return (
        <Fragment>
            <Header />
            <Graph />
            <InputForm />
            <TaxViewer />
        </Fragment>
        
    )
}

export default App;