import Swal from "sweetalert2";
import 'animate.css';
export const SwalConfirmModalFn = (title, text = "", ctext,cbtntext="yes") => {


    return Swal.fire({
        title: title,
        text: text,
        icon: "warning",
        showCancelButton: true,
        allowOutsideClick:false,
        cancelButtonText: "cancel!",
        confirmButtonText: cbtntext,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        // buttons: {
        //     confirm : {text:'Ubah',className:'bg-red-400'},
        //     cancel : {className:"bg-green-300"}
        // },
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            return Swal.fire({
                title: 'Success',
                text: ctext,
                icon: "success"
            }).then(() => true); // Return true after displaying success message
        } else {
            return false; // Return false if user cancels
        }
    });
};
