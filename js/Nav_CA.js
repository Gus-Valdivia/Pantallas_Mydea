let count_n = document.getElementById("btn_count_nav");
let count2_n = document.getElementById("btn_count2_nav");
let edt_n = document.getElementById("btn_edit_nav");
let sav_n = document.getElementById("btn_sav_nav");
let sav2_n = document.getElementById("btn_sav2_nav");
let res_n = document.getElementById("btn_res_nav");
let lgout_n = document.getElementById("btn_lgout_nav");
let fomr = document.getElementById("formcerrar");
let accadm = document.getElementById("btn_admin");

count_n.addEventListener("click", () => {
    window.location.href = "Cuenta_Usuario.jsp";
});

count2_n.addEventListener("click", () => {
    window.location.href = "Cuenta_Usuario.jsp";
});

edt_n.addEventListener("click", () => {
    window.location.href = "Editar_Cuenta.jsp";
});

sav_n.addEventListener("click", () => {
    window.location.href = "GuardadosCA.jsp";
});

sav2_n.addEventListener("click", () => {
    window.location.href = "GuardadosCA.jsp";
});

res_n.addEventListener("click", () => {
    window.location.href = "Comentarios_Hechos.jsp";
});

accadm.addEventListener("click", ()=>{
    window.location.href = "Acciones_Admin.jsp";
});

lgout_n.addEventListener("click", (event) => {
    event.preventDefault();
    Swal.fire({
        title: "¿Está seguro de cerrar sesión?",
        text: "Una vez que cierre sesión, deberá volver a iniciar sesión para acceder.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "rgba(244, 55, 112, 0.8)",
        cancelButtonColor: "#971A40",
        confirmButtonText: "Aceptar",
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            fomr.submit();
        }
    });
});
