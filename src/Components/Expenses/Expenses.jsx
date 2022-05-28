import { Button, Card, Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import './Expenses.css'
import { Line } from 'react-chartjs-2'


const Expenses = () => {
    return (
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h3>Weekly expenses</h3>
                            <Button className='button'>
                                Oct - Nov 2019 <FontAwesomeIcon icon={faCalendar} />
                            </Button>
                        </div>
                        {/* <Line /> */}
                        <small>
                            Total Revenue
                        </small>
                        <p className='price'>
                            $76685,41
                        </p>
                        <p className='up'>
                            <FontAwesomeIcon icon={faArrowUp} /> 7,00%
                        </p>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Expenses