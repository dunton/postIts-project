import React, { Component } from "react";
import AddNoteForm from "containers/AddNoteForm";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import * as actions from "actions/";

class AddNoteButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  noteButtonClicked = () => {
    this.setState({ clicked: false });
  };

  handleClick = e => {
    this.setState({ clicked: true });
    this.props.toggleOverlay(true);
  };

  renderContent = () => {
    if (this.state.clicked) {
      return (
        <div>
          <AddNoteForm noteButtonClicked={this.noteButtonClicked} />
        </div>
      );
    } else {
      return (
        <div onClick={this.handleClick} style={styles.wrapButton}>
          <p style={styles.text}>Write a note!</p>
          <Button
            variant="fab"
            color="secondary"
            aria-label="Edit"
            className="material-icons"
          >
            <Icon>edit_button</Icon>
          </Button>
        </div>
      );
    }
  };

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

const styles = {
  wrapButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    paddingRight: 15,
    fontSize: 20
  }
};

function mapStateToProps(state) {
  return { overlay: state.clicked };
}

export default connect(
  mapStateToProps,
  actions
)(AddNoteButton);
