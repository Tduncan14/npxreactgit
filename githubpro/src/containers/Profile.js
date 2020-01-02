import React, {Component} from 'react';
import Link from '../components/Link/Link';
import List from '../components/List/List.js'
import styled from 'styled-components';


const ProfileWrapper = styled.div`
 width:50%;
 margin:10px auto`;


const Avatar = styled.img `
 width:150px;
`

class Profile extends Component {

   constructor(){
       super()
       this.state={
           data:{},
           loading:true,
           repos:[],
           error:''
       }
   }


   async componentDidMount(){

    try{
     const profile = await fetch('https://api.github.com/users/tduncan14')


     const profileJSON = await profile.json();


    if(profileJSON){

        const repositories = await fetch(profileJSON.repos_url);
        const repositoriesJSON = await repositories.json();
    
        this.setState({
            data:profileJSON,
            loading:false,
            repos:repositoriesJSON
        })
    }
}

    catch(error){
        this.setState({

            loading:false,
            error:error.message
        })


    }






    
   }


     render(){


        console.log(this.state,'this is the data')


        const {data,loading,repos} = this.state;

        if(loading || error ){
            return<div>
                {loading ? 'Loading...' :error}
            </div>
        }

        const items = [
            {label:'html_url',value: <Link url={data.html_url} title='Github URL' />},
            {label:'repos_url', value:data.repos_url},
            { label: 'name', value: data.name?data.name:'Treek'},
            { label: 'company', value: data.company?data.company:'Treek' },
            { label: 'location', value:   data.location?data.location:'Chicago' },
            { label: 'email', value: data.email? data.email:'nbatre1@yahoo.com' },
            { label: 'bio', value: data.bio?data.bio:'keep moving forward' }
        ]

        const projects = repos.map(repo =>({
            label:repo.name,
            value:<Link url={repo.html_url} title='Github URL'/>

        }))

        return(
           
               <ProfileWrapper>
                   <Avatar  src={data.avatar_url} alt="avatar"/>
               
              <List title={'Profile'}items={items} />
              <List title={'Projects'} items={projects} />

              </ProfileWrapper>

           
        )
     }



   







}


export default Profile;