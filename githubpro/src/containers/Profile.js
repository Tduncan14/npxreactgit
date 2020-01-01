import React, {Component} from 'react';

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

        return(
           <div>
               <ul>
                <li>avatar_url:{data.avatar_url}</li>
                <li>html_url:{data.html_url}</li>
                <li>repos_url:{data.repos_url}</li>
                <li>name:{data.name? data.name : 'Treek'}</li>
                <li>location:{data.location ? data.location : 'Chicago'}</li>
                <li>email:{data.email ? data.email : 'nbatre1@yahoo.com'}</li>
                <li>
                    bio: {data.bio? data.bro : 'Keep moving forward always'}
                </li>
               </ul>
           </div>
        )
     }



   







}


export default Profile;