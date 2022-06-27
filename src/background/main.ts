const decorder = new TextDecoder();
const encoder = new TextEncoder();

browser.webRequest.onBeforeRequest.addListener((details: browser.webRequest._OnBeforeRequestDetails) => {
    const filter = browser.webRequest.filterResponseData(details.requestId);
    let responseBody = "";

    filter.ondata = event => {
        responseBody += decorder.decode(event.data, { stream: true });
    };

    filter.onstop = event => {
        if (getFingerprintingScore(responseBody) <= 10000) {
            filter.write(encoder.encode(responseBody));
        } else {
            filter.write(encoder.encode("BLOCKED_BY_BROWSER_FINGERPRINT_FIREWALL"));
        }

        filter.close();
    };
}, { urls: ["*://*/*"] }, ["blocking"]);
