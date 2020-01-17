import React, { Component } from 'react';
import Particles from 'react-particles-js';
const API = 'https://api.github.com/users';

const particlesOptions = {
  particles: {
    number: {
      value: 90,
      density: {
        enable: true,
        value_area: 1000
      }
    }
  }
}
      

     
class App extends Component {
	constructor(){
		super()
		this.state ={
			gitUsers: [],
			username: '',
            searchField:'',
            input:''
		}
	
	}

	
		 onsubmit = (event) => {
		    this.setState({input : event.target.value});
		    
		  }
		  onbuttonOn = () => {

		    this.setState({username: this.state.input});
				    let url = `${API}/${this.state.input}`;
				fetch(url).then(response=> {
					return response.json()

				})
				.then(users=> {
					this.setState({ gitUsers: users})
		            
				});
		    console.log('submit');
		    
		  }
	render() {
		//console.log(this.state.gitUsers);
		console.log(this.state.gitUsers.login);
		return (
			
			
			<div className='tc ' >
           
                 
           

		           
           	<h1 className= 'f1 b--dark-blue'> GitBook </h1>
              
               <div className='tc  bg-dark-blue br3 pa3 ma2 dib bw2 shadow-5'>
                      <div className='pa2'>
					      <input
					        className='pa3 ba b--green bg-lightest-blue'
					        type='search'
					        placeholder='search users'
					        onChange={this.onsubmit}
					      />
					      <button className=''
                          onClick ={this.onbuttonOn}
                          >Detect</button>

					    </div>
      					<img alt='users' src={this.state.gitUsers.avatar_url} />
      				<div>
        			
        			<p>Username: {this.state.gitUsers.login}</p>
        			<p>Name: {this.state.gitUsers.name}</p>
        			<p>Following: {this.state.gitUsers.following}</p>
        			<p>Repos: {this.state.gitUsers.public_repos}</p>


      				</div>
    			</div>
           </div>
          
			);
	}
}

export default App;