import {useState, useEffect} from "react";
import {ethers} from "ethers";
import dotaRNG_abi from "../artifacts/contracts/DotaRNG.sol/DotaRNG.json";

export default function HomePage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [dotaRNG, setDotaRNG] = useState(undefined);
  const [items, setItems] = useState([]);

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const dotaRNGABI = dotaRNG_abi.abi;

  useEffect(() => {
    getWallet();
  }, []);

  const getWallet = async() => {
    if (window.ethereum) {
      setEthWallet(window.ethereum);
    }

    if (ethWallet) {
      try {
        const accounts = await ethWallet.request({method: "eth_accounts"});
        handleAccount(accounts);
      } catch (error) {
        console.error("Error fetching accounts: ", error);
        alert("Error fetching accounts: " + error.message);
      }
    }
  }

  const handleAccount = (account) => {
    if (account) {
      console.log ("Account connected: ", account);
      setAccount(account);
    }
    else {
      console.log("No account found");
    }
  }

  const connectAccount = async() => {
    if (!ethWallet) {
      alert('MetaMask wallet is required to connect');
      return;
    }
  
    const accounts = await ethWallet.request({ method: 'eth_requestAccounts' });
    handleAccount(accounts);
    
    getDotaRNGContract();
  };

  const getDotaRNGContract = () => {
    const provider = new ethers.providers.Web3Provider(ethWallet);
    const signer = provider.getSigner();
    const rngContract = new ethers.Contract(contractAddress, dotaRNGABI, signer);
 
    setDotaRNG(rngContract);
  }

  const getItems = async () => {
    try {
      if (dotaRNG) {
        const userItems = await dotaRNG.getMyItems();
        console.log("Items: ", userItems);
        setItems(userItems);
      }
    } catch (error) {
      console.error("Error fetching items: ", error);
      alert("Error fetching items: " + error.message);
    }
  };

  const buyCommonItem = async () => {
    if (!dotaRNG) return;
  
    try {
      const tx = await dotaRNG.buyCommonItem({
        value: ethers.utils.parseEther("1"),
      });
      await tx.wait();
      console.log("Common item purchased.");
      getItems();
    } catch (error) {
      console.error("Transaction error:", error);
      alert("An error occurred while processing the transaction.");
    }
  };
  
  const buyArcana = async () => {
    if (!dotaRNG) return;
  
    try {
      const tx = await dotaRNG.buyArcana({
        value: ethers.utils.parseEther("2"),
      });
      await tx.wait();
      console.log("Arcana purchased.");
      getItems();
    } catch (error) {
      console.error("Transaction error:", error);
      alert("An error occurred while processing the transaction.");
    }
  };
  
  const buyMythicalItem = async () => {
    if (!dotaRNG) return;
  
    try {
      const tx = await dotaRNG.buyMythicalItem({
        value: ethers.utils.parseEther("5"),
      });
      await tx.wait();
      console.log("Mythical item purchased.");
      getItems();
    } catch (error) {
      console.error("Transaction error:", error);
      alert("An error occurred while processing the transaction.");
    }
  };
  
  const buyLegendaryItem = async () => {
    if (!dotaRNG) return;
  
    try {
      const tx = await dotaRNG.buyLegendaryItem({
        value: ethers.utils.parseEther("10"),
      });
      await tx.wait();
      console.log("Legendary item purchased.");
      getItems();
    } catch (error) {
      console.error("Transaction error:", error);
      alert("An error occurred while processing the transaction.");
    }
  };

  const initUser = () => {
    if (!ethWallet) {
      return <p>Please install Metamask in order to use this ATM.</p>
    }

    if (!account) {
      return <button onClick={connectAccount}>Please connect your Metamask wallet</button>
    }
    
    return (
      <div>
        <p>Your Account: {account}</p>
        <p>You got: {items.length > 0 ? items[items.length - 1] : 'No items yet!'}</p>
        <button onClick={() => buyCommonItem("1", "Dead of Reckoning Chest")}>Buy Common Item (1 ETH)</button>
        <button onClick={() => buyArcana("2", "Feast of Abscession")}>Buy Arcana (2 ETH)</button>
        <button onClick={() => buyMythicalItem("5", "Dragonclaw Hook")}>Buy Mythical Item (5 ETH)</button>
        <button onClick={() => buyLegendaryItem("10", "Legacy Ethereal Flames Wardog")}>Buy Legendary Item (10 ETH)</button>
      </div>
    );
  };


  return (
    <div>
      <h1>Welcome to Dota 2 RNG Community Market!</h1>
      <div style={{ textAlign: 'center' }}>
        {initUser()}
      </div>
      <h3>Your item collections:</h3>
      <ul style={{ textAlign: 'left' }}>
        {items.length === 0 ? (
          <li>No items purchased yet</li>
        ) : (
          items.map((item, index) => <li key={index}>{item}</li>)
        )}
      </ul>
      <style jsx>{`
        body {
          background-color: #007bff;
          margin: 0;
          padding: 0;
        }
        div {
          text-align: center;
          font-family: Arial, sans-serif;
        }
        h1 {
          background-color: #2a3b5f;
          color: white;
          padding: 20px;
          margin-bottom: 20px;
        }
        h3 {
          margin-top: 20px;
          text-align: left;
        }
        button {
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        button:hover {
          background-color: #0056b3;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        li {
          margin: 5px 0;
          padding: 5px;
          background-color: #f4f4f4;
          border: 1px solid #ddd;
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
}