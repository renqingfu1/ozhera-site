import{_ as a,a as e,b as s,c as i,d as r,e as t,f as l,g as o,h,i as _,j as c,k as u,l as p,m as n,n as d,o as m,p as b}from"./chunks/pr17.07a91428.js";import{_ as q,o as f,c as g,Q as k}from"./chunks/framework.4fd28da9.js";const v=JSON.parse('{"title":"规范指南","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"zh/about/spec-guide.md","filePath":"zh/about/spec-guide.md"}'),P={name:"zh/about/spec-guide.md"},x=k('<h1 id="规范指南" tabindex="-1">规范指南 <a class="header-anchor" href="#规范指南" aria-label="Permalink to &quot;规范指南&quot;">​</a></h1><h2 id="提交pr规范" tabindex="-1">提交pr规范 <a class="header-anchor" href="#提交pr规范" aria-label="Permalink to &quot;提交pr规范&quot;">​</a></h2><h3 id="_1-创建-issues" tabindex="-1">1.创建 Issues <a class="header-anchor" href="#_1-创建-issues" aria-label="Permalink to &quot;1.创建 Issues&quot;">​</a></h3><h4 id="_1-进入-issues-的主页面" tabindex="-1">（1）进入 Issues 的主页面 <a class="header-anchor" href="#_1-进入-issues-的主页面" aria-label="Permalink to &quot;（1）进入 Issues 的主页面&quot;">​</a></h4><p><img src="'+a+'" alt="图片"></p><h4 id="_2-点击-new-issue-绿色按钮-就可以去创建" tabindex="-1">（2）点击 New issue 绿色按钮，就可以去创建 <a class="header-anchor" href="#_2-点击-new-issue-绿色按钮-就可以去创建" aria-label="Permalink to &quot;（2）点击 New issue 绿色按钮，就可以去创建&quot;">​</a></h4><p><img src="'+e+'" alt="图片"> 进入到如下边的页面 <img src="'+s+'" alt="图片"></p><h4 id="_3-给予受托人-就是把这个需求给某个人来解决-选填" tabindex="-1">（3）给予受托人（就是把这个需求给某个人来解决）(选填) <a class="header-anchor" href="#_3-给予受托人-就是把这个需求给某个人来解决-选填" aria-label="Permalink to &quot;（3）给予受托人（就是把这个需求给某个人来解决）(选填)&quot;">​</a></h4><p><img src="'+i+'" alt="图片"></p><h4 id="_4-设置标签-标明是什么类型的需求" tabindex="-1">（4）设置标签（标明是什么类型的需求） <a class="header-anchor" href="#_4-设置标签-标明是什么类型的需求" aria-label="Permalink to &quot;（4）设置标签（标明是什么类型的需求）&quot;">​</a></h4><p>一共有9大标签，可以有多个选择，但是一般情况，选一个。如果是bug的选择bug <img src="'+r+'" alt="图片"></p><h4 id="_5-选完标签-去写title-标题" tabindex="-1">（5）选完标签，去写Title（标题） <a class="header-anchor" href="#_5-选完标签-去写title-标题" aria-label="Permalink to &quot;（5）选完标签，去写Title（标题）&quot;">​</a></h4><p>标题是有格式要求，必须采取 [标签] 文字描述 的格式 比如我标签是bug,则我的标题是：[bug] 点击获取验证码的时候有问题 注意：[ ] 后面要有空格 <img src="'+t+'" alt="图片"></p><h4 id="_6-编写内容" tabindex="-1">（6）编写内容 <a class="header-anchor" href="#_6-编写内容" aria-label="Permalink to &quot;（6）编写内容&quot;">​</a></h4><p>将标题进行拓展，把问题说清楚 可以是文字，可以是图片（图片复制进来就可以） 还可以是多个需求混在一起的时候，需要多个多选框，则需要这么写：(可选)</p><ul><li>[ ] 输入框 boolean</li><li>[ ] 选择框 boolean</li><li>[ ] 选择框 any</li><li>[ ] 地址选择器 List</li><li>[ ] 地址选择器 any</li><li>[ ] 多选框 any</li><li>[ ] 时间选择框 ‘请选择时间’</li><li>[ ] 圆形单选框 any</li><li>[ ] 基础选择框 any <img src="'+l+'" alt="图片"></li></ul><h3 id="_2-创建pr" tabindex="-1">2.创建pr <a class="header-anchor" href="#_2-创建pr" aria-label="Permalink to &quot;2.创建pr&quot;">​</a></h3><h4 id="_1-从开源项目fork项目到自己的远程仓库" tabindex="-1">(1).从开源项目fork项目到自己的远程仓库 <a class="header-anchor" href="#_1-从开源项目fork项目到自己的远程仓库" aria-label="Permalink to &quot;(1).从开源项目fork项目到自己的远程仓库&quot;">​</a></h4><p><img src="'+o+'" alt="图片"></p><h4 id="_2-在自己的仓库中clone项目到本地" tabindex="-1">(2).在自己的仓库中clone项目到本地 <a class="header-anchor" href="#_2-在自己的仓库中clone项目到本地" aria-label="Permalink to &quot;(2).在自己的仓库中clone项目到本地&quot;">​</a></h4><p><img src="'+h+'" alt="图片"></p><h4 id="_3-记得定期同步远程代码到本地仓库" tabindex="-1">(3).记得定期同步远程代码到本地仓库 <a class="header-anchor" href="#_3-记得定期同步远程代码到本地仓库" aria-label="Permalink to &quot;(3).记得定期同步远程代码到本地仓库&quot;">​</a></h4><p><img src="'+_+'" alt="图片"></p><h4 id="_4-代码的commit-message-后加上-issueid" tabindex="-1">(4).代码的commit message 后加上 （#issueId） <a class="header-anchor" href="#_4-代码的commit-message-后加上-issueid" aria-label="Permalink to &quot;(4).代码的commit message 后加上 （#issueId）&quot;">​</a></h4><p><img src="'+c+'" alt="图片"></p><h4 id="_5-本地修改代码提交到远程仓库-然后点击pull-request去创建pr" tabindex="-1">(5).本地修改代码提交到远程仓库，然后点击pull request去创建pr <a class="header-anchor" href="#_5-本地修改代码提交到远程仓库-然后点击pull-request去创建pr" aria-label="Permalink to &quot;(5).本地修改代码提交到远程仓库，然后点击pull request去创建pr&quot;">​</a></h4><p><img src="'+u+'" alt="图片"></p><h4 id="_6-创建正确的pr" tabindex="-1">(6).创建正确的pr <a class="header-anchor" href="#_6-创建正确的pr" aria-label="Permalink to &quot;(6).创建正确的pr&quot;">​</a></h4><p><img src="'+p+'" alt="图片"> 在pr请求的时候的内容里面填写 #702,也可以填 close #702,这样当你的pr被合并后，issue也会被标记为closed状态 #702即为每个issue的编号，当你创建完issue后可以在url中看到，如 <img src="'+n+'" alt="图片"></p><h3 id="_3-关闭issues" tabindex="-1">3.关闭Issues <a class="header-anchor" href="#_3-关闭issues" aria-label="Permalink to &quot;3.关闭Issues&quot;">​</a></h3><p>当你的pr被合并后，如果pr的内容中有close #issueId ，对应的issue也会被标记为closed状态 <img src="'+d+'" alt="图片"><img src="'+m+'" alt="图片"><img src="'+b+'" alt="图片"></p>',31),I=[x];function T(y,N,S,w,$,z){return f(),g("div",null,I)}const B=q(P,[["render",T]]);export{v as __pageData,B as default};
