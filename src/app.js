export function render(oldRender) {
  if (navigator.userAgent.indexOf('Windows') === -1) {
    oldRender();
  }else{
    oldRender();
  }
}
