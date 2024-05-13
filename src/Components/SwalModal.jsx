import Swal from "sweetalert2";
export const swalFn = (icon, text, timer = null) => {
  const swalConfigure = {
    icon: icon || "warning",
    showConfirmButton: false,
    text: text,
    timer: timer || undefined,
    allowOutsideClick: false,
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `,
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `,
    },
  };
  if (timer) {
    swalConfigure.timer = timer;
    swalConfigure.showConfirmButton = false;
  } else {
    swalConfigure.showConfirmButton = true;
  }

  Swal.fire(swalConfigure);
};
