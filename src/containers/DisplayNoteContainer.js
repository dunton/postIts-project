import React, { Component } from "react";
import { connect } from "react-redux";
import DisplayNote from "components/DisplayNote";

class DisplayNoteContainer extends Component {
  render() {
    let containerStyles;

    if (this.props.overlayStatus) {
      containerStyles = styles.containerWithOverlay;
    } else {
      containerStyles = styles.container;
    }

    return (
      <div style={containerStyles}>
        {this.props.notes.map((note, i) => {
          return <DisplayNote key={i} note={note} position={i} />;
        })}
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  containerWithOverlay: {
    display: "flex",
    flexWrap: "wrap",
    opacity: 0.4
  }
};

function mapDispatchToProps(state) {
  return { notes: state.notes };
}

export default connect(mapDispatchToProps)(DisplayNoteContainer);
