import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar'
export default class SHome extends Component {
    render() {
        return (
           <div>
               <Header/>
               <Sidebar/> 
               <div class="ui text container" id='mainview'>
                    <h2 class="ui header">Header</h2>
                    <p> nisi.</p>
                    <p> vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>
                </div>
           </div>
  );
}
}