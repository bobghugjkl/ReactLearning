import React, { Component } from 'react';
class Solution extends Component {
    state = { 
        solutions: [
            { number: 1, title: "斋藤飞鸟", views: 2937 },
            { number: 2, title: "西野七濑", views: 2937 },
            { number: 3, title: "松村沙友理", views: 2937 },
            { number: 4, title: "生田绘梨花", views: 2937 },
            { number: 5, title: "白石麻衣", views: 2937 },
            { number: 6, title: "与田祐希", views: 2937 },
            { number: 7, title: "大园桃子", views: 2937 },
            { number: 8, title: "yxc", views: 2937 },
            
        ]
    } 
    handleDelete = (s) => {
        const solutions = this.state.solutions.filter(solution => solution !== s);
        this.setState({
            solutions: solutions
        })
    }
    render() { 
        if (this.state.solutions.length === 0) {
            return <p>没有啦！！</p>
        }
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Action</th>
                        <th>Do</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.solutions.map(solution => (
                        <tr key={solution.number}>
                            <td>{solution.number }</td>
                            <td>{solution.title }</td>
                            <td>{solution.views }</td>
                            <td><button onClick={()=>this.handleDelete(solution)} class="btn btn-danger">删除</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}
 
export default Solution;