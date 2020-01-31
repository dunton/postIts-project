import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions/";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";

class DisplayNote extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false
    };
  }
  removeNote = e => {
    this.props.removeNote(this.props.position);
  };

  noteCompleted = e => {
    this.props.noteCompleted(this.props.note);
    this.props.removeNote(this.props.position);
  };

  toggleExpanded = e => {
    return this.state.expanded
      ? this.setState({ expanded: false })
      : this.setState({ expanded: true });
  };

  changeIcon = () => {
    if (this.state.expanded) {
      return (
        <Icon style={styles.completedNote.icon} onClick={this.toggleExpanded}>
          minimize
        </Icon>
      );
    } else {
      return (
        <Icon style={styles.completedNote.icon} onClick={this.toggleExpanded}>
          add_circle
        </Icon>
      );
    }
  };

  styleExpanded = () => {
    if (this.state.expanded) {
      return styles.completedNote.mainExpanded;
    } else {
      return styles.completedNote.main;
    }
  };

  renderContent = status => {
    let icon = this.changeIcon();
    let expandedStyle = this.styleExpanded();
    if (status === "completed") {
      return (
        <div style={expandedStyle}>
          <div style={styles.completedNote.header}>
            <p style={styles.completedNote.indent}>
              Completed {this.props.time}
            </p>
            {icon}
          </div>
          <div style={styles.completedNote.showNote}>
            <p style={styles.completedNote.indent}>Note: {this.props.note}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div style={styles.displayContainer}>
          <div style={styles.note}>
            <p>{this.props.note}</p>
          </div>
          <div style={styles.doneButtonContainer}>
            <Button
              variant="contained"
              style={styles.doneButton}
              onClick={this.noteCompleted}
            >
              <Icon>done_outline</Icon>
            </Button>
            <Button
              variant="contained"
              style={styles.deleteButton}
              onClick={this.removeNote}
            >
              <Icon>delete_outline</Icon>
            </Button>
          </div>
        </div>
      );
    }
  };
  render() {
    return <div>{this.renderContent(this.props.status)}</div>;
  }
}

const styles = {
  displayContainer: {
    height: "500px",
    width: "300px",
    backgroundColor: "#FFFFE0",
    marginRight: 20,
    marginTop: 20,
    transition: "1s ease-in"
  },

  note: {
    padding: 10,
    fontSize: 18,
    height: 410
  },
  doneButtonContainer: {
    marginLeft: 82
  },
  doneButton: {
    backgroundColor: "#00FFFF"
  },
  deleteButton: {
    backgroundColor: "green"
  },
  completedNote: {
    main: {
      backgroundColor: "#D3D3D3",
      width: "100%",
      height: "50px",
      overflow: "hidden",
      marginTop: 20
    },
    mainExpanded: {
      backgroundColor: "#D3D3D3",
      width: "100%",
      marginTop: 20
    },
    header: {
      display: "flex"
    },
    icon: {
      marginLeft: "80%",
      marginTop: 11
    },
    showNote: {
      paddingBottom: 20
    },
    indent: {
      paddingLeft: 10
    }
  }
};

export default connect(
  null,
  actions
)(DisplayNote);
