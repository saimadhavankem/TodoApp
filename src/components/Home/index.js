import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Todo from "../Todo";
import "./index.css";

class Home extends Component {
  state = { todos: [], text: "", count: 0 };

  onTodoAdd = (event) => {
    this.setState({ text: event.target.value });
  };

  onDelete = (id) => {
    const { todos } = this.state;
    const updatedData = todos.filter((tab) => tab.id !== id);
    this.setState({ todos: updatedData });
  };

  onUpdate = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((eachItem) => {
        if (eachItem.id === id) {
          const updated = eachItem.count + 1;
          return { ...eachItem, count: updated };
        }
        return eachItem;
      }),
    }));
  };

  submitForm = (event) => {
    event.preventDefault();
    const { count, todos, text } = this.state;
    let length = 0;
    const wordList = text.split(" ");
    let num = wordList[wordList.length - 1];

    if (text !== "") {
      const data = {
        id: uuidv4(),
        title: text,
        count: count,
      };
      this.setState((prev) => {
        return { todos: [...prev.todos, data] };
      });
      this.setState({ text: "" });
    }
    if (typeof Number(num) === "number") {
      length = Number(num);
      if (length > 0) {
        let arr = [];
        for (let i = 1; i < length; i++) {
          const data = {
            id: uuidv4(),
            title: text,
            count: count,
          };
          arr.push(data);
        }
        this.setState((prev) => {
          return { todos: [...prev.todos, ...arr] };
        });
        length = 0;
        this.setState({ text: "" });
      }
    }
  };

  render() {
    const { todos, text } = this.state;
    return (
      <div className="bg-container">
        <div className="main-container">
          <h1>Day Goals</h1>
          <form onSubmit={this.submitForm}>
            <input
              placeholder="Enter a task"
              type="text"
              value={text}
              onChange={this.onTodoAdd}
            />
            <button type="submit">Add Todo</button>
          </form>
          <div>
            {todos.map((each) => (
              <Todo
                key={each.id}
                details={each}
                onUpdate={this.onUpdate}
                onDelete={this.onDelete}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
