import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Row, Col } from '@nio/ui-kit';

export default class Page extends React.Component {
  componentDidMount = () => {
    const { pkClient } = this.props;
    pkClient.addPatron('*.*', patron => patron.on('message', this.writeDataToState));
  };

  componentWillUnmount = () => {
    if (this.pkClient) this.pkClient.disconnect();
  };

  writeDataToState = (data) => {
    const json = new TextDecoder().decode(data);
    const newData = Array.isArray(JSON.parse(json)) ? JSON.parse(json)[0] : JSON.parse(json);
    this.setState(newData);
    console.log(newData);
  };

  render = () => {
    return (
      <Row>
        <Col xs="4" className="text-center">
          <Card>
            <CardBody className="p-3">
              <h5 className="m-0">Topic 1</h5>
              <hr />
            </CardBody>
          </Card>
        </Col>
        <Col xs="4" className="text-center">
          <Card>
            <CardBody className="p-3">
              <h5 className="m-0">Topic 2</h5>
              <hr />
            </CardBody>
          </Card>
        </Col>
        <Col xs="4" className="text-center">
          <Card>
            <CardBody className="p-3">
              <h5 className="m-0">Topic 3</h5>
              <hr />
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  };
}

Page.propTypes = {
  pkClient: PropTypes.object.isRequired,
};
