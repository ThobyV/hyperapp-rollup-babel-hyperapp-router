import { h } from 'hyperapp'
import { Link, Route, location, Switch } from "@hyperapp/router"

import { HelloWorld } from '../../components/HelloWorld'


export const App = () => ( state, actions ) =>

<div>

<HelloWorld message ="Welcome to Hyperapp-Rollup-Babel" />

</div>
 