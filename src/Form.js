import React from "react";

function Form(props) {
  return (
    <form className="meme-form" onSubmit={props.submit}>
      <input
        placeholder="Top Text"
        type="text"
        onChange={props.changed}
        value={props.tp.topText}
        name="topText"
      />
      <input
        placeholder="Buttom Text"
        type="text"
        onChange={props.changed}
        value={props.tp.buttomText}
        name="buttomText"
      />

      <button>Gen</button>
    </form>
  );
}

export default Form;
