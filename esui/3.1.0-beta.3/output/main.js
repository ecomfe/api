Ext.data.JsonP.main({"tagname":"class","name":"main","autodetected":{},"files":[{"filename":"main.js","href":"main.html#main"}],"aliases":{},"singleton":true,"members":[{"name":"version","tagname":"property","owner":"main","id":"property-version","meta":{"readonly":true}},{"name":"attachExtension","tagname":"method","owner":"main","id":"method-attachExtension","meta":{}},{"name":"config","tagname":"method","owner":"main","id":"method-config","meta":{}},{"name":"create","tagname":"method","owner":"main","id":"method-create","meta":{}},{"name":"createExtension","tagname":"method","owner":"main","id":"method-createExtension","meta":{}},{"name":"createGlobalExtensions","tagname":"method","owner":"main","id":"method-createGlobalExtensions","meta":{}},{"name":"createRulesByControl","tagname":"method","owner":"main","id":"method-createRulesByControl","meta":{}},{"name":"get","tagname":"method","owner":"main","id":"method-get","meta":{}},{"name":"getConfig","tagname":"method","owner":"main","id":"method-getConfig","meta":{}},{"name":"getControlByDOM","tagname":"method","owner":"main","id":"method-getControlByDOM","meta":{}},{"name":"getSafely","tagname":"method","owner":"main","id":"method-getSafely","meta":{}},{"name":"getViewContext","tagname":"method","owner":"main","id":"method-getViewContext","meta":{}},{"name":"init","tagname":"method","owner":"main","id":"method-init","meta":{}},{"name":"parseAttribute","tagname":"method","owner":"main","id":"method-parseAttribute","meta":{}},{"name":"register","tagname":"method","owner":"main","id":"method-register","meta":{}},{"name":"registerExtension","tagname":"method","owner":"main","id":"method-registerExtension","meta":{}},{"name":"registerRule","tagname":"method","owner":"main","id":"method-registerRule","meta":{}},{"name":"wrap","tagname":"method","owner":"main","id":"method-wrap","meta":{}}],"alternateClassNames":[],"id":"class-main","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/main.html#main' target='_blank'>main.js</a></div></pre><div class='doc-contents'><p>主模块</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-version' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='main'>main</span><br/><a href='source/main.html#main-property-version' target='_blank' class='view-source'>view source</a></div><a href='#!/api/main-property-version' class='name expandable'>version</a> : string<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>版本号常量 ...</div><div class='long'><p>版本号常量</p>\n<p>Defaults to: <code>&#39;3.1.0-beta.3&#39;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-attachExtension' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='main'>main</span><br/><a href='source/main.html#main-method-attachExtension' target='_blank' class='view-source'>view source</a></div><a href='#!/api/main-method-attachExtension' class='name expandable'>attachExtension</a>( <span class='pre'>type, options</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>绑定全局扩展\n\n通过此方法绑定的扩展，会对所有的控件实例生效\n\n每一次全局扩展生成实例时，均会复制options对象，而不会直接使用引用 ...</div><div class='long'><p>绑定全局扩展</p>\n\n<p>通过此方法绑定的扩展，会对所有的控件实例生效</p>\n\n<p>每一次全局扩展生成实例时，均会复制<code>options</code>对象，而不会直接使用引用</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : string<div class='sub-desc'><p>扩展类型</p>\n</div></li><li><span class='pre'>options</span> : Object<div class='sub-desc'><p>扩展初始化参数</p>\n</div></li></ul></div></div></div><div id='method-config' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='main'>main</span><br/><a href='source/main.html#main-method-config' target='_blank' class='view-source'>view source</a></div><a href='#!/api/main-method-config' class='name expandable'>config</a>( <span class='pre'>info</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>配置控件库\n\n可用的配置有：\n\n\n{string} uiPrefix=\"data-ui\"：HTML中用于表示控件属性的DOM属性前缀\n{string} extensionPrefix=\"data-ui-extension\"：用于表示扩...</div><div class='long'><p>配置控件库</p>\n\n<p>可用的配置有：</p>\n\n<ul>\n<li><code>{string} uiPrefix=\"data-ui\"</code>：HTML中用于表示控件属性的DOM属性前缀</li>\n<li><code>{string} extensionPrefix=\"data-ui-extension\"</code>：用于表示扩展属性的前缀</li>\n<li><code>{string} instanceAttr=\"data-ctrl-id\"</code>：\n标识控件id的DOM属性名，配合<code>viewContextAttr</code>可根据DOM元素获取对应的控件</li>\n<li><code>{string} viewContextAttr=\"data-ctrl-view-context\"</code>：\n标识视图上下文id的DOM属性名，配合<code>instanceAttr</code>可根据DOM元素获取对应的控件</li>\n<li><code>{string} uiClassPrefix=\"ui\"</code>：控件生成DOM元素的class的前缀</li>\n<li><code>{string} skinClassPrefix=\"skin\"</code>：控件生成皮肤相关DOM元素class的前缀</li>\n<li><code>{string} stateClassPrefix=\"state\"</code>：控件生成状态相关DOM元素class的前缀</li>\n</ul>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>info</span> : Object<div class='sub-desc'><p>控件库配置信息对象</p>\n</div></li></ul></div></div></div><div id='method-create' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='main'>main</span><br/><a href='source/main.html#main-method-create' target='_blank' class='view-source'>view source</a></div><a href='#!/api/main-method-create' class='name expandable'>create</a>( <span class='pre'>type, options</span> ) : <a href=\"#!/api/Control\" rel=\"Control\" class=\"docClass\">Control</a><span class=\"signature\"></span></div><div class='description'><div class='short'>创建控件 ...</div><div class='long'><p>创建控件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : string<div class='sub-desc'><p>控件类型</p>\n</div></li><li><span class='pre'>options</span> : Object<div class='sub-desc'><p>初始化参数</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Control\" rel=\"Control\" class=\"docClass\">Control</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-createExtension' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='main'>main</span><br/><a href='source/main.html#main-method-createExtension' target='_blank' class='view-source'>view source</a></div><a href='#!/api/main-method-createExtension' class='name expandable'>createExtension</a>( <span class='pre'>type, options</span> ) : <a href=\"#!/api/Extension\" rel=\"Extension\" class=\"docClass\">Extension</a><span class=\"signature\"></span></div><div class='description'><div class='short'>创建扩展 ...</div><div class='long'><p>创建扩展</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : string<div class='sub-desc'><p>扩展类型</p>\n</div></li><li><span class='pre'>options</span> : Object<div class='sub-desc'><p>初始化参数</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Extension\" rel=\"Extension\" class=\"docClass\">Extension</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-createGlobalExtensions' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='main'>main</span><br/><a href='source/main.html#main-method-createGlobalExtensions' target='_blank' class='view-source'>view source</a></div><a href='#!/api/main-method-createGlobalExtensions' class='name expandable'>createGlobalExtensions</a>( <span class='pre'></span> ) : <a href=\"#!/api/Extension\" rel=\"Extension\" class=\"docClass\">Extension</a>[]<span class=\"signature\"></span></div><div class='description'><div class='short'>创建全局扩展对象 ...</div><div class='long'><p>创建全局扩展对象</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Extension\" rel=\"Extension\" class=\"docClass\">Extension</a>[]</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-createRulesByControl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='main'>main</span><br/><a href='source/main.html#main-method-createRulesByControl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/main-method-createRulesByControl' class='name expandable'>createRulesByControl</a>( <span class='pre'>control</span> ) : <a href=\"#!/api/validator.Rule\" rel=\"validator.Rule\" class=\"docClass\">validator.Rule</a>[]<span class=\"signature\"></span></div><div class='description'><div class='short'>创建控件实例需要的验证规则 ...</div><div class='long'><p>创建控件实例需要的验证规则</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>control</span> : <a href=\"#!/api/Control\" rel=\"Control\" class=\"docClass\">Control</a><div class='sub-desc'><p>控件实例</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/validator.Rule\" rel=\"validator.Rule\" class=\"docClass\">validator.Rule</a>[]</span><div class='sub-desc'><p>验证规则数组</p>\n</div></li></ul></div></div></div><div id='method-get' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='main'>main</span><br/><a href='source/main.html#main-method-get' target='_blank' class='view-source'>view source</a></div><a href='#!/api/main-method-get' class='name expandable'>get</a>( <span class='pre'>id</span> ) : <a href=\"#!/api/Control\" rel=\"Control\" class=\"docClass\">Control</a> | null<span class=\"signature\"></span></div><div class='description'><div class='short'>获取控件 ...</div><div class='long'><p>获取控件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : string<div class='sub-desc'><p>控件的id</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Control\" rel=\"Control\" class=\"docClass\">Control</a> | null</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='main'>main</span><br/><a href='source/main.html#main-method-getConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/main-method-getConfig' class='name expandable'>getConfig</a>( <span class='pre'>name</span> ) : Mixed<span class=\"signature\"></span></div><div class='description'><div class='short'>获取配置项\n\n具体可用配置参考config方法的说明 ...</div><div class='long'><p>获取配置项</p>\n\n<p>具体可用配置参考<a href=\"#!/api/main-method-config\" rel=\"main-method-config\" class=\"docClass\">config</a>方法的说明</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : string<div class='sub-desc'><p>配置项名称</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Mixed</span><div class='sub-desc'><p>配置项的值</p>\n</div></li></ul></div></div></div><div id='method-getControlByDOM' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='main'>main</span><br/><a href='source/main.html#main-method-getControlByDOM' target='_blank' class='view-source'>view source</a></div><a href='#!/api/main-method-getControlByDOM' class='name expandable'>getControlByDOM</a>( <span class='pre'>dom</span> ) : <a href=\"#!/api/Control\" rel=\"Control\" class=\"docClass\">Control</a> | null<span class=\"signature\"></span></div><div class='description'><div class='short'>寻找DOM元素所对应的控件 ...</div><div class='long'><p>寻找DOM元素所对应的控件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dom</span> : HTMLElement<div class='sub-desc'><p>DOM元素</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Control\" rel=\"Control\" class=\"docClass\">Control</a> | null</span><div class='sub-desc'><p><code>dom</code>对应的控件实例，\n如果<code>dom</code>不存在或不对应任何控件则返回<code>null</code></p>\n</div></li></ul></div></div></div><div id='method-getSafely' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='main'>main</span><br/><a href='source/main.html#main-method-getSafely' target='_blank' class='view-source'>view source</a></div><a href='#!/api/main-method-getSafely' class='name expandable'>getSafely</a>( <span class='pre'>id</span> ) : <a href=\"#!/api/Control\" rel=\"Control\" class=\"docClass\">Control</a><span class=\"signature\"></span></div><div class='description'><div class='short'>根据id获取控件实例，如无相关实例则返回SafeWrapper ...</div><div class='long'><p>根据id获取控件实例，如无相关实例则返回<a href=\"#!/api/SafeWrapper\" rel=\"SafeWrapper\" class=\"docClass\">SafeWrapper</a></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : string<div class='sub-desc'><p>控件id</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Control\" rel=\"Control\" class=\"docClass\">Control</a></span><div class='sub-desc'><p>根据id获取的控件</p>\n</div></li></ul></div></div></div><div id='method-getViewContext' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='main'>main</span><br/><a href='source/main.html#main-method-getViewContext' target='_blank' class='view-source'>view source</a></div><a href='#!/api/main-method-getViewContext' class='name expandable'>getViewContext</a>( <span class='pre'></span> ) : <a href=\"#!/api/ViewContext\" rel=\"ViewContext\" class=\"docClass\">ViewContext</a><span class=\"signature\"></span></div><div class='description'><div class='short'>获取默认的控件视图环境 ...</div><div class='long'><p>获取默认的控件视图环境</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/ViewContext\" rel=\"ViewContext\" class=\"docClass\">ViewContext</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='main'>main</span><br/><a href='source/main.html#main-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/main-method-init' class='name expandable'>init</a>( <span class='pre'>[wrap], [options]</span> ) : <a href=\"#!/api/Control\" rel=\"Control\" class=\"docClass\">Control</a>[]<span class=\"signature\"></span></div><div class='description'><div class='short'>从容器DOM元素批量初始化内部的控件渲染 ...</div><div class='long'><p>从容器DOM元素批量初始化内部的控件渲染</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>wrap</span> : HTMLElement (optional)<div class='sub-desc'><p>容器DOM元素，默认</p>\n<p>Defaults to: <code>document.body</code></p></div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>init参数</p>\n<ul><li><span class='pre'>viewContext</span> : Object (optional)<div class='sub-desc'><p>视图环境</p>\n</div></li><li><span class='pre'>properties</span> : Object (optional)<div class='sub-desc'><p>属性集合，通过id映射</p>\n</div></li><li><span class='pre'>valueReplacer</span> : Object (optional)<div class='sub-desc'><p>属性值替换函数</p>\n</div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Control\" rel=\"Control\" class=\"docClass\">Control</a>[]</span><div class='sub-desc'><p>初始化的控件对象集合</p>\n</div></li></ul></div></div></div><div id='method-parseAttribute' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='main'>main</span><br/><a href='source/main.html#main-method-parseAttribute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/main-method-parseAttribute' class='name expandable'>parseAttribute</a>( <span class='pre'>source, valueReplacer</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>将name:value[;name:value]的属性值解析成对象 ...</div><div class='long'><p>将<code>name:value[;name:value]</code>的属性值解析成对象</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>source</span> : string<div class='sub-desc'><p>属性值源字符串</p>\n</div></li><li><span class='pre'>valueReplacer</span> : Function<div class='sub-desc'><p>替换值的处理函数，每个值都将经过此函数</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-register' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='main'>main</span><br/><a href='source/main.html#main-method-register' target='_blank' class='view-source'>view source</a></div><a href='#!/api/main-method-register' class='name expandable'>register</a>( <span class='pre'>controlClass</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>注册控件类\n\n该方法通过类的prototype.type识别控件类型信息。 ...</div><div class='long'><p>注册控件类</p>\n\n<p>该方法通过类的<code>prototype.type</code>识别控件类型信息。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>controlClass</span> : Function<div class='sub-desc'><p>控件类</p>\n</div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>已经有相同<code>prototype.type</code>的控件类存在，不能重复注册同类型控件</p>\n</div></li></ul></div></div></div><div id='method-registerExtension' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='main'>main</span><br/><a href='source/main.html#main-method-registerExtension' target='_blank' class='view-source'>view source</a></div><a href='#!/api/main-method-registerExtension' class='name expandable'>registerExtension</a>( <span class='pre'>extensionClass</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>注册扩展类。 ...</div><div class='long'><p>注册扩展类。</p>\n\n<p>该方法通过类的<code>prototype.type</code>识别扩展类型信息</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>extensionClass</span> : Function<div class='sub-desc'><p>扩展类</p>\n</div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>已经有相同<code>prototype.type</code>的扩展类存在，不能重复注册同类型扩展</p>\n</div></li></ul></div></div></div><div id='method-registerRule' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='main'>main</span><br/><a href='source/main.html#main-method-registerRule' target='_blank' class='view-source'>view source</a></div><a href='#!/api/main-method-registerRule' class='name expandable'>registerRule</a>( <span class='pre'>ruleClass, priority</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>注册控件验证规则类\n\n该方法通过类的prototype.type识别验证规则类型信息 ...</div><div class='long'><p>注册控件验证规则类</p>\n\n<p>该方法通过类的<code>prototype.type</code>识别验证规则类型信息</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ruleClass</span> : Function<div class='sub-desc'><p>验证规则类</p>\n</div></li><li><span class='pre'>priority</span> : number<div class='sub-desc'><p>优先级，越小的优先级越高</p>\n</div></li></ul><h3 class='pa'>Throws</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>已经有相同<code>prototype.type</code>的验证规则类存在，不能重复注册同类型验证规则</p>\n</div></li></ul></div></div></div><div id='method-wrap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='main'>main</span><br/><a href='source/main.html#main-method-wrap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/main-method-wrap' class='name expandable'>wrap</a>( <span class='pre'>controls</span> ) : <a href=\"#!/api/ControlCollection\" rel=\"ControlCollection\" class=\"docClass\">ControlCollection</a><span class=\"signature\"></span></div><div class='description'><div class='short'>创建控件包裹，返回一个ControlCollection对象 ...</div><div class='long'><p>创建控件包裹，返回一个<a href=\"#!/api/ControlCollection\" rel=\"ControlCollection\" class=\"docClass\">ControlCollection</a>对象</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>controls</span> : <a href=\"#!/api/Control\" rel=\"Control\" class=\"docClass\">Control</a>...<div class='sub-desc'><p>需要包裹的控件</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/ControlCollection\" rel=\"ControlCollection\" class=\"docClass\">ControlCollection</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});