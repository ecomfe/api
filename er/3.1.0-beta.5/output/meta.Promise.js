Ext.data.JsonP.meta_Promise({"tagname":"class","name":"meta.Promise","autodetected":{},"files":[{"filename":"Promise.js","href":"Promise.html#meta-Promise"}],"members":[{"name":"done","tagname":"method","owner":"meta.Promise","id":"method-done","meta":{}},{"name":"ensure","tagname":"method","owner":"meta.Promise","id":"method-ensure","meta":{}},{"name":"fail","tagname":"method","owner":"meta.Promise","id":"method-fail","meta":{}},{"name":"then","tagname":"method","owner":"meta.Promise","id":"method-then","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-meta.Promise","component":false,"superclasses":[],"subclasses":["meta.FakeXHR"],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/meta.FakeXHR' rel='meta.FakeXHR' class='docClass'>meta.FakeXHR</a></div><h4>Files</h4><div class='dependency'><a href='source/Promise.html#meta-Promise' target='_blank'>Promise.js</a></div></pre><div class='doc-contents'><p>社区<a href=\"http://wiki.commonjs.org/wiki/Promises/A\">Promise/A</a>规范的实现</p>\n\n<p>此对象不能直接创建，须通过<a href=\"#!/api/Deferred\" rel=\"Deferred\" class=\"docClass\">Deferred</a>对象产生</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-done' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='meta.Promise'>meta.Promise</span><br/><a href='source/Promise.html#meta-Promise-method-done' target='_blank' class='view-source'>view source</a></div><a href='#!/api/meta.Promise-method-done' class='name expandable'>done</a>( <span class='pre'>callback</span> ) : <a href=\"#!/api/meta.Promise\" rel=\"meta.Promise\" class=\"docClass\">meta.Promise</a><span class=\"signature\"></span></div><div class='description'><div class='short'>添加一个成功回调函数\n\n本方法相当于`.then(callback, null)，\n具体参考then方法的说明 ...</div><div class='long'><p>添加一个成功回调函数</p>\n\n<p>本方法相当于`.then(callback, null)，\n具体参考<a href=\"#!/api/meta.Promise-method-then\" rel=\"meta.Promise-method-then\" class=\"docClass\">then</a>方法的说明</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>需要添加的回调函数</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/meta.Promise\" rel=\"meta.Promise\" class=\"docClass\">meta.Promise</a></span><div class='sub-desc'><p>新的<code>Promise</code>对象</p>\n</div></li></ul></div></div></div><div id='method-ensure' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='meta.Promise'>meta.Promise</span><br/><a href='source/Promise.html#meta-Promise-method-ensure' target='_blank' class='view-source'>view source</a></div><a href='#!/api/meta.Promise-method-ensure' class='name expandable'>ensure</a>( <span class='pre'>callback</span> ) : <a href=\"#!/api/meta.Promise\" rel=\"meta.Promise\" class=\"docClass\">meta.Promise</a><span class=\"signature\"></span></div><div class='description'><div class='short'>添加一个无论成功还是失败均执行的回调函数\n\n本方法相当于`.then(callback, callback)，\n具体参考then方法的说明 ...</div><div class='long'><p>添加一个无论成功还是失败均执行的回调函数</p>\n\n<p>本方法相当于`.then(callback, callback)，\n具体参考<a href=\"#!/api/meta.Promise-method-then\" rel=\"meta.Promise-method-then\" class=\"docClass\">then</a>方法的说明</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>需要添加的回调函数</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/meta.Promise\" rel=\"meta.Promise\" class=\"docClass\">meta.Promise</a></span><div class='sub-desc'><p>新的<code>Promise</code>对象</p>\n</div></li></ul></div></div></div><div id='method-fail' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='meta.Promise'>meta.Promise</span><br/><a href='source/Promise.html#meta-Promise-method-fail' target='_blank' class='view-source'>view source</a></div><a href='#!/api/meta.Promise-method-fail' class='name expandable'>fail</a>( <span class='pre'>callback</span> ) : <a href=\"#!/api/meta.Promise\" rel=\"meta.Promise\" class=\"docClass\">meta.Promise</a><span class=\"signature\"></span></div><div class='description'><div class='short'>添加一个失败回调函数\n\n本方法相当于`.then(null, callback)，\n具体参考then方法的说明 ...</div><div class='long'><p>添加一个失败回调函数</p>\n\n<p>本方法相当于`.then(null, callback)，\n具体参考<a href=\"#!/api/meta.Promise-method-then\" rel=\"meta.Promise-method-then\" class=\"docClass\">then</a>方法的说明</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>需要添加的回调函数</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/meta.Promise\" rel=\"meta.Promise\" class=\"docClass\">meta.Promise</a></span><div class='sub-desc'><p>新的<code>Promise</code>对象</p>\n</div></li></ul></div></div></div><div id='method-then' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='meta.Promise'>meta.Promise</span><br/><a href='source/Promise.html#meta-Promise-method-then' target='_blank' class='view-source'>view source</a></div><a href='#!/api/meta.Promise-method-then' class='name expandable'>then</a>( <span class='pre'>[done], [fail]</span> ) : <a href=\"#!/api/meta.Promise\" rel=\"meta.Promise\" class=\"docClass\">meta.Promise</a><span class=\"signature\"></span></div><div class='description'><div class='short'>添加成功回调函数及可选的失败回调函数\n\n该函数会返回一个新的Promise对象，新Promise对象将有以下行为：\n\n\n当原有Promise对象进入resolved状态时，执行done回调函数，\n并根据函数的返回值进行逻辑\n当原有Pr...</div><div class='long'><p>添加成功回调函数及可选的失败回调函数</p>\n\n<p>该函数会返回一个新的<code>Promise</code>对象，新<code>Promise</code>对象将有以下行为：</p>\n\n<ul>\n<li>当原有<code>Promise</code>对象进入<code>resolved</code>状态时，执行<code>done</code>回调函数，\n并根据函数的返回值进行逻辑</li>\n<li>当原有<code>Promise</code>对象进入<code>rejected</code>状态时，执行<code>fail</code>回调函数，\n并根据函数的返回值进行逻辑</li>\n</ul>\n\n\n<p>其中 <strong>根据函数的返回值进行逻辑</strong> 具体如下：</p>\n\n<ul>\n<li>当函数返回非<code>null</code>或<code>undefined</code>时，使用返回值进入<code>resolved</code>状态</li>\n<li>当函数抛出异常时，使用异常对象进入<code>rejected</code>状态</li>\n</ul>\n\n\n<p>另如果当前<code>Promise</code>对象不处在<code>pending</code>状态，则：</p>\n\n<ul>\n<li>如果处在<code>resolved</code>状态，则成功回调函数会被立即异步执行</li>\n<li>如果处在<code>rejected</code>状态，则失败回调函数会被立即异步执行</li>\n</ul>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>done</span> : Function (optional)<div class='sub-desc'><p>成功时执行的回调函数</p>\n</div></li><li><span class='pre'>fail</span> : Function (optional)<div class='sub-desc'><p>失败时执行的回调函数，可选参数</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/meta.Promise\" rel=\"meta.Promise\" class=\"docClass\">meta.Promise</a></span><div class='sub-desc'><p>新的<code>Promise</code>对象</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});