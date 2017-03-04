# notes-node
Notes node project
Download and execute below command in the folder path

node app.js --help

Commands:
  add     Add a new note
  list    List all notes
  read    Read a note
  remove  Remove a note

Options:
  --help  Show help                                                    [boolean]

For individual operation help:
node app.js add --help

app.js add

Options:
  --help       Show help                                               [boolean]
  --title, -t  Title 0f note                                          [required]
  --body, -b   Body of the note                                       [required]
  
Example:

node add app.js -t="Note1" -b="This is a new note 1"

Added notes will be present in the notes-data.json file.
