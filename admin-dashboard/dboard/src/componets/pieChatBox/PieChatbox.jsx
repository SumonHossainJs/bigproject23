import "./PieChatbox.scss";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
const data = [
  {name:"Mobile", value:400, color:"#0099fe"},
  {name:"Desktop", value:700, color:"#00e5fe"},
  {name:"Laptop", value:200, color:"#c1f62f"},
  {name:"Tablet", value:400, color:"#fe0094"},
]
const PieChatbox = () => {
  return (
    <div className="pieChartBox">
      <h1>Leads by Source</h1>
      <div className="chart">
        <ResponsiveContainer width={"99%"} height={300}>
          <PieChart>
            <Tooltip contentStyle={{background:'white', borderRadius:"5px"}}/>
            <Pie 
            data={data}
            innerRadius={"70%"}
            outerRadius={"90%"}
            paddingAngle={5}
            dataKey={"value"}
            >

             {data.map((item)=>(
              <Cell key={item.name} fill={item.color}/>
             ))}
              
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
      {data.map((item)=> (
                <div className="option" key={item.name}>
                  <div className="title">
                    <div className="dot" style={{backgroundColor: item.color}}></div>
                    <span>{item.name}</span>
                  </div>
                  <span>{item.value}</span>
                </div>
              ))}
      </div>
    </div>
  )
}

export default PieChatbox