import React,{Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Landing from './Landing';
import Header from './Header';


class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  Dashboard = () => <h2>Dashboard</h2>;
  SurveyNew = () => <h2>SurveyNew</h2>;
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={this.Dashboard} />
            <Route path="/surveys/new" component={this.SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
