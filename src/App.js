import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { connect } from 'react-redux';
// import ContactForm from './conponents/ContactForm';
// import Filter from './conponents/Filter';
// import ContactList from './conponents/ContactList.container';
// import { fetchContact } from './redux/operations';
import Homeview from './views/Homeview';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import Appbar from './conponents/AppBar';
import Container from './conponents/Container/Container';
import './App.css';

const App = () => (
  <Container>
    <Appbar />
    <Switch>
      <Route exact path="/" component={Homeview} />
      <Route exact path="/login" component={LoginView} />
      <Route exact path="/register" component={RegisterView} />
    </Switch>
  </Container>
);

// class App extends React.Component {
//   componentDidMount() {
//     this.props.fetchContact();
//   }

//   render() {
//     return (
//       <div className="App" style={{ textAlign: 'left', margin: '20px' }}>
//         <h1>Phonebook</h1>
//         <ContactForm />
//         <h2>Contact</h2>
//         <Filter />
//         <ContactList />
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   fetchContact: () => dispatch(fetchContact()),
// });

// export default connect(null, mapDispatchToProps)(App);
export default App;
