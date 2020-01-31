import React, { Component } from "react";
import { connect } from "react-redux";
import DisplayNote from "components/DisplayNote";

class CompletedNotesContainer extends Component {
  getDate = () => {
    let date = new Date();
    let month = date.getMonth();
    let day = date.getDate();
    let year = date.getFullYear();
    let minutes = date.getMinutes();
    let hour = date.getHours();
    if (hour > 12) {
      hour = hour - 12;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${month}/${day}/${year} at ${hour}:${minutes}`;
  };
  renderContent = (notes, completedNotes, getDate) => {
    let time = getDate();
    if (notes.length < 1 && completedNotes < 1) {
      return;
    } else {
      return (
        <div style={styles.holder}>
          <p style={styles.title}>Completed Notes ({completedNotes.length})</p>
          <div>
            {this.props.completed.map((completedNote, i) => {
              return (
                <DisplayNote
                  key={i}
                  note={completedNote}
                  status="completed"
                  time={time}
                />
              );
            })}
          </div>
        </div>
      );
    }
  };
  render() {
    return (
      <div>
        {this.renderContent(
          this.props.notes,
          this.props.completed,
          this.getDate
        )}
      </div>
    );
  }
}

const styles = {
  holder: {
    width: "100%",

    marginTop: 50
  },
  title: {
    padding: 10,
    color: "white",
    backgroundColor: "blue"
  }
};

function mapStateToProps(state) {
  return { completed: state.completed, notes: state.notes };
}

export default connect(mapStateToProps)(CompletedNotesContainer);
