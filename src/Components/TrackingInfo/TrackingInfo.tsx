import { Typography } from "antd";
import "./TrackingInfo.sass";
const { Title } = Typography;

type TrackingInfoProps = {
  totalCompleted: number;
  lastUpdated: string;
};

const TrackingInfo = (props: TrackingInfoProps) => {
  return (
    <div className="result">
      <div className="space-between">
        <Title level={5} className="result-text">
          Total Completed:
        </Title>
        <Title level={5} className="result-text">
          {props.totalCompleted}
        </Title>
      </div>

      <div className="space-between">
        <Title level={5} className="result-text">
          Last Updated:
        </Title>
        <Title level={5} className="result-text">
          {props.lastUpdated}
        </Title>
      </div>
    </div>
  );
};

export default TrackingInfo;
