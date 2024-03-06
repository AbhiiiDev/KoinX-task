// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();
  const scriptAdded=useRef(false)

  useEffect(
    () => {
        if (!scriptAdded.current) {
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
            script.type = "text/javascript";
            script.async = true;
            script.innerHTML = `
              {
                "width": "881",
                "height": "776",
                "symbol": "BITSTAMP:BTCUSD",
                "interval": "D",
                "timezone": "Etc/UTC",
                "theme": "light",
                "style": "2",
                "locale": "en",
                "enable_publishing": false,
                "hide_top_toolbar": true,
                "hide_legend": true,
                "save_image": false,
                "calendar": false,
                "hide_volume": true,
                "support_host": "https://www.tradingview.com"
              }`;
            container.current.appendChild(script);
            scriptAdded.current = true;
          }
    },
    []
  );

  return (


    
    <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
      <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
    </div>
    
  );
}

export default memo(TradingViewWidget);
