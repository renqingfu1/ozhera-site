import{_ as r,a as o,b as l,c,d as u}from"./chunks/airstar.a4afd66e.js";import{_ as d,C as h,o as p,c as g,k as e,H as t,w as i,Q as s,a as n}from"./chunks/framework.4fd28da9.js";const C=JSON.parse('{"title":"Apache OzHera(Incubating)","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/introduction.md","filePath":"en/guide/introduction.md"}'),m={name:"en/guide/introduction.md"},f=s('<h1 id="apache-ozhera-incubating" tabindex="-1">Apache OzHera(Incubating) <a class="header-anchor" href="#apache-ozhera-incubating" aria-label="Permalink to &quot;Apache OzHera(Incubating)&quot;">​</a></h1><h2 id="what-is-apache-ozhera-incubating" tabindex="-1">What is Apache OzHera(Incubating) <a class="header-anchor" href="#what-is-apache-ozhera-incubating" aria-label="Permalink to &quot;What is Apache OzHera(Incubating)&quot;">​</a></h2><p>Apache OzHera(Incubating)is an Application Performance Monitoring (APM) platform designed for the cloud-native era. It revolves around applications and integrates capabilities such as metric monitoring, distributed tracing, logging, and alerting. The platform&#39;s mission is to enhance the online stability of applications and enable businesses to detect and locate issues within 1 minute and 5 minutes, respectively, when problems occur.</p><h2 id="architecture" tabindex="-1">Architecture <a class="header-anchor" href="#architecture" aria-label="Permalink to &quot;Architecture&quot;">​</a></h2><p><img src="'+r+'" alt="ozhera"></p><h2 id="ozhera-features" tabindex="-1">Features <a class="header-anchor" href="#ozhera-features" aria-label="Permalink to &quot;Features {#ozhera-features}&quot;">​</a></h2>',6),_=e("ul",null,[e("li",null,"Apache OzHera(Incubating) follows the Opentracing standard and integrates with various open-source stars like OpenTelemetry, Grafana, Prometheus, Elasticsearch (ES), CAdvisor, and more. Additionally, Apache OzHera(Incubating) offers deep integration with Kubernetes (K8s) and provides a one-click operator deployment for K8s environments.")],-1),b=e("ul",null,[e("li",null,`Business availability is calculated as 1 - "abnormal" requests / total requests. The definition of "abnormal" requests includes exceptions at the RPC level (e.g., HTTP 5xx) and exceptions encapsulated with business error codes. Apache OzHera(Incubating) provides a standardized two-level error code system, supporting both default and custom business error codes. This allows for accurate representation of the system's true health status, eliminating the interference of ineffective alerts.`)],-1),y=e("ul",null,[e("li",null,"Apache OzHera(Incubating) establishes a closed-loop linkage between alerts, metrics, distributed tracing, and logs using trace IDs. Starting from an alert card, users can quickly view the relevant traces and log information with a single click, significantly improving issue resolution efficiency.")],-1),A=e("ul",null,[e("li",null,"Hera identifies exceptional calls (error spans, abnormal business error codes, error logs, spans exceeding 1 second, etc.) and ensures the retention of entire exceptional trace call chains. For normal traces, a default one in ten thousand (customizable) random sampling strategy is employed.")],-1),v=e("ul",null,[e("li",null,"Apache OzHera(Incubating) features a comprehensive account, permission, and application management mechanism, facilitating rapid adoption within enterprises and integration with their internal account and application deployment systems. It also supports seamless integration with enterprise office software for alert notifications. The core linkage modules are decoupled, ensuring minimal intrusion into business systems. Apache OzHera(Incubating) has undergone numerous stress tests at Xiaomi, handling over 1 PB of raw data daily.")],-1),T=s('<h2 id="user-list" tabindex="-1">User List <a class="header-anchor" href="#user-list" aria-label="Permalink to &quot;User List&quot;">​</a></h2><p>If you are using Apache OzHera(Incubating) and find it beneficial, or if you wish to contribute code, please add your company to the user list to help us understand your needs.</p><table><thead><tr><th style="text-align:center;"><img src="'+o+'" alt="xiao mi"></th><th style="text-align:center;"><img src="'+l+'" alt="auchosaur games"></th><th style="text-align:center;"><img src="'+c+'" alt="lingdong"></th><th style="text-align:center;"><img src="'+u+'" alt="airstar"></th></tr></thead></table>',3);function z(I,w,x,P,O,H){const a=h("font");return p(),g("div",null,[f,e("ul",null,[e("li",null,[t(a,{color:"red"},{default:i(()=>[n("Cloud-Native Embrace")]),_:1}),_]),e("li",null,[t(a,{color:"red"},{default:i(()=>[n("Precise Alerting: Business Availability Metrics")]),_:1}),b]),e("li",null,[t(a,{color:"red"},{default:i(()=>[n("Swift Issue Resolution: Metrics-Tracing-Logging Integration")]),_:1}),y]),e("li",null,[t(a,{color:"red"},{default:i(()=>[n("Cost-Effective: Storage Costs Less Than One in a Thousand, Meeting 99.9% of Tracing Needs")]),_:1}),A]),e("li",null,[t(a,{color:"red"},{default:i(()=>[n("Enterprise-Grade Observability Product")]),_:1}),v])]),T])}const S=d(m,[["render",z]]);export{C as __pageData,S as default};
