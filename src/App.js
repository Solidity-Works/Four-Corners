import './App.css';
import React, {useState,Component} from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Select from 'react-select';


import BigNumber from 'bignumber.js';
import {ethers,providers} from 'ethers';

import Logo from './FourCornersLogoV3.png';
import Background from './FourCornersStandoffV2.png';
//import Logo from './FourCornersLogo.png'; //sniper crosshair logo
//import WalletConnectProvider from "@walletconnect/web3-provider";
//import WalletConnect from "@walletconnect/client";
//import Web3Connect from "web3connect";

/*
  * Contributors ↓ "alias 1 / alias 2 / ... / alias n"
  Big Bo / j301k / Solidity Works

*/
const abi = [{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"user","type":"address"},{"internalType":"bool","name":"approved","type":"bool"},{"internalType":"bool","name":"bigAdmin","type":"bool"}],"name":"changeAdmins","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"bank","type":"address"}],"name":"changeBank","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"changeBigAdmins","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"bank","type":"address"}],"name":"changeBigBank","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"fee","type":"uint256"}],"name":"changeBigFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"fee","type":"uint256"},{"internalType":"bool","name":"percentageFee","type":"bool"}],"name":"changeFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"length","type":"uint256"}],"name":"changeRoundLength","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"init","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint8","name":"team","type":"uint8"}],"name":"play","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"randomLoser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"stopStart","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint24","name":"round","type":"uint24"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"admins","outputs":[{"internalType":"bool","name":"approved","type":"bool"},{"internalType":"bool","name":"bigAdmin","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"bigAdmins","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bigBank","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bigFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"b","type":"bytes"}],"name":"bytesToUint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint24","name":"","type":"uint24"}],"name":"losers","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint24","name":"","type":"uint24"},{"internalType":"uint8","name":"","type":"uint8"}],"name":"pots","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rooms","outputs":[{"internalType":"bool","name":"init","type":"bool"},{"internalType":"bool","name":"paused","type":"bool"},{"internalType":"bool","name":"locked","type":"bool"},{"internalType":"uint256","name":"roundLength","type":"uint256"},{"internalType":"uint256","name":"roundEnd","type":"uint256"},{"internalType":"uint256","name":"fee","type":"uint256"},{"internalType":"bool","name":"percentageFee","type":"bool"},{"internalType":"address","name":"bank","type":"address"},{"internalType":"uint24","name":"currentRound","type":"uint24"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"stakeHeads","outputs":[{"internalType":"uint24","name":"","type":"uint24"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint24","name":"","type":"uint24"}],"name":"userStake","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint8","name":"team","type":"uint8"},{"internalType":"uint24","name":"next","type":"uint24"},{"internalType":"uint24","name":"prev","type":"uint24"}],"stateMutability":"view","type":"function"}];
//value[0]= Testnet token
const erc20 = [{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];

const addressList={
  //bsc testnet
  "0x61":{
    contract:"0x522ee4473556146bCf1C0c53983022F6DEEb3810",
    tokens:{
      "BUSD":{ label: 'BUSD', value: ['0x8301f2213c0eed49a7e28ae4c3e91722919b8b47',18] },
      "WBNB":{ label: 'WBNB', value: ['0xae13d989dac2f0debff460ac112a837c89baa7cd',18] }
    }
  },
  //bsc Mainnet
  "0x38":{
    contract:null,
    tokens:{
      "BUSD":{ label: 'BUSD', value: ['0xe9e7cea3dedca5984780bafc599bd69add087d56',18] },
      "WBNB":{ label: 'WBNB', value: ['0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',18] }
    }
  }
};
const teamColors =[
  {background:"#eb5454",border:"red"},
  {background:"#307ef2",border:"blue"},
  {background:"#e0d053",border:"gold"},
  {background:"#5df082",border:"green"},
];
class App extends Component{
  constructor(){
    super();
    // Don't call this.setState() here!
    this.state = {};
    this.address="Connect";
    this.provider=null;
    this.chain="";
    this.contractAddress=null;
    this.contract=null;
    this.address="Connect";
    this.hooked=false;
    this.token=null;
    this.redWins=this.blueWins=this.goldWins=this.greenWins="0/100";
    this.width=0;
    this.height=0;
    this.resizing=false;
    this.info="Add Stake";
    this.team=null;
    this.totalPot="0";
    this.intervalID=null;
    //contract interaction variables
    this.pot="...";
    this.room = null;
    //functions
    this.connect=this.connect.bind(this);
    this.changeToken=this.changeToken.bind(this);
    this.loadRoom=this.loadRoom.bind(this);
    this.play=this.play.bind(this);
    this.closeModals=this.closeModals.bind(this);
    this.approveToken=this.approveToken.bind(this);
    this.sendPlay=this.sendPlay.bind(this);
    this.autoUpdate=this.autoUpdate.bind(this);
    this.loadTokens=this.loadTokens.bind(this);
    this.loser=this.loser.bind(this);
    this.withdraw=this.withdraw.bind(this);
    this.sendWithdrawal=this.sendWithdrawal.bind(this);
  }
  async connect(){
    this.closeModals();
    try{
      if(window.ethereum){
        await window.ethereum.enable();
        this.address = (await window.ethereum.request({method: 'eth_accounts'}))[0];
        this.chain = (await window.ethereum.request({method: 'eth_chainId'}));
        this.provider=new ethers.providers.Web3Provider(window.ethereum);
        if(this.chain in addressList){
          if(addressList[this.chain].contract!=null){
            this.contractAddress=addressList[this.chain].contract;
            this.contract = new ethers.Contract(this.contractAddress, abi, this.provider.getSigner());
          }
          else{
            //window.alert("Not availble yet on this Chain / Network \n Request for chain to be added!");
            this.token=null; this.room=null;
          }
        }
        else{
          this.chain = "";
          this.contractAddress=null;
          this.contract=null;
        }
      }
      if(!this.hooked){
        this.loadTokens();
        window.ethereum.on('accountsChanged', (accounts) => {
          if(accounts.length!=0){
            this.connect();
          }
          else{
            this.address="Connect";
          }
        });
        window.ethereum.on('chainChanged', (chain) => {
          if(chain in addressList){
            this.chain = chain;
            this.contractAddress=addressList[chain].contract;
            if(addressList[this.chain].contract!=null){
              this.contractAddress=addressList[this.chain].contract;
              this.contract = new ethers.Contract(this.contractAddress, abi, this.provider.getSigner());
            }
            else{
              this.contract=null;
              this.token=null; this.room=null;
            }
          }
          else{
            this.chain = "";
            this.contractAddress=null;
            this.contract=null;
          }
          this.loadTokens();
          if(this.contract!=null){this.loadRoom();}
        });
        this.hooked=true;
      }
      document.getElementById("dropdown-basic-button").innerText=this.address.substr(0,5)+"..."+this.address.substr(-3);
    }
    catch(e){}
    this.loadTokens();
    this.loadRoom();
    this.handleResize();
  }
  async handleResize(){
    this.resizing=true;
    const bg = document.getElementById("bgImg");
    try{
      let button = document.getElementById("blue");
      const xdelta=Math.trunc(bg.clientWidth/8);
      button.style.right = (window.innerWidth/2-button.clientWidth-xdelta).toString()+"px";
      const ydelta=Math.trunc(bg.clientHeight*(1/10));
      button.style.top = (ydelta+60).toString()+"px";
      button.style.fontSize= (bg.clientWidth/57).toString()+"px";
      button = document.getElementById("red");
      button.style.right = (window.innerWidth/2+xdelta).toString()+"px";
      button.style.top = (ydelta+60).toString()+"px";
      button.style.fontSize= (bg.clientWidth/57).toString()+"px";
      button = document.getElementById("green");
      button.style.right = (window.innerWidth/2-button.clientWidth-xdelta).toString()+"px";
      button.style.top = (6.2*ydelta+60).toString()+"px";
      button.style.fontSize= (bg.clientWidth/57).toString()+"px";
      button = document.getElementById("gold");
      button.style.right = (window.innerWidth/2+xdelta).toString()+"px";
      button.style.top = (6.2*ydelta+60).toString()+"px";
      button.style.fontSize= (bg.clientWidth/57).toString()+"px";
      button = document.getElementById("pot");
      button.style.position="absolute";
      button.style.top=Math.trunc(40+bg.clientHeight*(8/18)).toString()+"px";
      button.style.fontSize=(bg.clientHeight/30).toString()+"px";
      button.style.right = (window.innerWidth/2-button.clientWidth/2).toString()+"px";
      button = document.getElementById("withdraw");
      button.style.fontSize=(bg.clientHeight/30).toString()+"px";
      button.style.left = (window.innerWidth/2+bg.clientWidth/7).toString()+"px";
      button.style.top=Math.trunc(40+bg.clientHeight*(9/20)).toString()+"px";
      button = document.getElementById("loser");
      button.style.fontSize=(bg.clientHeight/30).toString()+"px";
      button.style.right = (window.innerWidth/2+bg.clientWidth/7).toString()+"px";
      button.style.top=Math.trunc(40+bg.clientHeight*(9/20)).toString()+"px";
      button.style.width=document.getElementById("withdraw").clientWidth.toString()+"px";
      button = document.getElementById("redWins");
      button.style.top=(40+bg.clientHeight*(1/20)).toString()+"px";
      button.style.right = (window.innerWidth/2+bg.clientWidth/10).toString()+"px";
      button.innerText=this.redWins;
      button = document.getElementById("blueWins");
      button.style.top=(40+bg.clientHeight*(1/20)).toString()+"px";
      button.style.right = (window.innerWidth/2-bg.clientWidth/9-button.clientWidth).toString()+"px";
      button.innerText=this.blueWins;
      button = document.getElementById("goldWins");
      button.style.top=(40+bg.clientHeight*(17/18)).toString()+"px";
      button.style.right = (window.innerWidth/2+bg.clientWidth/10).toString()+"px";
      button.innerText=this.goldWins;
      button = document.getElementById("greenWins");
      button.style.top=(40+bg.clientHeight*(17/18)).toString()+"px";
      button.style.right = (window.innerWidth/2-bg.clientWidth/9-button.clientWidth).toString()+"px";
      button.innerText=this.greenWins;
      button = document.getElementById("playBox");
      button.style.height = Math.trunc(document.getElementById("bgImg").clientHeight*.8).toString()+"px";
      button.style.width = Math.trunc(document.getElementById("bgImg").clientWidth*.8).toString()+"px";
      button.style.left=(window.innerWidth/2-button.clientWidth/2).toString()+"px";
      button.style.top=Math.trunc(60+document.getElementById("bgImg").clientHeight/13).toString()+"px";
      button = document.getElementById("withdrawBox");
      button.style.height = Math.trunc(document.getElementById("bgImg").clientHeight*.8).toString()+"px";
      button.style.width = Math.trunc(document.getElementById("bgImg").clientWidth*.8).toString()+"px";
      button.style.left=(window.innerWidth/2-button.clientWidth/2).toString()+"px";
      button.style.top=Math.trunc(60+document.getElementById("bgImg").clientHeight/13).toString()+"px";
    }
    catch(e){}
    this.width=bg.clientWidth;
    this.height=bg.clientHeight;
    this.resizing=false;
  }
  loadTokens(){
    let select = document.getElementById("select");
    for(let i =select.options.length;i>0;i--){
      select.remove(i);
    }
    if(this.chain in addressList){
      const keys = Object.keys(addressList[this.chain].tokens);
      keys.forEach((key, index) => {
        var opt = document.createElement('option');
        opt.value = addressList[this.chain].tokens[key].label;
        opt.innerHTML = addressList[this.chain].tokens[key].label;
        select.appendChild(opt);
      });
      select.options[1].selected="selected";
      this.token=addressList[this.chain].tokens[select.options[1].value];
    }
    else{
      select.options[0].selected="selected";
      this.token=null; this.room=null;
    }
  }
  async loadRoom(){
    try{
      let token = document.getElementById("select").options[document.getElementById("select").selectedIndex].text;
      if(this.chain in addressList&&addressList[this.chain].contract!=null&& token in addressList[this.chain].tokens){
        this.token=addressList[this.chain].tokens[token];
        token = addressList[this.chain].tokens[token].value[0];
        this.room = await this.contract.rooms(token);
        this.totalPot = new BigNumber("0");
        //if(this.room.init==true&&this.room.paused==false&&this.room.locked==false){
        if(this.room.paused==false&&this.room.locked==false){
          for(let i=1;i<5;i++){
            const p = await this.contract.pots(token,this.room.currentRound,i);
            this.totalPot = this.totalPot.plus(p.toString());
          }
          //console.log(totalPot.toString());
          document.getElementById("pot").innerText="Round - "+this.room.currentRound.toString()+"\n Pot = "+
          ethers.utils.formatUnits(this.totalPot.toString(),this.token.value[1]).substr(0,5);
          let element = document.getElementById("pot");
          element.style.right = (window.innerWidth/2-element.clientWidth/2).toString()+"px";
        }
        //red  = 1, blue = 2, gold = 3, green = 4
        let redBlueGoldGreen = [0,0,0,0];
        for(let i = this.room.currentRound-1;i>0&&i>this.currentRound-101;i--){
          const loser = (await this.contract.losers(token,this.room.currentRound)).toString();
          for(let j = 1;j<5;j++){
            if(parseInt(loser)!=j){
              redBlueGoldGreen[j-1]+=1;
            }
          }
        }
        this.redWins=redBlueGoldGreen[0].toString()+"/100";
        this.blueWins=redBlueGoldGreen[1].toString()+"/100";
        this.goldWins=redBlueGoldGreen[2].toString()+"/100";
        this.greenWins=redBlueGoldGreen[3].toString()+"/100";
        document.getElementById("red").value="Join Red Team? \n "+"Total - "+redBlueGoldGreen[0].toString();
        document.getElementById("blue").value="Join Blue Team? \n "+"Total - "+redBlueGoldGreen[1].toString();
        document.getElementById("gold").value="Join Gold Team? \n "+"Total - "+redBlueGoldGreen[2].toString();
        document.getElementById("green").value="Join Green Team? \n "+"Total - "+redBlueGoldGreen[3].toString();
        redBlueGoldGreen = await this.contract.stakeHeads(this.address,token); //if user is in current round
        if(redBlueGoldGreen==this.room.currentRound){
          redBlueGoldGreen = await this.contract.userStake(this.address,token,this.room.currentRound.toString());
          switch(redBlueGoldGreen.team){
            //dividing 0/0 = NaN
            case 1:
              document.getElementById("red").value="Red Team \n Total - "+redBlueGoldGreen[0].toString()+"\nMy Stake = "+
              ethers.utils.formatUnits(redBlueGoldGreen.amount.toString(),this.token.value[1]).substr(0,5)+"\n" +
              (Math.round(redBlueGoldGreen.amount.toNumber()/this.totalPot.toNumber()*10000)/10000).toString()+"%"+
              "\n + Add Stake?";
              break;
            case 2:
              document.getElementById("blue").value="Blue Team \n Total - "+redBlueGoldGreen[1].toString()+"\nMy Stake = "+
              ethers.utils.formatUnits(redBlueGoldGreen.amount.toString(),this.token.value[1]).substr(0,5)+"\n" +
              (Math.round(redBlueGoldGreen.amount.toNumber()/this.totalPot.toNumber()*10000)/10000).toString()+"%"+
              "\n + Add Stake?";
              break;
            case 3:
              document.getElementById("gold").value="Gold Team \n Total - "+redBlueGoldGreen[2].toString()+"\nMy Stake = "+
              ethers.utils.formatUnits(redBlueGoldGreen.amount.toString(),this.token.value[1]).substr(0,5)+"\n" +
              (Math.round(redBlueGoldGreen.amount.toNumber()/this.totalPot.toNumber()*10000)/10000).toString()+"%"+
              "\n + Add Stake?";
              break;
            case 4:
              document.getElementById("green").value="Green Team \n Total - "+redBlueGoldGreen[3].toString()+"\nMy Stake = "+
              ethers.utils.formatUnits(redBlueGoldGreen.amount.toString(),this.token.value[1]).substr(0,5)+"\n" +
              (Math.round(redBlueGoldGreen.amount.toNumber()/this.totalPot.toNumber()*10000)/10000).toString()+"%"+
              "\n + Add Stake?";
              break;
          }
        }
      }
    }
    catch(e){}
    this.handleResize();
  }
  async play(teamNumber){
    if(this.room==null){
      window.alert("Not Connected to token game room");
      return;
    }
    else if(addressList[this.chain].contract==null){
      window.alert("Not available yet on this chain \n Request devs/admins to add it!");
      return;
    }
    try{
      if(this.chain&& this.chain in addressList){
        if(this.room.init){
          const t = new BigNumber(this.room.roundEnd.toString()).minus(Math.trunc(Date.now()/1000));
          let x = await this.contract.losers(this.token.value[0],this.room.currentRound);
          x=x.toString();
          if(t.isLessThan(1)&&x=="0"){
            window.alert("Round not Active"); return;
          }
          if(!this.room.paused){
            if(!this.room.locked){
              this.team=teamNumber;
              let box = document.getElementById("playBox");
              box.style.height = Math.trunc(document.getElementById("bgImg").clientHeight*.8).toString()+"px";
              box.style.width = Math.trunc(document.getElementById("bgImg").clientWidth*.8).toString()+"px";
              box.style.left=(window.innerWidth/2-box.clientWidth/2).toString()+"px";
              box.style.top=Math.trunc(60+document.getElementById("bgImg").clientHeight/13).toString()+"px";
              box.style.backgroundColor=teamColors[teamNumber-1].background;
              box.style.border="5px double "+teamColors[teamNumber-1].border;
              box.opacity=".9"
              box.style.zIndex="2";
              box = document.getElementById("x");
              box.style.zIndex="2";
              const provider = new ethers.providers.Web3Provider(window.ethereum);
              let tokenContract=new ethers.Contract(this.token.value[0], erc20, provider);
              const balance = await tokenContract.balanceOf(this.address);
              let allowance = await tokenContract.allowance(this.address,addressList[this.chain].contract);
              let fee="";
              if(this.room.percentageFee==false){
                fee="Deposit Fee = "+ethers.utils.formatUnits(this.room.fee.toString(),this.token.value[1])+" "+this.token.label+"\n";
              }
              else{
                fee="Deposit Fee = "+(parseInt(this.room.fee.toString())/10).toString()+"% / Amount\n"
              }
              this.info = "Add "+this.token.label+" and MOVE ALL STAKE to "+teamColors[teamNumber-1].border.toUpperCase()+"\n \n"+
              fee+
              "Balance = "+ ethers.utils.formatUnits(balance.toString(),this.token.value[1])+ "\n"+
              "Contract Allowance = "+ethers.utils.formatUnits(allowance.toString(),this.token.value[1]).substring(0,10)+"...\n";
              document.getElementById("playBoxText").innerText=this.info;
            }
            else window.alert("Token Room Locked");
          }
          else window.alert("Token Room Paused");
        }
        else window.alert("Token Room not Initialized!");
      }
      else window.alert("Not Connected!");
    }
    catch(e){}
  }
  async approveToken(){
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    let tokenContract=new ethers.Contract(this.token.value[0], erc20, provider.getSigner());
    if(this.chain in addressList){
      try{
        await tokenContract.approve(addressList[this.chain].contract,"115792089237316195423570985008687907853269984665640564039457584007913129639934");
        setTimeout(() => {  this.loadRoom() }, 10000);
        this.closeModals();
      }
      catch(e){}
    }
  }
  async sendPlay(team){
    if(this.chain in addressList){
      try{
        let amount = document.getElementById("playAmount").value;
        if(amount.indexOf(".")==-1||amount.substring(amount.indexOf("")+1).length<=this.token.value[1]){
          amount=new BigNumber(10).exponentiatedBy(this.token.value[1]).multipliedBy(amount).toString();
          this.team=team.toString();
          await this.contract.play(this.token.value[0],amount,team,{gasPrice: 10000000000, gasLimit: 321000});
          setTimeout(() => {  this.loadRoom() }, 10000);
          this.closeModals();

        }
        else{
          window.alert("Invalid amount. Max decimals = "+this.token.value[1].toString());
        }
      }
      catch(e){this.closeModals();}
    }

  }
  async autoUpdate(){
    if(this.room!=null){
      //if t is negative, the round is over
      const t = new BigNumber(this.room.roundEnd.toString()).minus(Math.trunc(Date.now()/1000));
      let str;
      if(t.isLessThan(1)){
        if(this.room.init==true){
          const b = (await this.contract.losers(this.token.value[0],this.room.currentRound)).toString();
          if(b=="0"){
            document.getElementById("pot").innerText="Round Finished\n"+"Round - "+this.room.currentRound.toString()+"\n Pot = "+
            ethers.utils.formatUnits(this.totalPot.toString(),this.token.value[1]).substr(0,5);
          }
          else{
            document.getElementById("pot").innerText="Add to Start Round\n"+"Round - "+this.room.currentRound.toString()+"\n Pot = "+
            ethers.utils.formatUnits(this.totalPot.toString(),this.token.value[1]).substr(0,5);
          }

        }
        else{
          document.getElementById("pot").innerText="Token Room not initialized \n"+"Round - "+this.room.currentRound.toString()+"\n Pot = "+
          ethers.utils.formatUnits(this.totalPot.toString(),this.token.value[1]).substr(0,5);
        }
      }
      else{
        str=Math.trunc(t/86400).toString()+"d / ";
        str+=Math.trunc(t/3600).toString()+"h / ";
        str+=Math.trunc(t/60).toString()+"m / ";
        str+=Math.trunc(t%60).toString()+"s";
        str+="\n"+"Round - "+this.room.currentRound.toString()+"\n Pot = "+
        ethers.utils.formatUnits(this.totalPot.toString(),this.token.value[1]).substr(0,5);
        document.getElementById("pot").innerText=str;
      }
    }
    else if (addressList[this.chain]&&addressList[this.chain].contract==null){
      document.getElementById("pot").innerText="Chain not available yet \n Request from devs!";
    }
    this.handleResize();
  }
  async loser(){
    try{
      if(this.room!=null&&this.contract!=null&&this.token!=null&&this.room.init==true){
        let b = (await this.contract.losers(this.token.value[0],this.room.currentRound)).toString();
        if(b=="0"){
          await this.contract.randomLoser(this.token.value[0],{gasPrice: 10000000000, gasLimit: 100000});
          setTimeout(() => {  this.loadRoom() }, 10000);
        }
      }
    }
    catch(e){}
  }
  async withdraw(){
    try{
      let box = document.getElementById("withdrawBox");
      box.style.zIndex="2";
      document.getElementById("xx").style.zIndex="2";
      //box=document.getElementById("table");
      box=document.querySelector("table tbody");
      while(box.hasChildNodes()){
         box.removeChild(box.firstChild);
      }
      if(this.room!=null){
        //stakeHeads = user, token => uint24 round
        //userStake = user,token,round => Stake(uint256 amount, uint8 team, uint24 next, uint24 prev)
        //only add if round is not current round and user team is not losers
        let token = document.getElementById("select").options[document.getElementById("select").selectedIndex].text;
        token = addressList[this.chain].tokens[token].value[0];
        let round = (await this.contract.stakeHeads(this.address,token)).toString();
        let stake = await this.contract.userStake(this.address,token,round);
        let loser=null;
        if(round!="0"){
          while(stake!=null&&stake.amount.toString()!="0"&&round!="0"){
            loser = (await this.contract.losers(token,round)).toString();
            if(loser!=stake.team.toString()){
              let totalPot = BigNumber("0");
              let winnerStake = BigNumber("0");
              for(let i=1;i<5;i++){
                const add = (await this.contract.pots(token,round,i)).toString();
                totalPot=totalPot.plus(add);
                if(i.toString()!=loser){
                  winnerStake=winnerStake.plus(add);
                }
              }
              let amount = (totalPot.multipliedBy(BigNumber(stake.amount.toString()).dividedBy(winnerStake))).toFixed(0).toString();
              let d = document.getElementById("select").options[document.getElementById("select").selectedIndex].text;
              d=addressList[this.chain].tokens[d].value[1];
              amount = ethers.utils.formatUnits(amount,d);
              let newRow = box.insertRow(-1);
              newRow.style.border="2px solid purple";
              const r = round;
              newRow.onclick= ()=>{this.sendWithdrawal(r)};
              let cell0 = newRow.insertCell(0);
              let cell1 = newRow.insertCell(1);
              cell0.innerHTML=round;
              cell1.innerHTML=amount;
            }
            round = stake.next.toString();
            stake = await this.contract.userStake(this.address,token,round);
          }
        }
        else{
          //clear table and set to empty
        }
      }
      else{
        //clear table and set to empy
      }
    }
    catch(e){}
  }
  async sendWithdrawal(round){
    const token = this.token.value[0];
    //console.log(round);
    try{
      if(round!="0"){
        await this.contract.withdraw(token,round,{gasPrice: 10000000000, gasLimit: 100000});
        this.closeModals();
      }
    }
    catch(e){}
  }
  changeToken(){
    this.token=addressList[this.chain].tokens[document.getElementById('select').selectedOptions[0].value];
    this.closeModals();
    this.loadRoom();
  }
  closeModals(){
    document.getElementById("withdrawBox").style.zIndex="-1";
    document.getElementById("playBox").style.zIndex="-1";
  }
  componentDidMount(){
    //center widget update
    setTimeout(() => {  this.handleResize() }, 600);
    window.addEventListener("resize",()=>{ if(document.getElementById("bgImg").clientHeight>this.height+9||document.getElementById("bgImg").clientHeight<this.height+9||
    document.getElementById("bgImg").clientWidth>this.width+9||document.getElementById("bgImg").clientWidth<this.width+9) {this.handleResize();} });
    this.intervalID=setInterval(this.autoUpdate, 5000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
    window.removeEventListener("resize",()=>{ if(document.getElementById("bgImg").clientHeight>this.height+9||document.getElementById("bgImg").clientHeight<this.height+9||
    document.getElementById("bgImg").clientWidth>this.width+9||document.getElementById("bgImg").clientWidth<this.width+9) {this.handleResize();} });
  }
  getAddress(str){
    if(str=="Connect"){return str;}
    return this.address.substr(0,6)+"..."+this.address.substr(-3);
  }
  render(){
    document.title="Four Corners";
    return(
      <div id="bigbox"style={{height:"100vh",textAlign: 'center',justify:"center",justifyContent:"center",alignItems: 'center',backgroundColor:"#40206e"}}>{/*all elements must be contained in 1 div*/}
        <Navbar id="nav" style={{backgroundColor:"#40206e",top:"0",height:"50px",whiteSpace:"nowrap",width:"50px",marginRight:"0px"}}>
          {/*<Navbar.Brand href="./">*/}
          <Navbar.Brand>
            <div id="logo" style={{top:"55"}}>
              <img src = {Logo} alt="Logo" style={{width:"40px", height:"40px",marginRight:"10px"}}/>
            </div>
          </Navbar.Brand>
          <Navbar.Collapse style={{justifyContent:"left"}}>
            <DropdownButton id="dropdown-basic-button" title={this.getAddress(this.address)} style={{position:"absolute",left:"60px",width:"auto",maxWidth:"10%",fontWeight:"bold",cursor:"pointer",color:"#3471eb"}}>
              <Dropdown.Item onSelect={this.connect} id="browserConnect" as="button" style={{color:"blue"}}>Browser Wallet</Dropdown.Item>
            </DropdownButton>
            <select id="select" onChange={()=>this.changeToken()} style={{position:"absolute",left:"180px",fontSize:"20px",width:"100px",height:"33px"}}>
              <option value="" disabled selected hidden>Token</option>
            </select>
          </Navbar.Collapse>
        </Navbar>
        <span id="main" style={{alignItems:"center",top:"55",whiteSpace:"nowrap",position:"relative",height:"auto",width:"auto"}}>
          <img id="bgImg" overflow="visible"src = {Background} alt="Background" style={{minHeight:"61w",maxHeight:"88vh",maxWidth:"95vw",minWidth:"300px",padding:"0px"}}/>
        </span>
        <Button id="red" zIndex="1"as="input"type ="Button"value={"Red Team"}onClick={()=>this.play(1)}
            style={{textAlign:"center",backgroundColor:"Transparent",position:"absolute",top:"10%",right:"50%",borderColor:"white",
            fontWeight:"Bold"}}/>
        <Button id="blue" zIndex="1"as="input"type ="Button"value={"Blue Team"}onClick={()=>this.play(2)}
            style={{backgroundColor:"Transparent",position:"absolute",top:"10%",right:"50%",borderColor:"white",
            fontWeight:"Bold"}}/>
        <Button id="gold" zIndex="1"as="input"type ="Button"value={"Gold Team"}onClick={()=>this.play(3)}
            style={{textAlign:"center",backgroundColor:"Transparent",position:"absolute",top:"10%",right:"50%",borderColor:"white",
            fontWeight:"Bold"}}/>
        <Button id="green" zIndex="1"as="input"type ="Button"value={"Green Team"}onClick={()=>this.play(4)}
            style={{backgroundColor:"Transparent",position:"absolute",top:"10%",right:"50%",borderColor:"white",
            fontWeight:"Bold"}}/>
        <span id="pot" style={{fontWeight:"bold",position:"absolute",color:"brown"}}>
          {this.pot}
        </span>
        <Button id="loser" zIndex="1"as="input"type ="Button"value={"Reveal \nLoser"}onClick={()=>this.loser()}
            style={{color:"yellow",backgroundColor:"#9049d6",position:"absolute",top:"10%",right:"50%",borderColor:"yellow",
            fontWeight:"Bold"}}/>
        <Button id="withdraw" zIndex="1"as="input"type ="Button"value={"Withdraw \nWinnings"}onClick={()=>this.withdraw()}
            style={{color:"yellow",backgroundColor:"green",position:"absolute",top:"10%",right:"50%",borderColor:"yellow",
            fontWeight:"Bold"}}/>
        <span id="redWins" style={{color:"yellow",fontWeight:"bold",position:"absolute",top:"10%",right:"50%"}}>
          {this.redWins}
        </span>
        <span id="blueWins" style={{color:"yellow",fontWeight:"bold",position:"absolute",top:"10%",right:"50%"}}>
          {this.blueWins}
        </span>
        <span id="goldWins" style={{color:"yellow",fontWeight:"bold",position:"absolute",top:"10%",right:"50%"}}>
          {this.goldWins}
        </span>
        <span id="greenWins" style={{color:"yellow",fontWeight:"bold",position:"absolute",top:"10%",right:"50%"}}>
          {this.greenWins}
        </span>
        <div id="playBox" style={{position:"absolute",top:"35%",
        width:"50vw",height:"70vh",borderRadius:"25px",
        backgroundColor:"Transparent",color:"black",zIndex:"-1"}}>
          <Button id="x" zIndex="-1"as="input"type ="Button"value={"×"}onClick={()=>this.closeModals()}
            style={{backgroundColor:"Transparent",color:"black",position:"absolute",top:"0",right:"0",borderColor:"Transparent",
            fontWeight:"Bold"}}/>
          <span id="playBoxText">
          </span>
          <span>
            <span style={{marginTop:"10px"}}>{(this.token==null?"":this.token.label) + " Amount "}</span>
            <input id ="playAmount" type="number"min="0"step="0.001"pattern="^\d*\.?\d{0,18}$"/>
            <br/>
            <Button id="approve" zIndex="-1"as="input"type ="Button"value={"🤝 Approve 🤝"}onClick={()=>this.approveToken()}
            style={{backgroundColor:"purple",color:"yellow",fontWeight:"Bold",marginRight:"20px",marginTop:"10px"}}/>
            <Button id="add" zIndex="-1"as="input"type ="Button"value={"+ Add +"}onClick={()=>this.sendPlay(this.team)}
            style={{backgroundColor:"purple",color:"yellow",fontWeight:"Bold",marginTop:"10px"}}/>
          </span>
        </div>
        <div id="withdrawBox" style={{position:"absolute",top:"25%",left:"25%",
        width:"50vw",height:"70vh",borderRadius:"25px",
        backgroundColor:"green",border:"5px double purple",color:"yellow",zIndex:"-1"}}>
          Withdraw Winnings
          <Button id="xx" zIndex="-1"as="input"type ="Button"value={"×"}onClick={()=>this.closeModals()}
            style={{backgroundColor:"Transparent",color:"black",position:"absolute",overflowY:"auto",
            top:"0",right:"0",borderColor:"Transparent",
            fontWeight:"Bold"}}/>
          <table id = "table" style={{width:"100%",position:"absolute"}}>
            <tr>
              <th>Round #</th>
              <th>Amount $</th>
            </tr>
            <tbody/>
          </table>
        </div>
      </div>
    )
  }
}
export default App;
