# Changelog

## [1.5.1](https://github.com/growsurf/growsurf-typescript/compare/v1.5.0...v1.5.1) (2026-09-10)


### Chores

* merge main (release 1.5.0) into dev ([8e63ba7](https://github.com/growsurf/growsurf-typescript/commit/8e63ba7c5f766832247a66e50bacbfb082a7ae05))


### Documentation

* **api:** warn that a new account API key cannot be recovered ([c4b4520](https://github.com/growsurf/growsurf-typescript/commit/c4b4520d663ba5aa5c3f0f7bf51cc23a2538dd25))

## [1.5.0](https://github.com/growsurf/growsurf-typescript/compare/v1.4.0...v1.5.0) (2026-09-10)


### Features

* **api:** add campaign integrations list endpoint ([f192a8e](https://github.com/growsurf/growsurf-typescript/commit/f192a8e5cd7574b75ab78a24bb9ee5b61644809f))
* **api:** add EMBEDDABLE_ELEMENT portal view source ([5c2eb0e](https://github.com/growsurf/growsurf-typescript/commit/5c2eb0ee26f757b2416124e1246521d7f4e271a4))
* **api:** add paymentProvider and testMode to transaction params ([6feab2c](https://github.com/growsurf/growsurf-typescript/commit/6feab2ce553bcf1b10a2ad34a6a380a1e55d46bb))
* **api:** add refundHistoryComplete to refund transaction params ([4604a23](https://github.com/growsurf/growsurf-typescript/commit/4604a23cb305d99c5e4a6369e0b5f1a7c36c1215))
* **api:** add typed Program Editor config sections, attw check, and hand-maintained docs ([4c574dc](https://github.com/growsurf/growsurf-typescript/commit/4c574dc8ebc293a1aefdb9a690f6a78cef0994db))
* **api:** sync analytics and program resources ([8b7234c](https://github.com/growsurf/growsurf-typescript/commit/8b7234cc00d98e9336309e7611871aab4b9218f1))


### Chores

* **deps:** bump js-yaml overrides to 3.15.2/4.3.2 to clear audit advisories ([5473c6e](https://github.com/growsurf/growsurf-typescript/commit/5473c6efd9375de85a42b64032bdfb8f98df0b0a))
* **deps:** pin browserslist 4.28.8 to clear audit advisories ([aad3308](https://github.com/growsurf/growsurf-typescript/commit/aad33082d3aba1be36b8709f20b0de27b6c7ae33))

## [1.4.0](https://github.com/growsurf/growsurf-typescript/compare/v1.3.0...v1.4.0) (2026-08-25)


### Features

* **api:** add reward and commission event support ([dfc9750](https://github.com/growsurf/growsurf-typescript/commit/dfc9750f7746fcfcd405000ed71c8172daaaa0ea))

## [1.3.0](https://github.com/growsurf/growsurf-typescript/compare/v1.2.1...v1.3.0) (2026-08-23)


### Features

* **api:** add affiliate and payout destination APIs ([3d0601c](https://github.com/growsurf/growsurf-typescript/commit/3d0601cb3bf5def7a56444243324cc50a0beaeca))
* **api:** add affiliate and payout destination APIs ([a6b87c1](https://github.com/growsurf/growsurf-typescript/commit/a6b87c1e640a9d8b0dd635a4da50ec18f68f15ec))
* release 1.3.0 with Node.js 22+ baseline, retry safety, and body-read timeouts ([be07e45](https://github.com/growsurf/growsurf-typescript/commit/be07e45da3d5c5d412560ae3983ebf7716890477))


### Bug Fixes

* **api:** align analytics reward status models ([1105ad5](https://github.com/growsurf/growsurf-typescript/commit/1105ad5e031d3790d9f18e59502e1a90f19e795d))

## [1.2.1](https://github.com/growsurf/growsurf-typescript/compare/v1.2.0...v1.2.1) (2026-07-14)


### Bug Fixes

* align method docs with the REST v2 contract ([47e3c48](https://github.com/growsurf/growsurf-typescript/commit/47e3c485b2184dfbd7107e056acf4188c4a9164e))

## [1.2.0](https://github.com/growsurf/growsurf-typescript/compare/v1.1.2...v1.2.0) (2026-07-13)


### Features

* **api:** add Team resource ([4cd6dbe](https://github.com/growsurf/growsurf-typescript/commit/4cd6dbede75b7db35981e5b0880ad2bfa9d08a8a))

## [1.1.2](https://github.com/growsurf/growsurf-typescript/compare/v1.1.1...v1.1.2) (2026-07-11)


### Bug Fixes

* support retry-safe API key rotation ([00e94c5](https://github.com/growsurf/growsurf-typescript/commit/00e94c53e78a894a1b883bd1885c4739829f6e7a))

## [1.1.1](https://github.com/growsurf/growsurf-typescript/compare/v1.1.0...v1.1.1) (2026-07-09)


### Bug Fixes

* remove referral screenshot REST surface ([d70d6c2](https://github.com/growsurf/growsurf-typescript/commit/d70d6c26882bd8f968cc8bbdd6223ae5fecbc3ca))

## [1.1.0](https://github.com/growsurf/growsurf-typescript/compare/v1.0.0...v1.1.0) (2026-07-08)


### Features

* add account webhook and participant APIs ([33d4a23](https://github.com/growsurf/growsurf-typescript/commit/33d4a23a49bc8b8b14390e4808a044bb39850a21))

## [1.0.0](https://github.com/growsurf/growsurf-typescript/compare/v0.8.0...v1.0.0) (2026-07-03)


### ⚠ BREAKING CHANGES

* campaign create no longer accepts `options`, and campaign update no longer accepts the design / emails / options / notifications / installation config blobs — edit those via the new config sub-resources. Reward-config CRUD moved from /campaign/{id}/rewards to /campaign/{id}/reward-configs[/{campaignRewardId}].

### Features

* add campaign management endpoints; drop deprecated create/update config blobs ([f0245be](https://github.com/growsurf/growsurf-typescript/commit/f0245be51709f4e980eb4fe40b964db557797c30))

## [0.8.0](https://github.com/growsurf/growsurf-typescript/compare/v0.7.0...v0.8.0) (2026-07-01)


### Features

* **api:** add campaign create/update/clone and program-reward CRUD ([0850c62](https://github.com/growsurf/growsurf-typescript/commit/0850c623e674a932d586dc8b9048deba5984c1f1))

## 0.7.0 (2026-06-29)

Full Changelog: [v0.6.1...v0.7.0](https://github.com/growsurf/growsurf-typescript/compare/v0.6.1...v0.7.0)

### Features

* **api:** support delayed referral rewards and affiliate refunds ([f784085](https://github.com/growsurf/growsurf-typescript/commit/f784085f3bd03ed81fb4feaa6a9b1f1ec72727c3))

## 0.6.1 (2026-06-26)

Full Changelog: [v0.6.0...v0.6.1](https://github.com/growsurf/growsurf-typescript/compare/v0.6.0...v0.6.1)

## 0.6.0 (2026-06-23)

Full Changelog: [v0.5.0...v0.6.0](https://github.com/growsurf/growsurf-typescript/compare/v0.5.0...v0.6.0)

### Features

* **api:** add payoutSettings to Participant ([e3cb43e](https://github.com/growsurf/growsurf-typescript/commit/e3cb43eb68faf40d653fd95bc7cbba5aafb3de26))
* **api:** manual updates ([ae5f19c](https://github.com/growsurf/growsurf-typescript/commit/ae5f19ce9fe4434db3edb90eadda387e6c6f1634))


### Bug Fixes

* **client:** send content-type header for requests with an omitted optional body ([4b06006](https://github.com/growsurf/growsurf-typescript/commit/4b06006b4f33bdfa6ea8621f7a8dd755cee2c83a))

## 0.5.0 (2026-05-25)

Full Changelog: [v0.4.0...v0.5.0](https://github.com/growsurf/growsurf-typescript/compare/v0.4.0...v0.5.0)

### Features

* **api:** manual updates ([adfc3d8](https://github.com/growsurf/growsurf-typescript/commit/adfc3d80017ae094ed4da66966a9519f9cd8e155))

## 0.4.0 (2026-05-20)

Full Changelog: [v0.3.0...v0.4.0](https://github.com/growsurf/growsurf-typescript/compare/v0.3.0...v0.4.0)

### Features

* **api:** Add Participant.mobileInstanceId ([8eadba4](https://github.com/growsurf/growsurf-typescript/commit/8eadba49e5ab168b20cccd97835ff4774c7cf387))

## 0.3.0 (2026-05-19)

Full Changelog: [v0.2.0...v0.3.0](https://github.com/growsurf/growsurf-typescript/compare/v0.2.0...v0.3.0)

### Features

* **api:** manual updates ([5bf6894](https://github.com/growsurf/growsurf-typescript/commit/5bf6894b722a8b8063241f7f45ed23d981cdea52))


### Bug Fixes

* **typescript:** upgrade tsc-multi so that it works with Node 26 ([1baf6af](https://github.com/growsurf/growsurf-typescript/commit/1baf6af9e2d051176b389442015c6acafc6c18e2))


### Chores

* **tests:** remove redundant File import ([dd3791b](https://github.com/growsurf/growsurf-typescript/commit/dd3791bea2366dcc248776fa549bfb8b35b491e0))

## 0.2.0 (2026-05-15)

Full Changelog: [v0.1.1...v0.2.0](https://github.com/growsurf/growsurf-typescript/compare/v0.1.1...v0.2.0)

### Features

* **api:** manual updates ([f40ded9](https://github.com/growsurf/growsurf-typescript/commit/f40ded9ea2207029fc187f20e172fe62d76a00f5))

## 0.1.1 (2026-05-13)

Full Changelog: [v0.1.0...v0.1.1](https://github.com/growsurf/growsurf-typescript/compare/v0.1.0...v0.1.1)

## 0.1.0 (2026-05-12)

Full Changelog: [v0.0.2...v0.1.0](https://github.com/growsurf/growsurf-typescript/compare/v0.0.2...v0.1.0)

### Features

* **api:** manual updates ([f4df48b](https://github.com/growsurf/growsurf-typescript/commit/f4df48b95509de60204d1ccb91ccd14aaf145395))


### Chores

* update SDK settings ([9c9e499](https://github.com/growsurf/growsurf-typescript/commit/9c9e499cdd42efd63d32d3c45aa5ea4796f57bc9))
* update SDK settings ([a14772b](https://github.com/growsurf/growsurf-typescript/commit/a14772bf1f382326a263be7e973cc6dcd450fdd2))
* update SDK settings ([cc8b04e](https://github.com/growsurf/growsurf-typescript/commit/cc8b04ea6ac08eb47677624ca78c13c24ae8e2fd))

## 0.0.2 (2026-05-08)

Full Changelog: [v0.0.1...v0.0.2](https://github.com/growsurf/growsurf-typescript/compare/v0.0.1...v0.0.2)

### Chores

* update SDK settings ([385efd2](https://github.com/growsurf/growsurf-typescript/commit/385efd236f487b74e05491e52fe2aaa05d546077))
* update SDK settings ([230cf9a](https://github.com/growsurf/growsurf-typescript/commit/230cf9adaf5041e2e5ea0674caff0792d77ff40e))
* update SDK settings ([ebb9dcf](https://github.com/growsurf/growsurf-typescript/commit/ebb9dcf995c14c41d9cceff35123d28e8ca8923b))
* update SDK settings ([267a983](https://github.com/growsurf/growsurf-typescript/commit/267a983fd074a712544381e5ac51f6f9777ba735))
