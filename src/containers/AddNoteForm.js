import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions/";
import Button from "@material-ui/core/Button";

class AddNoteForm extends Component {
  constructor() {
    super();
    this.state = { input: "", error: false };
  }

  handleChange = e => {
    this.setState({ input: e.target.value, error: false });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.input !== "") {
      this.props.addNote(this.state.input);
      this.props.toggleOverlay(false);
      this.setState({ input: "" });
      this.props.noteButtonClicked();
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    let textAreaStyles;
    if (this.state.error) {
      textAreaStyles = styles.textAreaWithError;
    } else {
      textAreaStyles = styles.textArea;
    }
    return (
      <div style={styles.formHolder}>
        <form onSubmit={this.handleSubmit} style={styles.form}>
          <label>
            <textarea
              value={this.state.input}
              onChange={this.handleChange}
              placeholder="Leave a note for yourself!"
              style={textAreaStyles}
            />
          </label>
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            style={styles.submitButton}
          >
            Save
          </Button>
        </form>
      </div>
    );
  }
}

const styles = {
  formHolder: {
    width: "100%",
    paddingTop: 120,
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    zIndex: 10
  },
  form: {
    height: "500px",
    width: "400px"
  },
  textArea: {
    height: "500px",
    width: "100%",
    margin: "0 auto",
    backgroundColor: "#FFFFE0",
    fontSize: 18
  },
  textAreaWithError: {
    height: "500px",
    width: "100%",
    margin: "0 auto",
    backgroundColor: "#FFFFE0",
    fontSize: 18,
    border: "2px solid #F13006"
  },
  input: {
    display: "block",
    margin: "0 auto",
    backgroundColor: "green"
  },
  submitButton: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    marginBottom: 10
  }
};

export default connect(
  null,
  actions
)(AddNoteForm);
