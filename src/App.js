
import ContextProvider from "./context/context-provider";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Graph from "./components/graph/graph.component";
import Header from "./components/header/header.component";
import InputForm from "./components/input-form/input-form.component";
import TaxViewer from "./components/tax-viewer/tax-viewer.component";

import { Container } from "@mui/material";
import Footer from "./components/footer/footer.component";

const theme = createTheme({
    palette: {
      primary: {
        main: '#4646b4',
      },
    },
  });


const App = () => {
       
    return (
        <ContextProvider>
            <ThemeProvider theme={theme}>
                <Container  maxWidth='false' sx={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Header />  
                    <Container maxWidth='false' sx={{ m:2, display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                        <InputForm />
                        <TaxViewer />
                        <Graph />
                        
                    </Container>
                    <Footer />
                </Container>
            </ThemeProvider>
        </ContextProvider>
        
    )
}

export default App;