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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "93269ecc26ca9398417a7bcea5b8cbd5"
  },
  {
    "url": "assets/css/0.styles.2b91a78b.css",
    "revision": "f02da06e6d413a5b78819eb97a9e9f65"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.85b34c33.js",
    "revision": "91542cc7d5d14f43a1f305818d76ba32"
  },
  {
    "url": "assets/js/11.0757cf2a.js",
    "revision": "d96d2ad5ef4baf60756f6f1cba420bdd"
  },
  {
    "url": "assets/js/12.612ecd25.js",
    "revision": "07f5858099b919edc70786e85773031f"
  },
  {
    "url": "assets/js/13.8904735c.js",
    "revision": "49c3f64fa1d85e6a7b89d9be4eb11ebe"
  },
  {
    "url": "assets/js/14.2448f192.js",
    "revision": "1cf1a67c065ee03a0ba714a516a5fa20"
  },
  {
    "url": "assets/js/15.356b3ad9.js",
    "revision": "78ba6dd96b5abd8daaf8831525a71564"
  },
  {
    "url": "assets/js/16.afcdb816.js",
    "revision": "e836a83a99c0f1e908bacfc2efbf2196"
  },
  {
    "url": "assets/js/17.e596e531.js",
    "revision": "0520ef034c5d696426cd69a4e290ff9c"
  },
  {
    "url": "assets/js/18.1c26f5a6.js",
    "revision": "10a65bd0daf4b4b9ecba8c642c95f547"
  },
  {
    "url": "assets/js/19.548e71a6.js",
    "revision": "a2732a614ff6301a9645a8311232742b"
  },
  {
    "url": "assets/js/20.b3a07c3b.js",
    "revision": "76b029da2ff7ebc7dbd173a9a2d35373"
  },
  {
    "url": "assets/js/21.722bc905.js",
    "revision": "404860157c6f28a417d163f428731301"
  },
  {
    "url": "assets/js/22.f2ddf96a.js",
    "revision": "6a99b8e1fc9f57414126ed44971cae4c"
  },
  {
    "url": "assets/js/23.4dbf536a.js",
    "revision": "fda85d1793c00b136644c969a87f8336"
  },
  {
    "url": "assets/js/24.ea1a024d.js",
    "revision": "f383a31eb978fd64aafcb97d75378dc3"
  },
  {
    "url": "assets/js/25.f8add604.js",
    "revision": "dab6e9e80d2bab1b21296df210e4b820"
  },
  {
    "url": "assets/js/26.d2acb130.js",
    "revision": "2f3ce57392b59f9af8dca566d9820628"
  },
  {
    "url": "assets/js/27.f9dd7a8d.js",
    "revision": "2c09161afc3652a74317270f3e6c1027"
  },
  {
    "url": "assets/js/28.2bc10bc9.js",
    "revision": "7907cfe05259f41108b929301aa2b953"
  },
  {
    "url": "assets/js/29.8f3c96e6.js",
    "revision": "d470a55abe7e15cabcd47cef465bba0b"
  },
  {
    "url": "assets/js/30.6a2dc387.js",
    "revision": "94463b8ec4e2777c839916b5bb6752ae"
  },
  {
    "url": "assets/js/31.344a4e12.js",
    "revision": "bb30ff2396d3877811eb267086c716a3"
  },
  {
    "url": "assets/js/32.60d59fe2.js",
    "revision": "ebd10bb9124603e8fc91826b7fa69ce4"
  },
  {
    "url": "assets/js/33.43d9b605.js",
    "revision": "860c194b96d4ebf67da7ac00760055c9"
  },
  {
    "url": "assets/js/34.ae02d6ef.js",
    "revision": "380f63e59363c76d4aa96eb673ede25a"
  },
  {
    "url": "assets/js/35.9416268c.js",
    "revision": "25665e15cee579f4cedfd42139aac0bc"
  },
  {
    "url": "assets/js/36.3bd0f292.js",
    "revision": "556c4449823e7cc9096732f9896220a9"
  },
  {
    "url": "assets/js/37.28dbfc25.js",
    "revision": "6824e5d3011fd881aeeceb606687c246"
  },
  {
    "url": "assets/js/38.6e0fc291.js",
    "revision": "bccda9421d732fc0576ff41e6aa89b24"
  },
  {
    "url": "assets/js/39.59b5a385.js",
    "revision": "57cb64a43492bf96af7987572385db4b"
  },
  {
    "url": "assets/js/4.d31631c3.js",
    "revision": "bb62972cdaa977785e85a5f0fcd87971"
  },
  {
    "url": "assets/js/40.fa78b963.js",
    "revision": "94051df8ec13aec89552ebde6a4cfd42"
  },
  {
    "url": "assets/js/41.dd8d96f5.js",
    "revision": "8ec789ef15edfa6bb1b9e4edced8f658"
  },
  {
    "url": "assets/js/42.8b253783.js",
    "revision": "c256eed8f74ebf7c49e07f843be30d28"
  },
  {
    "url": "assets/js/43.a040844a.js",
    "revision": "a669b161a6957ab2ed08aed8ca8c17ff"
  },
  {
    "url": "assets/js/44.f97fa41f.js",
    "revision": "d4dd3082f1276de1ca3fcc7d94314a5a"
  },
  {
    "url": "assets/js/45.14ffcd49.js",
    "revision": "ac624c5866625e13d3384602e0aee7e5"
  },
  {
    "url": "assets/js/46.39e28cbd.js",
    "revision": "9104ffbb71013d01b686fce2a2ad871c"
  },
  {
    "url": "assets/js/47.1384d1f2.js",
    "revision": "8d9a1cbd7eb5191115d427137b9101d2"
  },
  {
    "url": "assets/js/48.8da42e56.js",
    "revision": "20c6c4c702737df69cf3a84355a0396f"
  },
  {
    "url": "assets/js/49.476152de.js",
    "revision": "bb39932a20964c57a36b978df6191880"
  },
  {
    "url": "assets/js/5.125e51f4.js",
    "revision": "977df4254a571ea54595bc5067f5ad49"
  },
  {
    "url": "assets/js/50.eeb5dd63.js",
    "revision": "ac5995ef96d13d852ceeda1464d51e52"
  },
  {
    "url": "assets/js/51.3e70ce65.js",
    "revision": "7c6c823f8ceb398856aab7683dd5bd0a"
  },
  {
    "url": "assets/js/52.87361dce.js",
    "revision": "2723ece487171f68ac4dc997f8080f93"
  },
  {
    "url": "assets/js/53.0fca6c12.js",
    "revision": "eea6d313df5acac7c16dba1d5a43cf80"
  },
  {
    "url": "assets/js/54.a8f5cbf9.js",
    "revision": "5de685f259a65d81ccf1edc8e39f1c98"
  },
  {
    "url": "assets/js/55.9d2a74e0.js",
    "revision": "2d35cfea53e1a71f62e8d385148628b2"
  },
  {
    "url": "assets/js/56.f35a9b52.js",
    "revision": "c5895ed7f9b49c43f83b3025f69440c2"
  },
  {
    "url": "assets/js/57.7b0f06a0.js",
    "revision": "459c6da71f3cf3d2a8e4adf893d978b4"
  },
  {
    "url": "assets/js/58.0516bbf4.js",
    "revision": "0055133e6c1be7f0e5104143ddef4acd"
  },
  {
    "url": "assets/js/59.9ead5fd7.js",
    "revision": "bc356a51737e133e14d46e8aeccebdef"
  },
  {
    "url": "assets/js/6.4e596a83.js",
    "revision": "fa95a41c9f8dd56650a364b85e3ab6de"
  },
  {
    "url": "assets/js/7.9d3f0238.js",
    "revision": "6eaf4ff355d9d47917138cff30c028f7"
  },
  {
    "url": "assets/js/8.be959293.js",
    "revision": "a140d2eb5182ca2cf371249248eec369"
  },
  {
    "url": "assets/js/9.48e6bfd6.js",
    "revision": "e5a0af7d0ac1c8ff1cb6c972f7cdd0c8"
  },
  {
    "url": "assets/js/app.9142ebd2.js",
    "revision": "ba37e1ff2f32b0801eb204fb88edb23b"
  },
  {
    "url": "assets/js/vendors~flowchart.9febe83d.js",
    "revision": "f9158ce3d1979db8d5760695c48b8602"
  },
  {
    "url": "assets/js/vendors~notification.f509967c.js",
    "revision": "d6ac604e967948462bdb489a24fe79b5"
  },
  {
    "url": "images/dunwu-logo-100.png",
    "revision": "724d2445b33014d7c1ad9401d24a7571"
  },
  {
    "url": "images/dunwu-logo-200.png",
    "revision": "0a7effb33a04226ed0b9b6e68cbf694d"
  },
  {
    "url": "images/dunwu-logo-50.png",
    "revision": "9ada5bdcd34ac9c06dcd682b70a9016b"
  },
  {
    "url": "images/dunwu-logo.png",
    "revision": "f85f8cd2ab66992bc87b0bb314fdcf59"
  },
  {
    "url": "index.html",
    "revision": "9b24843fd72ef430d8aa0ea9fbaf9d39"
  },
  {
    "url": "middleware/flyway.html",
    "revision": "01929025dc7224de18356c60660da31f"
  },
  {
    "url": "middleware/shardingsphere.html",
    "revision": "c61a428ad59c7232f5771f495bc426f9"
  },
  {
    "url": "nosql/cassandra.html",
    "revision": "7776ebd91e3f86fe254c8a440acb294e"
  },
  {
    "url": "nosql/elasticsearch/elastic/elastic-beats-ops.html",
    "revision": "9de21a7ae9d3e700a25f98c881599e3f"
  },
  {
    "url": "nosql/elasticsearch/elastic/elastic-beats.html",
    "revision": "b1526bd3481b13b5a235b915c7c7979c"
  },
  {
    "url": "nosql/elasticsearch/elastic/elastic-kibana-ops.html",
    "revision": "7c12c23f77822cbfb5ed059788be2bd6"
  },
  {
    "url": "nosql/elasticsearch/elastic/elastic-kibana.html",
    "revision": "5e2921f444f82c98a521d07bb6c4428a"
  },
  {
    "url": "nosql/elasticsearch/elastic/elastic-logstash-ops.html",
    "revision": "c137366729f2d9a27d87bc9a494ecb59"
  },
  {
    "url": "nosql/elasticsearch/elastic/elastic-logstash.html",
    "revision": "4ca5531fe341abf55c37a19080d0fa4c"
  },
  {
    "url": "nosql/elasticsearch/elastic/elastic-quickstart.html",
    "revision": "8cc3fb61f2a6027d0a259d6940159f41"
  },
  {
    "url": "nosql/elasticsearch/elasticsearch-api.html",
    "revision": "f130ac894b44b29eb31713188423924d"
  },
  {
    "url": "nosql/elasticsearch/elasticsearch-interview.html",
    "revision": "f9f2accaade98cd33b3ef3c5126fa40d"
  },
  {
    "url": "nosql/elasticsearch/elasticsearch-ops.html",
    "revision": "a68f6f2943474eca610465d3094b46db"
  },
  {
    "url": "nosql/elasticsearch/elasticsearch-quickstart.html",
    "revision": "b1e76ed6b92b3839cada59caebf12f70"
  },
  {
    "url": "nosql/elasticsearch/index.html",
    "revision": "071fc0d46ad6ab7c705b478e077b4a08"
  },
  {
    "url": "nosql/hbase.html",
    "revision": "59cecdf23b1114017ae80e9b0f6cbf0a"
  },
  {
    "url": "nosql/index.html",
    "revision": "a05c9919cb741c74deb388ff0d0f1041"
  },
  {
    "url": "nosql/mongodb/index.html",
    "revision": "3b45d846ce6f93b939d7ce500c3146fb"
  },
  {
    "url": "nosql/mongodb/mongodb-model-example.html",
    "revision": "24832550305df1dca332b0c0e9aeeb29"
  },
  {
    "url": "nosql/mongodb/mongodb-model.html",
    "revision": "5209a09379cd958454bb67c57d4d2b43"
  },
  {
    "url": "nosql/mongodb/mongodb-ops.html",
    "revision": "b1642e3c0f30c5a31bb6088271e4c1a8"
  },
  {
    "url": "nosql/mongodb/mongodb-quickstart.html",
    "revision": "afbe04ebdde7f73be0dbbfd5902e97f9"
  },
  {
    "url": "nosql/nosql-selection.html",
    "revision": "df94f050412bfe49d9f534dc310f65ad"
  },
  {
    "url": "nosql/redis/index.html",
    "revision": "77cfd4ea0be8e1c5542fb8a1969e7277"
  },
  {
    "url": "nosql/redis/redis-action.html",
    "revision": "3a56595bc3b63d72cea315ee0fa32d15"
  },
  {
    "url": "nosql/redis/redis-cluster.html",
    "revision": "e10b5ad0d9bb155cd49cce8fb3fde754"
  },
  {
    "url": "nosql/redis/redis-datatype.html",
    "revision": "799b134fd63857009c3d3ac3d1f2295d"
  },
  {
    "url": "nosql/redis/redis-interview.html",
    "revision": "42371e86079f34159cd4a4fb49f8a983"
  },
  {
    "url": "nosql/redis/redis-ops.html",
    "revision": "0fb2cd7e5f4e74c6b48e345a0f06ce83"
  },
  {
    "url": "nosql/redis/redis-persistence.html",
    "revision": "683db4842dd861e3affa5a618cd395b6"
  },
  {
    "url": "nosql/redis/redis-quickstart.html",
    "revision": "66991c69e531427252889cdd71ee1b93"
  },
  {
    "url": "nosql/redis/redis-replication.html",
    "revision": "61df20fffd3f771880eeb28db05cdf17"
  },
  {
    "url": "nosql/redis/redis-sentinel.html",
    "revision": "f0e3861a4bd8ffea2ec6133113441464"
  },
  {
    "url": "sql/common/index.html",
    "revision": "962b11acab262c4dbffa62b09116866f"
  },
  {
    "url": "sql/common/sql-cheat-sheet.html",
    "revision": "900bf3efa4728b8f0de1876885f2337c"
  },
  {
    "url": "sql/common/sql-interview.html",
    "revision": "0300b7e4f449d0aff0a4ef065db49d41"
  },
  {
    "url": "sql/h2.html",
    "revision": "973341e3fe2cbb74cabfcbf2cff19fbc"
  },
  {
    "url": "sql/index.html",
    "revision": "2c1c2289c79f82b79e0d8971e9107f14"
  },
  {
    "url": "sql/mysql/index.html",
    "revision": "789882cdb2d83258a52f83dd37c81dad"
  },
  {
    "url": "sql/mysql/mysql-config.html",
    "revision": "d87682f29db6eb949cceee0d6b2ffc62"
  },
  {
    "url": "sql/mysql/mysql-faq.html",
    "revision": "c6efdf192832f59b709b7d46c6444c6a"
  },
  {
    "url": "sql/mysql/mysql-index.html",
    "revision": "8c067ed9c4834f25e5406322d6c5e298"
  },
  {
    "url": "sql/mysql/mysql-lock.html",
    "revision": "d1e8542d1d817b506045368f12adfc6d"
  },
  {
    "url": "sql/mysql/mysql-ops.html",
    "revision": "036275b0d9bdb552967c64d82a22de78"
  },
  {
    "url": "sql/mysql/mysql-optimization.html",
    "revision": "471edcae3cfe6d9f7d67b8b14c9e0a58"
  },
  {
    "url": "sql/mysql/mysql-quickstart.html",
    "revision": "3a2467d81f30f7b81af1dafa49536179"
  },
  {
    "url": "sql/mysql/mysql-transaction.html",
    "revision": "9d677d6f0912c27d2319ee50f9675216"
  },
  {
    "url": "sql/mysql/mysql-workflow.html",
    "revision": "d20b310565684df411c97ec50e043a5b"
  },
  {
    "url": "sql/postgresql.html",
    "revision": "062a98555def55289323c4cbe56baa98"
  },
  {
    "url": "sql/sqlite.html",
    "revision": "a73099d85f4cc4133ce878e8ed29936a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
