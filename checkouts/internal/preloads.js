
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.CFJwiHCL.js","/cdn/shopifycloud/checkout-web/assets/c1/app.g8kzrNcy.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-es.YSwrL13C.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage.9rg768Y_.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalizationExtensionField.DJLV_BBs.js","/cdn/shopifycloud/checkout-web/assets/c1/NumberField.DJHrylyP.js","/cdn/shopifycloud/checkout-web/assets/c1/useShowShopPayOptin.Bl-xt5OH.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer.DWQSTVo2.js","/cdn/shopifycloud/checkout-web/assets/c1/RememberMeDescriptionText.Ll_XmtP0.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentButtons.BO30BMxI.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblemsLineItemList.BDzNWvTD.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalPickup.DfBsP3k1.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayButtonClassName.VH8HSMbL.js","/cdn/shopifycloud/checkout-web/assets/c1/VaultedPayment.BBEncLB1.js","/cdn/shopifycloud/checkout-web/assets/c1/SeparatePaymentsNotice.C60XpOyI.js","/cdn/shopifycloud/checkout-web/assets/c1/useAddressManager.Bgr5_V-c.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayQuery.IJZzOOg5.js","/cdn/shopifycloud/checkout-web/assets/c1/PayButtonSection.DywDZVdn.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.BPjyhetR.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal.DFgm9s0o.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview.DoljPbjD.js","/cdn/shopifycloud/checkout-web/assets/c1/component-ShopPayVerificationSwitch.oUQOLm1f.js","/cdn/shopifycloud/checkout-web/assets/c1/useSubscribeMessenger.CgtSVO6i.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-js-index.yIIg-HJR.js","/cdn/shopifycloud/checkout-web/assets/c1/v4.BKrj-4V8.js","/cdn/shopifycloud/checkout-web/assets/c1/component-RuntimeExtension.BLIbUx4J.js","/cdn/shopifycloud/checkout-web/assets/c1/AnnouncementRuntimeExtensions.CYjIwz2p.js","/cdn/shopifycloud/checkout-web/assets/c1/Switch.BZ5wOcQ4.js","/cdn/shopifycloud/checkout-web/assets/c1/rendering-extension-targets.uQH-XQ5U.js","/cdn/shopifycloud/checkout-web/assets/c1/controller.BdYmx9Mf.js","/cdn/shopifycloud/checkout-web/assets/c1/receiver.iGO-eOX7.js","/cdn/shopifycloud/checkout-web/assets/c1/ExtensionsInner.D-XLfoAN.js","/cdn/shopifycloud/checkout-web/assets/c1/host.CVK3AuWU.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.CCmEykon.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.Bbt-2IKJ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/LocalizationExtensionField.Ca9titpM.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/LocalPickup.Dm9JB4kF.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShopPayVerificationSwitch.WW3cs_z5.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/NumberField.CRpcZnVJ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayButtonClassName.BrcQzLuH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/VaultedPayment.OxMVm7u-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/StackedMerchandisePreview.D6OuIVjc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/RuntimeExtension.DWkDBM73.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/AnnouncementRuntimeExtensions.CBn65ejv.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Switch.DLN3k-fn.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0722/2588/2308/files/pagos-seguros-autorizado_x320.png?v=1765951984"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  