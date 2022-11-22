import { useParams } from "react-router-dom"
import Title from "../components/Title";
import { Link } from "react-router-dom";

const ShowInformation = () => {
  
    let { nombre } = useParams();

  return (
    <div>
        <Title title="Show the information" fontColor="cyan"/>
        
        <span>The user id is: {nombre}</span>
        <br />
        <Link to={'/'}>Back to home</Link>
    </div>
  )
}

export default ShowInformation