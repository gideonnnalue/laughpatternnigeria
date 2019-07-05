import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';


class Admin extends Component {
    componentWillUnmount() {
        this.props.turnOffNav();
      }
    render() {
        return (
            <div>
                <h3>Admin header</h3>
                <Switch>
                    <Route path={`${this.props.match.path}/dashboard`} component={Dashboard}/>
                    <Route exact path={this.props.match.path} render={() => <Dashboard />} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(Admin);

