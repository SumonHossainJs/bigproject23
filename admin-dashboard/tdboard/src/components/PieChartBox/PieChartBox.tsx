import  "./PieChartBox.scss"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const Data = [
  {
    name:'Mobile', value:400, color:"#a9f907"
  },
  {
    name:'Laptop', value:900, color:"#fa0707"
  },
  {
    name:'Desktop', value:300, color:"#08f8f4"
  },
  {
    name:'Tablet', value:500, color:"#2e05f7"
  },
]


const PieChartBox = () => {
  return (
    <div className="Piechatbox">
      <h1>Source By Leads</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
            <PieChart>
              <Tooltip
              contentStyle={{background:'white', borderRadius:'50px'}}/>

              <Pie
              data={Data}
              dataKey="value"
              innerRadius={"70%"}
              outerRadius={'90%'}
              paddingAngle={5}
              >

                {Data.map((item)=>(
                  <Cell key={item.name} fill={item.color}/>
                ))}
              </Pie>
              
            </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {Data.map((item)=>(
          <div className="option" key={item.name}>
            <div className="title">
              <div className="dot" style={{backgroundColor:item.color}}>
              </div>
                <span>{item.name}</span>
            </div>
              <span>{item.value}</span>
          </div>
        ))}
      </div>

    </div>
  )
}

export default PieChartBox