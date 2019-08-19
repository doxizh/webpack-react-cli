import React,{Component} from 'react';
import '../assets/css/count.scss'

function NumberList(props) {
    const numbers=props.numbers;
    const listItems=numbers.map((num)=>{
        return (
            <li>{num}</li>
        )
    });
    console.log(listItems);
    return (
        <ul>
            {listItems}
        </ul>
    )
}
class Count extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            numbers:[]
        };
    }
    componentWillUnmount() {
        console.log('unmount')
    }
    componentDidMount() {
        console.log('mounted')
    }
    addCount=()=>{
        this.setState((state,props)=>{
            return {
                count:state.count+1
            }
        });
        this.setNumbers();
    };
    setNumbers=()=>{
      let arr=[];
      for (let i=0;i<this.state.count;i++){
          arr.push(i);
      }
      this.setState((state,props)=>{
          return {
              numbers: arr
          }
      })
    };
    render() {
        return (
            <div className="count-page">
                <div className="text">{this.state.count}</div>
                <button type="button" onClick={this.addCount}>add</button>
                <NumberList numbers={this.state.numbers}/>
            </div>
        );
    }
}

export default Count;