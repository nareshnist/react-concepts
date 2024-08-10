

import './App.css';
import User from './components/User';
import { Profile } from './components/Profile';
import { List } from './components/list';
import appHeader from './components/comp-practice';

function App() {

  let s1 = {
    background:"green",
    color:"blue",
  }
  const age = 30;
  const print = (x) => {
    console.log(x);
  }
  const users = [
    {
      name:"naresh",
      age:26
    },
    {
      name:"naresh",
      age:27
    }
  ]

  const usersitems = users.map((user) => {
    return <User userName={user.name} userAge={user.age} print={print} key={user.age}></User>
  })


  return (
    <>

    <Profile></Profile>
    <List></List>

      <h1 style={s1}>React</h1>
    </>
  )
}

export default App
