const React = require('react');
const ReactKonva = require('react-konva');

class ReduxKonvaShapeContainer extends React.Component {
  render() {
    return (
      <ReactKonva.Stage
        height={this.props.height}
        width={this.props.width}
        style={this.props.style}
      />
    );
  }
}

ReduxKonvaShapeContainer.propTypes = {
  height: React.PropTypes.int.isRequired,
  width: React.PropTypes.int.isRequired,
  style: React.PropTypes.string.isRequired,
};

module.exports = ReduxKonvaShapeContainer;
