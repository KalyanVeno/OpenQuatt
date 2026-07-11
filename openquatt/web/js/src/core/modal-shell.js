import { escapeHtml } from "./html.js";
import { state } from "./state.js";

export function renderModalShell({
  modalId,
  titleId,
  kicker,
  title,
  bodyMarkup = "",
  backdropClass = "",
  modalClass = "",
  role = "dialog",
  ariaModal = role === "dialog",
  ariaLive = "",
  sectionAttributes = "",
  closeAction = "",
  closeLabel = "",
}) {
  const backdropClasses = `oq-helper-modal-backdrop${state.overviewTheme === "dark" ? " oq-helper-modal-backdrop--dark" : ""}${backdropClass ? ` ${backdropClass}` : ""}`;
  const modalClasses = `oq-helper-modal${modalClass ? ` ${modalClass}` : ""}`;
  const closeMarkup = closeAction
    ? `<button class="oq-helper-modal-close" type="button" data-oq-action="${escapeHtml(closeAction)}" aria-label="${escapeHtml(closeLabel)}">×</button>`
    : "";
  const ariaAttributes = [
    `role="${escapeHtml(role)}"`,
    ariaModal ? 'aria-modal="true"' : "",
    ariaLive ? `aria-live="${escapeHtml(ariaLive)}"` : "",
    `aria-labelledby="${escapeHtml(titleId)}"`,
    sectionAttributes,
  ].filter(Boolean).join(" ");

  return `
    <div class="${backdropClasses}" data-oq-modal="${escapeHtml(modalId)}">
      <section class="${modalClasses}" ${ariaAttributes}>
        <div class="oq-helper-modal-head">
          <div>
            <p class="oq-helper-modal-kicker">${escapeHtml(kicker)}</p>
            <h2 class="oq-helper-modal-title" id="${escapeHtml(titleId)}">${escapeHtml(title)}</h2>
          </div>
          ${closeMarkup}
        </div>
        ${bodyMarkup}
      </section>
    </div>
  `;
}
