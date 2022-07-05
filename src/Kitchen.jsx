import Oven from "./Oven";
import Sink from "./Sink";

function Kitchen(props) {
  return (
    <div className="kitchen">
      <span id='kitchenText'>Kitchen</span>
      <Oven />
      <Sink />
    </div>
  )
}

export default Kitchen