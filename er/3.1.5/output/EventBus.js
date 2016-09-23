Ext.data.JsonP.EventBus({"tagname":"class","name":"EventBus","autodetected":{},"files":[{"filename":"events.js","href":"events.html#EventBus"}],"extends":"mini-event.EventTarget","members":[{"name":"constructor","tagname":"method","owner":"EventBus","id":"method-constructor","meta":{}},{"name":"notifyError","tagname":"method","owner":"EventBus","id":"method-notifyError","meta":{}},{"name":"actionabort","tagname":"event","owner":"EventBus","id":"event-actionabort","meta":{}},{"name":"actionfail","tagname":"event","owner":"EventBus","id":"event-actionfail","meta":{}},{"name":"actionloaded","tagname":"event","owner":"EventBus","id":"event-actionloaded","meta":{}},{"name":"actionmoved","tagname":"event","owner":"EventBus","id":"event-actionmoved","meta":{}},{"name":"actionnotfound","tagname":"event","owner":"EventBus","id":"event-actionnotfound","meta":{}},{"name":"enteraction","tagname":"event","owner":"EventBus","id":"event-enteraction","meta":{}},{"name":"enteractioncomplete","tagname":"event","owner":"EventBus","id":"event-enteractioncomplete","meta":{}},{"name":"enteractionfail","tagname":"event","owner":"EventBus","id":"event-enteractionfail","meta":{}},{"name":"error","tagname":"event","owner":"EventBus","id":"event-error","meta":{}},{"name":"forwardaction","tagname":"event","owner":"EventBus","id":"event-forwardaction","meta":{}},{"name":"leaveaction","tagname":"event","owner":"EventBus","id":"event-leaveaction","meta":{}},{"name":"permissiondenied","tagname":"event","owner":"EventBus","id":"event-permissiondenied","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-EventBus","component":false,"superclasses":["mini-event.EventTarget"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>mini-event.EventTarget<div class='subclass '><strong>EventBus</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/events.html#EventBus' target='_blank'>events.js</a></div></pre><div class='doc-contents'><p>事件总线类</p>\n\n<p>通过<code>require('er/events').EventBus</code>访问该类构造函数，其中<code>require('er/events')</code>是该类的全局实例</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='EventBus'>EventBus</span><br/><a href='source/events.html#EventBus-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/EventBus-method-constructor' class='name expandable'>EventBus</a>( <span class='pre'></span> ) : <a href=\"#!/api/EventBus\" rel=\"EventBus\" class=\"docClass\">EventBus</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/EventBus\" rel=\"EventBus\" class=\"docClass\">EventBus</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-notifyError' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='EventBus'>EventBus</span><br/><a href='source/events.html#EventBus-method-notifyError' target='_blank' class='view-source'>view source</a></div><a href='#!/api/EventBus-method-notifyError' class='name expandable'>notifyError</a>( <span class='pre'>error</span> ) : Error<span class=\"signature\"></span></div><div class='description'><div class='short'>通知一个错误的产生 ...</div><div class='long'><p>通知一个错误的产生</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>error</span> : Mixed<div class='sub-desc'><p>错误对象，如果是字符串则会被封装为一个Error对象</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Error</span><div class='sub-desc'><p>返回错误对象</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-actionabort' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='EventBus'>EventBus</span><br/><a href='source/events.html#EventBus-event-actionabort' target='_blank' class='view-source'>view source</a></div><a href='#!/api/EventBus-event-actionabort' class='name expandable'>actionabort</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>发现访问一个没有权限的Action时触发\n\n事件对象提供meta.ActionContext中的各属性 ...</div><div class='long'><p>发现访问一个没有权限的Action时触发</p>\n\n<p>事件对象提供<a href=\"#!/api/meta.ActionContext\" rel=\"meta.ActionContext\" class=\"docClass\">meta.ActionContext</a>中的各属性</p>\n</div></div></div><div id='event-actionfail' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='EventBus'>EventBus</span><br/><a href='source/events.html#EventBus-event-actionfail' target='_blank' class='view-source'>view source</a></div><a href='#!/api/EventBus-event-actionfail' class='name expandable'>actionfail</a>( <span class='pre'>failType, reason, config, action</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>发现访问一个没有权限的Action时触发\n\n事件对象提供meta.ActionContext中的各属性 ...</div><div class='long'><p>发现访问一个没有权限的Action时触发</p>\n\n<p>事件对象提供<a href=\"#!/api/meta.ActionContext\" rel=\"meta.ActionContext\" class=\"docClass\">meta.ActionContext</a>中的各属性</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>failType</span> : string<div class='sub-desc'><p>失败类型，可能有2个值：</p>\n\n<ul>\n<li><code>\"NoModule\"</code>：表示根据<a href=\"#!/api/meta.ActionConfig-property-type\" rel=\"meta.ActionConfig-property-type\" class=\"docClass\">meta.ActionConfig.type</a>加载不到对应的模块</li>\n<li><code>\"InvalidFactory\"</code>：表示加载得到一个Action工厂但是无法用其生产Action实例</li>\n</ul>\n\n</div></li><li><span class='pre'>reason</span> : string<div class='sub-desc'><p>失败原因</p>\n</div></li><li><span class='pre'>config</span> : <a href=\"#!/api/meta.ActionConfig\" rel=\"meta.ActionConfig\" class=\"docClass\">meta.ActionConfig</a><div class='sub-desc'><p>当前Action的配置项</p>\n</div></li><li><span class='pre'>action</span> : Object<div class='sub-desc'><p>当<code>failType</code>为<code>\"InvalidFactory\"</code>时存在，值为当前加载的被认为是Action工厂的对象</p>\n</div></li></ul></div></div></div><div id='event-actionloaded' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='EventBus'>EventBus</span><br/><a href='source/events.html#EventBus-event-actionloaded' target='_blank' class='view-source'>view source</a></div><a href='#!/api/EventBus-event-actionloaded' class='name expandable'>actionloaded</a>( <span class='pre'>url, config, action</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>当Action模块加载完毕后触发 ...</div><div class='long'><p>当Action模块加载完毕后触发</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : <a href=\"#!/api/URL\" rel=\"URL\" class=\"docClass\">URL</a><div class='sub-desc'><p>当前访问的地址</p>\n</div></li><li><span class='pre'>config</span> : <a href=\"#!/api/meta.ActionConfig\" rel=\"meta.ActionConfig\" class=\"docClass\">meta.ActionConfig</a><div class='sub-desc'><p>当前的Action配置项</p>\n</div></li><li><span class='pre'>action</span> : Function<div class='sub-desc'><p>当前的Action构造函数</p>\n</div></li></ul></div></div></div><div id='event-actionmoved' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='EventBus'>EventBus</span><br/><a href='source/events.html#EventBus-event-actionmoved' target='_blank' class='view-source'>view source</a></div><a href='#!/api/EventBus-event-actionmoved' class='name expandable'>actionmoved</a>( <span class='pre'>url, config, movedTo</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>发现一个Action通过meta.ActionConfig.movedTo配置为移动后触发 ...</div><div class='long'><p>发现一个Action通过<a href=\"#!/api/meta.ActionConfig-property-movedTo\" rel=\"meta.ActionConfig-property-movedTo\" class=\"docClass\">meta.ActionConfig.movedTo</a>配置为移动后触发</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : <a href=\"#!/api/URL\" rel=\"URL\" class=\"docClass\">URL</a><div class='sub-desc'><p>当前访问的URL</p>\n</div></li><li><span class='pre'>config</span> : <a href=\"#!/api/meta.ActionConfig\" rel=\"meta.ActionConfig\" class=\"docClass\">meta.ActionConfig</a><div class='sub-desc'><p>查找到的Action配置对象</p>\n</div></li><li><span class='pre'>movedTo</span> : string<div class='sub-desc'><p>移动的目标地址</p>\n</div></li></ul></div></div></div><div id='event-actionnotfound' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='EventBus'>EventBus</span><br/><a href='source/events.html#EventBus-event-actionnotfound' target='_blank' class='view-source'>view source</a></div><a href='#!/api/EventBus-event-actionnotfound' class='name expandable'>actionnotfound</a>( <span class='pre'>failType, reason</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>发现一个Action通过meta.ActionConfig.movedTo配置为移动后触发\n\n事件对象提供meta.ActionContext中的各属性 ...</div><div class='long'><p>发现一个Action通过<a href=\"#!/api/meta.ActionConfig-property-movedTo\" rel=\"meta.ActionConfig-property-movedTo\" class=\"docClass\">meta.ActionConfig.movedTo</a>配置为移动后触发</p>\n\n<p>事件对象提供<a href=\"#!/api/meta.ActionContext\" rel=\"meta.ActionContext\" class=\"docClass\">meta.ActionContext</a>中的各属性</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>failType</span> : string<div class='sub-desc'><p>失败类型，始终为<code>\"NotFound\"</code></p>\n</div></li><li><span class='pre'>reason</span> : string<div class='sub-desc'><p>失败原因，始终为<code>\"Not Found\"</code></p>\n</div></li></ul></div></div></div><div id='event-enteraction' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='EventBus'>EventBus</span><br/><a href='source/events.html#EventBus-event-enteraction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/EventBus-event-enteraction' class='name expandable'>enteraction</a>( <span class='pre'>action</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>在进入一个Action时触发，触发后调用Action.enter方法\n\n事件对象提供meta.ActionContext中的各属性 ...</div><div class='long'><p>在进入一个Action时触发，触发后调用<a href=\"#!/api/Action-method-enter\" rel=\"Action-method-enter\" class=\"docClass\">Action.enter</a>方法</p>\n\n<p>事件对象提供<a href=\"#!/api/meta.ActionContext\" rel=\"meta.ActionContext\" class=\"docClass\">meta.ActionContext</a>中的各属性</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>action</span> : <a href=\"#!/api/Action\" rel=\"Action\" class=\"docClass\">Action</a><div class='sub-desc'><p>当前的Action对象</p>\n</div></li></ul></div></div></div><div id='event-enteractioncomplete' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='EventBus'>EventBus</span><br/><a href='source/events.html#EventBus-event-enteractioncomplete' target='_blank' class='view-source'>view source</a></div><a href='#!/api/EventBus-event-enteractioncomplete' class='name expandable'>enteractioncomplete</a>( <span class='pre'>action</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>在一个Action完成进入，即Action.enter的生命周期完成之后触发\n\n事件对象提供meta.ActionContext中的各属性 ...</div><div class='long'><p>在一个Action完成进入，即<a href=\"#!/api/Action-method-enter\" rel=\"Action-method-enter\" class=\"docClass\">Action.enter</a>的生命周期完成之后触发</p>\n\n<p>事件对象提供<a href=\"#!/api/meta.ActionContext\" rel=\"meta.ActionContext\" class=\"docClass\">meta.ActionContext</a>中的各属性</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>action</span> : <a href=\"#!/api/Action\" rel=\"Action\" class=\"docClass\">Action</a><div class='sub-desc'><p>当前的Action对象</p>\n</div></li></ul></div></div></div><div id='event-enteractionfail' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='EventBus'>EventBus</span><br/><a href='source/events.html#EventBus-event-enteractionfail' target='_blank' class='view-source'>view source</a></div><a href='#!/api/EventBus-event-enteractionfail' class='name expandable'>enteractionfail</a>( <span class='pre'>failType, reasone</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>在进入一个Action的过程中出现错误时触发\n\n事件对象提供meta.ActionContext中的各属性 ...</div><div class='long'><p>在进入一个Action的过程中出现错误时触发</p>\n\n<p>事件对象提供<a href=\"#!/api/meta.ActionContext\" rel=\"meta.ActionContext\" class=\"docClass\">meta.ActionContext</a>中的各属性</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>failType</span> : string<div class='sub-desc'><p>失败类型，始终为<code>\"EnterFail\"</code></p>\n</div></li><li><span class='pre'>reasone</span> : string<div class='sub-desc'><p>失败原因</p>\n</div></li></ul></div></div></div><div id='event-error' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='EventBus'>EventBus</span><br/><a href='source/events.html#EventBus-event-error' target='_blank' class='view-source'>view source</a></div><a href='#!/api/EventBus-event-error' class='name expandable'>error</a>( <span class='pre'>error</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>接收到错误时触发 ...</div><div class='long'><p>接收到错误时触发</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>error</span> : Mixed<div class='sub-desc'><p>抛出的错误对象</p>\n</div></li></ul></div></div></div><div id='event-forwardaction' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='EventBus'>EventBus</span><br/><a href='source/events.html#EventBus-event-forwardaction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/EventBus-event-forwardaction' class='name expandable'>forwardaction</a>( <span class='pre'>url, container, isChildAction, [referrer]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>在重定向前往一个Action时，但执行任何Action查找、进入等逻辑前触发 ...</div><div class='long'><p>在重定向前往一个Action时，但执行任何Action查找、进入等逻辑前触发</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : <a href=\"#!/api/URL\" rel=\"URL\" class=\"docClass\">URL</a><div class='sub-desc'><p>当前访问的URL</p>\n</div></li><li><span class='pre'>container</span> : string<div class='sub-desc'><p>指定渲染Action的容器元素的id</p>\n</div></li><li><span class='pre'>isChildAction</span> : boolean<div class='sub-desc'><p>是否为子Action</p>\n</div></li><li><span class='pre'>referrer</span> : <a href=\"#!/api/URL\" rel=\"URL\" class=\"docClass\">URL</a> (optional)<div class='sub-desc'><p>来源URL</p>\n</div></li></ul></div></div></div><div id='event-leaveaction' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='EventBus'>EventBus</span><br/><a href='source/events.html#EventBus-event-leaveaction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/EventBus-event-leaveaction' class='name expandable'>leaveaction</a>( <span class='pre'>action, to</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>当离开一个Action时触发，触发后调用Action.leave方法 ...</div><div class='long'><p>当离开一个Action时触发，触发后调用<a href=\"#!/api/Action-method-leave\" rel=\"Action-method-leave\" class=\"docClass\">Action.leave</a>方法</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>action</span> : <a href=\"#!/api/Action\" rel=\"Action\" class=\"docClass\">Action</a><div class='sub-desc'><p>当前的Action对象</p>\n</div></li><li><span class='pre'>to</span> : <a href=\"#!/api/meta.ActionContext\" rel=\"meta.ActionContext\" class=\"docClass\">meta.ActionContext</a><div class='sub-desc'><p>离开后前往的下一个Action的上下文</p>\n</div></li></ul></div></div></div><div id='event-permissiondenied' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='EventBus'>EventBus</span><br/><a href='source/events.html#EventBus-event-permissiondenied' target='_blank' class='view-source'>view source</a></div><a href='#!/api/EventBus-event-permissiondenied' class='name expandable'>permissiondenied</a>( <span class='pre'>failType, reason</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>发现访问一个没有权限的Action时触发\n\n事件对象提供meta.ActionContext中的各属性 ...</div><div class='long'><p>发现访问一个没有权限的Action时触发</p>\n\n<p>事件对象提供<a href=\"#!/api/meta.ActionContext\" rel=\"meta.ActionContext\" class=\"docClass\">meta.ActionContext</a>中的各属性</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>failType</span> : string<div class='sub-desc'><p>失败类型，始终为<code>\"PermissionDenied\"</code></p>\n</div></li><li><span class='pre'>reason</span> : string<div class='sub-desc'><p>失败原因，始终为<code>\"Permission denied\"</code></p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});