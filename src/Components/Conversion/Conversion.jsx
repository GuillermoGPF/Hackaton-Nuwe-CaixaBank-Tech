import { Card, Col, Row } from 'react-bootstrap'
import { Pie } from 'react-chartjs-2'
import './Conversion.css'


const Conversion = ({ chartData }) => {
    return (
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <h3>Conversion</h3>
                        {/* <Pie data={chartData} /> */}
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Conversion