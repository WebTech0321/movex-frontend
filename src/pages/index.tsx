import React, {useState, useEffect, useRef} from "react"
import { Row, Col } from "react-bootstrap";
import Card from "components/Card"
import Button from "components/Button"
import TokenPanel from "components/TokenPanel";
import SpinPanel from "components/SpinPanel";
import { Tokens } from "../constants";

export const Home = () => {
    const [token1Val, setToken1Val] = useState<number | null>(null)
    const [token2Val, setToken2Val] = useState<number | null>(null)
    const [minVal, setMinVal] = useState<number | null>(null)
    const [maxVal, setMaxVal] = useState<number | null>(null)

	return (
		<div className="app-container">
            <Card className="co-screen-center" title="Add liquidity">
                <div className="label-lg mb-2">Deposit Pair to receive LP tokens</div>
                <Row className="token-panel-container gx-2 gy-2">
                    <Col>
                        <TokenPanel 
                            token={Tokens["movex"]} 
                            priceInUSD={67} 
                            balance={332.32} 
                            value={token1Val} 
                            onChange={setToken1Val}
                        />
                    </Col>
                    <Col>
                        <TokenPanel 
                            token={Tokens["usdc"]} 
                            priceInUSD={1} 
                            balance={80000} 
                            value={token2Val} 
                            onChange={setToken2Val}
                        />
                    </Col>
                </Row>
                <Row className="spin-panel-container gx-2 gy-2">
                    <Col>
                        <SpinPanel 
                            title="Min"
                            token1={Tokens["movex"]}
                            token2={Tokens["usdc"]}
                            value={minVal}
                            onChange={setMinVal}
                        /> 
                    </Col>
                    <Col>
                        <SpinPanel 
                            title="Max"
                            token1={Tokens["movex"]}
                            token2={Tokens["usdc"]}
                            value={maxVal}
                            onChange={setMaxVal}
                        /> 
                    </Col>
                </Row>
                <Button variant="primary" className="round w-100" size="lg" disabled={!token1Val || !token2Val}>Confirm</Button>
            </Card>
		</div>
	)
}

export default Home