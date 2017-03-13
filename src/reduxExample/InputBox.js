import React from 'react';

class InputBox extends React.Component {
    handleClick(type) {
        this.props[type](this._input.value);
        this._input.value = '';
        this._input.focus();
    }

    render() {
        return(
            <div>
                <input type="number" ref={ref => { this._input = ref}} />
                <button onClick={() => this.handleClick('save')}>입급</button>
                <button onClick={() => this.handleClick('withdraw')}>출금</button>
            </div>
        );
    }
}

export default InputBox;