import React from 'react';

class InputBox extends React.Component{
  handleClick(e, type){
    this.props[type](this._input.value);
    this._input.value = '';
    this._input.focus();
  }
  render(){
    return(
      <div>
        <input type="number" ref={ref => {
          this._input = ref}}/>
        <button onClick={()=> this.handleClick('save')}>save</button>
        <button onClick={()=> this.handleClick('withdraw')}>withdraw</button>
      </div>
    );
  }
}

export default InputBox;
