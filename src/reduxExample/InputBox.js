import React from 'react';

class InputBox extends React.Component {
    handleKeyDown(e) {
        const key = String.fromCharCode(e.keyCode);
        if(!/[0-9]/.test(key)) {
            e.preventDefault();
        };
    }

    handleClick(e, type) {
        const amount = this.moneyInput.value;
        if (amount.length) {
            this.props.addTransaction(type, amount);
            this.moneyInput.value = '';
        }
    }

    render() {
        return(
            <header>
                <input 
                    type="text"
                    ref={ref => { this.moneyInput = ref; }}
                    onKeyDown={e => this.handleKeyDown(e)}
                />
                <button
                    type="button"
                    onClick={e => this.handleClick(e, 'save')}
                >입금</button>
                <button
                    type="button"
                    onClick={e => this.handleClick(e, 'withdraw')}
                >출금</button>
            </header>
        );
    }
}

export default InputBox;