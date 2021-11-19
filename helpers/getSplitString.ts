export function getSplitString(stringToSplit: string, separator: string) {
  var arrayOfStrings = stringToSplit.split(separator);
  if (arrayOfStrings.length > 1) {
    return arrayOfStrings
      .map((text, index) =>
        index === arrayOfStrings.length - 1 ? text : `${text};<br/>`
      )
      .join(' ');
  } else {
    return arrayOfStrings.join(' ');
  }
}
