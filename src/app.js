export function render(oldRender) {
  if (navigator.userAgent.indexOf('Windows') === -1) {
    alert(123)
    oldRender();
  }else{
    alert(456)
    oldRender();
  }
}
