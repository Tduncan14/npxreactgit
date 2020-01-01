import React, {Component} from 'react';
import Link from '../components/Link/Link';
import './Profile.css'; 
import List from '../components/List/List.js'

class Profile extends Component {

   constructor(){
       super()
       this.state={
           data:{},
           loading:true
       }
   }


   async componentDidMount(){

     const profile = await fetch('https://api.github.com/users/tduncan14')


     const profileJSON = await profile.json();


    if(profileJSON){
    
        this.setState({
            data:profileJSON,
            loading:false
        })






    }
   }


     render(){


        console.log(this.state.data,'this is the data')


        const {data,loading} = this.state;

        const items = [
            {label:'html_url',value: <Link url={data.html_url} title='Github URL' />},
            {label:'repos_url', value:data.repos_url},
            { label: 'name', value: data.name},
            { label: 'company', value: data.company?data.company:'Treek' },
            { label: 'location', value:   data.location?data.location:'Chicago' },
            { label: 'email', value: data.email? data.email:'nbatre1@yahoo.com' },
            { label: 'bio', value: data.bio?data.bio:'keep moving forward' }
        ]

        return(
           
               <div className="Profile-container">
                   <img className='Profile-avatar' src={data.avatar_url} alt="avatar"/>
               
              <List items={items} />
           </div>
           
        )
     }



   







}


export default Profile;