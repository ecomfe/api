Ext.data.JsonP.meta_ActionConfig({"tagname":"class","name":"meta.ActionConfig","autodetected":{},"files":[{"filename":"ActionConfig.js","href":"ActionConfig.html#meta-ActionConfig"}],"members":[{"name":"args","tagname":"property","owner":"meta.ActionConfig","id":"property-args","meta":{}},{"name":"authority","tagname":"property","owner":"meta.ActionConfig","id":"property-authority","meta":{}},{"name":"childActionOnly","tagname":"property","owner":"meta.ActionConfig","id":"property-childActionOnly","meta":{}},{"name":"movedTo","tagname":"property","owner":"meta.ActionConfig","id":"property-movedTo","meta":{}},{"name":"noAuthorityLocation","tagname":"property","owner":"meta.ActionConfig","id":"property-noAuthorityLocation","meta":{}},{"name":"title","tagname":"property","owner":"meta.ActionConfig","id":"property-title","meta":{}},{"name":"type","tagname":"property","owner":"meta.ActionConfig","id":"property-type","meta":{}},{"name":"url","tagname":"property","owner":"meta.ActionConfig","id":"property-url","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-meta.ActionConfig","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/ActionConfig.html#meta-ActionConfig' target='_blank'>ActionConfig.js</a></div></pre><div class='doc-contents'><p>Action配置类，用于配置URL至Action的映射其权限等内容</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-args' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='meta.ActionConfig'>meta.ActionConfig</span><br/><a href='source/ActionConfig.html#meta-ActionConfig-property-args' target='_blank' class='view-source'>view source</a></div><a href='#!/api/meta.ActionConfig-property-args' class='name expandable'>args</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>提供进入Action时，在meta.ActionContext之外，额外通过context参数\n传递给Action.enter方法的数据\n\n此配置可以用来为一个相对复杂的Action区分当前的环境，如一个表单Action同时支持\n一个...</div><div class='long'><p>提供进入Action时，在<a href=\"#!/api/meta.ActionContext\" rel=\"meta.ActionContext\" class=\"docClass\">meta.ActionContext</a>之外，额外通过<code>context</code>参数\n传递给<a href=\"#!/api/Action-method-enter\" rel=\"Action-method-enter\" class=\"docClass\">Action.enter</a>方法的数据</p>\n\n<p>此配置可以用来为一个相对复杂的Action区分当前的环境，如一个表单Action同时支持\n一个实体的创建和更新两种操作，则可以进行这样的配置：</p>\n\n<pre><code>{\n    url: '/user/create',\n    type: 'user/Form',\n    args: { formType: 'create' }\n}\n\n{\n    url: '/user/update',\n    type: 'user/Form',\n    args: { formType: 'update' }\n}\n</code></pre>\n\n<p>而<code>user/Form</code>模块中则可以根据<code>formType</code>使用不同的逻辑：</p>\n\n<pre><code>if (this.model.get('formType') === 'update') {\n    var id = this.model.get('id'); // URL中的id参数\n    // 从服务器加载已经存在的实体\n    ajax.get('/users/' + id)\n        .then(<a href=\"#!/api/util-method-bind\" rel=\"util-method-bind\" class=\"docClass\">util.bind</a>(this.model.fill, this.model));\n}\n</code></pre>\n</div></div></div><div id='property-authority' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='meta.ActionConfig'>meta.ActionConfig</span><br/><a href='source/ActionConfig.html#meta-ActionConfig-property-authority' target='_blank' class='view-source'>view source</a></div><a href='#!/api/meta.ActionConfig-property-authority' class='name expandable'>authority</a> : string | string[] | Function<span class=\"signature\"></span></div><div class='description'><div class='short'>配置进入Action的权限，可以为3种类型：\n\n\n使用字符串数组，数组中每一项表示一个权限\n使用单一字符串，多个权限可用|分隔，|前后的空格会被忽略（即带有trim效果）\n使用函数，则函数接受以下参数：\n\n\n{meta.ActionC...</div><div class='long'><p>配置进入Action的权限，可以为3种类型：</p>\n\n<ul>\n<li>使用字符串数组，数组中每一项表示一个权限</li>\n<li>使用单一字符串，多个权限可用<code>|</code>分隔，<code>|</code>前后的空格会被忽略（即带有<code>trim</code>效果）</li>\n<li><p>使用函数，则函数接受以下参数：</p>\n\n<ul>\n<li><code>{<a href=\"#!/api/meta.ActionContext\" rel=\"meta.ActionContext\" class=\"docClass\">meta.ActionContext</a>} context</code>：当前的<a href=\"#!/api/meta.ActionContext\" rel=\"meta.ActionContext\" class=\"docClass\">meta.ActionContext</a>对象</li>\n<li><code>{<a href=\"#!/api/meta.ActionConfig\" rel=\"meta.ActionConfig\" class=\"docClass\">meta.ActionConfig</a>} config</code>：当前的<a href=\"#!/api/meta.ActionConfig\" rel=\"meta.ActionConfig\" class=\"docClass\">meta.ActionConfig</a>对象</li>\n</ul>\n\n\n<p>  函数返回<code>true</code>则认为权限检验通过，否则认为没有权限</p></li>\n</ul>\n\n\n<p>权限采用 <strong>或</strong> 的关系，即用户有其中任何一个权限均能够进入该Action</p>\n\n<p>系统使用<a href=\"#!/api/permission-method-isAllow\" rel=\"permission-method-isAllow\" class=\"docClass\">permission.isAllow</a>简单地判断权限是否合法</p>\n\n<p>没有此配置则认为不对权限进行控制，任何用户均可访问</p>\n</div></div></div><div id='property-childActionOnly' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='meta.ActionConfig'>meta.ActionConfig</span><br/><a href='source/ActionConfig.html#meta-ActionConfig-property-childActionOnly' target='_blank' class='view-source'>view source</a></div><a href='#!/api/meta.ActionConfig-property-childActionOnly' class='name expandable'>childActionOnly</a> : boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>指定Action是否仅能被作为子Action加载\n\n如果此配置为true，则不能通过修改浏览器地址栏来进入此Action，\n仅能通过Controller.renderChildAction来进入此Action\n\n通常在开发期间我们希望...</div><div class='long'><p>指定Action是否仅能被作为子Action加载</p>\n\n<p>如果此配置为<code>true</code>，则不能通过修改浏览器地址栏来进入此Action，\n仅能通过<a href=\"#!/api/Controller-method-renderChildAction\" rel=\"Controller-method-renderChildAction\" class=\"docClass\">Controller.renderChildAction</a>来进入此Action</p>\n\n<p>通常在开发期间我们希望可以直接在地址栏中输入地址调试Action，而上线后则不允许如此，\n因此建议每个系统都有一个类似<code>window.DEBUG</code>的开关，\n而此配置项可以写为<code>childActionOnly: !window.DEBUG</code>来提供开发与生产环境的兼容性</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-movedTo' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='meta.ActionConfig'>meta.ActionConfig</span><br/><a href='source/ActionConfig.html#meta-ActionConfig-property-movedTo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/meta.ActionConfig-property-movedTo' class='name expandable'>movedTo</a> : string<span class=\"signature\"></span></div><div class='description'><div class='short'>指定Action的迁移路径\n\n如果有此配置，则type没有作用，\n系统将直接重定向到此配置指定的路径\n\n此配置通常用于系统模块的迁移，但同时希望保留原URL以提高旧用户可访问性，\n也可使用此配置来实现多个URL对应一个Action，如...</div><div class='long'><p>指定Action的迁移路径</p>\n\n<p>如果有此配置，则<a href=\"#!/api/meta.ActionConfig-property-type\" rel=\"meta.ActionConfig-property-type\" class=\"docClass\">type</a>没有作用，\n系统将直接重定向到此配置指定的路径</p>\n\n<p>此配置通常用于系统模块的迁移，但同时希望保留原URL以提高旧用户可访问性，\n也可使用此配置来实现多个URL对应一个Action，如为实体提供别名等</p>\n</div></div></div><div id='property-noAuthorityLocation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='meta.ActionConfig'>meta.ActionConfig</span><br/><a href='source/ActionConfig.html#meta-ActionConfig-property-noAuthorityLocation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/meta.ActionConfig-property-noAuthorityLocation' class='name expandable'>noAuthorityLocation</a> : string<span class=\"signature\"></span></div><div class='description'><div class='short'><p>配置用户没有权限时，系统将跳转到哪个地址</p>\n\n<p>如果没有此配置，则使用<a href=\"#!/api/config-property-noAuthorityLocation\" rel=\"config-property-noAuthorityLocation\" class=\"docClass\">config.noAuthorityLocation</a>作为默认值</p>\n</div><div class='long'><p>配置用户没有权限时，系统将跳转到哪个地址</p>\n\n<p>如果没有此配置，则使用<a href=\"#!/api/config-property-noAuthorityLocation\" rel=\"config-property-noAuthorityLocation\" class=\"docClass\">config.noAuthorityLocation</a>作为默认值</p>\n</div></div></div><div id='property-title' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='meta.ActionConfig'>meta.ActionConfig</span><br/><a href='source/ActionConfig.html#meta-ActionConfig-property-title' target='_blank' class='view-source'>view source</a></div><a href='#!/api/meta.ActionConfig-property-title' class='name expandable'>title</a> : string<span class=\"signature\"></span></div><div class='description'><div class='short'><p>配置进入此Action时，浏览器标题栏显示的内容</p>\n\n<p>如果是子Action，则此配置无效</p>\n\n<p>如果没有此配置项，则使用<a href=\"#!/api/config-property-systemName\" rel=\"config-property-systemName\" class=\"docClass\">config.systemName</a>作为默认值</p>\n</div><div class='long'><p>配置进入此Action时，浏览器标题栏显示的内容</p>\n\n<p>如果是子Action，则此配置无效</p>\n\n<p>如果没有此配置项，则使用<a href=\"#!/api/config-property-systemName\" rel=\"config-property-systemName\" class=\"docClass\">config.systemName</a>作为默认值</p>\n</div></div></div><div id='property-type' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='meta.ActionConfig'>meta.ActionConfig</span><br/><a href='source/ActionConfig.html#meta-ActionConfig-property-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/meta.ActionConfig-property-type' class='name expandable'>type</a> : string<span class=\"signature\"></span></div><div class='description'><div class='short'><p>对应的Action模块id，必须使用 <strong>全局模块id</strong></p>\n</div><div class='long'><p>对应的Action模块id，必须使用 <strong>全局模块id</strong></p>\n</div></div></div><div id='property-url' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='meta.ActionConfig'>meta.ActionConfig</span><br/><a href='source/ActionConfig.html#meta-ActionConfig-property-url' target='_blank' class='view-source'>view source</a></div><a href='#!/api/meta.ActionConfig-property-url' class='name expandable'>url</a> : string<span class=\"signature\"></span></div><div class='description'><div class='short'><p>配置对应的URL，不包含任何参数，框架用URL的<code>path</code>部分与此进行相等比对</p>\n\n<p>URL配置是 <strong>大小写敏感</strong> 的</p>\n</div><div class='long'><p>配置对应的URL，不包含任何参数，框架用URL的<code>path</code>部分与此进行相等比对</p>\n\n<p>URL配置是 <strong>大小写敏感</strong> 的</p>\n</div></div></div></div></div></div></div>","meta":{}});