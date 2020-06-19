import React, { useState, useEffect } from 'react';

// A type of promise-like that resolves synchronously and supports only one observer

const _iteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))) : "@@iterator";

const _asyncIteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))) : "@@asyncIterator";

// Asynchronously call a function and send errors to recovery continuation
function _catch(body, recover) {
	try {
		var result = body();
	} catch(e) {
		return recover(e);
	}
	if (result && result.then) {
		return result.then(void 0, recover);
	}
	return result;
}

var footerItems = [[{
  header: {
    description: "Genomes"
  },
  items: [{
    link: "/",
    description: "Dictyostelium discoideum"
  }, {
    link: "http://genomes.dictybase.org/purpureum",
    description: "Dictyostelium purpureum"
  }, {
    link: "http://genomes.dictybase.org/fasciculatum",
    description: "Dictyostelium fasciculatum"
  }, {
    link: "http://genomes.dictybase.org/pallidum",
    description: "Polysphondylium pallium"
  }]
}], [{
  header: {
    description: "Tools"
  },
  items: [{
    description: "Genome Browser",
    link: "http://dictybase.org/tools/jbrowse/?data=data/jbrowse/discoideum&loc=6:1..50011&tracks=reference,gene,transcript"
  }, {
    description: "Dashboard",
    link: "/dictyaccess"
  }]
}], [{
  header: {
    description: "Explore"
  },
  items: [{
    link: "/explore/art",
    description: "Dicty Art"
  }, {
    link: "/explore/gallery",
    description: "Gallery"
  }, {
    link: "/explore/learn",
    description: "Learn About Dicty"
  }, {
    link: "/explore/teach",
    description: "Teaching Protocols"
  }, {
    link: "/explore/links",
    description: "Useful Links"
  }]
}], [{
  header: {
    description: "Research"
  },
  items: [{
    link: "/research/ontology",
    description: "Anatomy Ontology"
  }, {
    link: "/research/codon",
    description: "Codon Bias Table"
  }, {
    link: "/research/nomenclature",
    description: "Nomenclature Guidelines"
  }, {
    link: "/research/phenotyping",
    description: "Phenotyping"
  }, {
    link: "/research/techniques",
    description: "Techniques"
  }]
}], [{
  header: {
    description: "Dicty Stock Center"
  },
  items: [{
    description: "Stock Center Home",
    link: "/stockcenter"
  }, {
    description: "Order Information",
    link: "/stockcenter/information/order"
  }, {
    description: "FAQ",
    link: "/stockcenter/information/faq"
  }]
}], [{
  header: {
    description: "Community"
  },
  items: [{
    description: "Cite Us",
    link: "/community/citation"
  }, {
    description: "Dicty Annual Conferences",
    link: "/community/conference"
  }, {
    description: "Dicty Email Forum",
    link: "/community/listserv"
  }, {
    description: "Dicty Labs",
    link: "/community/labs"
  }, {
    description: "History",
    link: "/community/history"
  }, {
    description: "Jobs",
    link: "/community/jobs"
  }, {
    description: "Upcoming Meetings",
    link: "/community/meetings"
  }]
}], [{
  header: {
    description: "Please Cite"
  },
  items: [{
    description: "dictyBase",
    link: ""
  }, {
    description: "Dicty Stock Center",
    link: "/stockcenter"
  }]
}], [{
  header: {
    description: "Supported By"
  },
  items: [{
    description: "NIH",
    link: "https://www.nih.gov/"
  }, {
    description: "GMOD",
    link: "http://gmod.org/wiki/Main_Page"
  }, {
    description: "Gene Ontology",
    link: "http://www.geneontology.org/"
  }]
}]];

var footerUrl = process.env.REACT_APP_FOOTER_JSON || "";
/**
 * formatFooterItems is a helper function to convert the links
 * under each header into the accepted footer data format.
 */

var formatFooterItems = function formatFooterItems(items) {
  return items.map(function (c) {
    return {
      description: c.label,
      link: c.link
    };
  });
};
/**
 * formatFooterData converts the received footer JSON data and
 * converts it into the dicty-footer data format.
 */


