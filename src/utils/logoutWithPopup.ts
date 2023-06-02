import Swal from "sweetalert2";

export const logOutWithPopup = (fb: () => void) => {
  Swal.fire({
    title: "Are you sure to log out?",
    icon: "info",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
    background: "#2b2b2b",
    color: "#f1f2f6",
  }).then((result) => {
    if (result.isConfirmed) {
      fb();
      Swal.fire({
        text: "You have logged out!",
        icon: "success",
        toast: true,
        timer: 1500,
        background: "#2b2b2b",
        color: "#f1f2f6",
      });
    }
  });
};
