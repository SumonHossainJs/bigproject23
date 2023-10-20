import './Home.scss';
import { BarChartBox, BigChatbox, Chatbox, PieChatbox, TopBox } from '../../componets/ExportCom';
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue,
chartBoxUser } from '../../data';

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox/>
      </div>
      <div className="box box2">
        <Chatbox  char={chartBoxUser}/>
      </div>
      <div className="box box3">
        <Chatbox char={chartBoxProduct}/>
      </div>
      <div className="box box4">
        <PieChatbox/>
      </div>
      <div className="box box5">
        <Chatbox char={chartBoxConversion}/>
      </div>
      <div className="box box6">
        <Chatbox char={chartBoxRevenue}/>
      </div>
      <div className="box box7">
        <BigChatbox />
      </div>
      <div className="box box8">
        <BarChartBox char={barChartBoxVisit}/>
      </div>
      <div className="box box9">
        <BarChartBox char={barChartBoxRevenue}/>
      </div>
    </div>
  )
}

export default Home