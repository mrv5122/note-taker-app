// delete a note
$("button").on("click", function(event) {
        var id = $(this).data("id");

        // send delete request
        $.ajax("/api/notes" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log("deleted ID: ", id);
                console.log(this);
                // reload page to get updated list
                location.reload();
            }
        );
    });


    // create note and save to db
    $("#saveNewNote").on("submit", function(event) {
        event.preventDefault();

        var newNote = {
            title: $("#newNoteTitle").val().trim(),
            body: $("#newNoteBody").val().trim()
        };

        // send POST request
        $.ajax("/api/notes", {
            type: "POST",
            data: newNote
        }).then(
            function() {
                console.log("created new note", newNote);
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
