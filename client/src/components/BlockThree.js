import './Block.scss';

export default function Block(props) {

  return(
    <div className="blocks">

      <div className="container">
        <div className="block" id="block-three" onClick={props.onClick}>
          <div className="face front"></div>
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