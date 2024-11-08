import{_ as r,a as o,b as l,c,d as u}from"./chunks/airstar.a4afd66e.js";import{_ as d,g as h,o as p,h as g,p as e,j as t,b as i,Q as s,e as n}from"./chunks/framework.d1267443.js";const S=JSON.parse('{"title":"Apache OzHera(Incubating)","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/introduction.md","filePath":"en/guide/introduction.md"}'),m={name:"en/guide/introduction.md"},f=s("",6),_=e("ul",null,[e("li",null,"Apache OzHera(Incubating) follows the Opentracing standard and integrates with various open-source stars like OpenTelemetry, Grafana, Prometheus, Elasticsearch (ES), CAdvisor, and more. Additionally, Apache OzHera(Incubating) offers deep integration with Kubernetes (K8s) and provides a one-click operator deployment for K8s environments.")],-1),b=e("ul",null,[e("li",null,`Business availability is calculated as 1 - "abnormal" requests / total requests. The definition of "abnormal" requests includes exceptions at the RPC level (e.g., HTTP 5xx) and exceptions encapsulated with business error codes. Apache OzHera(Incubating) provides a standardized two-level error code system, supporting both default and custom business error codes. This allows for accurate representation of the system's true health status, eliminating the interference of ineffective alerts.`)],-1),y=e("ul",null,[e("li",null,"Apache OzHera(Incubating) establishes a closed-loop linkage between alerts, metrics, distributed tracing, and logs using trace IDs. Starting from an alert card, users can quickly view the relevant traces and log information with a single click, significantly improving issue resolution efficiency.")],-1),A=e("ul",null,[e("li",null,"Hera identifies exceptional calls (error spans, abnormal business error codes, error logs, spans exceeding 1 second, etc.) and ensures the retention of entire exceptional trace call chains. For normal traces, a default one in ten thousand (customizable) random sampling strategy is employed.")],-1),v=e("ul",null,[e("li",null,"Apache OzHera(Incubating) features a comprehensive account, permission, and application management mechanism, facilitating rapid adoption within enterprises and integration with their internal account and application deployment systems. It also supports seamless integration with enterprise office software for alert notifications. The core linkage modules are decoupled, ensuring minimal intrusion into business systems. Apache OzHera(Incubating) has undergone numerous stress tests at Xiaomi, handling over 1 PB of raw data daily.")],-1),T=s("",3);function z(I,x,w,P,O,H){const a=h("font");return p(),g("div",null,[f,e("ul",null,[e("li",null,[t(a,{color:"red"},{default:i(()=>[n("Cloud-Native Embrace")]),_:1}),_]),e("li",null,[t(a,{color:"red"},{default:i(()=>[n("Precise Alerting: Business Availability Metrics")]),_:1}),b]),e("li",null,[t(a,{color:"red"},{default:i(()=>[n("Swift Issue Resolution: Metrics-Tracing-Logging Integration")]),_:1}),y]),e("li",null,[t(a,{color:"red"},{default:i(()=>[n("Cost-Effective: Storage Costs Less Than One in a Thousand, Meeting 99.9% of Tracing Needs")]),_:1}),A]),e("li",null,[t(a,{color:"red"},{default:i(()=>[n("Enterprise-Grade Observability Product")]),_:1}),v])]),T])}const C=d(m,[["render",z]]);export{S as __pageData,C as default};