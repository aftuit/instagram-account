import React, {useEffect} from "react"
import Gallery from "./pages/Gallery";
import Tagged from "./pages/Tagged";
import Posts from "./pages/Posts";
import Comments from "./pages/Comments";
import { BrowserRouter, Switch, Route } from "react-router-dom";



function App() {

 

  return (
        <BrowserRouter>
          <Switch>
                  <Route component={Gallery} exact={true} path="/"/>
                  <Route component={Tagged} exact={true} path="/tagged"/>
                  <Route component={Posts} exact={true} path="/posts"/>
                  <Route component={Comments} exact={true} path="/comments/:id"/>
          </Switch>
        </BrowserRouter>

      )
}
export default App;
