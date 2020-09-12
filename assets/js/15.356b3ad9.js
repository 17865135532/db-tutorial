(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{468:function(t,a,e){"use strict";e.r(a);var s=e(14),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"elastic-技术栈之-filebeat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#elastic-技术栈之-filebeat"}},[t._v("#")]),t._v(" Elastic 技术栈之 Filebeat")]),t._v(" "),e("h2",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),e("p",[t._v("Beats 是安装在服务器上的数据中转代理。")]),t._v(" "),e("p",[t._v("Beats 可以将数据直接传输到 Elasticsearch 或传输到 Logstash 。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://www.elastic.co/guide/en/beats/libbeat/current/images/beats-platform.png",alt:"img"}})]),t._v(" "),e("p",[t._v("Beats 有多种类型，可以根据实际应用需要选择合适的类型。")]),t._v(" "),e("p",[t._v("常用的类型有：")]),t._v(" "),e("ul",[e("li",[t._v("**Packetbeat：**网络数据包分析器，提供有关您的应用程序服务器之间交换的事务的信息。")]),t._v(" "),e("li",[t._v("**Filebeat：**从您的服务器发送日志文件。")]),t._v(" "),e("li",[t._v("**Metricbeat：**是一个服务器监视代理程序，它定期从服务器上运行的操作系统和服务收集指标。")]),t._v(" "),e("li",[t._v("**Winlogbeat：**提供Windows事件日志。")])]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("参考")])]),t._v(" "),e("p",[t._v("更多 Beats 类型可以参考："),e("a",{attrs:{href:"https://www.elastic.co/guide/en/beats/libbeat/current/community-beats.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("community-beats"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("strong",[t._v("说明")])]),t._v(" "),e("p",[t._v("由于本人工作中只应用了 FileBeat，所以后面内容仅介绍 FileBeat 。")])]),t._v(" "),e("h3",{attrs:{id:"filebeat-的作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#filebeat-的作用"}},[t._v("#")]),t._v(" FileBeat 的作用")]),t._v(" "),e("p",[t._v("相比 Logstash，FileBeat 更加轻量化。")]),t._v(" "),e("p",[t._v("在任何环境下，应用程序都有停机的可能性。 Filebeat 读取并转发日志行，如果中断，则会记住所有事件恢复联机状态时所在位置。")]),t._v(" "),e("p",[t._v("Filebeat带有内部模块（auditd，Apache，Nginx，System和MySQL），可通过一个指定命令来简化通用日志格式的收集，解析和可视化。")]),t._v(" "),e("p",[t._v("FileBeat 不会让你的管道超负荷。FileBeat 如果是向 Logstash 传输数据，当 Logstash 忙于处理数据，会通知 FileBeat 放慢读取速度。一旦拥塞得到解决，FileBeat 将恢复到原来的速度并继续传播。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://www.elastic.co/guide/en/beats/filebeat/current/images/filebeat.png",alt:"img"}})]),t._v(" "),e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),e("p",[t._v("Unix / Linux 系统建议使用下面方式安装，因为比较通用。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("wget https://artifacts.elastic.co/downloads/beats/filebeat/filebeat-6.1.1-linux-x86_64.tar.gz\ntar -zxf filebeat-6.1.1-linux-x86_64.tar.gz\n")])])]),e("blockquote",[e("p",[e("strong",[t._v("参考")])]),t._v(" "),e("p",[t._v("更多内容可以参考："),e("a",{attrs:{href:"https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-installation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("filebeat-installation"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),e("h3",{attrs:{id:"配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[t._v("#")]),t._v(" 配置文件")]),t._v(" "),e("p",[t._v("首先，需要知道的是："),e("code",[t._v("filebeat.yml")]),t._v(" 是 filebeat 的配置文件。配置文件的路径会因为你安装方式的不同而变化。")]),t._v(" "),e("p",[t._v("Beat 所有系列产品的配置文件都基于 "),e("a",{attrs:{href:"http://www.yaml.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("YAML"),e("OutboundLink")],1),t._v(" 格式，FileBeat 当然也不例外。")]),t._v(" "),e("p",[t._v("filebeat.yml 部分配置示例：")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("filebeat")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("prospectors")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" log\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("paths")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /var/log/"),e("span",{pre:!0,attrs:{class:"token important"}},[t._v("*.log")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("multiline")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("pattern")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'^['")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("match")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" after\n")])])]),e("blockquote",[e("p",[e("strong",[t._v("参考")])]),t._v(" "),e("p",[t._v("更多 filebeat 配置内容可以参考："),e("a",{attrs:{href:"https://www.elastic.co/guide/en/beats/filebeat/current/configuring-howto-filebeat.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("配置 filebeat"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("更多 filebeat.yml 文件格式内容可以参考："),e("a",{attrs:{href:"https://www.elastic.co/guide/en/beats/libbeat/6.1/config-file-format.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("filebeat.yml 文件格式"),e("OutboundLink")],1)])]),t._v(" "),e("h3",{attrs:{id:"重要配置项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重要配置项"}},[t._v("#")]),t._v(" 重要配置项")]),t._v(" "),e("h4",{attrs:{id:"filebeat-prospectors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#filebeat-prospectors"}},[t._v("#")]),t._v(" filebeat.prospectors")]),t._v(" "),e("p",[t._v("（文件监视器）用于指定需要关注的文件。")]),t._v(" "),e("p",[e("strong",[t._v("示例")])]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("filebeat.prospectors")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" log\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("paths")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /var/log/"),e("span",{pre:!0,attrs:{class:"token important"}},[t._v("*.log")]),t._v("\n")])])]),e("h4",{attrs:{id:"output-elasticsearch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#output-elasticsearch"}},[t._v("#")]),t._v(" output.elasticsearch")]),t._v(" "),e("p",[t._v("如果你希望使用 filebeat 直接向 elasticsearch 输出数据，需要配置 output.elasticsearch 。")]),t._v(" "),e("p",[e("strong",[t._v("示例")])]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("output.elasticsearch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hosts")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.1.42:9200"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("h4",{attrs:{id:"output-logstash"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#output-logstash"}},[t._v("#")]),t._v(" output.logstash")]),t._v(" "),e("p",[t._v("如果你希望使用 filebeat 向 logstash输出数据，然后由 logstash 再向elasticsearch 输出数据，需要配置 output.logstash。")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("注意")])]),t._v(" "),e("p",[t._v("相比于向 elasticsearch 输出数据，个人更推荐向 logstash 输出数据。")]),t._v(" "),e("p",[t._v("因为 logstash 和 filebeat 一起工作时，如果 logstash 忙于处理数据，会通知 FileBeat 放慢读取速度。一旦拥塞得到解决，FileBeat 将恢复到原来的速度并继续传播。这样，可以减少管道超负荷的情况。")])]),t._v(" "),e("p",[e("strong",[t._v("示例")])]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("output.logstash")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hosts")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1:5044"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("p",[t._v("此外，还需要在 logstash 的配置文件（如 logstash.conf）中指定 beats input 插件：")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[t._v("input "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  beats "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    port ="),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" 5044 "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此端口需要与 filebeat.yml 中的端口相同")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The filter part of this file is commented out to indicate that it is")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# optional.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# filter {")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# }")]),t._v("\n\noutput "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  elasticsearch "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    hosts ="),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(' "localhost'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v('9200"\n    manage_template ='),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" false\n    index ="),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(' "%'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("@metadata"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("beat"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("%"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("@metadata"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("version"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("%"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("+YYYY.MM.dd"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v('"\n    document_type ='),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(' "%'),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("@metadata"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("type"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v('"\n  '),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h4",{attrs:{id:"setup-kibana"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup-kibana"}},[t._v("#")]),t._v(" setup.kibana")]),t._v(" "),e("p",[t._v("如果打算使用 Filebeat 提供的 Kibana 仪表板，需要配置 setup.kibana 。")]),t._v(" "),e("p",[e("strong",[t._v("示例")])]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("setup.kibana")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost:5601"')]),t._v("\n")])])]),e("h4",{attrs:{id:"setup-template-settings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup-template-settings"}},[t._v("#")]),t._v(" setup.template.settings")]),t._v(" "),e("p",[t._v("在 Elasticsearch 中，"),e("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/6.1/indices-templates.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("索引模板"),e("OutboundLink")],1),t._v("用于定义设置和映射，以确定如何分析字段。")]),t._v(" "),e("p",[t._v("在 Filebeat 中，setup.template.settings 用于配置索引模板。")]),t._v(" "),e("p",[t._v("Filebeat 推荐的索引模板文件由 Filebeat 软件包安装。如果您接受 filebeat.yml 配置文件中的默认配置，Filebeat在成功连接到 Elasticsearch 后自动加载模板。")]),t._v(" "),e("p",[t._v("您可以通过在 Filebeat 配置文件中配置模板加载选项来禁用自动模板加载，或加载自己的模板。您还可以设置选项来更改索引和索引模板的名称。")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("参考")])]),t._v(" "),e("p",[t._v("更多内容可以参考："),e("a",{attrs:{href:"https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-template.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("filebeat-template"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("strong",[t._v("说明")])]),t._v(" "),e("p",[t._v("如无必要，使用 Filebeat 配置文件中的默认索引模板即可。")])]),t._v(" "),e("h4",{attrs:{id:"setup-dashboards"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup-dashboards"}},[t._v("#")]),t._v(" setup.dashboards")]),t._v(" "),e("p",[t._v("Filebeat 附带了示例 Kibana 仪表板。在使用仪表板之前，您需要创建索引模式 "),e("code",[t._v("filebeat- *")]),t._v("，并将仪表板加载到Kibana 中。为此，您可以运行 "),e("code",[t._v("setup")]),t._v(" 命令或在 "),e("code",[t._v("filebeat.yml")]),t._v(" 配置文件中配置仪表板加载。")]),t._v(" "),e("p",[t._v("为了在 Kibana 中加载 Filebeat 的仪表盘，需要在 "),e("code",[t._v("filebeat.yml")]),t._v(" 配置中启动开关：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("setup.dashboards.enabled: true\n")])])]),e("blockquote",[e("p",[e("strong",[t._v("参考")])]),t._v(" "),e("p",[t._v("更多内容可以参考："),e("a",{attrs:{href:"https://www.elastic.co/guide/en/beats/filebeat/current/configuration-dashboards.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("configuration-dashboards"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[t._v("#")]),t._v(" 命令")]),t._v(" "),e("p",[t._v("filebeat 提供了一系列命令来完成各种功能。")]),t._v(" "),e("p",[t._v("执行命令方式：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("./filebeat COMMAND\n")])])]),e("blockquote",[e("p",[e("strong",[t._v("参考")])]),t._v(" "),e("p",[t._v("更多内容可以参考："),e("a",{attrs:{href:"https://www.elastic.co/guide/en/beats/filebeat/current/command-line-options.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("command-line-options"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("strong",[t._v("说明")])]),t._v(" "),e("p",[t._v("个人认为命令行没有必要一一掌握，因为绝大部分功能都可以通过配置来完成。且通过命令行指定功能这种方式要求每次输入同样参数，不利于固化启动方式。")]),t._v(" "),e("p",[t._v("最重要的当然是启动命令 run 了。")]),t._v(" "),e("p",[e("strong",[t._v("示例")]),t._v(" 指定配置文件启动")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("./filebeat run -e -c filebeat.yml -d "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"publish"')]),t._v("\n./filebeat -e -c filebeat.yml -d "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"publish"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# run 可以省略")]),t._v("\n")])])])]),t._v(" "),e("h2",{attrs:{id:"模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模块"}},[t._v("#")]),t._v(" 模块")]),t._v(" "),e("p",[t._v("Filebeat 提供了一套预构建的模块，让您可以快速实施和部署日志监视解决方案，并附带示例仪表板和数据可视化。这些模块支持常见的日志格式，例如Nginx，Apache2和MySQL 等。")]),t._v(" "),e("h3",{attrs:{id:"运行模块的步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行模块的步骤"}},[t._v("#")]),t._v(" 运行模块的步骤")]),t._v(" "),e("ul",[e("li",[t._v("配置 elasticsearch 和 kibana")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('output.elasticsearch:\n  hosts: ["myEShost:9200"]\n  username: "elastic"\n  password: "elastic"\nsetup.kibana:\n  host: "mykibanahost:5601"\n  username: "elastic"\n  password: "elastic\n')])])]),e("blockquote",[e("p",[t._v("username 和 password 是可选的，如果不需要认证则不填。")])]),t._v(" "),e("ul",[e("li",[t._v("初始化环境")])]),t._v(" "),e("p",[t._v("执行下面命令，filebeat 会加载推荐索引模板。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("./filebeat setup -e\n")])])]),e("ul",[e("li",[t._v("指定模块")])]),t._v(" "),e("p",[t._v("执行下面命令，指定希望加载的模块。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("./filebeat -e --modules system,nginx,mysql\n")])])]),e("blockquote",[e("p",[e("strong",[t._v("参考")])]),t._v(" "),e("p",[t._v("更多内容可以参考： "),e("a",{attrs:{href:"https://www.elastic.co/guide/en/beats/filebeat/current/configuration-filebeat-modules.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("配置 filebeat 模块"),e("OutboundLink")],1),t._v(" | "),e("a",{attrs:{href:"https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-modules.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("filebeat 支持模块"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),e("p",[t._v("Filebeat 有两个主要组件：")]),t._v(" "),e("p",[t._v("harvester：负责读取一个文件的内容。它会逐行读取文件内容，并将内容发送到输出目的地。")]),t._v(" "),e("p",[t._v("prospector：负责管理 harvester 并找到所有需要读取的文件源。比如类型是日志，prospector 就会遍历制定路径下的所有匹配要求的文件。")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("filebeat.prospectors")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" log\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("paths")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /var/log/"),e("span",{pre:!0,attrs:{class:"token important"}},[t._v("*.log")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /var/path2/"),e("span",{pre:!0,attrs:{class:"token important"}},[t._v("*.log")]),t._v("\n")])])]),e("p",[t._v("Filebeat保持每个文件的状态，并经常刷新注册表文件中的磁盘状态。状态用于记住 harvester 正在读取的最后偏移量，并确保发送所有日志行。")]),t._v(" "),e("p",[t._v("Filebeat 将每个事件的传递状态存储在注册表文件中。所以它能保证事件至少传递一次到配置的输出，没有数据丢失。")]),t._v(" "),e("h2",{attrs:{id:"资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#资料"}},[t._v("#")]),t._v(" 资料")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.elastic.co/guide/en/beats/libbeat/current/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Beats 官方文档"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);