import "./TopBox.scss"
import { topDealUsers } from "../../Data"


const TopBox = () => {
  return (
    <div className="topbox">
      <h1>Top Deals</h1>

      <div className="list">
        {topDealUsers.map(user=>(
          <div className="listItem" key={user.id}>
            <div className="user">
              <img src={user.img} alt="user profile"/>
              <div className="userText">
                <span className="username">
                {user.username}
                </span>
                <span className="email">
                  {user.email}
                </span>
              </div>
            </div>
            <span className="amount">
              {user.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopBox