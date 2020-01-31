import React, { Component } from "react";
import AddNoteButton from "components/AddNoteButton";
import DisplayNoteContainer from "containers/DisplayNoteContainer";
import CompletedNotesContainer from "containers/CompletedNoteHolder";
import { connect } from "react-redux";

class App extends Component {
  render() {
    let stylingChoice;
    if (this.props.overlay) {
      stylingChoice = styles.overlayStyles;
    } else {
      stylingChoice = styles.mainStyles;
    }
    return (
      <div style={stylingChoice}>
        <AddNoteButton />
        <DisplayNoteContainer overlayStatus={this.props.overlay} />
        <CompletedNotesContainer />
      </div>
    );
  }
}

const styles = {
  mainStyles: {
    height: "100%",
    width: "100%",
    backgroundColor: "white"
  },
  overlayStyles: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: 0
  }
};

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(App);
