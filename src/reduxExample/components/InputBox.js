import React from 'react';

class InputBox extends React.Component {

  handleClick(type){
    this.props[type](this._input.value);
    this._input.value = '';
    this._input.focus();
  }

  render(){
    const add = this.props.add;

    return (
        <div>
          <input
            type="number"
            className="redux-money-input"
            placeholder="숫자를 입력하세요"
            ref={ref => { this._input = ref; }}
          />
          <button
            className="redux-button"
            onClick={() => this.handleClick('save')}
            >
              입금
          </button>
          <button
            className="redux-button"
            onClick={() => this.handleClick('withdraw')}
            >
              출금
            </button>
        </div>
    )
  }
}

export default InputBox;
