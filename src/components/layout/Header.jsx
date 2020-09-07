import React, { Component } from 'react'
import { Image ,Dropdown} from 'semantic-ui-react'
const trigger = (
    <span className='Profileavatar'>
        <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' avatar />
        <span style={{fontSize:20,fontWeight:"bold",color:"white"}}>Username</span>
    </span>
  )
  
  const options = [
    { key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
  ]
  
  const DropdownImageTriggerExample = () => (
    <Dropdown
      trigger={trigger}
      options={options}
      pointing='top left'
      icon={null}
    />
  )  
export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark" style={{height:110}}>
                    <a className="navbar-brand" href="localhost:3000"><h1>Notify-Me</h1></a>
                    <div  style={{margin:20}}>
                        <DropdownImageTriggerExample/>
                    </div>
                </nav>  
            </div>
        )
    }
}
