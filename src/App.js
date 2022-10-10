import Graph from "./components/graph/graph.component";
import Header from "./components/header/header.component";
import InputForm from "./components/input-form/input-form.component";
import TaxViewer from "./components/tax-viewer/tax-viewer.component";

import { Box } from "@mui/material";

const App = () => {
    
    
    return (
        <Box>
            <Header />  
            <Box sx={{ m:4, display: 'flex', justifyContent: 'center'}}>

                <InputForm />
                <TaxViewer />
                <Graph />
            </Box>
        </Box>
        
    )
}

export default App;