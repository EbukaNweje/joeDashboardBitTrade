import {useNavigate} from "react-router-dom";
import "./Deposit.css";
import { useState } from "react";

const Deposit = () => {
    const nav = useNavigate();
    const [amount, setAmount] = useState("0.00")
    const [amountError, setAmountError] = useState("")
    const [bitcoin, setBitcoin] = useState(false)
    const [eth, setEth] = useState(false)
    const [doge, setDoge] = useState(false)
    const [bnb, setbnb] = useState(false)
    const [solana, setSolana] = useState(false)
    const [bNBBSC , setBNBBSC ] = useState(false)
    const [xRP, setXRP] = useState(false)
    const [litecoin, setLitecoin] = useState(false)
    const [usdt, setUSDT] = useState(false)
    const [isButtonDisabled, setButtonDisabled] = useState(true);

    const handleAmount = (e) => {
        const newAmount = e.target.value;
        setAmount(newAmount);
        // Validate the email
        if(newAmount.trim() === '') {
            setAmountError('Amount is required');
        }else {
            setAmountError('');
        }
      };

   const submitPayment = () =>{
    if(amount === "0.00"){
        setAmountError('You can not leave this field empty');
    }else{
        localStorage.setItem('amount', JSON.stringify(amount));
        if(bitcoin === true){
            // setBitcoin(true)
            setEth(false)
            setDoge(false)
            setbnb(false)
            setSolana(false)
            setBNBBSC(false)
            setXRP(false)
            setLitecoin(false)
            setUSDT(false)
            nav(`payment/BTC`)
        } else if(eth === true) {
            setBitcoin(false)
            // setEth(true)
            setDoge(false)
            setbnb(false)
            setSolana(false)
            setBNBBSC(false)
            setXRP(false)
            setLitecoin(false)
            setUSDT(false)
          
            nav(`payment/ETH`)
        } else if(doge === true) {
            setBitcoin(false)
            setEth(false)
            // setDoge(true)
            setbnb(false)
            setSolana(false)
            setBNBBSC(false)
            setXRP(false)
            setLitecoin(false)
            setUSDT(false)
          
            nav(`payment/DODGECOIN`)
        } else if(bnb === true) {
            setBitcoin(false)
            setEth(false)
            setDoge(false)
            // setbnb(true)
            setSolana(false)
            setBNBBSC(false)
            setXRP(false)
            setLitecoin(false)
            setUSDT(false)
           
            nav(`payment/BNB`)
        }  
        else if(solana === true) {
            setBitcoin(false)
            setEth(false)
            setDoge(false)
            setbnb(false)
            // setSolana(true)
            setBNBBSC(false)
            setXRP(false)
            setLitecoin(false)
            setUSDT(false)
          
            nav(`payment/SOLANA`)
        }  
        else if(bNBBSC === true) {
            setBitcoin(false)
            setEth(false)
            setDoge(false)
            setbnb(false)
            setSolana(false)
            // setBNBBSC(true)
            setXRP(false)
            setLitecoin(false)
            setUSDT(false)
            
            nav(`payment/BNBBSC`)
        }  
        else if(xRP === true) {
            setBitcoin(false)
            setEth(false)
            setDoge(false)
            setbnb(false)
            setSolana(false)
            setBNBBSC(false)
            // setXRP(true)
            setLitecoin(false)
            setUSDT(false)
            
            nav(`payment/XRP`)
        }  
        else if(litecoin === true) {
            setBitcoin(false)
            setEth(false)
            setDoge(false)
            setbnb(false)
            setSolana(false)
            setBNBBSC(false)
            setXRP(false)
            // setLitecoin(true)
            setUSDT(false)
        
            nav(`payment/LITECOIN`)
        }  
        else if(usdt === true) {
            setBitcoin(false)
            setEth(false)
            setDoge(false)
            setbnb(false)
            setSolana(false)
            setBNBBSC(false)
            setXRP(false)
            setLitecoin(false)
            // setUSDT(true)

            nav(`payment/USDT`)
        }  
    }
   
   }

    return (
        <>
            <div className="DepositBody">
                <h1>Fund your account balance</h1>
                <div className="DepositContent">
                    <div className="DepositContentLeft">
                        <div className="DepositContentLeftTop">
                            <h3>Enter Amount</h3>
                            <input type="text" placeholder="Enter Amount"  onChange={handleAmount}/>
                             <p style={{marginTop: "-3%", marginLeft: "2%", color: "red", fontSize: "12px"}}>{amountError}</p>
                        </div>
                        <div className="DepositContentLeftDown">
                            <h3>Choose Payment Method from the list below</h3>
                            <div className="DepositContentLeftDownInput">
                                <span>BITCOIN PAYMENT</span>
                                <input type="radio"  name="b"
                                    onChange={()=>{
                                        setBitcoin(true)
                                        setEth(false)
                                        setDoge(false)
                                        setbnb(false)
                                        setSolana(false)
                                        setBNBBSC(false)
                                        setXRP(false)
                                        setLitecoin(false)
                                        setUSDT(false)
                                        setButtonDisabled(false)
                                    }}
                                />
                            </div>
                            <div className="DepositContentLeftDownInput">
                                <span>USDT ETHEREUM (Erc 20) PAYMENT</span>
                                <input type="radio"  name="b"
                                    onChange={()=>{
                                        setBitcoin(false)
                                        setEth(true)
                                        setDoge(false)
                                        setbnb(false)
                                        setSolana(false)
                                        setBNBBSC(false)
                                        setXRP(false)
                                        setLitecoin(false)
                                        setUSDT(false)
                                        setButtonDisabled(false)
                                    }}
                                />
                            </div>
                            <div className="DepositContentLeftDownInput">
                                <span>DODGECOIN PAYMENT</span>
                                <input type="radio"  name="b"
                                    onChange={()=>{
                                        setBitcoin(false)
                                        setEth(false)
                                        setDoge(true)
                                        setbnb(false)
                                        setSolana(false)
                                        setBNBBSC(false)
                                        setXRP(false)
                                        setLitecoin(false)
                                        setUSDT(false)
                                        setButtonDisabled(false)
                                    }}
                                />
                            </div>
                            <div className="DepositContentLeftDownInput">
                                <span>BNB (Binance Beacon chain) PAYMENT</span>
                                <input type="radio"  name="b"
                                    onChange={()=>{
                                        setBitcoin(false)
                                        setEth(false)
                                        setDoge(false)
                                        setbnb(true)
                                        setSolana(false)
                                        setBNBBSC(false)
                                        setXRP(false)
                                        setLitecoin(false)
                                        setUSDT(false)
                                        setButtonDisabled(false)
                                    }}
                                />
                            </div>
                            <div className="DepositContentLeftDownInput">
                                <span>BNB BSC (smart chain) PAYMENT</span>
                                <input type="radio"  name="b"
                                    onChange={()=>{
                                        setBitcoin(false)
                                        setEth(false)
                                        setDoge(false)
                                        setbnb(false)
                                        setSolana(false)
                                        setBNBBSC(true)
                                        setXRP(false)
                                        setLitecoin(false)
                                        setUSDT(false)
                                        setButtonDisabled(false)
                                    }}
                                />
                            </div>
                            <div className="DepositContentLeftDownInput">
                                <span>SOLANA PAYMENT</span>
                                <input type="radio"  name="b"
                                    onChange={()=>{
                                        setBitcoin(false)
                                        setEth(false)
                                        setDoge(false)
                                        setbnb(false)
                                        setSolana(true)
                                        setBNBBSC(false)
                                        setXRP(false)
                                        setLitecoin(false)
                                        setUSDT(false)
                                        setButtonDisabled(false)
                                    }}
                                />
                            </div>
                            <div className="DepositContentLeftDownInput">
                                <span>USDT Tron (trc 20) PAYMENT</span>
                                <input type="radio"  name="b"
                                    onChange={()=>{
                                        setBitcoin(false)
                                        setEth(false)
                                        setDoge(false)
                                        setbnb(false)
                                        setSolana(false)
                                        setBNBBSC(false)
                                        setXRP(false)
                                        setLitecoin(false)
                                        setUSDT(true)
                                        setButtonDisabled(false)
                                    }}
                                />
                            </div>
                            <div className="DepositContentLeftDownInput">
                                <span>XRP (ripple) PAYMENT</span>
                                <input type="radio"  name="b"
                                    onChange={()=>{
                                        setBitcoin(false)
                                        setEth(false)
                                        setDoge(false)
                                        setbnb(false)
                                        setSolana(false)
                                        setBNBBSC(false)
                                        setXRP(true)
                                        setLitecoin(false)
                                        setUSDT(false)
                                        setButtonDisabled(false)
                                    }}
                                />
                            </div>
                            <div className="DepositContentLeftDownInput">
                                <span>LITECOIN PAYMENT</span>
                                <input type="radio"  name="b"
                                    onChange={()=>{
                                        setBitcoin(false)
                                        setEth(false)
                                        setDoge(false)
                                        setbnb(false)
                                        setSolana(false)
                                        setBNBBSC(false)
                                        setXRP(false)
                                        setLitecoin(true)
                                        setUSDT(false)
                                        setButtonDisabled(false)
                                    }}
                                />
                            </div>
                                <button 
                                     disabled={isButtonDisabled}
                                     style={{background: `${isButtonDisabled ? "#E0E0E5" : "#0E4152"}`}}
                                onClick={submitPayment}>Proceed to payment</button>
                        </div>
                    </div>
                    <div className="DepositContentRight">
                        <div className="DepositContentRightA">
                            <h4>Total Deposit</h4>
                            <h4 className="DepositContentRightABreak">
                                ${amount} <span>Amount</span>
                            </h4>
                        </div>
                        <div className="DepositContentRightB">
                            <p>View deposit history</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Deposit;
