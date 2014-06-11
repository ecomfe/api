Ext.data.JsonP.extension_CustomData({"tagname":"class","name":"extension.CustomData","autodetected":{},"files":[{"filename":"CustomData.js","href":"CustomData.html#extension-CustomData"}],"extends":"Extension","members":[{"name":"active","tagname":"property","owner":"Extension","id":"property-active","meta":{"private":true}},{"name":"target","tagname":"property","owner":"Extension","id":"property-target","meta":{"protected":true}},{"name":"type","tagname":"property","owner":"extension.CustomData","id":"property-type","meta":{}},{"name":"constructor","tagname":"method","owner":"extension.CustomData","id":"method-constructor","meta":{}},{"name":"activate","tagname":"method","owner":"extension.CustomData","id":"method-activate","meta":{}},{"name":"attachTo","tagname":"method","owner":"Extension","id":"method-attachTo","meta":{}},{"name":"dispose","tagname":"method","owner":"Extension","id":"method-dispose","meta":{}},{"name":"inactivate","tagname":"method","owner":"extension.CustomData","id":"method-inactivate","meta":{}},{"name":"isActive","tagname":"method","owner":"Extension","id":"method-isActive","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-extension.CustomData","short_doc":"供控件声明和获取自定义数据的扩展\n\n该扩展会收集控件上以data开头且后面跟大写字符或数字的属性，\n并为控件加上getData和setData来读写数据\n\n使用该扩展后，可在HTML中声明一些自定义属性，\n并在后续通过javascri...","component":false,"superclasses":["Extension"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Extension' rel='Extension' class='docClass'>Extension</a><div class='subclass '><strong>extension.CustomData</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/CustomData.html#extension-CustomData' target='_blank'>CustomData.js</a></div></pre><div class='doc-contents'><p>供控件声明和获取自定义数据的扩展</p>\n\n<p>该扩展会收集控件上以<strong>data</strong>开头且后面跟大写字符或数字的属性，\n并为控件加上<code>getData</code>和<code>setData</code>来读写数据</p>\n\n<p>使用该扩展后，可在HTML中声明一些自定义属性，\n并在后续通过javascript从控件的实例上获取</p>\n\n<pre><code>&lt;div data-ui-type=\"Button\" \n    data-ui-id=\"submitButton\"\n    data-ui-data-auth=\"admin\"\n    data-ui-extension-data-type=\"CustomData\"&gt;提交&lt;/div&gt;\n&lt;script&gt;\n    var esui = require('esui');\n    esui.init(document.body);\n    var button = esui.get('submitButton');\n    if (button.getData('auth') !== currentUser.role) {\n        button.hide();\n    }\n&lt;/script&gt;\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-active' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Extension' rel='Extension' class='defined-in docClass'>Extension</a><br/><a href='source/Extension.html#Extension-property-active' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extension-property-active' class='name expandable'>active</a> : boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>当前扩展实例是否处于激活状态 ...</div><div class='long'><p>当前扩展实例是否处于激活状态</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-target' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Extension' rel='Extension' class='defined-in docClass'>Extension</a><br/><a href='source/Extension.html#Extension-property-target' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extension-property-target' class='name expandable'>target</a> : <a href=\"#!/api/Control\" rel=\"Control\" class=\"docClass\">Control</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'><p>当前扩展实例应用的控件对象</p>\n</div><div class='long'><p>当前扩展实例应用的控件对象</p>\n</div></div></div><div id='property-type' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='extension.CustomData'>extension.CustomData</span><br/><a href='source/CustomData.html#extension-CustomData-property-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/extension.CustomData-property-type' class='name expandable'>type</a> : string<span class=\"signature\"></span></div><div class='description'><div class='short'>指定扩展类型，始终为\"CustomData\" ...</div><div class='long'><p>指定扩展类型，始终为<code>\"CustomData\"</code></p>\n<p>Defaults to: <code>&#39;CustomData&#39;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='extension.CustomData'>extension.CustomData</span><br/><a href='source/CustomData.html#extension-CustomData-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/extension.CustomData-method-constructor' class='name expandable'>extension.CustomData</a>( <span class='pre'></span> ) : <a href=\"#!/api/extension.CustomData\" rel=\"extension.CustomData\" class=\"docClass\">extension.CustomData</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/extension.CustomData\" rel=\"extension.CustomData\" class=\"docClass\">extension.CustomData</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Extension-method-constructor\" rel=\"Extension-method-constructor\" class=\"docClass\">Extension.constructor</a></p></div></div></div><div id='method-activate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='extension.CustomData'>extension.CustomData</span><br/><a href='source/CustomData.html#extension-CustomData-method-activate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/extension.CustomData-method-activate' class='name expandable'>activate</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>激活扩展 ...</div><div class='long'><p>激活扩展</p>\n<p>Overrides: <a href=\"#!/api/Extension-method-activate\" rel=\"Extension-method-activate\" class=\"docClass\">Extension.activate</a></p></div></div></div><div id='method-attachTo' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Extension' rel='Extension' class='defined-in docClass'>Extension</a><br/><a href='source/Extension.html#Extension-method-attachTo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extension-method-attachTo' class='name expandable'>attachTo</a>( <span class='pre'>target</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>关联至给定的控件 ...</div><div class='long'><p>关联至给定的控件</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : <a href=\"#!/api/Control\" rel=\"Control\" class=\"docClass\">Control</a><div class='sub-desc'><p>需要关联的控件实例</p>\n</div></li></ul></div></div></div><div id='method-dispose' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Extension' rel='Extension' class='defined-in docClass'>Extension</a><br/><a href='source/Extension.html#Extension-method-dispose' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extension-method-dispose' class='name expandable'>dispose</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>销毁当前实例 ...</div><div class='long'><p>销毁当前实例</p>\n</div></div></div><div id='method-inactivate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='extension.CustomData'>extension.CustomData</span><br/><a href='source/CustomData.html#extension-CustomData-method-inactivate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/extension.CustomData-method-inactivate' class='name expandable'>inactivate</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>取消扩展的激活状态 ...</div><div class='long'><p>取消扩展的激活状态</p>\n<p>Overrides: <a href=\"#!/api/Extension-method-inactivate\" rel=\"Extension-method-inactivate\" class=\"docClass\">Extension.inactivate</a></p></div></div></div><div id='method-isActive' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Extension' rel='Extension' class='defined-in docClass'>Extension</a><br/><a href='source/Extension.html#Extension-method-isActive' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Extension-method-isActive' class='name expandable'>isActive</a>( <span class='pre'></span> ) : boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>判断当前实例是否处于激活状态 ...</div><div class='long'><p>判断当前实例是否处于激活状态</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>boolean</span><div class='sub-desc'><p>如果处于激活状态则返回<code>true</code></p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});