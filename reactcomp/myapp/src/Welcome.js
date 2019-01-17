import React, { Component } from 'react';
import Name from './Name'

class Welcome extends Component {
   constructor(){
      super()

      this.state = {
         name: 'Dennis'
      }
   }
   render() {
      return (
         <div>
            Hello
            <Name 
            name={this.state.name}
            />
         </div>
      );
   }
}

export default Welcome;