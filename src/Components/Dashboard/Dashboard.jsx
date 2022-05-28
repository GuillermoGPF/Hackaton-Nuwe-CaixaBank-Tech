import { Col, Container, Row } from 'react-bootstrap'
import Conversion from '../Conversion/Conversion'
import Expenses from '../Expenses/Expenses'
import Transactions from '../Transactions/Transactions'
import './Dashboard.css'


const Dashboard = () => {
    return (
        <div className='dashboard'>
            <Container fluid>
                <Row>
                    <Col sm={6}>
                        <Transactions />
                        <Conversion />
                    </Col>
                    <Col sm={6}>
                        <Expenses />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Dashboard