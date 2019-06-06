//开发模式
export const IS_DEV = process.env.NODE_ENV !== 'production';
//链ID
export const API_CHAIN_ID = sessionStorage.hasOwnProperty('chainID') ?  Number(sessionStorage.getItem('chainID')): 100;
//燃烧地址
export const API_BURNING_ADDRESS = 'tNULSeBaMgLW3Wrt8Eh8Av5MinETdiXhfGg61u';
//运行环境（true:正式环境，false:测试环境）
export const RUN_DEV = false;
//正式、测试网络的api
export let API_URL = localStorage.hasOwnProperty("urls") ? JSON.parse(localStorage.getItem("urls")).urls : 'http://apitn1.nulscan.io/';
setInterval(() => {
  API_URL = localStorage.hasOwnProperty("urls") ? JSON.parse(localStorage.getItem("urls")).urls : 'http://apitn1.nulscan.io/';
}, 500);
//请求最迟时间
export const API_TIME = IS_DEV ? '9000' : '8000';
//默认节点服务列表
export const defaultData = [
  {name: 'Official',chainId:2,chainName:'tNULS', urls: 'http://192.168.1.192:18003/', delay: '10ms', state: 0, isDelete: false},
  {name: 'Official',chainId:2,chainName:'tNULS', urls: 'http://192.168.1.40:18003/', delay: '10ms', state: 1, isDelete: false},
];
//默认服务节点地址
export const defaultUrl ={name: 'Official',chainId:2,chainName:'tNULS', urls: 'http://192.168.1.40:18003/', delay: '10ms', state: 1, isDelete: false};
