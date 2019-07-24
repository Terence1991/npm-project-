import React from 'react';
import Button from '@material-ui/core/Button';



class GoogleAuth extends React.Component{
  state = { isSignedIn: null};

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '697832242002-stpunubonha88vlhe2gu7nhmq899aptb.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance()
        this.onAuthChange();
        this.auth.isSignedIn.listen(this.onAuthChange)
      });
    });
  }

  onAuthChange = () => {
    this.setState({
      isSignedIn: this.auth.isSignedIn.get()
    })
  }

  onSignIn = () => {
    console.log('hiii')
    this.auth.signIn();
  }

  onSignOut = () => {
    console.log("im working")
    this.auth.signOut();
  }

  renderAuthButton() {
    if(this.state.isSignedIn === null) {
      return null
    } else if (this.state.isSignedIn) {
      return (
        <Button onClick={this.onSignOut} variant="contained" color="primary">
        Sign out
        </Button>
      )
    } else {
      return (
        <Button onClick={this.onSignIn} variant="contained" color="primary">
        Sign in
        </Button>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderAuthButton()}
      </div>
    )
  }
}

export default GoogleAuth;