
import ContextProvider from "./context/context-provider";

import Graph from "./components/graph/graph.component";
import Header from "./components/header/header.component";
import InputForm from "./components/input-form/input-form.component";
import TaxViewer from "./components/tax-viewer/tax-viewer.component";

import { Box, Container } from "@mui/material";

const App = () => {
       
    return (
        <ContextProvider>
            <Container  maxWidth='false' sx={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Header />  
                <Container maxWidth='false' sx={{ m:4, display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                
                    <InputForm />
                    <TaxViewer />
                    <Graph />

                
                </Container>
            </Container>
        </ContextProvider>
        
    )
}

export default App;