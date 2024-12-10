# Inconsistent Deep Link Handling in Expo's Linking API

This repository demonstrates an uncommon bug encountered when using Expo's `Linking` API to handle deep links. The app inconsistently responds to deep links, failing to trigger the expected behavior in certain situations even with seemingly correct setup.  The issue is particularly challenging because it typically lacks an obvious error message, making debugging difficult.

## Bug Description

The primary problem is the unreliable triggering of the `Linking.addEventListener` callback function.  Sometimes it fires as expected when a deep link is received, other times it does not. This inconsistency happens without any clear error logs, causing unpredictable app behavior. The root cause is suspected to be an asynchronous operation or a race condition.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install`.
3. Run the app on your device or emulator.
4. Attempt to open a deep link that targets this Expo application.
5. Observe the inconsistent behavior; the deep link will sometimes be handled correctly, other times it will be ignored.

## Solution

The solution provided in `bugSolution.js` focuses on improving the timing and reliability of the `Linking.addEventListener` by using promises and ensuring that all necessary initialization is done before attempting to receive and handle deep links.