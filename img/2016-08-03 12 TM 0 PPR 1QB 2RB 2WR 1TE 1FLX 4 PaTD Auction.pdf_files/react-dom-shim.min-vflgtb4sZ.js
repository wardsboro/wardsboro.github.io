define(["external/react"],function(e){var n=e.version.substring(0,4);if("0.12"===n)return{findDOMNode:function(e){return e&&"function"==typeof e.getDOMNode?e.getDOMNode():null},unmountComponentAtNode:e.unmountComponentAtNode,render:e.render};if("0.13"===n)return{findDOMNode:e.findDOMNode,unmountComponentAtNode:e.unmountComponentAtNode,render:e.render};throw new Error("The ReactDOM shim should only be required with React 0.12 or 0.13")});
//# sourceMappingURL=react-dom-shim.min.js-vflXp_of-.map