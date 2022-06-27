# BrowserFingerprintFirewall
BrowserFingerprintFirewall is a firefox extension to block JavaScripts which collect browser fingerprint.

## Future works
Currently, I extracted signatures used in [fingerprintjs](https://github.com/fingerprintjs/fingerprintjs).
I want to collect signatures such as browser API from public webpages.
1. crawl public webpages
1. list browser APIs used in these sites
1. find APIs which are often used to create browser fingerprint
1. score signatures in src/background/signatures.ts based on the frequency calculated above