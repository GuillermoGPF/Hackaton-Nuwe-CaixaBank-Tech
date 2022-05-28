import { Card, Col, Row } from 'react-bootstrap'
import data from '../../data/data'
import './Transactions.css'


const Transactions = () => {
    return (
        <Row className='transactions'>
            {
                data.map(elm => {
                    return (
                        <Col key={elm.id}>
                            <Card>
                                <Card.Body>
                                    <h3>Transactions</h3>
                                    <p>{elm.day}</p>
                                    <small>{elm.subtitle}</small>
                                </Card.Body>
                            </Card>
                        </Col>

                    )
                })
            }
        </Row>
    )
}

export default Transactions