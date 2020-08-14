/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "80db5636f7ad438bb8b492ba65ef3692"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "3586146d996d5fd7703944df2f20db1f"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "fe8ee3c44c9577ff3df2b6e30bb4440b"
  },
  {
    "url": "page-data/changelog/page-data.json",
    "revision": "6c1a1d14f4ab2be9a33d2cea75bc0e1f"
  },
  {
    "url": "page-data/ctf/README/changelog/page-data.json",
    "revision": "489fd9178c05755e6c9e57d36ae36ce4"
  },
  {
    "url": "page-data/ctf/README/page-data.json",
    "revision": "b455bb548694d0e0ebc1118b7a394cc2"
  },
  {
    "url": "page-data/guide/changelog/page-data.json",
    "revision": "8cb21308a0ebccae3fe93505908a739d"
  },
  {
    "url": "page-data/guide/how-to-contribute/changelog/page-data.json",
    "revision": "5e949e42ab138ecfe8906a72137e3c81"
  },
  {
    "url": "page-data/guide/how-to-contribute/page-data.json",
    "revision": "6c4632a51adf30abc5d21678fb689d64"
  },
  {
    "url": "page-data/guide/page-data.json",
    "revision": "ec0cf4e9d458b87d34c3242cf9995ecf"
  },
  {
    "url": "page-data/hw/boundary-info/changelog/page-data.json",
    "revision": "2bd135215143147528ad4e3c9f5724cc"
  },
  {
    "url": "page-data/hw/boundary-info/page-data.json",
    "revision": "99c977cc6832379b00ba139544d6435e"
  },
  {
    "url": "page-data/hw/cc/changelog/page-data.json",
    "revision": "f63544c4058fa055e3ffcfa4243382b8"
  },
  {
    "url": "page-data/hw/cc/page-data.json",
    "revision": "35254a8eca4ca54cfa6f6d7a0bbf5aa2"
  },
  {
    "url": "page-data/hw/checklist/changelog/page-data.json",
    "revision": "f58dd050585ac5f1e85559de08b08bb6"
  },
  {
    "url": "page-data/hw/checklist/page-data.json",
    "revision": "f8ecca66803ea804e4f0390dc92c1242"
  },
  {
    "url": "page-data/hw/del-log/changelog/page-data.json",
    "revision": "9ef321123ae3e41c8b68c9cf15d1b850"
  },
  {
    "url": "page-data/hw/del-log/page-data.json",
    "revision": "48b4de76001d4ee6400d248f69c1ef9e"
  },
  {
    "url": "page-data/hw/domain-pentest/changelog/page-data.json",
    "revision": "c5b4e9b5d88f9913ab7d475d3016a319"
  },
  {
    "url": "page-data/hw/domain-pentest/page-data.json",
    "revision": "1be486c547366532ed4d13b30c6fdb42"
  },
  {
    "url": "page-data/hw/lan-info/changelog/page-data.json",
    "revision": "aa7cfd0cd5c15d6f323063f964d8a799"
  },
  {
    "url": "page-data/hw/lan-info/page-data.json",
    "revision": "ce1e60dd11b1e99c8f19eb3a266c6156"
  },
  {
    "url": "page-data/hw/net-proxy/changelog/page-data.json",
    "revision": "9acff1ce59c54e379798ff7f8738ef00"
  },
  {
    "url": "page-data/hw/net-proxy/page-data.json",
    "revision": "a5c61934da6caae5e79813c7eb8b7216"
  },
  {
    "url": "page-data/hw/ntml-hash/changelog/page-data.json",
    "revision": "ba58672417ca4994ad6876c76d6b4c6c"
  },
  {
    "url": "page-data/hw/ntml-hash/page-data.json",
    "revision": "8b1513a7a26c19e649614523d98d7644"
  },
  {
    "url": "page-data/hw/os-shell/changelog/page-data.json",
    "revision": "fc8dcd7909e726b35dbe3b19c3de4358"
  },
  {
    "url": "page-data/hw/os-shell/page-data.json",
    "revision": "aa86774e2e649bc1d7f472de2934dcc1"
  },
  {
    "url": "page-data/hw/README/changelog/page-data.json",
    "revision": "8bcf935907f642f34ae5c136b2b182a0"
  },
  {
    "url": "page-data/hw/README/page-data.json",
    "revision": "284d99b5af2ded9238877f7f462b2ef2"
  },
  {
    "url": "page-data/hw/to-root/changelog/page-data.json",
    "revision": "2577c4e4b23b18a9a18ce4558dbe8bfc"
  },
  {
    "url": "page-data/hw/to-root/page-data.json",
    "revision": "309f2073dcaf4aa545111191b6e20320"
  },
  {
    "url": "page-data/hw/webshell/changelog/page-data.json",
    "revision": "f6f0df957f00eddf45d72a8abc42db68"
  },
  {
    "url": "page-data/hw/webshell/page-data.json",
    "revision": "28b295748db829b957e085f372a53a7d"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "cefff47f2c45d2edb886bbd991fe4cfa"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "page-data/pages/page-data.json",
    "revision": "496c9e1c3d5b154241f92409ab690913"
  },
  {
    "url": "page-data/README/changelog/page-data.json",
    "revision": "d1881ae094ab87e45b80d50460301550"
  },
  {
    "url": "page-data/README/page-data.json",
    "revision": "723f911674d6101d33de10ac43e4df33"
  },
  {
    "url": "page-data/settings/page-data.json",
    "revision": "d9fbc4928896c110077ab2d3d92f85ff"
  },
  {
    "url": "page-data/sq/d/2462162885.json",
    "revision": "c7c9de7a7b9b40b785bbcd30234596bd"
  },
  {
    "url": "page-data/tags/animals/page-data.json",
    "revision": "81220cc374ea7f507ad69ee1c7c4894f"
  },
  {
    "url": "page-data/tags/chicago/page-data.json",
    "revision": "d49bdccca68947b5d543dd9132a24f6f"
  },
  {
    "url": "page-data/tags/chinese/page-data.json",
    "revision": "fc7404b5031ec9d63e8828d8e42de0c3"
  },
  {
    "url": "page-data/tags/page-data.json",
    "revision": "0c1416c9182b408b77863f242334dc38"
  },
  {
    "url": "page-data/tags/test/page-data.json",
    "revision": "f66914ca3b2672459a519115f5657868"
  },
  {
    "url": "page-data/tags/wip/page-data.json",
    "revision": "df7e3121f4cdb8bd37c3de22d35c04e4"
  },
  {
    "url": "page-data/tags/zoos/page-data.json",
    "revision": "3847d3824c9ec5569df4020b9b35439f"
  },
  {
    "url": "page-data/tags/中文/page-data.json",
    "revision": "2947c9b317ff3e6845c8217aa6b34398"
  },
  {
    "url": "page-data/test/changelog/page-data.json",
    "revision": "dd0f3c83c85c3eadef6f118e2da2adf3"
  },
  {
    "url": "page-data/test/page-data.json",
    "revision": "2dc23c015607e57dc7214813eef92869"
  },
  {
    "url": "page-data/update-log/changelog/page-data.json",
    "revision": "2a731fa07425962b72fd45f674baaeaf"
  },
  {
    "url": "page-data/update-log/page-data.json",
    "revision": "f545eb6cd7b4346f4dcd293a6c22670d"
  },
  {
    "url": "page-data/web/code-injection/changelog/page-data.json",
    "revision": "9be7e957224bb770c957bc581c5792cb"
  },
  {
    "url": "page-data/web/code-injection/page-data.json",
    "revision": "4935acfcc3730532be71425ff2066584"
  },
  {
    "url": "page-data/web/csrf-ssrf/changelog/page-data.json",
    "revision": "99013b2ff6d190a1b5d98b0c6169dc43"
  },
  {
    "url": "page-data/web/csrf-ssrf/page-data.json",
    "revision": "fde861c4165ff2554dc6e957a7e876dc"
  },
  {
    "url": "page-data/web/expression-language-injection/changelog/page-data.json",
    "revision": "79b0506f0c45fb42fd6c5337cf4a7bb4"
  },
  {
    "url": "page-data/web/expression-language-injection/page-data.json",
    "revision": "732c840618f7ccaff9e108b50621a9dd"
  },
  {
    "url": "page-data/web/file-download/changelog/page-data.json",
    "revision": "77161985f17bf4161ace1221e887bb90"
  },
  {
    "url": "page-data/web/file-download/page-data.json",
    "revision": "ed112c48c70b17edf055e3d9a6d5d68c"
  },
  {
    "url": "page-data/web/file-includes/changelog/page-data.json",
    "revision": "cf9b4d44a702c66445e3ccc302b2edce"
  },
  {
    "url": "page-data/web/file-includes/page-data.json",
    "revision": "d2b5220249ed6190a15030ffe6d44e96"
  },
  {
    "url": "page-data/web/file-upload/changelog/page-data.json",
    "revision": "a7d6c84835404fdfca89daffd570598c"
  },
  {
    "url": "page-data/web/file-upload/page-data.json",
    "revision": "2fb2c7a3580d1ac4984af7cbbc58a196"
  },
  {
    "url": "page-data/web/jwt-cookie/changelog/page-data.json",
    "revision": "4cf4344ae5a5f3f5a7209615e2313ccf"
  },
  {
    "url": "page-data/web/jwt-cookie/page-data.json",
    "revision": "33f0ef64aa7f74b9f42a6610cd8ab87b"
  },
  {
    "url": "page-data/web/logical-vulns/changelog/page-data.json",
    "revision": "f8b8f8fd1a61463a15704e23a7c21144"
  },
  {
    "url": "page-data/web/logical-vulns/page-data.json",
    "revision": "51aea83954a726d0c73ab58a5a825e77"
  },
  {
    "url": "page-data/web/phpsec/changelog/page-data.json",
    "revision": "60548333d65bfdb57ded9647566f3ae3"
  },
  {
    "url": "page-data/web/phpsec/page-data.json",
    "revision": "db829790639863a174647bf71d432fe6"
  },
  {
    "url": "page-data/web/README/changelog/page-data.json",
    "revision": "3ca9d6d402d324765542e1540d19d8e3"
  },
  {
    "url": "page-data/web/README/page-data.json",
    "revision": "352485b062dddbcf5f4a009c5d72b236"
  },
  {
    "url": "page-data/web/same-origin-policy/changelog/page-data.json",
    "revision": "4f989ad48f4de56c14ec910faeee9c1c"
  },
  {
    "url": "page-data/web/same-origin-policy/page-data.json",
    "revision": "dc9accc5dd85e693ef401f2fbb8ef515"
  },
  {
    "url": "page-data/web/session-sec/changelog/page-data.json",
    "revision": "bf3016a0cf352d4485ad53c4c3ca3666"
  },
  {
    "url": "page-data/web/session-sec/page-data.json",
    "revision": "b2edc38e30f8f7332e478e2596e898f7"
  },
  {
    "url": "page-data/web/source-leaked/changelog/page-data.json",
    "revision": "40103dc7e5c60fef91290992298ee473"
  },
  {
    "url": "page-data/web/source-leaked/page-data.json",
    "revision": "02a3c701d42cfc4f0332ffef38300f85"
  },
  {
    "url": "page-data/web/sql-injection/changelog/page-data.json",
    "revision": "dcdcc28dd838a23d5d78f6d03494a71c"
  },
  {
    "url": "page-data/web/sql-injection/page-data.json",
    "revision": "876c83b010beb7abddd2173883576493"
  },
  {
    "url": "page-data/web/xss/changelog/page-data.json",
    "revision": "3f5a05f01d4401907538bd5b56a0bf04"
  },
  {
    "url": "page-data/web/xss/page-data.json",
    "revision": "a35649e01ba1d98816c4f9a125b4c760"
  },
  {
    "url": "page-data/web/xxe/changelog/page-data.json",
    "revision": "d3addf36565908cdb6f15e22f247bb02"
  },
  {
    "url": "page-data/web/xxe/page-data.json",
    "revision": "63410d71df2adacc51a872ca35652e30"
  },
  {
    "url": "17757bf87520686e179ce312b80d666e25b65c83-c0251439a4321056bdb4.js"
  },
  {
    "url": "8422f42bd55f7b64a5a22d21a1be841add877e5c-f552ec15cca86cff0d44.js"
  },
  {
    "url": "app-eb75240fbbd5a753efb5.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-86c314efe75f1d118a09.js"
  },
  {
    "url": "component---src-pages-404-tsx-9e5eb01a0fecb130d61d.js"
  },
  {
    "url": "component---src-pages-pages-js-11650783abd5319145d4.js"
  },
  {
    "url": "component---src-pages-settings-tsx-2d9a9e2ce5d0cdbe830d.js"
  },
  {
    "url": "component---src-pages-tags-js-1ef2955b257461fa714d.js"
  },
  {
    "url": "component---src-templates-changelog-js-72fefec7f744df50e635.js"
  },
  {
    "url": "component---src-templates-doc-js-8c43927ae2b4982de8a5.js"
  },
  {
    "url": "component---src-templates-tags-js-02adbd7def781ca8bbd9.js"
  },
  {
    "url": "framework-562aa908c643d6205f17.js"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "polyfill-118cb73b15f8ba765669.js"
  },
  {
    "url": "script.js"
  },
  {
    "url": "styles-e0de8ac04609cf01adef.js"
  },
  {
    "url": "webpack-runtime-7b3b3eab932501668d18.js"
  },
  {
    "url": "styles.4bbe7e4a19da794f4ea6.css"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "07324d85cef853379bc1a6b705f23b02"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(json)$/, new workbox.strategies.NetworkFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(woff|woff2)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff)$/, new workbox.strategies.NetworkOnly(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-eb75240fbbd5a753efb5.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
