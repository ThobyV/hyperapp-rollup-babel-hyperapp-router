import { h } from 'hyperapp'
import { Link, Route,location, Switch } from "@hyperapp/router"


import { App } from './views/containers/App'
import { Page } from './components/Page'

export const view = ( state, actions ) => 

<div>

<Switch>    
    <Route path="/" render={ App } />   
    <Route path="/page" render={ Page } />       
  </Switch>

</div>
