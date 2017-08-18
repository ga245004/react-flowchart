// @flow
const React = require('react');
const { Layer, Stage } = require('react-konva');
const FlowComponent = require('./components/flowComponent');
const { Jumbotron, Button } = require('react-bootstrap');
const OptionsModal = require('./containers/OptionsModal');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { height: 0, width: 0 };
  }

  componentWillMount() {
    this.setState({
      width: this.props.width,
      height: this.props.height,
      showOptionModal: false,
      showCanvas: false,
    });
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions.bind(this));
    this.updateDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  props: {
    height: number,
    width: number,
  };

  updateDimensions() {
    const height = document.getElementsByTagName('body')[0].clientHeight;
    const width = document.getElementsByTagName('body')[0].clientWidth;
    this.setState({ width, height });
  }

  render() {
    const { width, height } = this.state;

    return (
      <div
        ref={(ele) => {
          this.screen = ele;
        }}
      >
        <Stage
          width={width}
          height={height}
          style={{ display: this.state.showCanvas ? '' : 'none' }}
        >
          <Layer>
            <FlowComponent x={10} y={10} width={50} height={50} draggable />
          </Layer>
        </Stage>

        <Jumbotron style={{ textAlign: 'center' }}>
          <div style={{ width: '60%', margin: 'auto' }}>
            <h1>Welcome To React Canvas</h1>
            <p>Pick a Option or Draw something..</p>
            <p>
              <Button
                bsStyle="primary"
                onClick={() => {
                  this.setState({ showOptionModal: true });
                }}
              >
                Options
              </Button>
              <Button
                bsStyle="primary"
                onClick={() => {
                  this.setState({ showCanvas: true });
                }}
              >
                Start
              </Button>
            </p>
          </div>
          <OptionsModal
            show={this.state.showOptionModal}
            onHide={() => {
              this.setState({ showOptionModal: false });
            }}
          />
          <Button
            bsStyle="primary"
            style={{
              zIndex: 10000,
              position: 'absolute',
              top: 10,
              right: 20,
              display: this.state.showCanvas ? '' : 'none',
            }}
            onClick={() => {
              this.setState({ showCanvas: false });
            }}
          >
            Close
          </Button>
        </Jumbotron>
      </div>
    );
  }
}

module.exports = App;
