import vClickOutside from "click-outside-vue3"

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vClickOutside)
})

// export default defineNuxtPlugin((nuxtApp) => {
//   let handleOutsideClick;
//   nuxtApp.vueApp.directive("closable", {
//     mounted(el, binding, vnode) {
//       handleOutsideClick = (e) => {
//         e.stopPropagation();
//         const { handler, exclude } = binding.value;
//         let clickedOnExcludedEl = false;
//         exclude.forEach((refName) => {
//           if (!clickedOnExcludedEl) {
//             const excludedEl = vnode.context.$refs[refName];
//             clickedOnExcludedEl = excludedEl.contains(e.target);
//           }
//         });
//         if (!el.contains(e.target) && !clickedOnExcludedEl) {
//           vnode.context[handler]();
//         }
//       };
//       document.addEventListener("click", handleOutsideClick);
//       document.addEventListener("touchstart", handleOutsideClick);
//     },
  
//     unbind() {
//       document.removeEventListener("click", handleOutsideClick);
//       document.removeEventListener("touchstart", handleOutsideClick);
//     },
//   });
// });
