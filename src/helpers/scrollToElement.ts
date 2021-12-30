export const scrollToElement = (id: string) => {
  const element = document.getElementById(id);

  if (element) {
    const pinElementParent = element.parentElement;
    const currentTopPosition = window.scrollY;
    const pinElementParentClass =
      pinElementParent?.classList.contains('pin-spacer');

    const elementTopPosition = element!.getBoundingClientRect().top;
    const parentTopPosition = pinElementParent!.getBoundingClientRect().top;

    const scrollToPosition = pinElementParentClass
      ? currentTopPosition + parentTopPosition
      : currentTopPosition + elementTopPosition;
    window.scrollTo(0, scrollToPosition);
  }
};
