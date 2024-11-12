import{_ as n,a as i,b as s,c as _,d as c}from"./chunks/airstar.a4afd66e.js";import{_ as h,g as d,o as u,h as m,p as e,j as t,b as r,Q as o,e as l}from"./chunks/framework.d1267443.js";const y=JSON.parse('{"title":"OzHera","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/introduction.md","filePath":"zh/guide/introduction.md"}'),p={name:"zh/guide/introduction.md"},f=o('<h1 id="ozhera" tabindex="-1">OzHera <a class="header-anchor" href="#ozhera" aria-label="Permalink to &quot;OzHera&quot;">​</a></h1><h2 id="ozhera是什么" tabindex="-1">OzHera是什么 <a class="header-anchor" href="#ozhera是什么" aria-label="Permalink to &quot;OzHera是什么&quot;">​</a></h2><p>OzHera是一个云原生时代的应用观测平台(APM)，以应用为核心，集指标监控、链路追踪、日志、报警等能力于一身。平台使命是提升应用线上稳定性，帮助业务在遇到故障时能做到1分钟发现、5分钟定位。</p><h2 id="架构" tabindex="-1">架构 <a class="header-anchor" href="#架构" aria-label="Permalink to &quot;架构&quot;">​</a></h2><p><img src="'+n+'" alt="ozhera"></p><h2 id="ozhera-features" tabindex="-1">特性 <a class="header-anchor" href="#ozhera-features" aria-label="Permalink to &quot;特性 {#ozhera-features}&quot;">​</a></h2>',6),g=e("ul",null,[e("li",null,"遵循Opentracing标准，集成OpenTelemetry、Grafana、Prometheus、ES、CAdvisor等多个开源明星产品; 同时OzHera深度适配K8S，提供一键在K8S部署的operator.")],-1),z=e("ul",null,[e("li",null,'业务可用性 = 1 - "异常"请求数/总请求数。"异常"请求的定义如下：包含为RPC层面的异常(比如HTTP 5xx)、及业务错误码封装的异常，我们内置了一套两层错误码规范也支持业务自定义，这样我们通过一个指标就能够很准确的表达系统真实的健康状况，从此告别无效告警的干扰。')],-1),x=e("ul",null,[e("li",null,"基于traceId打通报警->指标->链路->日志的闭环联动，从报警卡片触达用户开始，用户直接点击就能够快速查看到本次报警相关的链路及日志情况，大幅提升用户定位问题效率")],-1),P=e("ul",null,[e("li",null,"hera做到对异常调用(error span、异常的业务错误码、error 日志、单次span耗时超过1秒等)的识别，并保证异常trace整个调用链路数据的保留；对于正常的trace我们采用默认万分之一(可自定义)随机抽样策略。")],-1),T=e("ul",null,[e("li",null,"完善的账号、权限、应用管理机制，方便用户在企业内部快速落地并打通企业自身的账号、应用部署系统等，还可快速对接企业办公软件实现告警触达；核心链路模块解耦、同时对业务系统做到最低侵入；在小米内部经历数次大促考验，每天处理原始数据量>1PB。")],-1),b=o('<h2 id="用户列表" tabindex="-1">用户列表 <a class="header-anchor" href="#用户列表" aria-label="Permalink to &quot;用户列表&quot;">​</a></h2><p>如果您正在使用OzHera，并且认为它对您有所帮助，或者您希望为其贡献代码，请将您的公司添加到用户列表中，以便让我们了解您的需求。</p><table><thead><tr><th style="text-align:center;"><img src="'+i+'" alt="xiao mi"></th><th style="text-align:center;"><img src="'+s+'" alt="auchosaur games"></th><th style="text-align:center;"><img src="'+_+'" alt="lingdong"></th><th style="text-align:center;"><img src="'+c+'" alt="airstar"></th></tr></thead></table>',3);function O(S,q,H,A,C,V){const a=d("font");return u(),m("div",null,[f,e("ul",null,[e("li",null,[t(a,{color:"red"},{default:r(()=>[l("拥抱云原生")]),_:1}),g]),e("li",null,[t(a,{color:"red"},{default:r(()=>[l("报警准：业务可用性指标")]),_:1}),z]),e("li",null,[t(a,{color:"red"},{default:r(()=>[l("定位快：metrics-tracing-logging联动")]),_:1}),x]),e("li",null,[t(a,{color:"red"},{default:r(()=>[l("经济：小于千分之一存储成本，满足99.9%的tracing诉求")]),_:1}),P]),e("li",null,[t(a,{color:"red"},{default:r(()=>[l("企业级可观测产品")]),_:1}),T])]),b])}const I=h(p,[["render",O]]);export{y as __pageData,I as default};
