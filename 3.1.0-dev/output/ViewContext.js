Ext.data.JsonP.ViewContext({"tagname":"class","name":"ViewContext","autodetected":{},"files":[{"filename":"ViewContext.js","href":"ViewContext.html#ViewContext"}],"members":[{"name":"controls","tagname":"property","owner":"ViewContext","id":"property-controls","meta":{"private":true}},{"name":"groups","tagname":"property","owner":"ViewContext","id":"property-groups","meta":{"private":true}},{"name":"id","tagname":"property","owner":"ViewContext","id":"property-id","meta":{"readonly":true}},{"name":"constructor","tagname":"method","owner":"ViewContext","id":"method-constructor","meta":{}},{"name":"add","tagname":"method","owner":"ViewContext","id":"method-add","meta":{}},{"name":"clean","tagname":"method","owner":"ViewContext","id":"method-clean","meta":{}},{"name":"dispose","tagname":"method","owner":"ViewContext","id":"method-dispose","meta":{}},{"name":"get","tagname":"method","owner":"ViewContext","id":"method-get","meta":{}},{"name":"getGroup","tagname":"method","owner":"ViewContext","id":"method-getGroup","meta":{}},{"name":"getSafely","tagname":"method","owner":"ViewContext","id":"method-getSafely","meta":{}},{"name":"remove","tagname":"method","owner":"ViewContext","id":"method-remove","meta":{}},{"name":"get","tagname":"method","owner":"ViewContext","id":"static-method-get","meta":{"static":true}}],"alternateClassNames":[],"aliases":{},"id":"class-ViewContext","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/ViewContext.html#ViewContext' target='_blank'>ViewContext.js</a></div></pre><div class='doc-contents'><p>视图环境类</p>\n\n<p>一个视图环境是一组控件的集合，不同视图环境中相同id的控件的DOM id不会重复</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-controls' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ViewContext'>ViewContext</span><br/><a href='source/ViewContext.html#ViewContext-property-controls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ViewContext-property-controls' class='name expandable'>controls</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>视图环境控件集合 ...</div><div class='long'><p>视图环境控件集合</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-groups' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ViewContext'>ViewContext</span><br/><a href='source/ViewContext.html#ViewContext-property-groups' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ViewContext-property-groups' class='name expandable'>groups</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>视图环境控件分组集合 ...</div><div class='long'><p>视图环境控件分组集合</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-id' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ViewContext'>ViewContext</span><br/><a href='source/ViewContext.html#ViewContext-property-id' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ViewContext-property-id' class='name expandable'>id</a> : string<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>视图环境id</p>\n</div><div class='long'><p>视图环境id</p>\n</div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance methods</h3><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ViewContext'>ViewContext</span><br/><a href='source/ViewContext.html#ViewContext-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/ViewContext-method-constructor' class='name expandable'>ViewContext</a>( <span class='pre'>id</span> ) : <a href=\"#!/api/ViewContext\" rel=\"ViewContext\" class=\"docClass\">ViewContext</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : string<div class='sub-desc'><p>该<code>ViewContext</code>的id</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/ViewContext\" rel=\"ViewContext\" class=\"docClass\">ViewContext</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-add' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ViewContext'>ViewContext</span><br/><a href='source/ViewContext.html#ViewContext-method-add' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ViewContext-method-add' class='name expandable'>add</a>( <span class='pre'>control</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>将控件实例添加到视图环境中 ...</div><div class='long'><p>将控件实例添加到视图环境中</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>control</span> : <a href=\"#!/api/Control\" rel=\"Control\" class=\"docClass\">Control</a><div class='sub-desc'><p>待加控件</p>\n</div></li></ul></div></div></div><div id='method-clean' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ViewContext'>ViewContext</span><br/><a href='source/ViewContext.html#ViewContext-method-clean' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ViewContext-method-clean' class='name expandable'>clean</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>清除视图环境中所有控件 ...</div><div class='long'><p>清除视图环境中所有控件</p>\n</div></div></div><div id='method-dispose' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ViewContext'>ViewContext</span><br/><a href='source/ViewContext.html#ViewContext-method-dispose' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ViewContext-method-dispose' class='name expandable'>dispose</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>销毁视图环境 ...</div><div class='long'><p>销毁视图环境</p>\n</div></div></div><div id='method-get' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ViewContext'>ViewContext</span><br/><a href='source/ViewContext.html#ViewContext-method-get' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ViewContext-method-get' class='name expandable'>get</a>( <span class='pre'>id</span> ) : <a href=\"#!/api/Control\" rel=\"Control\" class=\"docClass\">Control</a><span class=\"signature\"></span></div><div class='description'><div class='short'>通过id获取控件实例。 ...</div><div class='long'><p>通过id获取控件实例。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : string<div class='sub-desc'><p>控件id</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Control\" rel=\"Control\" class=\"docClass\">Control</a></span><div class='sub-desc'><p>根据id获取的控件</p>\n</div></li></ul></div></div></div><div id='method-getGroup' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ViewContext'>ViewContext</span><br/><a href='source/ViewContext.html#ViewContext-method-getGroup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ViewContext-method-getGroup' class='name expandable'>getGroup</a>( <span class='pre'>name</span> ) : <a href=\"#!/api/ControlGroup\" rel=\"ControlGroup\" class=\"docClass\">ControlGroup</a><span class=\"signature\"></span></div><div class='description'><div class='short'>获取一个控件分组 ...</div><div class='long'><p>获取一个控件分组</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : string<div class='sub-desc'><p>分组名称</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/ControlGroup\" rel=\"ControlGroup\" class=\"docClass\">ControlGroup</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getSafely' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ViewContext'>ViewContext</span><br/><a href='source/ViewContext.html#ViewContext-method-getSafely' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ViewContext-method-getSafely' class='name expandable'>getSafely</a>( <span class='pre'>id</span> ) : <a href=\"#!/api/Control\" rel=\"Control\" class=\"docClass\">Control</a><span class=\"signature\"></span></div><div class='description'><div class='short'>根据id获取控件实例，如无相关实例则返回SafeWrapper ...</div><div class='long'><p>根据id获取控件实例，如无相关实例则返回<a href=\"#!/api/SafeWrapper\" rel=\"SafeWrapper\" class=\"docClass\">SafeWrapper</a></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : string<div class='sub-desc'><p>控件id</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Control\" rel=\"Control\" class=\"docClass\">Control</a></span><div class='sub-desc'><p>根据id获取的控件</p>\n</div></li></ul></div></div></div><div id='method-remove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ViewContext'>ViewContext</span><br/><a href='source/ViewContext.html#ViewContext-method-remove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ViewContext-method-remove' class='name expandable'>remove</a>( <span class='pre'>control</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>将控件实例从视图环境中移除。 ...</div><div class='long'><p>将控件实例从视图环境中移除。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>control</span> : <a href=\"#!/api/Control\" rel=\"Control\" class=\"docClass\">Control</a><div class='sub-desc'><p>待移除控件</p>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-get' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ViewContext'>ViewContext</span><br/><a href='source/ViewContext.html#ViewContext-static-method-get' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ViewContext-static-method-get' class='name expandable'>get</a>( <span class='pre'>id</span> )<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>根据id获取视图环境 ...</div><div class='long'><p>根据id获取视图环境</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : string<div class='sub-desc'><p>视图环境id</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});