var formatFooterData = function formatFooterData(json) {
  return json.data.map(function (item) {
    return [{
      header: {
        description: item.attributes.display
      },
      items: formatFooterItems(item.attributes.items)
    }];
  });
};
/**
 * useFooter is a hook for fetching dictyBase footer
 * JSON data. It uses an included array of data as its
 * initial state then replaces it with fetched data
 * on a successful request.
 */


var useFooter = function useFooter() {
  var _useState = useState(footerItems),
      footerData = _useState[0],
      setFooterData = _useState[1];

  var _useState2 = useState(null),
      error = _useState2[0],
      setError = _useState2[1];

  useEffect(function () {
    var fetchFooter = function fetchFooter() {
      try {
        var _temp2 = _catch(function () {
          return Promise.resolve(fetch(footerUrl)).then(function (res) {
            return Promise.resolve(res.json()).then(function (json) {
              if (res.ok) {
                var footerArr = formatFooterData(json);
                setFooterData(footerArr);
              } else {
                setError(res.statusText);
              }
            });
          });
        }, function (error) {
          setError(error.toString());
        });

        return Promise.resolve(_temp2 && _temp2.then ? _temp2.then(function () {}) : void 0);
      } catch (e) {
        return Promise.reject(e);
      }
    };

    fetchFooter();
  }, []);
  return {
    footerData: footerData,
    error: error
  };
};

var navbarItems = [{
  dropdown: true,
  title: "Genomes",
  items: [{
    name: "Dictyostelium discoideum",
    href: "/"
  }, {
    name: "Dictyostelium purpureum",
    href: "http://genomes.dictybase.org/purpureum"
  }, {
    name: "Dictyostelium fasciculatum",
    href: "http://genomes.dictybase.org/fasciculatum"
  }, {
    name: "Polysphondylium pallium",
    href: "http://genomes.dictybase.org/pallidum"
  }]
}, {
  dropdown: true,
  title: "Tools",
  items: [{
    name: "Genome Browser",
    href: "http://dictybase.org/tools/jbrowse/?data=data/jbrowse/discoideum&loc=6:1..50011&tracks=reference,gene,transcript"
  }, {
    name: "Dashboard",
    href: "/dictyaccess"
  }]
}, {
  dropdown: true,
  title: "Explore",
  items: [{
    name: "Dicty Art",
    href: "/explore/art"
  }, {
    name: "Gallery",
    href: "/explore/gallery"
  }, {
    name: "Learn About Dicty",
    href: "/explore/learn"
  }, {
    name: "Teaching Protocols",
    href: "/explore/teach"
  }, {
    name: "Useful Links",
    href: "/explore/links"
  }]
}, {
  dropdown: true,
  title: "Research",
  items: [{
    name: "Anatomy Ontology",
    href: "/research/ontology"
  }, {
    name: "Codon Bias Table",
    href: "/research/codon"
  }, {
    name: "Nomenclature Guidelines",
    href: "/research/nomenclature"
  }, {
    name: "Phenotyping",
    href: "/research/phenotyping"
  }, {
    name: "Techniques",
    href: "/research/techniques"
  }]
}, {
  dropdown: true,
  title: "Dicty Stock Center",
  items: [{
    name: "Stock Center Home",
    href: "/stockcenter"
  }, {
    name: "Order Information",
    href: "/stockcenter/information/order"
  }, {
    name: "Deposit Information",
    href: "/stockcenter/information/deposit"
  }, {
    name: "Payment Information",
    href: "/stockcenter/information/payment"
  }, {
    name: "FAQ",
    href: "/stockcenter/information/faq"
  }, {
    name: "Strain Catalog",
    href: "/stockcenter/strains"
  }, {
    name: "Plasmid Catalog",
    href: "/stockcenter/plasmids"
  }]
}, {
  dropdown: true,
  title: "Community",
  items: [{
    name: "Cite Us",
    href: "/community/citation"
  }, {
    name: "Dicty Annual Conferences",
    href: "/community/conference"
  }, {
    name: "Dicty Email Forum",
    href: "/community/listserv"
  }, {
    name: "Dicty Labs",
    href: "/community/labs"
  }, {
    name: "History",
    href: "/community/history"
  }, {
    name: "Jobs",
    href: "/community/jobs"
  }, {
    name: "Upcoming Meetings",
    href: "/community/meetings"
  }]
}];

