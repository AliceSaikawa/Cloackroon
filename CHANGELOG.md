# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0-alpha] - 2026-07-09

### Added
- Initial alpha release of **Cloakroom**, a local HTTP proxy that masks PII before sending requests to Anthropic / OpenAI-compatible APIs and restores it on the way back.
- Reversible PII masking with session-scoped mapping tables.
- Three-stage detection: dictionary exact match, regex patterns, and optional Ollama LLM classification.
- Support for masking `EMAIL`, `PHONE`, `NAME`, `ORG`, `ADDRESS`, `API_KEY`, `CREDIT_CARD`, `MY_NUMBER`, `SCHOOL`, `SSN`, `IP_ADDRESS`, and `POSTAL_CODE`.
- Runtime control endpoints for passthrough mode, filter mode, and per-category disable.
- CLI for init, install, start, and status commands.
- Integrated test suite covering filter logic, stream restoration, provider routing, and regression cases.

### Changed
- Renamed project from `claude-code-pii` to `cloakroom`.
- Refocused documentation and source tree on the PII-proxy functionality.

### Notes
- This is an alpha release. APIs, configuration formats, and behavior may change before the stable release.
