import "./User.scss";
import {Single} from "../../components/Export";
import { singleUser } from "../../Data";

const User = () => {
  return (
    <div className="user">
      <Single {...singleUser}/>
    </div>
  )
}

export default User