import "../styles/sns.scss";

import IconList from "./IconList";
import { SNS } from "./Images";

const Sns = () => {
  return (
    <div id="SNS" className="sns">
      <div className="inner">
        <h2>SNS</h2>
        <IconList slider="snsIcons" className="snsIcon" icons={SNS} />
      </div>
    </div>
  );
};

export default Sns;
