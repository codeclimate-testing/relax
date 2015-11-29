import $ from 'jquery';
import Backbone from 'backbone';
Backbone.$ = $;

import {initStores} from './stores';

export default function init (Router) {
  window.initialProps = $('script[type="application/json"]').html();

  if (window.initialProps) {
    window.initialProps = JSON.parse(window.initialProps);
  }

  initStores(window.initialProps);

  /* jshint ignore:start */
  new Router();
  /* jshint ignore:end */

  Backbone.history.start({pushState: true});
}

function veryComplexFunction() {
  if(a) {
    if(b) {
      if(c) {
        if(d) {
          if(e) {
            if(f) {
              if(g) {
                if(h) {
                  if(i) {
                    if(j) {
                      if(k) {
                        if(l) {
                          if(m) {
                            if(n) {
                              if(o) {
                                if(p) {
                                  return true;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
