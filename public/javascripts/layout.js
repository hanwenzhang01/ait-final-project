const deleteButton = document.getElementById("deleteButton");
const form = document.getElementById("deleteForm");

deleteButton.addEventListener("click", function (){
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
        document.getElementById('delete').value="yes";
        console.log('submitting form');
        form.submit();
        Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
        });
        }
    });
});