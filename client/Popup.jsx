import React from "react";
function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <button className="popup-close crudBtn mainBtn" onClick={()=>props.setTrigger(false)}>cancel</button>
      <button className="popup-save crudBtn mainBtn" onClick={async ()=>{await props.setSave(); props.setTrigger(false) }}>save</button>
      {props.children}
    </div>
  ) : (
    ""
  );
}

export default Popup;
