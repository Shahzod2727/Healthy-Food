// import Grid from "@mui/material/Grid";
// import Container from "@mui/material/Container";
import NotFounde from "./pages/NotFounde/NotFounde";
import Test from "./pages/Test/Test";
import { Switch, Route, Link } from "react-router-dom";
import Layout from "./components/Layout/Layout";
// import Footer from "./pages/Footer/Footer";
// import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import "./App.css";

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px

function App() {
  return (
    <Layout>
     
      <Switch>

      <Route exact path={"/"}>
          <Home />
        </Route>
        <Route exact path={"/test"}>
          <Test />
        </Route>
        {/* <Route exact path={"/footer"}>
          <Footer />
        </Route> */}
        {/* <Route exact path={"/footer"}>
          <Footer />
        </Route> */}
        <Route path={"*"}>
          <NotFounde />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
