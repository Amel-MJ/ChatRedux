import React, { Component } from 'react'

import Profil from './profil'
import Deconnection from './deconnection'
import Contact from './contact'
import ChatTeams from "./chatTeams"
import ChatBox from "./chatBox"
import MessageInput from "./messageInput"

class dashboard extends Component {

    render() {
        const {user} = this.props.match.params

        return (
          <div className="dashboard">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 menu">
                <div className="basic">
                  <div className="msgs">
                    <h6>
                      <img alt="icons" src="/img/icons/speech-bubble.svg" />
                      messages
                  </h6>
                  <div className="msgs-sqaure">
                      <Profil />
                      <Deconnection />
                    </div>
                  </div>
                  <div className="contacts">
                      <div className="people">
                        <h6>contacts(22)</h6>
                        <Contact currentUser={user}/>
                      </div>
                      <button>
                        see all
                    </button>
                    </div>
                </div>
               
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 chat">
                  <ChatTeams currentUser={user}/>
                  <div className="chat-box">
                    <ChatBox currentUser={user}/>
                  </div>
                  <MessageInput currentUser={user}/>
                </div>
            </div>
    
          </div>
        );
      }
}

export default dashboard
