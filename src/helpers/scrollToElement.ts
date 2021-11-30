export const scrollToElement = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const pinElementParent = element.parentElement;
    const currentTopPosition = window.scrollY;

    const parentTopPosition = pinElementParent!.getBoundingClientRect().top;
    const scrollToPosition = currentTopPosition + parentTopPosition;
    window.scrollTo(0, scrollToPosition);
  }
};
