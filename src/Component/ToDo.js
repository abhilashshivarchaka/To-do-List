// Reference: took help from friend and git hub
import React, { Component } from "react";
export default class AddTodo extends Component {
    
    render() {
        return (
            <div >
                <h3>
                    Add ToDo
                </h3>
                <form>
                    <div className="form-group" >
                        <input value={this.state.Id} className="form-control" placeholder="Enter Id" />
                    </div>
                    <div className="form-group" >
                        <input value={this.state.Title} className="form-control" placeholder="Enter Title" />
                    </div>
                    <div className="form-group">
                        <select value={this.state.Status} className="form-control" >
                            <option value="Done" >Done</option>
                            <option value="Pending" >Pending</option>
                        </select>
                    </div>
                    <button type="submit" className="form-control btn btn-primary" >Add Todo</button>
                </form>
            </div>
        );
    }
}