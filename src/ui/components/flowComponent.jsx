// @flow
const React = require('react');
const { Rect, Circle, Group } = require('react-konva');
const Anchor = require('./Anchor');

class FlowComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0, height: 100, width: 100, draggable: false, showAnchor: false };
    this.addAnchor = this.addAnchor.bind(this);
  }

  componentWillMount() {
    this.setState({
      x: this.props.x,
      y: this.props.y,
      height: this.props.height ? this.props.height : this.state.height,
      width: this.props.width ? this.props.width : this.state.width,
      draggable: this.props.draggable,
      showAnchor: this.props.showAnchor ? this.props.showAnchor : this.state.showAnchor,
    });
  }

  props: {
    x: number,
    y: number,
    height: number,
    width: number,
    draggable: boolean,
    showAnchor: boolean,
  };

  addAnchor(x, y, name) {
    const anchor = (
      <Circle
        ref={(ele) => {
          this[name] = ele;
        }}
        name={name}
        x={x}
        y={y}
        radius={5}
        stroke={'#666'}
        draggable
        dragOnTop={false}
        strokeWidth={this[name] && this[name].strokeWidth ? this[name].strokeWidth : 2}
        shadowBlur={0}
        onMouseOver={() => {
          this[name].strokeWidth = 4;
        }}
      />
    );

    return anchor;
  }

  updateState(newState) {
    const state = Object.assign({}, this.state, newState);
    this.setState(state);
  }

  render() {
    const { x, y, width: w, height: h, draggable: d, showAnchor } = this.state;

    return (
      <Group
        ref={(ele) => {
          this.group = ele;
        }}
        x={x}
        y={y}
        draggable={d}
        onMouseOver={() => {
          this.updateState({ showAnchor: true });
        }}
        onMouseOut={() => {
          this.updateState({ showAnchor: false });
        }}
      >
        <Rect x={x} y={y} width={w} height={h} fill={'red'} />
        <Anchor name="topLeft" x={x} y={y} show={showAnchor} />
        <Anchor name="bottomLeft" x={x} y={y + h} show={showAnchor} />
        <Anchor name="topRight" x={x + w} y={y} show={showAnchor} />
        <Anchor name="bottomRight" x={x + w} y={y + h} show={showAnchor} />
      </Group>
    );
  }
}

module.exports = FlowComponent;