var navbarUrl = process.env.REACT_APP_NAVBAR_JSON || "";
/**
 * formatNavbarItems is a helper function to convert the links
 * under each header into the accepted navbar data format.
 */

var formatNavbarItems = function formatNavbarItems(items) {
  return items.map(function (c) {
    return {
      name: c.label,
      href: c.link
    };
  });
};
/**
 * formatNavbarData converts the received navbar JSON data and
 * converts it into the dicty-navbar data format.
 */


var formatNavbarData = function formatNavbarData(json) {
  return json.data.map(function (item) {
    return {
      dropdown: true,
      title: item.attributes.display,
      items: formatNavbarItems(item.attributes.items)
    };
  });
};
/**
 * useNavbar is a hook for fetching dictyBase navbar
 * JSON data. It uses an included data array as its
 * initial state then replaces it with fetched data
 * on a successful request.
 */


var useNavbar = function useNavbar() {
  var _useState = useState(navbarItems),
      navbarData = _useState[0],
      setNavbarData = _useState[1];

  var _useState2 = useState(null),
      error = _useState2[0],
      setError = _useState2[1];

  useEffect(function () {
    var fetchNavbar = function fetchNavbar() {
      try {
        var _temp2 = _catch(function () {
          return Promise.resolve(fetch(navbarUrl)).then(function (res) {
            return Promise.resolve(res.json()).then(function (json) {
              if (res.ok) {
                setNavbarData(formatNavbarData(json));
              } else {
                setError(res.statusText);
              }
            });
          });
        }, function (error) {
          setError(error.toString());
        });

        return Promise.resolve(_temp2 && _temp2.then ? _temp2.then(function () {}) : void 0);
      } catch (e) {
        return Promise.reject(e);
      }
    };

    fetchNavbar();
  }, []);
  return {
    navbarData: navbarData,
    error: error
  };
};

/**
 * useFetchRefreshToken fires off a callback function on
 * mount, then executes the callback at a specified interval
 * if isAuthenticated is true. This is used to silently fetch
 * a refresh token in the background.
 *
 * More info: https://hasura.io/blog/best-practices-of-using-jwt-with-graphql/#silent_refresh
 */

var useFetchRefreshToken = function useFetchRefreshToken(callback, intervalRef, delay, isAuthenticated) {
  useEffect(function () {
    callback();
  }, [callback]);
  useEffect(function () {
    if (!isAuthenticated) {
      return;
    }

    intervalRef.current = setInterval(function () {
      callback();
    }, delay);
    return function () {
      return clearInterval(intervalRef.current);
    };
  }, [callback, intervalRef, delay, isAuthenticated]);
};

var useIntersectionObserver = function useIntersectionObserver(_ref) {
  var ref = _ref.ref,
      _ref$rootMargin = _ref.rootMargin,
      rootMargin = _ref$rootMargin === void 0 ? "0px" : _ref$rootMargin,
      _ref$threshold = _ref.threshold,
      threshold = _ref$threshold === void 0 ? 0.25 : _ref$threshold,
      hasMore = _ref.hasMore;

  var _React$useState = React.useState(false),
      intersecting = _React$useState[0],
      setIntersecting = _React$useState[1];

  React.useEffect(function () {
    var callback = function callback(entries) {
      if (hasMore) {
        setIntersecting(entries[0].isIntersecting);
      }
    };

    var observer = new IntersectionObserver(callback, {
      rootMargin: rootMargin,
      threshold: threshold
    });
    var target = ref.current;
    observer.observe(target);
    return function () {
      return observer.unobserve(target);
    };
  }, [hasMore, intersecting, ref, rootMargin, threshold]);
  return intersecting;
};

export { useFetchRefreshToken, useFooter, useIntersectionObserver, useNavbar };
//# sourceMappingURL=dicty-hooks.esm.js.map
