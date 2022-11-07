import {React} from 'react';

const UseEffect = ({counter}) => {

  console.log('rendered component: UseEffect');
  return (
    <div>
        <label>Hello! I've been rendered: {counter} times.</label>
    </div>
  )
}

export default UseEffect