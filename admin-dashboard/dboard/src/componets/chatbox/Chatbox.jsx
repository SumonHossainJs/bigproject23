import "./Chatbox.scss";
import { Link } from 'react-router-dom';
import { Line, LineChart, ResponsiveContainer, Tooltip} from 'recharts';

const Chatbox = ({char}) => {

  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src={char.icon} alt="" />
          <span>{char.title}</span>
        </div>
        <h1>{char.number}</h1>
        <Link to='/' style={{color: char.color}}>
          View all
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width='99%' height={"100%"}>
            <LineChart data={char.chartData}>
              <Tooltip
              contentStyle={{background:"transparent", border:'none'}}
              labelStyle={{display: 'none'}}
              position={{x:10, y:70}}
              />
              <Line 
              type={'monotone'}
              dataKey={char.dataKey}
              stroke={char.color}
              strokeWidth={2}
              dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
            <span className="percentage"
            style={{color:char.percentage < 0 ? 'tomato' : "limegreen"}}
            >
              {char.percentage}%
            </span>
            <span>
              this month
            </span>
        </div>
      </div>
         
    </div>
  )
}

export default Chatbox