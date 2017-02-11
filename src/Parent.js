

class Parent extends React.Component{
	constrouctor(){
		super();
		this.state = {
			list: [0]
		}

		this.addChild = this.addChild.bind(this);
		this.removeCild = this.removeChild.bind(this);
	}

	addChild() {
		const nextList = [...this.state.list];
		nextList.push(nextList.length);
		this.setState({ list: nextList });
	}
	removeChild(){
		const nextList = [...this.state.list];
		nextList.pop();
		this.setState({list: nextList});
	}
	render(){
		if(!this.state.list.length) return(
			<button onClick= {this.addChild}> 자식추가</button>
		);
		return(){
			<div>
				<Child list={this.state.list} />
				<button onClick={this.addChild}>자시추가</button>
				<button onClick={this.removeChild}>자식삭제</button>

			</div>
		}
	}



}