import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Home from "./pages/Home/Home";
import "./App.css";

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px

function App() {
  return (
    <Container maxWidth="xl">
      <Home />
    </Container>
  );
}

export default App;
