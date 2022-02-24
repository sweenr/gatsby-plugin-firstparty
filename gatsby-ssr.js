const React = require("react");

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  const firstPartyScript = [
    <script
      dangerouslySetInnerHTML={{
        __html: `!function(){var t=window.firstparty=window.firstparty||[];if(!t.initialize){if(t.invoked)return void(window.console&&console.error&&console.error("Firstparty snippet included twice."));t.invoked=!0,t.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"],t.factory=function(r){return function(){var e=Array.prototype.slice.call(arguments);return e.unshift(r),t.push(e),t}};for(var r=0;r<t.methods.length;r++){var e=t.methods[r];t[e]=t.factory(e)}t.load=function(r,e,i){t._writeKey=r,t._host=e,t._firstpartyOptions=i;var a="/js/firstparty.min.js";void 0!==i&&void 0!==i.libraryPath&&(a=i.libraryPath);var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src="https://"+e+a;var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(o,n)},t.SNIPPET_VERSION="0.1.0"}}();
  firstparty.load('${pluginOptions.writeKey}', '${pluginOptions.sourceUrl}');
  firstparty.page();`,
      }}
    ></script>,
  ];

  setHeadComponents(firstPartyScript);
};
