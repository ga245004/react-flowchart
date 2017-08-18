// @flow
const React = require('react');
const { Modal, Button, Grid, Row, Col } = require('react-bootstrap');

module.exports = class OptionsModel extends React.Component {
  constructor(props) {
    super(props);
    this.onHide = this.onHide.bind(this);
  }
  onHide() {
    const { onHide } = this.props;
    if (onHide) {
      onHide();
    }
  }

  props: {
    onHide: any,
  };

  render() {
    return (
      <Modal {...this.props} bsSize="lg" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ overflow: 'auto' }}>
          <h4>Wrapped Text</h4>

          <Grid>
            <Row className="show-grid" style={{ border: '1px solid red' }}>
              <Col xs={6} md={6} style={{ border: '1px solid' }}>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros.
              </Col>
              <Col xs={6} md={6} style={{ border: '1px solid' }}>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros.
              </Col>
            </Row>

            <Row className="show-grid" style={{ border: '1px solid red' }}>
              <Col xs={6} md={4} style={{ border: '1px solid' }}>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros.
              </Col>
              <Col xs={6} md={4} style={{ border: '1px solid' }}>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros.
              </Col>
              <Col xsHidden md={4} style={{ border: '1px solid' }}>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros.
              </Col>
            </Row>

            <Row className="show-grid" style={{ border: '1px solid red' }}>
              <Col xs={6} xsOffset={6} style={{ border: '1px solid' }}>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros.
              </Col>
            </Row>

            <Row className="show-grid" style={{ border: '1px solid red' }}>
              <Col md={6} mdPush={6} style={{ border: '1px solid' }}>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros.
              </Col>
              <Col md={6} mdPull={6} style={{ border: '1px solid' }}>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
                facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                vestibulum at eros.
              </Col>
            </Row>
          </Grid>

          <p />
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
};
