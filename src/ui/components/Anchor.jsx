// @flow
const React = require('react');
const { Circle } = require('react-konva');

const DefaultAnchorProps = {
  strokeWidth: 2,
  strokeWidthHover: 3,
};

class Anchor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'anchor',
      x: 0,
      y: 0,
      radius: 5,
      draggable: true,
      strokeWidth: DefaultAnchorProps.strokeWidth,
      show: false,
    };
  }

  componentWillMount() {
    const oldState = this.state;

    const newState = Object.assign({}, oldState);
    newState.x = this.props.x ? this.props.x : this.state.x;
    newState.y = this.props.y ? this.props.y : this.state.y;
    newState.name = this.props.name ? this.props.name : this.state.name;
    newState.height = this.props.radius ? this.props.radius : this.state.radius;
    newState.draggable = this.props.draggable ? this.props.draggable : this.state.draggable;
    newState.strokeWidth = this.props.strokeWidth ? this.props.strokeWidth : this.state.strokeWidth;
    newState.show = this.props.show ? this.props.show : this.state.show;

    this.setState(newState);
  }

  componentWillReceiveProps(nextProps) {
    const oldState = this.state;

    const newState = Object.assign({}, oldState);
    newState.x = nextProps.x ? nextProps.x : this.state.x;
    newState.y = nextProps.y ? nextProps.y : this.state.y;
    newState.name = nextProps.name ? nextProps.name : this.state.name;
    newState.height = nextProps.radius ? nextProps.radius : this.state.radius;
    newState.draggable = nextProps.draggable ? nextProps.draggable : this.state.draggable;
    newState.strokeWidth = nextProps.strokeWidth ? nextProps.strokeWidth : this.state.strokeWidth;
    newState.show = nextProps.show;

    this.setState(newState);
  }

  updateState(newState) {
    const state = Object.assign({}, this.state, newState);
    this.setState(state);
  }

  props: {
    name: string,
    x: number,
    y: number,
    radius: number,
    draggable: boolean,
    strokeWidth: number,
    show: boolean,
  };

  render() {
    const { name, x, y, radius, draggable, strokeWidth, show } = this.state;
    return (
      <Circle
        ref={(e) => {
          this.anchor = e;
        }}
        name={name}
        x={x}
        y={y}
        radius={radius}
        stroke={'#666'}
        draggable={draggable}
        dragOnTop={false}
        strokeWidth={strokeWidth}
        visible={show}
        onMouseOver={() => {
          document.body.style.cursor = 'pointer';
          this.updateState({ strokeWidth: DefaultAnchorProps.strokeWidthHover });
        }}
        onMouseOut={() => {
          document.body.style.cursor = 'default';
          this.updateState({ strokeWidth: DefaultAnchorProps.strokeWidth });
        }}
        onMouseDown={() => {}}
        onTouchStart={() => {}}
        onDragMove={() => {
          this.updateState({ x: this.anchor.getX(), y: this.anchor.getY() });
        }}
        onDragEnd={() => {}}
      />
    );
  }
}

module.exports = Anchor;
