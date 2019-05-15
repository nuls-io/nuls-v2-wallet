import enLocale from 'element-ui/lib/locale/lang/en'

const en = {
  "nav": {
    "wallet": "Wallet",
    "transfer": "Transfer",
    "consensus": "Consensus",
    "contracts": "Contracts",
    "application":"Application",
    "set":"Set",
    "addressList":"Address List",
    "nodeList":"Node List",
    "help":"Help",
  },

  "public": {
    "copySuccess": "Copied to clipboard",
    "operation": "Operation",
    "display": "display",
    "total": "total",
    "hideReward":"Hidden Consensus Award",
    "usableBalance":"Usable balance",
    "fee": "Fee",
    "next": "Next",
    "basicData":"Basic data",
    "time":"Time",
    "amount":"Amount",
    "height":"Height",
    "type":"Type",
    "status":"Status",
    "nodeID":"Node ID",
    "roundInfo":"Round info",
    "rotation":"Rotation",
    "number":"Number",
    "alias":"Alias",
    "createAddress":"Create address",
    "packingAddress":"Packing address",
    "rewardAddress":"Reward address",
    "commission":"Commission",
    "deposit":"Deposit",
    "credit":"Credit",
    "remarks":"Remarks",
    "participants":"Participants",
    "totalStake":"Total stake",
    "err":"Verify and broadcast transaction failure:",
    "err0":"Verify and broadcast transaction exceptions:",
    "err1":"Input and outputs assembly errors:",
    "err2":"Failed to obtain account balance:",
    "err3":"Obtain account balance exceptions:",

  },

  "tab":{
    "tab0":"Assets",
    "tab1":"Type",
    "tab2":"Total",
    "tab3":"Locking",
    "tab4":"Available",
    "tab5":"Time",
    "tab6":"Amount",
    "tab7":"Thaw height/time",
    "tab8":"Cause freezing",
    "tab9":"Balance",
    "tab10":"State",
  },

  "type": {
    "undefined": "",
    "0": "All",
    "1": "Consensus reward",
    "2": "Transfer",
    "3": "Aliased",
    "4": "Register node",
    "5": "Stake",
    "51": "Change",
    "6": "Cancel consensus",
    "7": "Yellow card",
    "8": "Red card",
    "9": "Unregister node",
    "10": "Cross Trading",
    "15": "Contract creation",
    "16": "Call contract",
    "17": "Delete contract",
    "18": "Contract transfer",
    "19": "Contract return",
  },

  "budgetType":{
    "undefined": "",
    "0": "Income/Pay",
    "1": "Income",
    "2": "Pay",
  },

  "frozenType": {
    "undefined":"",
    "1": "Highly locking",
    "2": "Time locking",
    "3": "Consensus locking"
  },

  "addressType": {
    "undefined": "",
    "1": "General Account",
    "2": "Contract account",
    "3": "Multi account"
  },

  "transferStatus": {
    "undefined": "",
    "0": "Unconfirmed",
    "1": "Confirmed"
  },

  "nodeType": {
    "undefined": "",
    "0": "General",
    "1": "Credit",
    "2": "Commission",
    "3": "Staked amount",
    "4": "Deposit"
  },

  "history": {
    "0": "All history",
    "1": "Int history",
    "2": "Out history",
  },

  "nodeStatus": {
    "undefined": "",
    "0": "All nodes",
    "1": "General nodes",
    "2": "Developer nodes",
    "3": "Ambassador nodes"
  },

  "contractStatus": {
    "undefined": "",
    "-1": "Create failure",
    "0": "Uncertificated",
    "1": "Certificating",
    "2": "Certificated",
    "3": "Deleted"
  },

  "password":{
    "password0":"Pass word",
    "password1":"Please input a password",
    "password2":"Cancel",
    "password3":"Confirm",
  },

  "home":{
    "home0":"Main assets",
    "home1":"Cross assets",
    "home2":"Transaction record",
  },

  "frozenList":{
    "frozenList0":"Frozen list",
  },

  "transfer":{
    "transfer0":"Payment address:",
    "transfer1":"Receipt address:",
    "transfer2":"Asset type:",
    "transfer3":"Transfer amount:",
    "transfer4":"Remarks:",
    "transfer5":"The handling fee value is estimated based on the current NULS network, the actual consumption may be less than that value, and the surplus will be returned by consensus reward.",
    "transfer6":"Transfer confirmation",
    "transfer7":"Cancel",
    "transfer8":"Confirm submission",
    "transfer9":"Please enter the receipt address.",
    "transfer10":"Please enter the correct collection address.",
    "transfer11":"Please enter the amount",
    "transfer12":"The amount must be a number.",
    "transfer13":"The amount must be greater than 0.001",
    "transfer14":"The amount should not be greater than the available balance.",
  },

  "consensus":{
    "consensus0":"My consensus",
    "consensus1":"Total entrust",
    "consensus2":"Available balance",
    "consensus3":"Total Consensus Award" ,
    "consensus4":"All consensus",
    "consensus5":"New node",
    "consensus6":"Consensus node" ,
    "consensus7":"Total node",
    "consensus8":"Total delegation",
    "consensus9":"All nodes",
    "consensus10":"Please choose to enter ID\\alias\\address...",
    "consensus11":"My node",
  },

  "newConsensus":{
    "newConsensus0":"Create node",
    "newConsensus1":"Create node validation",
    "newConsensus2":"Please enter the reward address.",
    "newConsensus3":"Please enter the block address" ,
    "newConsensus4":"Packing Address cannot create Address",
    "newConsensus5":"Please enter a deposit",
    "newConsensus6":"Margin must be numbered",
    "newConsensus7":"Sorry, the balance is insufficient.",
    "newConsensus8":"Margin not less than 2000 and not more than 500000",
    "newConsensus9":"Please enter the Commission ratio.",
    "newConsensus10":"The commission ratio must be numeric",
    "newConsensus11":"Margin not less than 10 and not more than 100",
  },

  "consensusList":{
    "consensusList0":"Consensus details",
    "consensusList1":"Adding time",
  },

  "consensusInfo":{
    "consensusInfo0":"Withdraw",
    "consensusInfo1":"Amount entrusted",
    "consensusInfo2":"The amount entrusted cannot be empty",
    "consensusInfo3":"Please enter a valid amount of commission",
    "consensusInfo4":"The amount of commission is not less than 2000 and the total amount of commission is less than 500000.",
    "consensusInfo5":"Logoff node",
    "consensusInfo6":"Node information",
    "consensusInfo7":"Total reward",
    "consensusInfo8":"Creator alias",
    "consensusInfo9":"Creation time",
    "consensusInfo10":"Node penalty",
    "consensusInfo11":"Yellow card",
  },

  "nodeService":{
    "nodeService0":"Node switching...",
    "nodeService1":"Node Service List",
    "nodeService2":"Name",
    "nodeService3":"Service address",
    "nodeService4":"Delay",
    "nodeService5":"State",
    "nodeService6":"Operation",
    "nodeService7":"Alter",
    "nodeService8":"Remove",
    "nodeService9":"Add Node Service Address",
    "nodeService10":"The unofficial address you entered may not work properly, so the loss will be borne by you.",
    "nodeService11":"Test connection",
    "nodeService12":"Immediate use",
    "nodeService13":"Name cannot be empty",
    "nodeService14":"Address cannot be empty",
    "nodeService15":"Please enter the correct connection address",
    "nodeService16":"Nodes cannot be connected",
    "nodeService17":"Connection failed",
    "nodeService18":"Request timeout",
    "nodeService19":"This operation will be removed",
    "nodeService20":"Does Node Service Continue",
    "nodeService21":"Tips",
    "nodeService22":"Remove success",
  },

  "address":{
    "address0":"Address management",
    "address1":"Account",
    "address2":"Balance",
    "address3":"Alias",
    "address4":"Remarks",
    "address5":"Operation",
    "address6":"Change Password",
    "address7":"Backups",
    "address8":"Remove",
    "address9":"Please enter notes",
    "address10":"Cancel",
    "address11":"Confirm",
    "address12":"Sorry, the account balance is insufficient.",
    "address13":"Password error",
    "address":"",

  },

  "newAddress":{
    "newAddress0":"Create Wallet",
    "newAddress1":"Backup account",
    "newAddress2":"Set password",
    "newAddress3":"Backups",
    "newAddress4":"Please set up a password for importing accounts, transferring accounts, participating in consensus and other important behavior verification.",
    "newAddress5":"Please keep your wallet password carefully. NULS wallet does not store your password and can't help you find it. Please keep it in mind.",
    "newAddress6":"Password",
    "newAddress7":"Confirm password",
    "newAddress8":"Click Next and you've agreed.",
    "newAddress9":"user agreement",
    "newAddress10":"Next",
    "newAddress11":"Import Wallet",
    "newAddress12":"Your account address",
    "newAddress13":"Don't lose it! NULS will not be able to help you retrieve the missing key",
    "newAddress14":"Don't share with others! If you use this file on malicious websites, your funds may be at risk of theft.",
    "newAddress15":"Please make a backup! In case your computer breaks down" ,
    "newAddress16":"Keystore backup",
    "newAddress17":"Key backup",
    "newAddress18":"Entering Wallet",
    "newAddress19":"Warning",
    "newAddress20":"Private keys are not encrypted and backup is risky. Please save them to a safe place. Keystore is recommended for backup.",
    "newAddress21":"Copy",
    "newAddress22":"Please input a password",
    "newAddress23":"Please enter an 8-20-bit password composed of letters and numbers",
    "newAddress24":"Please enter your password again.",
    "newAddress25":"Two inconsistencies in password input",
    "newAddress":"",
  },

  "editPassword":{
    "editPassword0":"Change Password" ,
    "editPassword1":"Old password",
    "editPassword2":"New password",
    "editPassword3":"Confirm the new password",
    "editPassword4":"Submission",
    "editPassword5":"If you forget your password, you can re-import it with your private key",
    "editPassword6":"Please enter your password again",
    "editPassword7":"Please enter an 8-20-bit password composed of letters and numbers",
    "editPassword8":"Please enter a new password",
    "editPassword9":"The new password cannot be the same as the old one",
    "editPassword10":"Please enter the new password again.",
    "editPassword11":"The new password is different from the confirmation of the new password. Please re-enter it.",
    "editPassword12":"Password modification completed",
    "editPassword13":"Old password error",
  },

  "importAddress":{
    "importAddress0":"Create address",
    "importAddress1":"Import Wallet",
    "importAddress2":"Keystore import",
    "importAddress3":"Key import",
    "importAddress4":"Select the keystore file",
    "importAddress5":"Please enter your private key:",
    "importAddress6":"Password",
    "importAddress7":"Confirm password",
    "importAddress8":"Import Wallet",
    "importAddress9":"Private key cannot be empty",
    "importAddress10":"Please input a password",
    "importAddress11":"Please enter an 8-20-bit password composed of letters and numbers",
    "importAddress12":"Please enter your password again.",
    "importAddress13":"Two inconsistencies in password input",
  },

  "setAlias":{
    "setAlias0":"Setting aliases",
    "setAlias1":"Aliases can be used as payees of NULS transfers. For account security, after the alias setting is determined, it will not be able to be modified. Please operate with caution.",
    "setAlias2":"Setting aliases costs 1 NULS",
    "setAlias3":"Total cost",
    "setAlias4":"Please enter an alias",
    "setAlias5":"Please enter an alias (only lowercase letters, numbers, underscores are allowed (underscores cannot be at both ends)",
  },

  "bottom": {
    "serviceNode": "Service node",
    "nodeHeight":"Host/Service Node",
    "agreement":"Service agreement",
    "policy":"Privacy policy",
    "updateWallet": "Update wallet",
    "Tips": "Tips",
    "Backstage": "Background operation",
  },

  "TipsType":{
    "undefined": "",
    "1": "Check for update errors",
    "2": "Checking for updates...",
    "3": "A new version has been detected and is being downloaded...",
    "4": "Now the latest version is in use, no updates are needed.",
  },
  ...enLocale

};
export default en
