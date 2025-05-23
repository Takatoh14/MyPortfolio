import "../styles/sns.scss";

import IconList, { SNS } from "./IconList";

const Sns = () => {
  return (
    <div id="SNS" className="sns">
      <div className="inner">
        <h2>SNS</h2>
        <IconList animate="snsIcons" className="snsIcon" icons={SNS} />
      </div>
    </div>
  );
};

export default Sns;
