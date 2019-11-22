// get the note data from the inputs, save it to the db and update the view
$(function() {
    
    // delete note
    $(".delnote").on("click", function(event) {
        var id = $(this).data("id");

        // send delete request
        $.ajax("/api/notes" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log("deleted ID: ", id);
                // reload page to get updated list
                location.reload();
            }
        );
    });


    // create note
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newNote = {
            title: $("#title").val().trim(),
            body: $("#notebod").val().trim()
        };

        // send POST request
        $.ajax("/api/notes", {
            type: "POST",
            data: newNote
        }).then(
            function() {
                console.log("created new note");
                // reload page for updated list
                location.reload();
            }
        );
    });


    // update note
    $(".update-form").on("submit", function(event) {
        event.preventDefault();

        var updatedNote = {
            title: $("#title").val().trim(),
            body: $("#notebod").val().trim()
        };

        var id = $(this).data("id");

        // send POST req
        $.ajax("/api/notes/" + id, {
            type: "PUT",
            data: updatedNote
        }).then(
            function() {
                console.log("note updated");
                // reload page for updated list
                location.assign("/");
            }
        );
    });

});
