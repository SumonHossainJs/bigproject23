import './BarChatBox.scss';
import { Bar, BarChart, ResponsiveContainer, Tooltip} from 'recharts';

const BarChatBox = ({char}) => {
  return (
    <div className='barChartbox'>
      <h1>{char.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={char.chartData}>
            <Tooltip
            contentStyle={{background:"#2a3447", borderRadius:'5px'}}
            labelStyle={{display:'none'}}
            cursor={{fill:'none'}}
            />
            <Bar dataKey={char.dataKey} fill={char.color}/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default BarChatBox