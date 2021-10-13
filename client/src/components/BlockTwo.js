import './Block.scss';

export default function Block(props) {

  return(
    <div className="blocks">

      <div className="container">
        <div className="block" id="block-two" onClick={props.onClick}>
          <div className="face front">{props.blockTwo}</div>
          <div className="face back"></div>
          <div className="face right"></div>
          <div className="face left"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>
      </div>

    </div>
  )
};