import React, { Component } from "react";
import { connect } from "react-redux";
import { shareMessages, addRoom } from "../action/index";

const WAIT_INTERVAL = 2000;

class MessageInput extends Component {

  state = {
    socket: this.props.socket,
    pseudo: this.props.currentUser,
    message: "",
  }
  
  componentDidMount = () => {

    this.state.socket.emit("saveSocket", this.state.pseudo);

    this.state.socket.on("message", function(message) {
      console.log("Server msg => " + message);
    });

    this.state.socket.on("updateMsg", (msg, roomId) =>  {
      console.log("recived: "+roomId)
      this.props.addRoom(roomId)
      console.log(msg);
      this.props.shareMessages(msg)
    });
    
  };

  handleSetMessage = event => {
    this.setState({
      message: event.target.value
    });
  };

  handleSendMessage = event => {
    event.preventDefault();
    event.stopPropagation();
    console.log(this.props.room)
    if (this.state.message === "") {
      alert("Votre message est vide");
    } else {
      this.state.socket.emit(
        "newMsg",
        this.state.message,
        this.props.room,
        this.state.pseudo
      );
    }
  };

  render() {
    
    return (
      <div>
        {/*<button onClick={this.createRoom}>create conversation</button>*/}

        <div className="input">
          <div className="dialog">
            <input
              type="text"
              placeholder="Write your message here.."
              onChange={this.handleSetMessage}
            />
            <label htmlFor="file">
              <img src="/img/icons/paper-clip.svg" alt="" />
              <input type="file" id="file" />
            </label>

            <div className="icon">
              <img src="/img/icons/microphone-black-shape.svg" alt="" />
            </div>

            <div className="icon">
              <img src="/img/icons/smiling-emoticon-square-face.svg" alt="" />
            </div>

            <div className="icon send">
              <img
                src="/img/icons/paper-plane (1).svg"
                alt=""
                onClick={this.handleSendMessage}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    socket: state.socket,
    room: state.room,
    selectedUser: state.selectedUser
  };
};
const mapDispatchToProps = { shareMessages, addRoom };
export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);
