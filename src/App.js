import React from 'react';
import './App.css';


class App extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            items: []
        }
    }

    handleButtonClick(){
        alert("Welcome to the react world!!!");
    }


    componentDidMount(){
        fetch('https://swapi.dev/api/people')
            .then(function(response){
                return response.json()
            }).then(responseData => {
            this.setState({
                items: responseData.results
            })
        }).catch(error => {
            alert("Error");
        })
    }


    render(){
        let items = this.state.items

        var Profile =  function() {
            var FriendlyStyle = {
                height: 300,
                width: 200,
                padding: 0,
                backgroundColor: "#FFF",
                webkitFilter: "drop-shadow(0px 0px 5px #555)",
                filter: "drop-shadow(0px 0px 5px #555)"
            }
            return (
                <div style={FriendlyStyle}>
                  <Avatar/>
                  <ProfileName/>
                  <SocialMedia/>
                </div>
            );
        }

        var StarWarMovieCharacters = function () {
            return (
              <div>
                <h3> Star War Movie Characters Name </h3>
                  {items.map(function(item){
                      return <h6>{item.name}</h6>
                  })}
              </div>
            )

        }



        var Avatar = function() {
            var avatarStyle = {
                height: 150,
                width: 150,
                marginLeft: 20,
                marginTop: 20,
                borderRadius: "50%"
            }
            return (
                <img src="https://avatars.githubusercontent.com/u/22412472" style={avatarStyle}></img>
            );
        }

        var ProfileName = function() {
            var nameStyle = {
                fontSize: 24,
                fontFamily: "Arial, helvetica, sans-serif",
                margin: 20
            }
            return (
                <h1 style={nameStyle}>Asad Hussain</h1>
            );
        }

        var SocialMedia = function() {
            return (
                <div>
                  <Like/>
                  <Share/>
                  <Add/>
                </div>
            );
        }

        var iconStyle = {
            margin: 20
        }

        function Like(){
            return(
                <i class="fa fa-thumbs-o-up" aria-hidden="true" style={iconStyle}></i>
            );
        }

        function Share(){
            return(
                <i className="fa fa-share-alt" aria-hidden="true" style={iconStyle}></i>
            );
        }

        function Add(){
            return(
                <i className="fa fa-users" aria-hidden="true" style={iconStyle}></i>
            );
        }


        return (
            <div className="App">
              <Profile/>
              <h1>Welcome to Simple React App</h1>
              <button onClick={this.handleButtonClick}>Click me!</button>
              <StarWarMovieCharacters/>
            </div>
        );
    }

}

export default App;
