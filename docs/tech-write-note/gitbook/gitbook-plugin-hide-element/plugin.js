require(["gitbook","jquery"],(function(e,n){var t;e.events.bind("start",(function(e,n){t=n["hide-element"].elements})),e.events.bind("page.change",(function(){n.map(t,(function(e){n(e).hide()}))}))}));