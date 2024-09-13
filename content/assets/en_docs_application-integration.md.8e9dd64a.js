import{_ as n,a as o,b as s,c as l,d as i,e as r,f as p,g as c,h as d,i as h,j as u,k as g,l as m,m as f,n as y,o as b,p as _,q as v,r as q,s as k,t as w,u as I,v as P,w as x,x as A,y as C,z as T,A as O,B as S}from"./chunks/hera-dash3.0be27f14.js";import{_ as E,o as N,h as M,Q as t,p as e,e as a}from"./chunks/framework.d1267443.js";const X=JSON.parse('{"title":"Apache OzHera(Incubating) Integration Documentation","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"en/docs/application-integration.md","filePath":"en/docs/application-integration.md"}'),z={name:"en/docs/application-integration.md"},j=t('<h1 id="apache-ozhera-incubating-integration-documentation" tabindex="-1">Apache OzHera(Incubating) Integration Documentation <a class="header-anchor" href="#apache-ozhera-incubating-integration-documentation" aria-label="Permalink to &quot;Apache OzHera(Incubating) Integration Documentation&quot;">​</a></h1><h2 id="dependencies-for-application-deployment" tabindex="-1">Dependencies for Application Deployment <a class="header-anchor" href="#dependencies-for-application-deployment" aria-label="Permalink to &quot;Dependencies for Application Deployment&quot;">​</a></h2><p>Applications integrating with Apache OzHera(Incubating) require probes, JVM parameters, environment variables, and the log-agent service.</p><h3 id="_1-probes" tabindex="-1">1. Probes <a class="header-anchor" href="#_1-probes" aria-label="Permalink to &quot;1. Probes&quot;">​</a></h3><p>Upon completion of the probe build, a jar related to opentelemetry will be generated. When deploying the project, this jar file should be placed on the server. This allows the probe to be utilized in the JVM parameters through the <code>-javaagent</code>. We have packaged a default version of the probe based on the open-source version, which can be used directly.</p><h3 id="_2-jvm-parameters" tabindex="-1">2. JVM Parameters <a class="header-anchor" href="#_2-jvm-parameters" aria-label="Permalink to &quot;2. JVM Parameters&quot;">​</a></h3><p>First, take the user-defined value. If it&#39;s empty, take the value configured in Nacos with DataId as <code>hera_javaagent_config</code>. If that&#39;s empty too, set the default value. Mandatory items need to be set by the user manually; failure to set might cause the probe to be ineffective.</p>',7),D=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"Variables"),e("th",{style:{"text-align":"center"}},"Mandatory indicators"),e("th",null,"Default values"),e("th",null,"Comments")])]),e("tbody",null,[e("tr",null,[e("td",null,"-javaagent:/opt/soft/opentelemetry-javaagent-all-0.0.1.jar"),e("td",{style:{"text-align":"center"}},"true"),e("td"),e("td",null,[a("Used to indicate the location of the javaagent probe jar package on the server, "),e("br"),a(" we usually rename the probe's jar file to opentelemetry-javaagent-all-0.0.1.jar and place it in the /opt/soft directory on the server.")])]),e("tr",null,[e("td",{nacosurl:""},"-Dotel.exporter.prometheus.nacos.addr=$"),e("td",{style:{"text-align":"center"}},"true"),e("td"),e("td",null,"Nacos address")]),e("tr",null,[e("td",null,"-Dotel.resource.attributes=service.name=1-test"),e("td",{style:{"text-align":"center"}},"false"),e("td",null,"none"),e("td",null,[a('Used to represent the application name of the current service. The format is appId-appName. For example: 1-test, where "1" is the appId and "test" is the appName. '),e("br"),a(' If it is empty, the default used in the program is "none". The application is a very important piece of metadata in OzHera, and observable data presentations are all related to the application.')])]),e("tr",null,[e("td",null,"-Dotel.traces.exporter=log4j2"),e("td",{style:{"text-align":"center"}},"false"),e("td",null,"log4j2"),e("td",null,"Used to indicate the trace export method, which is to output the trace to log files via log4j2. The default is to use log4j2.")]),e("tr",null,[e("td",null,"-Dotel.exporter.log.isasync=true"),e("td",{style:{"text-align":"center"}},"false"),e("td",null,"true"),e("td",null,[a('Used to indicate whether to enable asynchronous logging with log4j2. Generally, for performance reasons, it would be set to "true". It only takes effect when the value of '),e("code",null,"-Dotel.traces.exporter"),a(" is "),e("code",null,"log4j2"),a(".")])]),e("tr",null,[e("td",null,"-Dotel.metrics.exporter=prometheus"),e("td",{style:{"text-align":"center"}},"false"),e("td",null,"prometheus"),e("td",null,"Used to indicate the metrics export method. The default is to use Prometheus.")]),e("tr",null,[e("td",null,"-Dotel.javaagent.exclude-classes=com.dianping.cat.*"),e("td",{style:{"text-align":"center"}},"false"),e("td",null,"com.dianping.cat.*"),e("td",null,'Used to filter packages that are not intercepted by the probe. If you are using "cat", you need to filter out the directory where "cat" resides.')]),e("tr",null,[e("td",null,"-Dotel.exporter.log.pathprefix=/home/work/log/"),e("td",{style:{"text-align":"center"}},"false"),e("td",null,"/home/work/log/"),e("td",null,[a("Used to indicate the location of log4j2 logs. Here, the log4j2 logs will be outputted to the location represented by the environment variable named MIONE_LOG_PATH. If this environment variable does not exist, it will be outputted to the "),e("code",null,"-Dotel.exporter.log.pathprefix"),a(" \\ "),e("code",null,"MIONE_PROJECT_NAME"),a(" directory."),e("br"),a("Note: In k8s, this directory needs to be mounted so that the log collection container can access it.")])]),e("tr",null,[e("td",null,"-Dotel.propagators=tracecontext"),e("td",{style:{"text-align":"center"}},"false"),e("td",null,"tracecontext"),e("td",null,'Used to indicate the processing type for trace transmission. Currently, only "tracecontext" has been used.')])])],-1),H=t(`<h3 id="_3-environment-variables" tabindex="-1">3. Environment Variables <a class="header-anchor" href="#_3-environment-variables" aria-label="Permalink to &quot;3. Environment Variables&quot;">​</a></h3><p>Similar to the JVM parameters, first take the user-defined value. If it&#39;s empty, take the value from Nacos with DataId as <code>hera_javaagent_config</code>. If that&#39;s empty, then set to the default value. Mandatory items need to be set manually; failure to set might cause the probe to be ineffective.</p><table><thead><tr><th>Variables</th><th style="text-align:center;">Mandatory indicators</th><th>Default values</th><th>Comments</th></tr></thead><tbody><tr><td>MIONE_PROJECT_ENV_NAME</td><td style="text-align:center;">true</td><td>default</td><td>Name of the current deployment environment, e.g., dev, uat, st, preview, production. If not provided, &#39;default&#39; is used by default.</td></tr><tr><td>MIONE_PROJECT_ENV_ID</td><td style="text-align:center;">true</td><td></td><td>ID of the current deployment environment. The environment id and environment name can be used in OzHera&#39;s metric monitoring to view monitoring charts based on different environments.</td></tr><tr><td>MIONE_PROJECT_NAME</td><td style="text-align:center;">true</td><td>none</td><td>Represents the current service&#39;s application name. The format is appId-appName. E.g., 1-test, where 1 is the appId, and test is the appName. If left empty, &#39;none&#39; is used by default in the program. Applications are a crucial metadata in OzHera, and all observability data displays are related to the application.</td></tr><tr><td>host.ip</td><td style="text-align:center;">false</td><td></td><td>Used to record the current physical machine IP, displayed in the trace&#39;s process.tags. In k8s, it retrieves the pod&#39;s IP. In K8s, when deploying using the ozhera-operator, this environment variable is auto-generated by the webhook.</td></tr><tr><td>node.ip</td><td style="text-align:center;">false</td><td></td><td>Used to record the IP of the current node in k8s; if not deployed in k8s, there&#39;s no need to set this. In K8s, when deploying using the ozhera-operator, this environment variable is auto-generated by the webhook.</td></tr><tr><td>JAVAAGENT_PROMETHEUS_PORT</td><td style="text-align:center;">false</td><td>55433</td><td>The available port number of the current physical machine, used by the httpServer that provides Prometheus to pull jvm metrics. If left empty, the program defaults to using 55433.</td></tr><tr><td>hera.buildin.k8s</td><td style="text-align:center;">false</td><td>1</td><td>Used to record whether the service is deployed in k8s. If the service is in k8s, it&#39;s marked as 1. If not deployed in k8s, it can be set to 2. The default is 1. If debugging locally, you can set it to 2.</td></tr><tr><td>application</td><td style="text-align:center;">false</td><td></td><td>Converts all hyphens in the <code>MIONE_PROJECT_NAME</code> value to underscores, used for container monitoring&#39;s extended metrics. In K8s, when deploying using the ozhera-operator, this environment variable is auto-generated by the webhook.</td></tr><tr><td>serverEnv</td><td style="text-align:center;">false</td><td></td><td>The value is the same as MIONE_PROJECT_ENV_NAME, used for the extended metrics in container monitoring. In K8s, when deploying using the ozhera-operator, this environment variable is auto-generated by the webhook.</td></tr></tbody></table><h3 id="_4、log-agent" tabindex="-1">4、log-agent <a class="header-anchor" href="#_4、log-agent" aria-label="Permalink to &quot;4、log-agent&quot;">​</a></h3><p>Currently, Apache OzHera(Incubating) uses the log-agent to collect both trace and log. The log-agent should be deployed as a sidecar along with the application in the same container. Additionally, the directories for logs to be collected and trace logs should both be mounted, enabling the log-agent to access them.</p><h3 id="_5-sample-application-dockerfile-and-k8s-yaml-files" tabindex="-1">5. Sample Application Dockerfile and K8S yaml Files <a class="header-anchor" href="#_5-sample-application-dockerfile-and-k8s-yaml-files" aria-label="Permalink to &quot;5. Sample Application Dockerfile and K8S yaml Files&quot;">​</a></h3><p>The Dockerfile and K8S yaml file used in our demo project are presented below. These can be referenced for probe, JVM, environment variables, and log-agent configurations in the ozhera-demo-client application.</p><p>Dockerfile</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">FROM openjdk:8-jre</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">COPY ./ozhera-demo-client-1.0.0-SNAPSHOT.jar /home/work/ozhera-demo-client-1.0.0-SNAPSHOT.jar</span></span>
<span class="line"><span style="color:#e1e4e8;">COPY ./opentelemetry-javaagent-0.1.0-SNAPSHOT-all.jar /opt/soft/opentelemetry-javaagent-0.1.0-SNAPSHOT-all.jar</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">ENTRYPOINT [&quot;java&quot;,&quot;-javaagent:/opt/soft/opentelemetry-javaagent-0.1.0-SNAPSHOT-all.jar&quot;,&quot;-Dotel.exporter.prometheus.nacos.addr=nacos:80&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot;-Xloggc:/home/work/log/gc.log&quot;,&quot;-Duser.timezone=Asia/Shanghai&quot;,&quot;-XX:+HeapDumpOnOutOfMemoryError&quot;,&quot;-XX:HeapDumpPath=/home/dum/oom.dump&quot;,&quot;-jar&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot;/home/work/ozhera-demo-client-1.0.0-SNAPSHOT.jar&quot;,&quot;&amp;&amp;&quot;,&quot;tail&quot;,&quot;-f&quot;,&quot;/dev/null&quot;]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">FROM openjdk:8-jre</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">COPY ./ozhera-demo-client-1.0.0-SNAPSHOT.jar /home/work/ozhera-demo-client-1.0.0-SNAPSHOT.jar</span></span>
<span class="line"><span style="color:#24292e;">COPY ./opentelemetry-javaagent-0.1.0-SNAPSHOT-all.jar /opt/soft/opentelemetry-javaagent-0.1.0-SNAPSHOT-all.jar</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">ENTRYPOINT [&quot;java&quot;,&quot;-javaagent:/opt/soft/opentelemetry-javaagent-0.1.0-SNAPSHOT-all.jar&quot;,&quot;-Dotel.exporter.prometheus.nacos.addr=nacos:80&quot;,</span></span>
<span class="line"><span style="color:#24292e;">&quot;-Xloggc:/home/work/log/gc.log&quot;,&quot;-Duser.timezone=Asia/Shanghai&quot;,&quot;-XX:+HeapDumpOnOutOfMemoryError&quot;,&quot;-XX:HeapDumpPath=/home/dum/oom.dump&quot;,&quot;-jar&quot;,</span></span>
<span class="line"><span style="color:#24292e;">&quot;/home/work/ozhera-demo-client-1.0.0-SNAPSHOT.jar&quot;,&quot;&amp;&amp;&quot;,&quot;tail&quot;,&quot;-f&quot;,&quot;/dev/null&quot;]</span></span></code></pre></div><p>K8S yaml</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">apiVersion: apps/v1</span></span>
<span class="line"><span style="color:#e1e4e8;">kind: Deployment</span></span>
<span class="line"><span style="color:#e1e4e8;">metadata:</span></span>
<span class="line"><span style="color:#e1e4e8;">  name: ozhera-demo-client</span></span>
<span class="line"><span style="color:#e1e4e8;">  namespace: demo</span></span>
<span class="line"><span style="color:#e1e4e8;">  labels:</span></span>
<span class="line"><span style="color:#e1e4e8;">    app: ozhera-demo-client</span></span>
<span class="line"><span style="color:#e1e4e8;">spec:</span></span>
<span class="line"><span style="color:#e1e4e8;">  replicas: 1</span></span>
<span class="line"><span style="color:#e1e4e8;">  selector:</span></span>
<span class="line"><span style="color:#e1e4e8;">    matchLabels:</span></span>
<span class="line"><span style="color:#e1e4e8;">      app: ozhera-demo-client</span></span>
<span class="line"><span style="color:#e1e4e8;">  template:</span></span>
<span class="line"><span style="color:#e1e4e8;">    metadata:</span></span>
<span class="line"><span style="color:#e1e4e8;">      labels:</span></span>
<span class="line"><span style="color:#e1e4e8;">        app: ozhera-demo-client</span></span>
<span class="line"><span style="color:#e1e4e8;">    spec:</span></span>
<span class="line"><span style="color:#e1e4e8;">      containers:</span></span>
<span class="line"><span style="color:#e1e4e8;">      - name: ozhera-demo-client-container</span></span>
<span class="line"><span style="color:#e1e4e8;">        image: demo/ozhera-demo-client:v1</span></span>
<span class="line"><span style="color:#e1e4e8;">        env:</span></span>
<span class="line"><span style="color:#e1e4e8;">          - name: MIONE_PROJECT_ENV_NAME</span></span>
<span class="line"><span style="color:#e1e4e8;">            value: dev</span></span>
<span class="line"><span style="color:#e1e4e8;">          - name: MIONE_PROJECT_ENV_ID</span></span>
<span class="line"><span style="color:#e1e4e8;">            value: &#39;2&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">          - name: MIONE_PROJECT_NAME</span></span>
<span class="line"><span style="color:#e1e4e8;">            value: 2-ozhera-demo-client</span></span>
<span class="line"><span style="color:#e1e4e8;">        volumeMounts:</span></span>
<span class="line"><span style="color:#e1e4e8;">          - name: log-path</span></span>
<span class="line"><span style="color:#e1e4e8;">            mountPath: /home/work/log</span></span>
<span class="line"><span style="color:#e1e4e8;">        resources:</span></span>
<span class="line"><span style="color:#e1e4e8;">          limits:</span></span>
<span class="line"><span style="color:#e1e4e8;">            cpu: &#39;500m&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">            memory: 2Gi</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">      - name: log-agent</span></span>
<span class="line"><span style="color:#e1e4e8;">        image: demo/log-agent:v1</span></span>
<span class="line"><span style="color:#e1e4e8;">        volumeMounts:</span></span>
<span class="line"><span style="color:#e1e4e8;">        - mountPath: &quot;/home/work/log&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">          name: log-path</span></span>
<span class="line"><span style="color:#e1e4e8;">        resources:</span></span>
<span class="line"><span style="color:#e1e4e8;">          limits:</span></span>
<span class="line"><span style="color:#e1e4e8;">            cpu: &#39;300m&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">            memory: 1Gi</span></span>
<span class="line"><span style="color:#e1e4e8;">      volumes:</span></span>
<span class="line"><span style="color:#e1e4e8;">      - name: log-path</span></span>
<span class="line"><span style="color:#e1e4e8;">        emptyDir: {}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">apiVersion: apps/v1</span></span>
<span class="line"><span style="color:#24292e;">kind: Deployment</span></span>
<span class="line"><span style="color:#24292e;">metadata:</span></span>
<span class="line"><span style="color:#24292e;">  name: ozhera-demo-client</span></span>
<span class="line"><span style="color:#24292e;">  namespace: demo</span></span>
<span class="line"><span style="color:#24292e;">  labels:</span></span>
<span class="line"><span style="color:#24292e;">    app: ozhera-demo-client</span></span>
<span class="line"><span style="color:#24292e;">spec:</span></span>
<span class="line"><span style="color:#24292e;">  replicas: 1</span></span>
<span class="line"><span style="color:#24292e;">  selector:</span></span>
<span class="line"><span style="color:#24292e;">    matchLabels:</span></span>
<span class="line"><span style="color:#24292e;">      app: ozhera-demo-client</span></span>
<span class="line"><span style="color:#24292e;">  template:</span></span>
<span class="line"><span style="color:#24292e;">    metadata:</span></span>
<span class="line"><span style="color:#24292e;">      labels:</span></span>
<span class="line"><span style="color:#24292e;">        app: ozhera-demo-client</span></span>
<span class="line"><span style="color:#24292e;">    spec:</span></span>
<span class="line"><span style="color:#24292e;">      containers:</span></span>
<span class="line"><span style="color:#24292e;">      - name: ozhera-demo-client-container</span></span>
<span class="line"><span style="color:#24292e;">        image: demo/ozhera-demo-client:v1</span></span>
<span class="line"><span style="color:#24292e;">        env:</span></span>
<span class="line"><span style="color:#24292e;">          - name: MIONE_PROJECT_ENV_NAME</span></span>
<span class="line"><span style="color:#24292e;">            value: dev</span></span>
<span class="line"><span style="color:#24292e;">          - name: MIONE_PROJECT_ENV_ID</span></span>
<span class="line"><span style="color:#24292e;">            value: &#39;2&#39;</span></span>
<span class="line"><span style="color:#24292e;">          - name: MIONE_PROJECT_NAME</span></span>
<span class="line"><span style="color:#24292e;">            value: 2-ozhera-demo-client</span></span>
<span class="line"><span style="color:#24292e;">        volumeMounts:</span></span>
<span class="line"><span style="color:#24292e;">          - name: log-path</span></span>
<span class="line"><span style="color:#24292e;">            mountPath: /home/work/log</span></span>
<span class="line"><span style="color:#24292e;">        resources:</span></span>
<span class="line"><span style="color:#24292e;">          limits:</span></span>
<span class="line"><span style="color:#24292e;">            cpu: &#39;500m&#39;</span></span>
<span class="line"><span style="color:#24292e;">            memory: 2Gi</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      - name: log-agent</span></span>
<span class="line"><span style="color:#24292e;">        image: demo/log-agent:v1</span></span>
<span class="line"><span style="color:#24292e;">        volumeMounts:</span></span>
<span class="line"><span style="color:#24292e;">        - mountPath: &quot;/home/work/log&quot;</span></span>
<span class="line"><span style="color:#24292e;">          name: log-path</span></span>
<span class="line"><span style="color:#24292e;">        resources:</span></span>
<span class="line"><span style="color:#24292e;">          limits:</span></span>
<span class="line"><span style="color:#24292e;">            cpu: &#39;300m&#39;</span></span>
<span class="line"><span style="color:#24292e;">            memory: 1Gi</span></span>
<span class="line"><span style="color:#24292e;">      volumes:</span></span>
<span class="line"><span style="color:#24292e;">      - name: log-path</span></span>
<span class="line"><span style="color:#24292e;">        emptyDir: {}</span></span></code></pre></div><h2 id="input-into-tpc" tabindex="-1">Input into TPC <a class="header-anchor" href="#input-into-tpc" aria-label="Permalink to &quot;Input into TPC&quot;">​</a></h2><p>Apache OzHera(Incubating) uses the TPC system to input, sync, and manage application metadata information, as well as relationships between applications and users.</p><h3 id="_1-registration-and-login-to-tpc" tabindex="-1">1. Registration and Login to TPC <a class="header-anchor" href="#_1-registration-and-login-to-tpc" aria-label="Permalink to &quot;1. Registration and Login to TPC&quot;">​</a></h3><p>One needs to visit the TPC page link generated through the ozhera-operator.</p><p><img src="`+n+'" alt="operator-url"></p><p>When accessing without logging in, it redirects to the TPC login page. If it&#39;s the first visit, we need to register the TPC super admin account. This account is used for creating projects and authorizations. The super admin username must be: <a href="mailto:tpc@tpc.com" target="_blank" rel="noreferrer">tpc@tpc.com</a>. The password can be customized. After registration, we log in using <a href="mailto:tpc@tpc.com" target="_blank" rel="noreferrer">tpc@tpc.com</a>.</p><p><img src="'+o+'" alt="tpc-login"></p><h3 id="_2-enter-application-information" tabindex="-1">2. Enter Application Information <a class="header-anchor" href="#_2-enter-application-information" aria-label="Permalink to &quot;2. Enter Application Information&quot;">​</a></h3><p>After successful login, you&#39;ll land on the TPC homepage. Under the node information on the TPC homepage&#39;s sub-node, a node named &#39;hera&#39; will be created by default. This node represents a project group. To integrate with Apache OzHera(Incubating), one must first maintain the application information under this project group.</p><p><img src="'+s+'" alt="tpc-node1"></p><p>Clicking on the Apache OzHera(Incubating)node takes us into the Apache OzHera(Incubating)project group. By default, a logger project will be created within the Apache OzHera(Incubating)project group, which is used in Apache OzHera(Incubating)logs and can be ignored. Clicking the &quot;Add&quot; button highlighted in the image will pop up a dialog box to create a new project.</p><p><img src="'+l+'" alt="tpc-node2"></p><p>Select the node type as &quot;Project&quot;, enter the name of our application for the node name, and enter the account of the current application member as the admin. Of course, this account needs to be registered on TPC in advance. When entering application information, there are two scenarios:</p><ul><li>First, if we already have application data, and there&#39;s an id in the application data, we can enter our existing application id by maintaining the external node id on TPC. Here, I use the application from the previous section &quot;I. Application Deployment Dependencies&quot; under &quot;Application Dockerfile &amp; K8S yaml file examples&quot; for entry, as shown below:</li></ul><p><img src="'+i+'" alt="tpc-add-node1"></p><ul><li>Second, if we only have the name of the application but no application id, we don&#39;t need to fill in the &quot;External Node Type&quot; and &quot;External Node ID&quot;. After TPC creates the application, it will automatically generate an id for this application. Click on the application node detail button, and in the application &quot;Node Information&quot;, we can see the id of the application, as shown below:</li></ul><p><img src="'+r+'" alt="tpc-add-node2"></p><p><img src="'+p+'" alt="tpc-node-id1"></p><p><img src="'+c+'" alt="tpc-node-id2"></p><p>Regardless of the scenario, note that both the application id and application name must be consistent with the JVM parameters <code>-Dotel.resource.attributes=service.name</code> or the environment variable <code>MIONE_PROJECT_NAME</code>.</p><h3 id="_3-application-and-user-permissions" tabindex="-1">3. Application and User Permissions <a class="header-anchor" href="#_3-application-and-user-permissions" aria-label="Permalink to &quot;3. Application and User Permissions&quot;">​</a></h3><p>If we want to add an admin to a particular application, allowing them to have the permissions to configure that application on Apache OzHera(Incubating), we can find the application in TPC, click on the application name, enter the node details, and in the &quot;Members&quot; tab of the application node, click the add button. This allows us to add someone&#39;s account as an admin.</p><p><img src="'+d+'" alt="tpc-role1"></p><p><img src="'+h+'" alt="tpc-add-role1"></p><h2 id="configuring-log-collection" tabindex="-1">Configuring Log Collection <a class="header-anchor" href="#configuring-log-collection" aria-label="Permalink to &quot;Configuring Log Collection&quot;">​</a></h2><p>Since logs and trace data in Apache OzHera(Incubating) are collected by log-agent, we need to configure collection information in Apache OzHera(Incubating) log settings, instructing the log-agent where to collect and where to send the data after collection.</p><h3 id="_1-accessing-apache-ozhera-incubating-logging-page" tabindex="-1">1. Accessing Apache OzHera(Incubating) Logging Page <a class="header-anchor" href="#_1-accessing-apache-ozhera-incubating-logging-page" aria-label="Permalink to &quot;1. Accessing Apache OzHera(Incubating) Logging Page&quot;">​</a></h3><p>We access the Apache OzHera(Incubating) homepage link generated by the operator, and in the homepage title, click &quot;Logging Service&quot; to enter the Apache OzHera(Incubating) logging interface.</p><p><img src="'+u+'" alt="operator-url2"></p><p><img src="'+g+'" alt="hera-log1"></p><h3 id="_2-configuring-logging-resources-default-resources-will-be-automatically-created-later" tabindex="-1">2. Configuring Logging Resources (default resources will be automatically created later) <a class="header-anchor" href="#_2-configuring-logging-resources-default-resources-will-be-automatically-created-later" aria-label="Permalink to &quot;2. Configuring Logging Resources (default resources will be automatically created later)&quot;">​</a></h3><p>In the logging page sidebar, click on Resource Management and fill in the RocketMQ and ES resource details.</p><h4 id="_1-rocketmq" tabindex="-1">(1) RocketMQ <a class="header-anchor" href="#_1-rocketmq" aria-label="Permalink to &quot;(1) RocketMQ&quot;">​</a></h4><ul><li>Alias: Alias for RocketMQ resources, can be customized</li><li>Region: Choose &quot;Mainland Data Center&quot;</li><li>MQ Address: The address of RocketMQ, formatted as host:port</li><li>MQ Domain: Domain name of the RocketMQ address</li><li>AK: RocketMQ&#39;s accessKey, if none, leave blank</li><li>SK: RocketMQ&#39;s secretKey, if none, leave blank</li><li>BrokerName: Enter the brokerName of RocketMQ, which can be viewed in the RocketMQ dashboard. The purpose is to create the required topic for logs, the default is broker-0</li><li>Tag List: List of tags for RocketMQ, if none, leave blank</li></ul><p><img src="'+m+'" alt="hera-log-mq1"></p><h4 id="_2-es" tabindex="-1">(2) ES <a class="header-anchor" href="#_2-es" aria-label="Permalink to &quot;(2) ES&quot;">​</a></h4><ul><li>Alias: Alias for ES resources, can be customized</li><li>Region: Choose &quot;Mainland Data Center&quot;</li><li>ES Cluster Name: Same as Alias</li><li>ES API Address: Address of ES, formatted as host:port</li><li>Connection Method: Choose the method to connect to ES, either &quot;Username and Password&quot; or &quot;Token&quot;. If none for username, password, and token, leave blank.</li><li>Tag List: If none, leave blank</li><li>ES Index Group: An index group will be created by default for each log type, but users need to configure these four index groups separately: <ul><li>Multi-line Application Log: mione_hera_log_multiple_app_log01</li><li>Single-line Application Log: mione_hera_log_single_app_log01</li><li>Nginx Log: mione_hera_log_nginx_app_log01</li><li>Opentelemetry Log: mione_hera_log_other_app_log01</li></ul></li></ul><p><img src="'+f+'" alt="hera-log-es"></p><h3 id="_3-creating-space" tabindex="-1">3. Creating Space <a class="header-anchor" href="#_3-creating-space" aria-label="Permalink to &quot;3. Creating Space&quot;">​</a></h3><p>After configuring the resources, we need to create the configurations for space, store, and tail. Firstly, on the Apache OzHera(Incubating) logging service homepage, click &quot;Immediate Access&quot;, and it leads to the logging access page. Click on the &quot;Create&quot; option next to Space to create a new space. A Space is generally at the department or organizational level.</p><p>Note: After creating a Space, one needs to authorize it under the hera-logger space node on TPC.</p><p><img src="'+y+'" alt="hera-log2"></p><p><img src="'+b+'" alt="log-space1"></p><p><img src="'+_+'" alt="log-space2"></p><h3 id="_4-creating-store" tabindex="-1">4. Creating Store <a class="header-anchor" href="#_4-creating-store" aria-label="Permalink to &quot;4. Creating Store&quot;">​</a></h3><p>After creating Space, select the newly created Space from the drop-down menu under Space. Click on the &quot;Create&quot; option next to Logstore to create a store.</p><p><img src="'+v+'" alt="log-store1"></p><p><img src="'+q+'" alt="log-store2"></p><h3 id="_5-creating-tail" tabindex="-1">5. Creating Tail <a class="header-anchor" href="#_5-creating-tail" aria-label="Permalink to &quot;5. Creating Tail&quot;">​</a></h3><ul><li>Application Type: Choose OzHera</li><li>Deployment Method: Choose Mione</li><li>Service Application Name: Choose the application to be integrated</li><li>Service Alias: Can be customized</li><li>Environment Group: Choose the environment to be integrated</li><li>Service IP: It&#39;s automatically populated after choosing the environment and needs to be selected. If not available, it can be added manually.</li><li>Log File Directory: Output location of the application log file, specific to the filename.</li><li>Split Expression: Naming rule for log file splitting <ul><li>If after splitting the log, it isn&#39;t in the current directory and the prefix of the split file&#39;s name isn&#39;t the log&#39;s name, one has to manually enter the split expression. For example: /home/work/logs/applogs/old/shopapi_application.log-.*. Otherwise, leave it blank.</li><li>Line Beginning Regular Expression: e.g., ^2022-* .*$</li><li>Log Parsing Type: Delimiter, Custom, Regular, JSON, Nginx</li><li>Parsing Script: <ul><li>Delimiter: How each segment is split. Enter the delimiter that splits your log.</li><li>Custom: If it&#39;s more complex, where each part might have different splits, use Custom. For example: [%s]-[%s]-[%s]-[%s]-[%s]-%s. It will look for each segment based on %s, the prefix and suffix of each segment.</li><li>Regular: Enter a regular expression, extracting fields based on capture groups.</li><li>Nginx: Enter the Nginx log format configuration, for example: log_format milog2 &#39;$time_iso8601\\t$msec\\t$host\\t$request_method\\t$scheme\\t$status\\t&#39; &#39;$upstream_addr\\t$upstream_cache_status\\t$upstream_status\\t&#39; &#39;$server_addr\\t$remote_addr\\t$http_x_forwarded_for\\t&#39; &#39;$request_length\\t$request_time\\t$bytes_sent\\t$upstream_response_time\\t&#39; &#39;$upstream_connect_time\\t $upstream_header_time\\t$upstream_response_length\\t$upstream_bytes_received\\t&#39; &#39;$request_uri\\t&quot;$http_user_agent&quot;\\t&#39; &#39;$sent_http_x_xiaomi_error_code&#39;;</li></ul></li><li>Collection Rate: How often logs are sent during collection to control the sending rate.</li><li>MQ Configuration: Can be left blank. By default, the log message will be randomly sent to a topic.</li><li>Index Column: The meaning of each part of the log. This is selected from the current store, and the order must match the actual order of fields in the log. The index column of the store must be the most, to avoid not having a choice during tail selection.</li></ul></li></ul><p><img src="'+k+'" alt="log-tail1"></p><p><img src="'+w+'" alt="log-tail2"></p><p>Once the configuration is completed, after waiting for a few seconds, the logs can be viewed on the log page.</p><p><img src="'+I+'" alt="hera-log3"></p><h3 id="_6-configuring-trace-collection-can-be-automatically-created-later" tabindex="-1">6. Configuring Trace Collection (can be automatically created later) <a class="header-anchor" href="#_6-configuring-trace-collection-can-be-automatically-created-later" aria-label="Permalink to &quot;6. Configuring Trace Collection (can be automatically created later)&quot;">​</a></h3><p>In Apache OzHera(Incubating), trace information is collected through log-agent in Apache OzHera(Incubating) logs. We treat trace information as a special type of log for collection, so trace collection information still needs to be configured on Apache OzHera(Incubating) logs. Just follow the configurations below.</p><h4 id="_1-create-trace-space" tabindex="-1">(1) Create trace-space <a class="header-anchor" href="#_1-create-trace-space" aria-label="Permalink to &quot;(1) Create trace-space&quot;">​</a></h4><p><img src="'+P+'" alt="log-space3"></p><h4 id="_2-create-trace-store" tabindex="-1">(2) Create trace-store <a class="header-anchor" href="#_2-create-trace-store" aria-label="Permalink to &quot;(2) Create trace-store&quot;">​</a></h4><p>For log type, choose &quot;opentelemetry log&quot;. Other configurations can be left as default.</p><p><img src="'+x+'" alt="log-store3"></p><h4 id="_3-create-trace-tail" tabindex="-1">(3) Create trace-tail <a class="header-anchor" href="#_3-create-trace-tail" aria-label="Permalink to &quot;(3) Create trace-tail&quot;">​</a></h4><p>Creating a tail for trace is similar to creating one for a regular application, but the configurations are more fixed.</p><ul><li>Service Application Name: Can only choose china_log-agent</li><li>Service Group: Choose default_env</li><li>Service IP: Select all</li><li>Log File Path: Enter &quot;/home/work/log/*/trace.log&quot;. It will scan and collect all trace.log files under /home/work/log.</li><li>Collection Rate: Choose fast collection</li><li>MQ Configuration: Choose the RocketMQ cluster configured in log resources. The following is to fill in the topic. If unchanged, it&#39;s fixed as: mone_hera_staging_trace_etl_server</li></ul><p><img src="'+A+'" alt="log-tail3"></p><p><img src="'+C+'" alt="log-tail4"></p><h2 id="follow-applications-on-the-homepage" tabindex="-1">Follow Applications on the Homepage <a class="header-anchor" href="#follow-applications-on-the-homepage" aria-label="Permalink to &quot;Follow Applications on the Homepage&quot;">​</a></h2><p>After adding applications to &quot;Applications I&#39;m Involved With&quot; or &quot;Applications I Follow&quot; on the homepage, one can view monitoring and linkage information.</p><p><img src="'+T+'" alt="hera-dash1"></p><p><img src="'+O+'" alt="hera-dash2"></p><p><img src="'+S+'" alt="hera-dash3"></p>',82),R=[j,D,H];function $(V,J,L,Q,U,F){return N(),M("div",null,R)}const B=E(z,[["render",$]]);export{X as __pageData,B as default};
