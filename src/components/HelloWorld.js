import { h } from 'hyperapp'

import { Link, Route, location, Switch } from "@hyperapp/router"

export const HelloWorld =  ({message}) => 

<div>

 <h1> {message} </h1>

 <br/>

 <Link to="/page"> Click </Link>

</div>