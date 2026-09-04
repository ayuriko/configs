// https://clashparty.org/docs/guide/override/javascript
// 规则
const newRules = [
  // 自定义规则
  "DOMAIN-KEYWORD,datadoghq,REJECT",
  "IP-CIDR,172.28.23.133/16,DIRECT",
  "IP-CIDR,202.175.6.46/32,DIRECT",
  "PROCESS-NAME,AdsPower Global,🤖 AI 域名",
  "PROCESS-NAME,SunBrowser Helper,🤖 AI 域名",
  "PROCESS-NAME,AdsPower Global Helper,🤖 AI 域名",
  "PROCESS-NAME,AdsPower Global Helper (Renderer),🤖 AI 域名",
  "PROCESS-NAME,AdsPower Global Helper (GPU),🤖 AI 域名",
  "PROCESS-NAME,chrome_crashpad_handler,🤖 AI 域名",
  "PROCESS-NAME,Terminal,🤖 AI 域名",
  "DOMAIN-KEYWORD,anthropic,🤖 AI 域名",
  "DOMAIN-KEYWORD,claude,🤖 AI 域名",
  "DOMAIN-SUFFIX,clau.de,🤖 AI 域名",
  "DOMAIN-SUFFIX,ddns.cgfw.de,DIRECT",
  "DOMAIN-SUFFIX,linkedin.com,DIRECT",
  "DOMAIN-SUFFIX,acc.ai.cgfw.de,DIRECT",
  "DOMAIN-SUFFIX,nvidiagrid.net,DIRECT",
  "DOMAIN-SUFFIX,shopee.com,DIRECT",
  "DOMAIN-SUFFIX,cn2gias.uk,🎞️ 国际媒体",
  "DOMAIN-SUFFIX,oyunfor.com,DIRECT",
  "DOMAIN-SUFFIX,paytr.com,DIRECT",
  "DOMAIN-SUFFIX,isbank.com.tr,DIRECT",
  // "DOMAIN-SUFFIX,ibllc.com,🎞️ 国际媒体",
  // "DOMAIN-SUFFIX,interactivebrokers.com,🎞️ 国际媒体",
  // "DOMAIN-SUFFIX,interactivebrokers.com.hk,🎞️ 国际媒体",
  // "DOMAIN-SUFFIX,ibkr.com,🎞️ 国际媒体",
  "DOMAIN-SUFFIX,feimu.tv,🎞️ 国际媒体",
  "DOMAIN-SUFFIX,byr.pt,🎞️ 国际媒体",
  "PROCESS-NAME,JavaApplicationStub,DIRECT",
  "DOMAIN-SUFFIX,adobe.com,REJECT",
  "DOMAIN-SUFFIX,adobe.net,REJECT",
  "DOMAIN-SUFFIX,adobe.io,REJECT",
  "DOMAIN-SUFFIX,adobestats.io,REJECT",
  "DOMAIN-SUFFIX,adobelogin.com,REJECT"
  ];


 // 程序入口
function main(config) {
    let oldRules = config.rules;

  // 将新的规则添加到现有的规则中
  config.rules = newRules.concat(oldRules);

  // 返回修改后的配置
  return config;
}
