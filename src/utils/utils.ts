function copyToClipboard(input: HTMLInputElement): void {
  // Copy to mobile device
  input.select();
  input.setSelectionRange(0, 99999);

  // Copy to any other device
  navigator.clipboard.writeText(input?.value);
}

export { copyToClipboard };
