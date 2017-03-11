import React from 'react';

class InputBox extends React.Component {

  addBtnPressed(){
    console.log(this.ref.textInput);
  }

  render(){
    const add = this.props.add;

    return (
        <div>
          <input
            type="text"
            className="redux-money-input"
            placeholder="숫자를 입력하세요"
            ref={ref => { this.textInput = ref; }}
          />
          <button
            className="redux-button"
            onClick={this.addBtnPressed}
            >
              입금
          </button>
          <button
            className="redux-button"
            onClick={this.props.widthdraw}
            >
              출금
            </button>
        </div>
    )
  }
}

export default InputBox;
