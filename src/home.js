import React from 'react'
import {withGlobalState} from './hooks/globalState'

class Home extends React.Component {
    constructor() {
        super();
        // JSON.parse(window.localStorage.getItem('state')) ||
        this.state =  {
            // states
        }
        if (window.localStorage.getItem('state')) {
            let old_state = JSON.parse(window.localStorage.getItem('state'))
            // if state is latest versoin load it here from old_state
        }
    }

    today(){
        return new Date().toLocaleDateString()
    }

    setState(state, persist=false) {
        if (persist)
            window.localStorage.setItem('state', JSON.stringify(state));
        super.setState(state);
    }


    render() {
        const {setShowModal} = this.props.globalState;
        
        
        return <div>
            hello minimal!!
        </div>
    }
}

export default withGlobalState(Home);