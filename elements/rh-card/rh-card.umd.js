!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("../rhelement/rhelement.umd.js")):"function"==typeof define&&define.amd?define(["../rhelement/rhelement.umd.js"],e):r.RhCard=e(r.RHElement)}(this,function(o){"use strict";o=o&&o.hasOwnProperty("default")?o.default:o;var a=function(){function a(r,e){for(var o=0;o<e.length;o++){var a=e[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,a.key,a)}}return function(r,e,o){return e&&a(r.prototype,e),o&&a(r,o),r}}(),r=function(r){function e(){return function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(r,e){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?r:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,e))}return function(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(r,e):r.__proto__=e)}(e,o),a(e,[{key:"html",get:function(){return'\n<style>\n:host {\n  --rh-card--padding:                          calc(var(--rh-theme--container-spacer, 1rem) * 2);\n  --rh-card--paddingTop:                       var(--rh-card--padding);\n  --rh-card--paddingRight:                     var(--rh-card--padding);\n  --rh-card--paddingBottom:                    var(--rh-card--padding);\n  --rh-card--paddingLeft:                      var(--rh-card--padding);\n  --rh-card--spacing:                          var(--rh-theme--container-spacer, 1rem);\n  --rh-card--bg:                               var(--rh-theme--color--surface--base, #dfdfdf);\n  --rh-card--backgroundColor:                  var(--rh-card--bg);\n  --rh-card--borderColor:                      transparent;\n  --rh-card__header--size:                     var(--rh-theme--font-size--heading--delta, 18px);\n  --rh-card__header--fontWeight:               var(--rh-theme--font-weight--heading--delta, );\n  --rh-card__header--textTransform:            uppercase;\n  --rh-card__header--backgroundColor:          var(--rh-theme--color--surface--base--harmony, #c6c6c6);\n  --rh-broadcasted--color--text:               var(--rh-theme--color--surface--base--text, #333);\n  --rh-broadcasted--color--ui-link:            var(--rh-theme--color--surface--base--link, #00538c);\n  --rh-broadcasted--link--text-decoration:     underline;\n  --rh-broadcasted--color--ui-link--visited:   var(--rh-theme--color--surface--base--link--visited, #7551a6);\n  --rh-broadcasted--color--ui-link--hover:     var(--rh-theme--color--surface--base--link--hover, #00305b);\n  --rh-broadcasted--color--ui-link--focus:     var(--rh-theme--color--surface--base--link--focus, #00305b);\n  display: flex;\n  flex-direction: column;\n  justify-items: flex-start;\n  border-width: 0;\n  border-style: var(--rh-theme--surface--border-style, solid);\n  border-color: var(--rh-card--borderColor, transparent);\n  border-radius: var(--rh-theme--surface--border-radius, 0);\n  background: var(--rh-card--backgroundColor);\n  color: var(--rh-broadcasted--color--text);\n  padding: var(--rh-card--paddingTop) var(--rh-card--paddingRight) var(--rh-card--paddingBottom) var(--rh-card--paddingLeft); }\n\n:host([color="dark"]) {\n  --rh-card--backgroundColor:                  var(--rh-theme--color--surface--darker, #464646);\n  --rh-broadcasted--color--text:               var(--rh-theme--color--surface--darker--text, #fff);\n  --rh-broadcasted--color--ui-link:            var(--rh-theme--color--surface--darker--link, #99ccff);\n  --rh-broadcasted--color--ui-link--visited:   var(--rh-theme--color--surface--darker--link--visited, #b38cd9);\n  --rh-broadcasted--color--ui-link--hover:     var(--rh-theme--color--surface--darker--link--hover, #cce6ff);\n  --rh-broadcasted--color--ui-link--focus:     var(--rh-theme--color--surface--darker--link--focus, #cce6ff); }\n  :host([color="dark"]) .rh-card__header {\n    --rh-card__header--backgroundColor:         var(--rh-theme--color--surface--darker--harmony, #2d2d2d);\n    --rh-broadcasted--color--text:              var(--rh-theme--color--surface--darker--harmony--text, #fff);\n    --rh-broadcasted--color--ui-link:           var(--rh-theme--color--surface--darker--harmony--text, #fff);\n    --rh-broadcasted--color--ui-link--visited:  var(--rh-theme--color--surface--darker--harmony--text, #fff);\n    --rh-broadcasted--color--ui-link--hover:    var(--rh-theme--color--surface--darker--harmony--link--hover, #cce6ff);\n    --rh-broadcasted--color--ui-link--focus:    var(--rh-theme--color--surface--darker--harmony--link--focus, #cce6ff); }\n\n:host([color="darkest"]) {\n  --rh-card--backgroundColor:                  var(--rh-theme--color--surface--darkest, #131313);\n  --rh-broadcasted--color--text:               var(--rh-theme--color--surface--darkest--text, #fff);\n  --rh-broadcasted--color--ui-link:            var(--rh-theme--color--surface--darkest--link, #99ccff);\n  --rh-broadcasted--color--ui-link--visited:   var(--rh-theme--color--surface--darkest--link--visited, #b38cd9);\n  --rh-broadcasted--color--ui-link--hover:     var(--rh-theme--color--surface--darkest--link--hover, #cce6ff);\n  --rh-broadcasted--color--ui-link--focus:     var(--rh-theme--color--surface--darkest--link--focus, #cce6ff); }\n  :host([color="darkest"]) .rh-card__header {\n    --rh-card__header--backgroundColor:            var(--rh-theme--color--surface--darkest--harmony, black);\n    --rh-broadcasted--color--text:                 var(--rh-theme--color--surface--darkest--harmony--text, #fff);\n    --rh-broadcasted--color--ui-link:              var(--rh-theme--color--surface--darkest--harmony--text, #fff);\n    --rh-broadcasted--color--ui-link--visited:     var(--rh-theme--color--surface--darkest--harmony--text, #fff);\n    --rh-broadcasted--color--ui-link--hover:       var(--rh-theme--color--surface--darkest--harmony--link--hover, #cce6ff);\n    --rh-broadcasted--color--ui-link--focus:       var(--rh-theme--color--surface--darkest--harmony--link--focus, #cce6ff); }\n\n:host([color="light"]) {\n  --rh-card--backgroundColor:                  var(--rh-theme--color--surface--lighter, #ececec);\n  --rh-broadcasted--color--text:               var(--rh-theme--color--surface--lighter--text, #333);\n  --rh-broadcasted--color--ui-link:            var(--rh-theme--color--surface--lighter--link, #06c);\n  --rh-broadcasted--color--ui-link--visited:   var(--rh-theme--color--surface--lighter--link--visited, rebeccapurple);\n  --rh-broadcasted--color--ui-link--hover:     var(--rh-theme--color--surface--lighter--link--hover, #003366);\n  --rh-broadcasted--color--ui-link--focus:     var(--rh-theme--color--surface--lighter--link--focus, #003366); }\n  :host([color="light"]) .rh-card__header {\n    --rh-card__header--backgroundColor:         var(--rh-theme--color--surface--lighter--harmony, #d2d2d2);\n    --rh-broadcasted--color--text:              var(--rh-theme--color--surface--lighter--harmony--text, #333);\n    --rh-broadcasted--color--ui-link:           var(--rh-theme--color--surface--lighter--harmony--text, #333);\n    --rh-broadcasted--color--ui-link--visited:  var(--rh-theme--color--surface--lighter--harmony--text, #333);\n    --rh-broadcasted--color--ui-link--hover:    var(--rh-theme--color--surface--lighter--harmony--link--hover, #003366);\n    --rh-broadcasted--color--ui-link--focus:    var(--rh-theme--color--surface--lighter--harmony--link--focus, #003366); }\n\n:host([color="lightest"]) {\n  --rh-card--backgroundColor:                  var(--rh-theme--color--surface--lightest, #fff);\n  --rh-broadcasted--color--text:               var(--rh-theme--color--surface--lightest--text, #333);\n  --rh-broadcasted--color--ui-link:            var(--rh-theme--color--surface--lightest--link, #06c);\n  --rh-broadcasted--color--ui-link--visited:   var(--rh-theme--color--surface--lightest--link--visited, rebeccapurple);\n  --rh-broadcasted--color--ui-link--hover:     var(--rh-theme--color--surface--lightest--link--hover, #003366);\n  --rh-broadcasted--color--ui-link--focus:     var(--rh-theme--color--surface--lightest--link--focus, #003366); }\n  :host([color="lightest"]) .rh-card__header {\n    --rh-card__header--backgroundColor:         var(--rh-theme--color--surface--lightest--harmony, #e6e6e6);\n    --rh-broadcasted--color--text:              var(--rh-theme--color--surface--lightest--harmony--text, #333);\n    --rh-broadcasted--color--ui-link:           var(--rh-theme--color--surface--lightest--harmony--text, #333);\n    --rh-broadcasted--color--ui-link--visited:  var(--rh-theme--color--surface--lightest--harmony--text, #333);\n    --rh-broadcasted--color--ui-link--hover:    var(--rh-theme--color--surface--lightest--harmony--link--hover, #003366);\n    --rh-broadcasted--color--ui-link--focus:    var(--rh-theme--color--surface--lightest--harmony--link--focus, #003366); }\n\n:host([color="complement"]) {\n  --rh-card--backgroundColor:                  var(--rh-theme--color--surface--complement, #0477a4);\n  --rh-broadcasted--color--text:               var(--rh-theme--color--surface--complement--text, #fff);\n  --rh-broadcasted--color--ui-link:            var(--rh-theme--color--surface--complement--text, #fff);\n  --rh-broadcasted--color--ui-link--visited:   var(--rh-theme--color--surface--complement--link--visited, #b38cd9);\n  --rh-broadcasted--color--ui-link--hover:     var(--rh-theme--color--surface--complement--link--hover, #cce6ff);\n  --rh-broadcasted--color--ui-link--focus:     var(--rh-theme--color--surface--complement--link--focus, #cce6ff); }\n  :host([color="complement"]) .rh-card__header {\n    --rh-card__header--backgroundColor:         var(--rh-theme--color--surface--complement--harmony, #035372);\n    --rh-broadcasted--color--text:              var(--rh-theme--color--surface--complement--harmony--text, #fff);\n    --rh-broadcasted--color--ui-link:           var(--rh-theme--color--surface--complement--harmony--text, #fff);\n    --rh-broadcasted--color--ui-link---visited: var(--rh-theme--color--surface--complement--harmony--text, #fff);\n    --rh-broadcasted--color--ui-link--hover:    var(--rh-theme--color--surface--complement--harmony--link--hover, #cce6ff);\n    --rh-broadcasted--color--ui-link--focus:    var(--rh-theme--color--surface--complement--harmony--link--focus, #cce6ff); }\n\n:host([color="accent"]) {\n  --rh-card--backgroundColor:                  var(--rh-theme--color--surface--accent, #fe460d);\n  --rh-broadcasted--color--text:               var(--rh-theme--color--surface--accent--text, #fff);\n  --rh-broadcasted--color--ui-link:            var(--rh-theme--color--surface--accent--link, #99ccff);\n  --rh-broadcasted--color--ui-link--visited:   var(--rh-theme--color--surface--accent--link--visited, #b38cd9);\n  --rh-broadcasted--color--ui-link--hover:     var(--rh-theme--color--surface--accent--link--hover, #cce6ff);\n  --rh-broadcasted--color--ui-link--focus:     var(--rh-theme--color--surface--accent--link--focus, #cce6ff); }\n  :host([color="accent"]) .rh-card__header {\n    --rh-card__header--backgroundColor:         var(--rh-theme--color--surface--accent--harmony, #d73401);\n    --rh-broadcasted--color--text:              var(--rh-theme--color--surface--accent--harmony--text, #333);\n    --rh-broadcasted--color--ui-link:           var(--rh-theme--color--surface--accent--harmony--text, #333);\n    --rh-broadcasted--color--ui-link--visited:  var(--rh-theme--color--surface--accent--harmony--text, #333);\n    --rh-broadcasted--color--ui-link--hover:    var(--rh-theme--color--surface--accent--harmony--link--hover, #003366);\n    --rh-broadcasted--color--ui-link--focus:    var(--rh-theme--color--surface--accent--harmony--link--focus, #003366); }\n\n:host([size="small"]) {\n  --rh-card--padding:        var(--rh-theme--container-spacer, 1rem); }\n\n.rh-card__header,\n.rh-card__body,\n.rh-card__footer {\n  display: block;\n  margin-bottom: var(--rh-card--spacing); }\n\n.rh-card__header {\n  --rh-broadcasted--color--text:              var(--rh-theme--color--surface--base--harmony--text, #fff);\n  --rh-broadcasted--color--ui-link:           var(--rh-theme--color--surface--base--harmony--link, #fff);\n  --rh-broadcasted--link--text-decoration:    none;\n  --rh-broadcasted--color--ui-link--visited:  var(--rh-theme--color--surface--base--harmony--link--visited, #b38cd9);\n  --rh-broadcasted--color--ui-link--hover:    var(--rh-theme--color--surface--base--harmony--link--hover, #cce6ff);\n  --rh-broadcasted--color--ui-link--focus:    var(--rh-theme--color--surface--base--harmony--link--focus, #cce6ff);\n  background-color: var(--rh-card__header--backgroundColor);\n  margin-top: calc(-1 * var(--rh-card--paddingTop));\n  margin-right: calc(-1 * var(--rh-card--paddingRight));\n  margin-left: calc(-1 * var(--rh-card--paddingLeft));\n  padding-right: var(--rh-card--paddingRight);\n  padding-left: var(--rh-card--paddingLeft); }\n  .rh-card__header::slotted(h1:first-child) {\n    font-size: var(--rh-card__header--size);\n    text-transform: var(--rh-card__header--textTransform);\n    color: var(--rh-broadcasted--color--text);\n    margin-top: var(--rh-card--spacing);\n    margin-bottom: var(--rh-card--spacing); }\n  .rh-card__header::slotted(h2:first-child) {\n    font-size: var(--rh-card__header--size);\n    text-transform: var(--rh-card__header--textTransform);\n    color: var(--rh-broadcasted--color--text);\n    margin-top: var(--rh-card--spacing);\n    margin-bottom: var(--rh-card--spacing); }\n  .rh-card__header::slotted(h3:first-child) {\n    font-size: var(--rh-card__header--size);\n    text-transform: var(--rh-card__header--textTransform);\n    color: var(--rh-broadcasted--color--text);\n    margin-top: var(--rh-card--spacing);\n    margin-bottom: var(--rh-card--spacing); }\n  .rh-card__header::slotted(h4:first-child) {\n    font-size: var(--rh-card__header--size);\n    text-transform: var(--rh-card__header--textTransform);\n    color: var(--rh-broadcasted--color--text);\n    margin-top: var(--rh-card--spacing);\n    margin-bottom: var(--rh-card--spacing); }\n  .rh-card__header::slotted(h5:first-child) {\n    font-size: var(--rh-card__header--size);\n    text-transform: var(--rh-card__header--textTransform);\n    color: var(--rh-broadcasted--color--text);\n    margin-top: var(--rh-card--spacing);\n    margin-bottom: var(--rh-card--spacing); }\n\n.rh-card__body,\n.rh-card__footer {\n  margin-top: calc(-1 * var(--rh-card--spacing)); }\n\n.rh-card__footer {\n  margin-top: auto;\n  justify-self: flex-end; }\n</style>\n<slot class="rh-card__header" name="header"></slot>\n<slot class="rh-card__body"></slot>\n<slot class="rh-card__footer" name="footer"></slot>\n<slot class="rh-card__absolute" name="absolute"></slot>'}},{key:"styleUrl",get:function(){return"rh-card.scss"}},{key:"templateUrl",get:function(){return"rh-card.html"}}],[{key:"tag",get:function(){return"rh-card"}}]),e}();return o.create(r),r});
//# sourceMappingURL=rh-card.umd.js.map
