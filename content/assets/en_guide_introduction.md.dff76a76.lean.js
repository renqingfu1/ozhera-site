import{_ as n,a as o,b as l,c,d}from"./chunks/airstar.a4afd66e.js";import{_ as u,g as h,o as m,h as p,p as e,j as a,b as i,Q as r,e as s}from"./chunks/framework.d1267443.js";const C=JSON.parse('{"title":"OzHera","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/introduction.md","filePath":"en/guide/introduction.md"}'),f={name:"en/guide/introduction.md"},_=r("",6),g=e("ul",null,[e("li",null,"OzHera follows the Opentracing standard and integrates with various open-source stars like OpenTelemetry, Grafana, Prometheus, Elasticsearch (ES), CAdvisor, and more. Additionally, OzHera offers deep integration with Kubernetes (K8s) and provides a one-click operator deployment for K8s environments.")],-1),b=e("ul",null,[e("li",null,`Business availability is calculated as 1 - "abnormal" requests / total requests. The definition of "abnormal" requests includes exceptions at the RPC level (e.g., HTTP 5xx) and exceptions encapsulated with business error codes. OzHera provides a standardized two-level error code system, supporting both default and custom business error codes. This allows for accurate representation of the system's true health status, eliminating the interference of ineffective alerts.`)],-1),y=e("ul",null,[e("li",null,"OzHera establishes a closed-loop linkage between alerts, metrics, distributed tracing, and logs using trace IDs. Starting from an alert card, users can quickly view the relevant traces and log information with a single click, significantly improving issue resolution efficiency.")],-1),v=e("ul",null,[e("li",null,"Hera identifies exceptional calls (error spans, abnormal business error codes, error logs, spans exceeding 1 second, etc.) and ensures the retention of entire exceptional trace call chains. For normal traces, a default one in ten thousand (customizable) random sampling strategy is employed.")],-1),T=e("ul",null,[e("li",null,"OzHera features a comprehensive account, permission, and application management mechanism, facilitating rapid adoption within enterprises and integration with their internal account and application deployment systems. It also supports seamless integration with enterprise office software for alert notifications. The core linkage modules are decoupled, ensuring minimal intrusion into business systems. OzHera has undergone numerous stress tests at Xiaomi, handling over 1 PB of raw data daily.")],-1),z=r("",3);function x(w,P,O,H,q,A){const t=h("font");return m(),p("div",null,[_,e("ul",null,[e("li",null,[a(t,{color:"red"},{default:i(()=>[s("Cloud-Native Embrace")]),_:1}),g]),e("li",null,[a(t,{color:"red"},{default:i(()=>[s("Precise Alerting: Business Availability Metrics")]),_:1}),b]),e("li",null,[a(t,{color:"red"},{default:i(()=>[s("Swift Issue Resolution: Metrics-Tracing-Logging Integration")]),_:1}),y]),e("li",null,[a(t,{color:"red"},{default:i(()=>[s("Cost-Effective: Storage Costs Less Than One in a Thousand, Meeting 99.9% of Tracing Needs")]),_:1}),v]),e("li",null,[a(t,{color:"red"},{default:i(()=>[s("Enterprise-Grade Observability Product")]),_:1}),T])]),z])}const I=u(f,[["render",x]]);export{C as __pageData,I as default};
