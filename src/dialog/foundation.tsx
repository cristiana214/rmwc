import { MDCDialogFoundation } from '@material/dialog';
import {
  closest,
  matches,
  useFoundation,
  FocusTrap,
  createFocusTrap
} from '@rmwc/base';
import { DialogProps } from '.';
import { useRef, useEffect, useMemo } from 'react';

const isScrollable = (el: HTMLElement) => {
  return el.scrollHeight > el.offsetHeight;
};

const areTopsMisaligned = (els: HTMLElement[] | null) => {
  const tops = new Set();
  [].forEach.call(els, (el: HTMLElement) => tops.add(el.offsetTop));
  return tops.size > 1;
};

export const useDialogFoundation = (
  props: DialogProps & React.HTMLProps<any>
) => {
  const focusTrap = useRef<FocusTrap>();
  const defaultButton = useRef<HTMLElement | null>(null);
  const buttons = useRef<HTMLElement[] | null>(null);
  const content = useRef<HTMLElement | null>(null);

  const { foundation, ...elements } = useFoundation({
    props,
    elements: {
      rootEl: true
    },
    foundation: ({ rootEl, emit, getProps }) => {
      return new MDCDialogFoundation({
        addClass: (className: string) => rootEl.addClass(className),
        removeClass: (className: string) => rootEl.removeClass(className),
        hasClass: (className: string) => rootEl.hasClass(className),
        addBodyClass: (className: string) =>
          document.body && document.body.classList.add(className),
        removeBodyClass: (className: string) =>
          document.body && document.body.classList.remove(className),
        eventTargetMatches: (target: HTMLElement, selector: string) =>
          matches(target, selector),
        trapFocus: () => {
          try {
            // we don't always have an item to focus
            // so we try catch it
            focusTrap.current?.activate();
          } catch (err) {}
        },
        releaseFocus: () => focusTrap.current?.deactivate(),
        isContentScrollable: () =>
          !!content.current && isScrollable(content.current),
        areButtonsStacked: () => areTopsMisaligned(buttons.current),
        getActionFromEvent: (
          evt: React.SyntheticEvent<HTMLElement> & Event
        ) => {
          const element = closest(
            evt.target,
            `[${MDCDialogFoundation.strings.ACTION_ATTRIBUTE}]`
          );

          return (
            element?.getAttribute(
              MDCDialogFoundation.strings.ACTION_ATTRIBUTE
            ) || null
          );
        },
        clickDefaultButton: () => {
          defaultButton.current?.click();
        },
        reverseButtons: () => {
          buttons.current?.reverse();

          buttons.current?.forEach(
            button =>
              button.parentElement && button.parentElement.appendChild(button)
          );
        },
        notifyOpening: () => {
          emit('onOpen', {});
          getProps().onStateChange?.('opening');
        },
        notifyOpened: () => {
          emit('onOpened', {});
          getProps().onStateChange?.('opened');
        },
        notifyClosing: (action: string) => {
          emit('onClose', action ? { action } : {});
          getProps().onStateChange?.('closing');
        },
        notifyClosed: (action: string) => {
          emit('onClosed', action ? { action } : {});
          getProps().onStateChange?.('closed');
        },
        getInitialFocusEl: () =>
          document.querySelector(
            `[${MDCDialogFoundation.strings.INITIAL_FOCUS_ATTRIBUTE}]`
          )
      });
    }
  });

  const { rootEl } = elements;

  const handleDocumentKeydown = useMemo(
    () => foundation.handleDocumentKeydown.bind(foundation),
    [foundation]
  );

  // Set refs on mount
  useEffect(() => {
    // Default button
    defaultButton.current =
      (rootEl.ref &&
        rootEl.ref.querySelector<HTMLElement>(
          `[${MDCDialogFoundation.strings.BUTTON_DEFAULT_ATTRIBUTE}]`
        )) ||
      null;

    // Buttons
    buttons.current =
      rootEl.ref &&
      [].slice.call(
        rootEl.ref.querySelectorAll(MDCDialogFoundation.strings.BUTTON_SELECTOR)
      );

    // Content
    content.current =
      rootEl.ref?.querySelector(MDCDialogFoundation.strings.CONTENT_SELECTOR) ||
      null;
  }, [rootEl.ref]);

  // Create the focus trap
  useEffect(() => {
    const container =
      rootEl.ref &&
      rootEl.ref.querySelector<HTMLElement>(
        MDCDialogFoundation.strings.CONTAINER_SELECTOR
      );

    if (container) {
      focusTrap.current = createFocusTrap(container, {
        initialFocus: undefined,
        escapeDeactivates: false,
        clickOutsideDeactivates: true
      });
    }
  }, [rootEl.ref]);

  // Handle open and close
  useEffect(() => {
    if (props.open) {
      if (!foundation.isOpen()) {
        document.addEventListener('keydown', handleDocumentKeydown);
        foundation.open();

        // Don't like this fix
        // This corrects an issue where the default button was stealing focus
        // When something else in the dialog should have it
        setTimeout(() => {
          if (
            defaultButton.current &&
            document.activeElement !== defaultButton.current &&
            document.activeElement?.classList.contains('mdc-dialog__button')
          ) {
            defaultButton.current.focus();
          }
        }, 200);
      }
    } else {
      if (foundation.isOpen()) {
        document.removeEventListener('keydown', handleDocumentKeydown);
        foundation.close();
      }
    }
  }, [props.open, foundation, handleDocumentKeydown]);

  const handleClick = (evt: React.MouseEvent & MouseEvent) => {
    props.onClick?.(evt);
    return foundation.handleClick(evt);
  };

  const handleKeydown = (evt: React.KeyboardEvent & KeyboardEvent) => {
    props.onKeyDown?.(evt);
    return foundation.handleKeydown(evt);
  };

  rootEl.setProp('onClick', handleClick, true);
  rootEl.setProp('onKeyDown', handleKeydown, true);

  return { foundation, ...elements };
};