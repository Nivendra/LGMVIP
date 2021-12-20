import './App.css';
import React, { Component } from 'react'
	
class App extends Component {
  constructor(props){
	super(props)
	this.state = {users_data :[],
                loading : true                
  }
	this.displayUsers = this.displayUsers.bind(this)
  }
    
  displayUsers(){
      document.getElementById("main").style.display='flex';
      const link="https://reqres.in/api/users?page=1";
      fetch(link)
      .then(response => response.json())
      .then((users) => {
        
        this.setState({users_data :users.data,
                        loading: false
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }
    
  render(){
    return (<>
      <nav className="navbar navbar-expand-lg navbar-light rounded m-3">
          <div className="container">
            <h3>LetsGrowMore</h3>
            <h3>TASK-2</h3>
            <button onClick={this.displayUsers}>Get Users</button>
          </div>
        </nav>
      <Users loading={this.state.loading} users={this.state.users_data}/>
    </>
    )
  }
}
const Users = ({loading,users}) => {
  return loading ? (
        <div id="main">
          <img src="https://lh4.googleusercontent.com/proxy/tfa-w80LVQvhS6F1hAmT2-Owz6qL9y-C3pZDqag4m9qYvc0ydhQyynWSFa6EJWH1ISjDdXe3fv6Ssh-KrpLXCH4p9ACzHH2il9DK8Uh_FZ0jIX-K3LR0JdU9SeOEBe_dCgYwVYeGcEixhJsLRJfqf2afQn_PrLDgRfEO0oRJqZY=s0-d" alt="Loading..." className="loader"/>
        </div>
      ) :
      (
        <div className='row' id="main">  
        {users.map(user =>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                      <div className="profile">
                        <img src={user.avatar} alt={user.avatar} className="avatar"></img>
                        <p>ID  {user.id}</p>
                        <h1 className="name">{user.first_name} {user.last_name}</h1>
                        <p className="email">{user.email}</p>
                      </div>
                    </div>
          )
        }
        </div>
      )
}	
export default App;