import React from "react";
function Popup(props) {
  const handleClick = (e) => {
    e.stopPropagation(); 
  }
  return props.trigger ? (
    <div className="popup" onClick={handleClick}>
      <button className="popup-close crudBtn mainBtn" onClick={()=>props.setTrigger(false)}>cancel</button>
      <button className="popup-save crudBtn mainBtn" onClick={async ()=>{await props.setSave(); props.setTrigger(false) }}>save</button>
      {props.children}
    </div>
  ) : (
    ""
  );
}

export default Popup;
