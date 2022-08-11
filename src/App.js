

import React from 'react'
import './App.css'
import { Dashboard } from './screens/dashboard';

  export default function App() 
  {
   return (
   <div className="App">
<Dashboard title = "login" />
<Dashboard title="signup"/>
<Dashboard title="register"/>
      
  </div>
  );
}