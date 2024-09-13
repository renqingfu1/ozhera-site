import{_ as o,a as i,b as c,c as s,d as h}from"./chunks/airstar.a4afd66e.js";import{_ as u,g as _,o as d,h as p,p as a,j as t,b as r,Q as l,e as n}from"./chunks/framework.d1267443.js";const N=JSON.parse('{"title":"Apache OzHera(Incubating)","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/introduction.md","filePath":"zh/guide/introduction.md"}'),g={name:"zh/guide/introduction.md"},m=l("",6),b=a("ul",null,[a("li",null,"遵循Opentracing标准，集成OpenTelemetry、Grafana、Prometheus、ES、CAdvisor等多个开源明星产品; 同时Apache OzHera(Incubating)深度适配K8S，提供一键在K8S部署的operator.")],-1),f=a("ul",null,[a("li",null,'业务可用性 = 1 - "异常"请求数/总请求数。"异常"请求的定义如下：包含为RPC层面的异常(比如HTTP 5xx)、及业务错误码封装的异常，我们内置了一套两层错误码规范也支持业务自定义，这样我们通过一个指标就能够很准确的表达系统真实的健康状况，从此告别无效告警的干扰。')],-1),z=a("ul",null,[a("li",null,"基于traceId打通报警->指标->链路->日志的闭环联动，从报警卡片触达用户开始，用户直接点击就能够快速查看到本次报警相关的链路及日志情况，大幅提升用户定位问题效率")],-1),x=a("ul",null,[a("li",null,"hera做到对异常调用(error span、异常的业务错误码、error 日志、单次span耗时超过1秒等)的识别，并保证异常trace整个调用链路数据的保留；对于正常的trace我们采用默认万分之一(可自定义)随机抽样策略。")],-1),A=a("ul",null,[a("li",null,"完善的账号、权限、应用管理机制，方便用户在企业内部快速落地并打通企业自身的账号、应用部署系统等，还可快速对接企业办公软件实现告警触达；核心链路模块解耦、同时对业务系统做到最低侵入；在小米内部经历数次大促考验，每天处理原始数据量>1PB。")],-1),P=l("",3);function T(I,O,S,q,H,C){const e=_("font");return d(),p("div",null,[m,a("ul",null,[a("li",null,[t(e,{color:"red"},{default:r(()=>[n("拥抱云原生")]),_:1}),b]),a("li",null,[t(e,{color:"red"},{default:r(()=>[n("报警准：业务可用性指标")]),_:1}),f]),a("li",null,[t(e,{color:"red"},{default:r(()=>[n("定位快：metrics-tracing-logging联动")]),_:1}),z]),a("li",null,[t(e,{color:"red"},{default:r(()=>[n("经济：小于千分之一存储成本，满足99.9%的tracing诉求")]),_:1}),x]),a("li",null,[t(e,{color:"red"},{default:r(()=>[n("企业级可观测产品")]),_:1}),A])]),P])}const y=u(g,[["render",T]]);export{N as __pageData,y as default};
