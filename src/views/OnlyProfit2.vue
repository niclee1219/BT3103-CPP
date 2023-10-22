<template>
  <div style="text-align: center;" v-if="user">
    <NavBar/>  
    <h1>Welcome to CPP</h1>
    <p>
      Cryptocurrency is a revolutionary digital or virtual form of currency
      that uses cryptography for security. Unlike traditional currencies, it is
      decentralized and operates on a technology called blockchain. In this
      article, we'll explore the exciting world of cryptocurrency.
    </p>
    <h2>What Is Cryptocurrency?</h2>
    <p>
      Cryptocurrency is a type of digital or virtual currency that uses
      cryptography for security. It is decentralized and operates on a
      technology called blockchain, which is a distributed ledger that records
      all transactions across a network of computers. This technology ensures
      transparency, security, and immutability.
    </p>
    <h2>How Does Cryptocurrency Work?</h2>
    <p>
      Cryptocurrency transactions are recorded on a blockchain, which is a
      chain of blocks containing transaction data. Each block is linked to the
      previous one, forming a secure and tamper-resistant ledger. Cryptocurrencies
      are created through a process called mining, and transactions are verified
      by a network of computers (nodes) using consensus mechanisms like Proof
      of Work (PoW) or Proof of Stake (PoS).
    </p>
    <h2>Popular Cryptocurrencies</h2>
    <p>
      There are thousands of cryptocurrencies in existence, but some of the most
      well-known ones include Bitcoin (BTC), Ethereum (ETH), Ripple (XRP), and
      Litecoin (LTC). Each cryptocurrency has its unique features and use cases.
    </p>
    <h2>Benefits of Cryptocurrency</h2>
    <p>
      Cryptocurrency offers several advantages, including decentralization,
      security, low transaction fees, and the potential for financial
      inclusion. It also enables fast and borderless transactions across the globe.
    </p>
    <h2>Risks and Challenges</h2>
    <p>
      Despite its benefits, cryptocurrency is not without risks. Price volatility,
      regulatory challenges, and security concerns are some of the issues faced by
      the crypto industry. It's important to research and understand these risks
      before getting involved.
    </p>
    <LogOut /> <br><br>
  </div>
</template>


<script>
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import firebaseApp from '../firebase';
import NavBar from '../components/NavBar.vue';
import LogOut from '../components/LogOut.vue';

export default {
  name: 'profit2',
  components: {
    NavBar,
    LogOut,
  },
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    const auth = getAuth(firebaseApp);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
      }
    });
  },
};
</script>
