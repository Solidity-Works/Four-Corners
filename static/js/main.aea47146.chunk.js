(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{72:function(t,e,n){},74:function(t,e,n){},77:function(t,e){},91:function(t,e,n){"use strict";n.r(e);var i=n(3),o=n.n(i),a=n(28),r=n.n(a),s=(n(72),n(2)),l=n.n(s),c=n(24),d=n(4),u=n(5),p=n(8),h=n(7),y=n(6),g=(n(74),n(52)),m=n(22),b=n(49),x=n(65),f=n(31),k=n.n(f),w=n(16),v=n.p+"static/media/LogoV4.b4b95346.png",S=n.p+"static/media/FourCornersStandoffV2.8aa83bcd.png",B=n(11),T=[{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"address",name:"user",type:"address"},{internalType:"bool",name:"approved",type:"bool"},{internalType:"bool",name:"bigAdmin",type:"bool"}],name:"changeAdmins",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"address",name:"bank",type:"address"}],name:"changeBank",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"changeBigAdmins",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"bank",type:"address"}],name:"changeBigBank",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"fee",type:"uint256"}],name:"changeBigFees",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"fee",type:"uint256"},{internalType:"bool",name:"percentageFee",type:"bool"}],name:"changeFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"length",type:"uint256"}],name:"changeRoundLength",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"}],name:"init",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint8",name:"team",type:"uint8"}],name:"play",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"}],name:"randomLoser",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"}],name:"stopStart",outputs:[],stateMutability:"nonpayable",type:"function"},{stateMutability:"payable",type:"receive"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint24",name:"round",type:"uint24"}],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"},{internalType:"address",name:"",type:"address"}],name:"admins",outputs:[{internalType:"bool",name:"approved",type:"bool"},{internalType:"bool",name:"bigAdmin",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"bigAdmins",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"bigBank",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"bigFees",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes",name:"b",type:"bytes"}],name:"bytesToUint",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"},{internalType:"uint24",name:"",type:"uint24"}],name:"losers",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"},{internalType:"uint24",name:"",type:"uint24"},{internalType:"uint8",name:"",type:"uint8"}],name:"pots",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"rooms",outputs:[{internalType:"bool",name:"init",type:"bool"},{internalType:"bool",name:"paused",type:"bool"},{internalType:"bool",name:"locked",type:"bool"},{internalType:"uint256",name:"roundLength",type:"uint256"},{internalType:"uint256",name:"roundEnd",type:"uint256"},{internalType:"uint256",name:"fee",type:"uint256"},{internalType:"bool",name:"percentageFee",type:"bool"},{internalType:"address",name:"bank",type:"address"},{internalType:"uint24",name:"currentRound",type:"uint24"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"},{internalType:"address",name:"",type:"address"}],name:"stakeHeads",outputs:[{internalType:"uint24",name:"",type:"uint24"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"},{internalType:"address",name:"",type:"address"},{internalType:"uint24",name:"",type:"uint24"}],name:"userStake",outputs:[{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint8",name:"team",type:"uint8"},{internalType:"uint24",name:"next",type:"uint24"},{internalType:"uint24",name:"prev",type:"uint24"}],stateMutability:"view",type:"function"}],I=[{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}],W={"0x61":{contract:"0x522ee4473556146bCf1C0c53983022F6DEEb3810",tokens:{BUSD:{label:"BUSD",value:["0x8301f2213c0eed49a7e28ae4c3e91722919b8b47",18]},WBNB:{label:"WBNB",value:["0xae13d989dac2f0debff460ac112a837c89baa7cd",18]}}},"0x38":{contract:null,tokens:{BUSD:{label:"BUSD",value:["0xe9e7cea3dedca5984780bafc599bd69add087d56",18]},WBNB:{label:"WBNB",value:["0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",18]}}}},j=[{background:"#eb5454",border:"red"},{background:"#307ef2",border:"blue"},{background:"#e0d053",border:"gold"},{background:"#5df082",border:"green"}],M=function(t){Object(h.a)(n,t);var e=Object(y.a)(n);function n(){var t;return Object(d.a)(this,n),(t=e.call(this)).state={},t.address="Connect",t.provider=null,t.chain="",t.contractAddress=null,t.contract=null,t.address="Connect",t.hooked=!1,t.token=null,t.redWins=t.blueWins=t.goldWins=t.greenWins="0/100",t.width=0,t.height=0,t.info="Add Stake",t.team=null,t.totalPot="0",t.intervalID=null,t.pot="...",t.room=null,t.connect=t.connect.bind(Object(p.a)(t)),t.changeToken=t.changeToken.bind(Object(p.a)(t)),t.loadRoom=t.loadRoom.bind(Object(p.a)(t)),t.play=t.play.bind(Object(p.a)(t)),t.closeModals=t.closeModals.bind(Object(p.a)(t)),t.approveToken=t.approveToken.bind(Object(p.a)(t)),t.sendPlay=t.sendPlay.bind(Object(p.a)(t)),t.autoUpdate=t.autoUpdate.bind(Object(p.a)(t)),t.loadTokens=t.loadTokens.bind(Object(p.a)(t)),t.loser=t.loser.bind(Object(p.a)(t)),t.withdraw=t.withdraw.bind(Object(p.a)(t)),t.sendWithdrawal=t.sendWithdrawal.bind(Object(p.a)(t)),t}return Object(u.a)(n,[{key:"connect",value:function(){var t=Object(c.a)(l.a.mark((function t(){var e=this;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.closeModals(),t.prev=1,!window.ethereum){t.next=13;break}return t.next=5,window.ethereum.enable();case 5:return t.next=7,window.ethereum.request({method:"eth_accounts"});case 7:return this.address=t.sent[0],t.next=10,window.ethereum.request({method:"eth_chainId"});case 10:this.chain=t.sent,this.provider=new w.a.providers.Web3Provider(window.ethereum),this.chain in W?null!=W[this.chain].contract?(this.contractAddress=W[this.chain].contract,this.contract=new w.a.Contract(this.contractAddress,T,this.provider.getSigner())):(this.token=null,this.room=null):(this.chain="",this.contractAddress=null,this.contract=null);case 13:this.hooked||(this.loadTokens(),window.ethereum.on("accountsChanged",(function(t){0!=t.length?e.connect():e.address="Connect"})),window.ethereum.on("chainChanged",(function(t){t in W?(e.chain=t,e.contractAddress=W[t].contract,null!=W[e.chain].contract?(e.contractAddress=W[e.chain].contract,e.contract=new w.a.Contract(e.contractAddress,T,e.provider.getSigner())):(e.contract=null,e.token=null,e.room=null)):(e.chain="",e.contractAddress=null,e.contract=null),e.loadTokens(),null!=e.contract&&e.loadRoom()})),this.hooked=!0),document.getElementById("dropdown-basic-button").innerText=this.address.substr(0,5)+"..."+this.address.substr(-3),t.next=19;break;case 17:t.prev=17,t.t0=t.catch(1);case 19:this.loadTokens(),this.loadRoom(),this.handleResize();case 22:case"end":return t.stop()}}),t,this,[[1,17]])})));return function(){return t.apply(this,arguments)}}()},{key:"handleResize",value:function(){var t=Object(c.a)(l.a.mark((function t(){var e,n,i,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=document.getElementById("bgImg");try{n=document.getElementById("blue"),i=Math.trunc(e.clientWidth/8),n.style.right=(window.innerWidth/2-n.clientWidth-i).toString()+"px",o=Math.trunc(.1*e.clientHeight),n.style.top=(o+60).toString()+"px",n.style.fontSize=(e.clientWidth/57).toString()+"px",(n=document.getElementById("red")).style.right=(window.innerWidth/2+i).toString()+"px",n.style.top=(o+60).toString()+"px",n.style.fontSize=(e.clientWidth/57).toString()+"px",(n=document.getElementById("green")).style.right=(window.innerWidth/2-n.clientWidth-i).toString()+"px",n.style.top=(6.2*o+60).toString()+"px",n.style.fontSize=(e.clientWidth/57).toString()+"px",(n=document.getElementById("gold")).style.right=(window.innerWidth/2+i).toString()+"px",n.style.top=(6.2*o+60).toString()+"px",n.style.fontSize=(e.clientWidth/57).toString()+"px",(n=document.getElementById("withdraw")).style.fontSize=(e.clientHeight/30).toString()+"px",n.style.right=(window.innerWidth/2-e.clientWidth/7-n.clientWidth).toString()+"px",n.style.top=Math.trunc(40+.45*e.clientHeight).toString()+"px",n.style.zIndex="1",(n=document.getElementById("pot")).style.position="absolute",n.style.top=Math.trunc(40+e.clientHeight*(8/18)).toString()+"px",n.style.fontSize=(e.clientHeight/30).toString()+"px",n.style.right=(window.innerWidth/2-n.clientWidth/2).toString()+"px",(n=document.getElementById("loser")).style.fontSize=(e.clientHeight/30).toString()+"px",n.style.right=(window.innerWidth/2+e.clientWidth/7).toString()+"px",n.style.top=Math.trunc(40+.45*e.clientHeight).toString()+"px",n.style.width=document.getElementById("withdraw").clientWidth.toString()+"px",(n=document.getElementById("redWins")).style.top=(40+.05*e.clientHeight).toString()+"px",n.style.right=(window.innerWidth/2+e.clientWidth/10).toString()+"px",n.innerText=this.redWins,(n=document.getElementById("blueWins")).style.top=(40+.05*e.clientHeight).toString()+"px",n.style.right=(window.innerWidth/2-e.clientWidth/9-n.clientWidth).toString()+"px",n.innerText=this.blueWins,(n=document.getElementById("goldWins")).style.top=(40+e.clientHeight*(17/18)).toString()+"px",n.style.right=(window.innerWidth/2+e.clientWidth/10).toString()+"px",n.innerText=this.goldWins,(n=document.getElementById("greenWins")).style.top=(40+e.clientHeight*(17/18)).toString()+"px",n.style.right=(window.innerWidth/2-e.clientWidth/9-n.clientWidth).toString()+"px",n.innerText=this.greenWins,(n=document.getElementById("playBox")).style.height=Math.trunc(.8*document.getElementById("bgImg").clientHeight).toString()+"px",n.style.width=Math.trunc(.8*document.getElementById("bgImg").clientWidth).toString()+"px",n.style.left=(window.innerWidth/2-n.clientWidth/2).toString()+"px",n.style.top=Math.trunc(60+document.getElementById("bgImg").clientHeight/13).toString()+"px",(n=document.getElementById("withdrawBox")).style.height=Math.trunc(.8*document.getElementById("bgImg").clientHeight).toString()+"px",n.style.width=Math.trunc(.8*document.getElementById("bgImg").clientWidth).toString()+"px",n.style.left=(window.innerWidth/2-n.clientWidth/2).toString()+"px",n.style.top=Math.trunc(60+document.getElementById("bgImg").clientHeight/13).toString()+"px"}catch(a){}this.width=e.clientWidth,this.height=e.clientHeight;case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"loadTokens",value:function(){for(var t=this,e=document.getElementById("select"),n=e.options.length;n>0;n--)e.remove(n);this.chain in W?(Object.keys(W[this.chain].tokens).forEach((function(n,i){var o=document.createElement("option");o.value=W[t.chain].tokens[n].label,o.innerHTML=W[t.chain].tokens[n].label,e.appendChild(o)})),e.options[1].selected="selected",this.token=W[this.chain].tokens[e.options[1].value]):(e.options[0].selected="selected",this.token=null,this.room=null)}},{key:"loadRoom",value:function(){var t=Object(c.a)(l.a.mark((function t(){var e,n,i,o,a,r,s,c,d,u,p,h,y;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,e=document.getElementById("select").options[document.getElementById("select").selectedIndex].text,!(this.chain in W)||null==W[this.chain].contract||!(e in W[this.chain].tokens)){t.next=79;break}return this.token=W[this.chain].tokens[e],e=W[this.chain].tokens[e].value[0],t.next=7,this.contract.rooms(e);case 7:if(this.room=t.sent,this.totalPot=new k.a("0"),0!=this.room.paused||0!=this.room.locked){t.next=22;break}n=1;case 11:if(!(n<5)){t.next=19;break}return t.next=14,this.contract.pots(e,this.room.currentRound,n);case 14:i=t.sent,this.totalPot=this.totalPot.plus(i.toString());case 16:n++,t.next=11;break;case 19:document.getElementById("pot").innerText="Round - "+this.room.currentRound.toString()+"\n Pot = "+w.a.utils.formatUnits(this.totalPot.toString(),this.token.value[1]).substr(0,5),(o=document.getElementById("pot")).style.right=(window.innerWidth/2-o.clientWidth/2).toString()+"px";case 22:a=[0,0,0,0],r=1;case 24:if(!(r<101&&this.room.currentRound-r>0)){t.next=32;break}return t.next=27,this.contract.losers(e,(this.room.currentRound-r).toString());case 27:for(s=t.sent.toString(),c=1;c<5;c++)parseInt(s)!=c&&(a[c-1]+=1);case 29:r++,t.next=24;break;case 32:return this.redWins=a[0].toString()+"/100",this.blueWins=a[1].toString()+"/100",this.goldWins=a[2].toString()+"/100",this.greenWins=a[3].toString()+"/100",t.next=38,this.contract.pots(e,this.room.currentRound.toString(),"1");case 38:return d=t.sent,document.getElementById("red").value="Join Red Team? \n Total - "+w.a.utils.formatUnits(d.toString(),this.token.value[1]).substr(0,5),t.next=42,this.contract.pots(e,this.room.currentRound.toString(),"2");case 42:return d=t.sent,document.getElementById("blue").value="Join Blue Team? \n Total - "+w.a.utils.formatUnits(d.toString(),this.token.value[1]).substr(0,5),t.next=46,this.contract.pots(e,this.room.currentRound.toString(),"3");case 46:return d=t.sent,document.getElementById("gold").value="Join Gold Team? \n Total - "+w.a.utils.formatUnits(d.toString(),this.token.value[1]).substr(0,5),t.next=50,this.contract.pots(e,this.room.currentRound.toString(),"4");case 50:return d=t.sent,document.getElementById("green").value="Join Green Team? \n Total - "+w.a.utils.formatUnits(d.toString(),this.token.value[1]).substr(0,5),t.next=54,this.contract.stakeHeads(this.address,e);case 54:if((u=t.sent)!=this.room.currentRound){t.next=79;break}return t.next=58,this.contract.userStake(this.address,e,this.room.currentRound.toString());case 58:u=t.sent,h=u.team.toString(),p=h,t.t0=h,t.next="1"===t.t0?64:"2"===t.t0?66:"3"===t.t0?68:"4"===t.t0?70:72;break;case 64:return h="Red",t.abrupt("break",72);case 66:return h="Blue",t.abrupt("break",72);case 68:return h="Gold",t.abrupt("break",72);case 70:return h="Green",t.abrupt("break",72);case 72:return y=u,u=h.toLowerCase(),t.next=76,this.contract.pots(e,this.room.currentRound.toString(),p);case 76:d=t.sent,h=">My Team "+h+"<\n Total - "+w.a.utils.formatUnits(d.toString(),this.token.value[1]).substr(0,5)+"\nMy Stake = "+w.a.utils.formatUnits(y.amount.toString(),this.token.value[1]).substr(0,5)+"\nMy Stake = "+(Math.round(parseInt(y.amount.toString())/this.totalPot.toNumber()*1e4)/100).toString()+"%\n Add Stake ?",document.getElementById(u).value=h;case 79:t.next=83;break;case 81:t.prev=81,t.t1=t.catch(0);case 83:this.handleResize();case 84:case"end":return t.stop()}}),t,this,[[0,81]])})));return function(){return t.apply(this,arguments)}}()},{key:"play",value:function(){var t=Object(c.a)(l.a.mark((function t(e){var n,i,o,a,r,s,c,d,u;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!=this.room){t.next=5;break}return window.alert("Not Connected to token game room"),t.abrupt("return");case 5:if(null!=W[this.chain].contract){t.next=8;break}return window.alert("Not available yet on this chain \n Request devs/admins to add it!"),t.abrupt("return");case 8:if(t.prev=8,!this.chain||!(this.chain in W)){t.next=77;break}if(!this.room.init){t.next=74;break}return n=new k.a(this.room.roundEnd.toString()).minus(Math.trunc(Date.now()/1e3)),t.next=14,this.contract.losers(this.token.value[0],this.room.currentRound);case 14:if(i=(i=t.sent).toString(),!n.isLessThan(1)||"0"!=i){t.next=19;break}return window.alert("Round not Active"),t.abrupt("return");case 19:if(this.room.paused){t.next=71;break}if(this.room.locked){t.next=68;break}return this.team=e,(o=document.getElementById("playBox")).style.height=Math.trunc(.8*document.getElementById("bgImg").clientHeight).toString()+"px",o.style.width=Math.trunc(.8*document.getElementById("bgImg").clientWidth).toString()+"px",o.style.left=(window.innerWidth/2-o.clientWidth/2).toString()+"px",o.style.top=Math.trunc(60+document.getElementById("bgImg").clientHeight/13).toString()+"px",o.style.backgroundColor=j[e-1].background,o.style.border="5px double "+j[e-1].border,o.opacity=".9",o.style.zIndex="2",(o=document.getElementById("x")).style.zIndex="2",a=new w.a.providers.Web3Provider(window.ethereum),r=new w.a.Contract(this.token.value[0],I,a),t.next=37,r.balanceOf(this.address);case 37:return s=t.sent,t.next=40,r.allowance(this.address,W[this.chain].contract);case 40:c=t.sent,d="",d=0==this.room.percentageFee?"Deposit Fee = "+w.a.utils.formatUnits(this.room.fee.toString(),this.token.value[1])+" "+this.token.label+"\n":"Deposit Fee = "+(parseInt(this.room.fee.toString())/10).toString()+"% / Amount\n",this.info="Add "+this.token.label+" and MOVE ALL STAKE to "+j[e-1].border.toUpperCase()+"\n"+d+"Balance = "+w.a.utils.formatUnits(s.toString(),this.token.value[1])+"\nContract Allowance = "+w.a.utils.formatUnits(c.toString(),this.token.value[1]).substring(0,12)+"...\n",o=document.getElementById("playBox"),(u=document.getElementById("playBoxText")).innerHTML='<pre><font size="'+Math.floor(o.clientHeight/80).toString()+'"px">'+this.info+"</font><pre>",(u=document.getElementById("add")).style.fontSize=Math.trunc(o.clientHeight/18).toString()+"px",u.style.height=Math.trunc(o.clientHeight/7).toString()+"px",u.style.width=Math.trunc(o.clientWidth/3).toString()+"px",u.style.position="absolute",u.style.bottom=Math.trunc(2*u.clientHeight).toString()+"px",u.style.left=(o.clientWidth/2).toString()+"px",(u=document.getElementById("approve")).style.fontSize=Math.trunc(o.clientHeight/18).toString()+"px",u.style.height=Math.trunc(o.clientHeight/7).toString()+"px",u.style.width=Math.trunc(o.clientWidth/3).toString()+"px",u.style.position="absolute",u.style.bottom=Math.trunc(2*u.clientHeight).toString()+"px",u.style.right=(o.clientWidth/2).toString()+"px",(u=document.getElementById("playAmount")).style.position="absolute",u.style.height=Math.trunc(o.clientHeight/8).toString()+"px",u.style.bottom=(2*(document.getElementById("add").clientHeight-u.clientHeight)).toString()+"px",u.style.left=Math.trunc(.3*o.clientWidth).toString()+"px",t.next=69;break;case 68:window.alert("Token Room Locked");case 69:t.next=72;break;case 71:window.alert("Token Room Paused");case 72:t.next=75;break;case 74:window.alert("Token Room not Initialized!");case 75:t.next=78;break;case 77:window.alert("Not Connected!");case 78:t.next=82;break;case 80:t.prev=80,t.t0=t.catch(8);case 82:case"end":return t.stop()}}),t,this,[[8,80]])})));return function(e){return t.apply(this,arguments)}}()},{key:"approveToken",value:function(){var t=Object(c.a)(l.a.mark((function t(){var e,n,i=this;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=new w.a.providers.Web3Provider(window.ethereum),n=new w.a.Contract(this.token.value[0],I,e.getSigner()),!(this.chain in W)){t.next=12;break}return t.prev=3,t.next=6,n.approve(W[this.chain].contract,"115792089237316195423570985008687907853269984665640564039457584007913129639934");case 6:setTimeout((function(){i.loadRoom()}),1e4),this.closeModals(),t.next=12;break;case 10:t.prev=10,t.t0=t.catch(3);case 12:case"end":return t.stop()}}),t,this,[[3,10]])})));return function(){return t.apply(this,arguments)}}()},{key:"sendPlay",value:function(){var t=Object(c.a)(l.a.mark((function t(e){var n,i=this;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(this.chain in W)){t.next=18;break}if(t.prev=1,!(-1==(n=document.getElementById("playAmount").value).indexOf(".")||n.substring(n.indexOf("")+1).length<=this.token.value[1])){t.next=12;break}return n=new k.a(10).exponentiatedBy(this.token.value[1]).multipliedBy(n).toString(),this.team=e.toString(),t.next=8,this.contract.play(this.token.value[0],n,e,{gasPrice:1e10,gasLimit:321e3});case 8:setTimeout((function(){i.loadRoom()}),15e3),this.closeModals(),t.next=13;break;case 12:window.alert("Invalid amount. Max decimals = "+this.token.value[1].toString());case 13:t.next=18;break;case 15:t.prev=15,t.t0=t.catch(1),this.closeModals();case 18:case"end":return t.stop()}}),t,this,[[1,15]])})));return function(e){return t.apply(this,arguments)}}()},{key:"autoUpdate",value:function(){var t=Object(c.a)(l.a.mark((function t(){var e,n,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null==this.room){t.next=21;break}if(!(e=new k.a(this.room.roundEnd.toString()).minus(Math.trunc(Date.now()/1e3))).isLessThan(1)){t.next=13;break}if(1!=this.room.init){t.next=10;break}return t.next=6,this.contract.losers(this.token.value[0],this.room.currentRound);case 6:i=t.sent.toString(),document.getElementById("pot").innerText="0"==i?"Loser not Picked\nRound - "+this.room.currentRound.toString()+"\n Pot = "+w.a.utils.formatUnits(this.totalPot.toString(),this.token.value[1]).substr(0,5):"Add to Start Round\nRound - "+this.room.currentRound.toString()+"\n Pot = "+w.a.utils.formatUnits(this.totalPot.toString(),this.token.value[1]).substr(0,5),t.next=11;break;case 10:document.getElementById("pot").innerText="Token Room not initialized \nRound - "+this.room.currentRound.toString()+"\n Pot = "+w.a.utils.formatUnits(this.totalPot.toString(),this.token.value[1]).substr(0,5);case 11:t.next=19;break;case 13:n=Math.trunc(e/86400).toString()+"d / ",n+=Math.trunc(e/3600).toString()+"h / ",n+=Math.trunc(e/60).toString()+"m / ",n+=Math.trunc(e%60).toString()+"s",n+="\nRound - "+this.room.currentRound.toString()+"\n Pot = "+w.a.utils.formatUnits(this.totalPot.toString(),this.token.value[1]).substr(0,5),document.getElementById("pot").innerText=n;case 19:t.next=22;break;case 21:W[this.chain]&&null==W[this.chain].contract&&(document.getElementById("pot").innerText="Chain not available yet \n Request from devs!");case 22:this.handleResize();case 23:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"loser",value:function(){var t=Object(c.a)(l.a.mark((function t(){var e=this;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,null==this.room||null==this.contract||null==this.token||1!=this.room.init){t.next=9;break}return t.next=4,this.contract.losers(this.token.value[0],this.room.currentRound);case 4:if("0"!=t.sent.toString()){t.next=9;break}return t.next=8,this.contract.randomLoser(this.token.value[0],{gasPrice:1e10,gasLimit:1e5});case 8:setTimeout((function(){e.loadRoom()}),1e4);case 9:t.next=13;break;case 11:t.prev=11,t.t0=t.catch(0);case 13:case"end":return t.stop()}}),t,this,[[0,11]])})));return function(){return t.apply(this,arguments)}}()},{key:"withdraw",value:function(){var t=Object(c.a)(l.a.mark((function t(){var e,n,i,o,a,r=this;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(t.prev=0,(e=document.getElementById("withdrawBox")).style.zIndex="2",document.getElementById("xx").style.zIndex="2",e=document.querySelector("table tbody");e.hasChildNodes();)e.removeChild(e.firstChild);if(null==this.room){t.next=33;break}return n=document.getElementById("select").options[document.getElementById("select").selectedIndex].text,n=W[this.chain].tokens[n].value[0],t.next=11,this.contract.stakeHeads(this.address,n);case 11:return i=t.sent.toString(),t.next=14,this.contract.userStake(this.address,n,i);case 14:if(o=t.sent,a=null,"0"==i){t.next=31;break}case 17:if(null==o||"0"==o.amount.toString()||"0"==i){t.next=29;break}return t.next=20,this.contract.losers(n,i);case 20:if((a=t.sent.toString())==o.team.toString()||i==this.room.currentRound.toString()){t.next=23;break}return t.delegateYield(l.a.mark((function t(){var s,c,d,u,p,h,y,g,m,b;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=k()("0"),c=k()("0"),d=1;case 3:if(!(d<5)){t.next=12;break}return t.next=6,r.contract.pots(n,i,d);case 6:u=t.sent.toString(),s=s.plus(u),d.toString()!=a&&(c=c.plus(u));case 9:d++,t.next=3;break;case 12:p=s.multipliedBy(k()(o.amount.toString()).dividedBy(c)).toFixed(0).toString(),h=document.getElementById("select").options[document.getElementById("select").selectedIndex].text,h=W[r.chain].tokens[h].value[1],p=w.a.utils.formatUnits(p,h),(y=e.insertRow(-1)).style.border="2px solid purple",g=i,y.onclick=function(){r.sendWithdrawal(g)},m=y.insertCell(0),b=y.insertCell(1),m.innerHTML=i,b.innerHTML=p;case 24:case"end":return t.stop()}}),t)}))(),"t0",23);case 23:return i=o.next.toString(),t.next=26,this.contract.userStake(this.address,n,i);case 26:o=t.sent,t.next=17;break;case 29:t.next=31;break;case 31:t.next=33;break;case 33:t.next=37;break;case 35:t.prev=35,t.t1=t.catch(0);case 37:case"end":return t.stop()}}),t,this,[[0,35]])})));return function(){return t.apply(this,arguments)}}()},{key:"sendWithdrawal",value:function(){var t=Object(c.a)(l.a.mark((function t(e){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=this.token.value[0],t.prev=1,"0"==e){t.next=6;break}return t.next=5,this.contract.withdraw(n,e,{gasPrice:1e10,gasLimit:1e5});case 5:this.closeModals();case 6:t.next=10;break;case 8:t.prev=8,t.t0=t.catch(1);case 10:case"end":return t.stop()}}),t,this,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},{key:"changeToken",value:function(){this.token=W[this.chain].tokens[document.getElementById("select").selectedOptions[0].value],this.closeModals(),this.loadRoom()}},{key:"closeModals",value:function(){document.getElementById("withdrawBox").style.zIndex="-1",document.getElementById("playBox").style.zIndex="-1"}},{key:"componentDidMount",value:function(){var t=this;setTimeout((function(){t.handleResize()}),370),window.addEventListener("resize",(function(){(document.getElementById("bgImg").clientHeight>t.height+9||document.getElementById("bgImg").clientHeight<t.height+9||document.getElementById("bgImg").clientWidth>t.width+9||document.getElementById("bgImg").clientWidth<t.width+9)&&t.handleResize()})),this.intervalID=setInterval(this.autoUpdate,5e3)}},{key:"componentWillUnmount",value:function(){var t=this;clearInterval(this.intervalID),window.removeEventListener("resize",(function(){(document.getElementById("bgImg").clientHeight>t.height+9||document.getElementById("bgImg").clientHeight<t.height+9||document.getElementById("bgImg").clientWidth>t.width+9||document.getElementById("bgImg").clientWidth<t.width+9)&&t.handleResize()}))}},{key:"getAddress",value:function(t){return"Connect"==t?t:this.address.substr(0,6)+"..."+this.address.substr(-3)}},{key:"render",value:function(){var t=this;return document.title="Four Corners",Object(B.jsxs)("div",{id:"bigbox",style:{height:"100vh",textAlign:"center",justify:"center",justifyContent:"center",alignItems:"center",backgroundColor:"#40206e"},children:[Object(B.jsxs)(g.a,{id:"nav",style:{backgroundColor:"#40206e",top:"0",height:"50px",whiteSpace:"nowrap",width:"50px",marginRight:"0px"},children:[Object(B.jsx)(g.a.Brand,{style:{margin:"0px"},children:Object(B.jsx)("div",{id:"logo",style:{top:"55"},children:Object(B.jsx)("img",{src:v,alt:"Logo",style:{width:"100px",height:"44px"}})})}),Object(B.jsxs)(g.a.Collapse,{children:[Object(B.jsx)(x.a,{id:"dropdown-basic-button",title:this.getAddress(this.address),style:{width:"auto",fontWeight:"bold",cursor:"pointer",color:"#3471eb",margin:"5px"},children:Object(B.jsx)(b.a.Item,{onSelect:this.connect,id:"browserConnect",as:"button",style:{color:"blue"},children:"Browser Wallet"})}),Object(B.jsx)("select",{id:"select",onChange:function(){return t.changeToken()},style:{fontSize:"20px",width:"auto",height:"33px"},children:Object(B.jsx)("option",{value:"",disabled:!0,selected:!0,hidden:!0,children:"Token"})})]})]}),Object(B.jsx)("span",{id:"main",style:{alignItems:"center",top:"55",whiteSpace:"nowrap",position:"relative",height:"auto",width:"auto"},children:Object(B.jsx)("img",{id:"bgImg",overflow:"visible",src:S,alt:"Background",style:{minHeight:"61w",maxHeight:"88vh",maxWidth:"95vw",minWidth:"300px",padding:"0px"}})}),Object(B.jsx)(m.a,{id:"red",zIndex:"1",as:"input",type:"Button",value:"Red Team",onClick:function(){return t.play(1)},style:{textAlign:"center",backgroundColor:"Transparent",position:"absolute",top:"10%",right:"50%",borderColor:"white",fontWeight:"Bold"}}),Object(B.jsx)(m.a,{id:"blue",zIndex:"1",as:"input",type:"Button",value:"Blue Team",onClick:function(){return t.play(2)},style:{backgroundColor:"Transparent",position:"absolute",top:"10%",right:"50%",borderColor:"white",fontWeight:"Bold"}}),Object(B.jsx)(m.a,{id:"gold",zIndex:"1",as:"input",type:"Button",value:"Gold Team",onClick:function(){return t.play(3)},style:{textAlign:"center",backgroundColor:"Transparent",position:"absolute",top:"10%",right:"50%",borderColor:"white",fontWeight:"Bold"}}),Object(B.jsx)(m.a,{id:"green",zIndex:"1",as:"input",type:"Button",value:"Green Team",onClick:function(){return t.play(4)},style:{backgroundColor:"Transparent",position:"absolute",top:"10%",right:"50%",borderColor:"white",fontWeight:"Bold"}}),Object(B.jsx)("span",{id:"pot",style:{fontWeight:"bold",position:"absolute",color:"brown"},children:this.pot}),Object(B.jsx)(m.a,{id:"loser",zIndex:"1",as:"input",type:"Button",value:"Random \nLoser",onClick:function(){return t.loser()},style:{color:"yellow",backgroundColor:"#9049d6",position:"absolute",top:"10%",right:"50%",borderColor:"yellow",fontWeight:"Bold"}}),Object(B.jsx)(m.a,{id:"withdraw",as:"input",type:"Button",value:"Withdraw \nWinnings",onClick:function(){return t.withdraw()},style:{color:"yellow",backgroundColor:"green",position:"absolute",top:"5%",right:"50%",borderColor:"yellow",fontWeight:"Bold"}}),Object(B.jsx)("span",{id:"redWins",style:{color:"yellow",fontWeight:"bold",position:"absolute",top:"10%",right:"50%"},children:this.redWins}),Object(B.jsx)("span",{id:"blueWins",style:{color:"yellow",fontWeight:"bold",position:"absolute",top:"10%",right:"50%"},children:this.blueWins}),Object(B.jsx)("span",{id:"goldWins",style:{color:"yellow",fontWeight:"bold",position:"absolute",top:"10%",right:"50%"},children:this.goldWins}),Object(B.jsx)("span",{id:"greenWins",style:{color:"yellow",fontWeight:"bold",position:"absolute",top:"10%",right:"50%"},children:this.greenWins}),Object(B.jsxs)("div",{id:"playBox",style:{position:"absolute",top:"35%",width:"50vw",height:"70vh",borderRadius:"25px",backgroundColor:"Transparent",color:"black",zIndex:"-1"},children:[Object(B.jsx)(m.a,{id:"x",zIndex:"-1",as:"input",type:"Button",value:"\xd7",onClick:function(){return t.closeModals()},style:{backgroundColor:"Transparent",color:"black",position:"absolute",top:"0",right:"0",borderColor:"Transparent",fontWeight:"Bold"}}),Object(B.jsx)("span",{id:"playBoxText"}),Object(B.jsxs)("span",{children:[Object(B.jsx)("input",{id:"playAmount",type:"number",min:"0",step:"0.001",pattern:"^\\d*\\.?\\d{0,18}$"}),Object(B.jsx)(m.a,{id:"approve",zIndex:"-1",as:"input",type:"Button",value:"\ud83e\udd1d Approve \ud83e\udd1d",onClick:function(){return t.approveToken()},style:{backgroundColor:"purple",color:"yellow",fontWeight:"Bold",marginRight:"20px"}}),Object(B.jsx)(m.a,{id:"add",zIndex:"-1",as:"input",type:"Button",value:"+ Add +",onClick:function(){return t.sendPlay(t.team)},style:{backgroundColor:"purple",color:"yellow",fontWeight:"Bold"}})]})]}),Object(B.jsxs)("div",{id:"withdrawBox",style:{position:"absolute",top:"25%",left:"25%",width:"50vw",height:"70vh",borderRadius:"25px",backgroundColor:"green",border:"5px double purple",color:"yellow",zIndex:"-1"},children:["Withdraw Winnings",Object(B.jsx)(m.a,{id:"xx",zIndex:"-1",as:"input",type:"Button",value:"\xd7",onClick:function(){return t.closeModals()},style:{backgroundColor:"Transparent",color:"black",position:"absolute",overflowY:"auto",top:"0",right:"0",borderColor:"Transparent",fontWeight:"Bold"}}),Object(B.jsxs)("table",{id:"table",style:{width:"100%",position:"absolute"},children:[Object(B.jsxs)("tr",{children:[Object(B.jsx)("th",{children:"Round #"}),Object(B.jsx)("th",{children:"Amount $"})]}),Object(B.jsx)("tbody",{})]})]})]})}}]),n}(i.Component),E=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,98)).then((function(e){var n=e.getCLS,i=e.getFID,o=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),i(t),o(t),a(t),r(t)}))};n(90);r.a.render(Object(B.jsx)(o.a.StrictMode,{children:Object(B.jsx)(M,{})}),document.getElementById("root")),E()}},[[91,1,2]]]);
//# sourceMappingURL=main.aea47146.chunk.js.map