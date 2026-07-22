# Temporary ESPHome web_server_idf override

This directory is copied from ESPHome `2026.7.0`, tag commit
`920a8b761b680d9864da2ef4b44b4af95c99dba8`.

OpenQuatt temporarily overrides the built-in component because the upstream
EventSource failure path marks its local file descriptor dead without closing
the corresponding ESP-IDF HTTPD session. The main loop can then delete the
response while HTTPD still retains its `sess_ctx`/`free_ctx`, leaking a client
slot and leaving a dangling callback.

The local delta is limited to:

- request an identity-checked socket shutdown on the HTTPD task after 20
  seconds without send progress during repeated `EAGAIN`/`EWOULDBLOCK`
  results;
- close sessions after other unrecoverable asynchronous send results;
- keep the response alive until HTTPD invokes `destroy()`;
- keep close intent terminal and retry a temporarily rejected close request at
  a bounded cadence;
- reject ESPHome versions other than `2026.7.0` so the override cannot silently
  outlive its upstream base.

Remove this override once the lifecycle fix is available in the ESPHome version
pinned by `.github/requirements-esphome.txt`.

The queued close callback relies on the existing ESPHome lifecycle in which
`httpd_stop()` joins the HTTPD task before the EventSource handler is destroyed.
