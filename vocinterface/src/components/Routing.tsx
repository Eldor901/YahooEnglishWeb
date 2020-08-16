import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Dictionary from "./DictionaryService/Dictionary";
import ShortStories from "./ShortStoriesService/ShortStories";

class Routing extends Component {
    render() {
        return (
            <>
                <Route path='/' exact={true} component={Dictionary}/>
                <Route path='/stories' exact={true} component={ShortStories}/>
            </>

        );
    }
}

export default Routing;
