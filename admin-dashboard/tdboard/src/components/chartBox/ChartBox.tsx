import "./ChartBox.scss";


type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};

const ChartBox = (props:Props) => {
  return (
    <div>ChartBox</div>
  )
}

export default ChartBox