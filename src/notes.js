const fs = require("fs");
//const chalk = require("chalk");

const addNote = (title, body) => {
	const notes = loadnotes();

	//const duplicateNotes = notes.filter((note) => note.title === title);
	
	const duplicateNote = notes.find((note) => note.title === title);

	if (duplicateNote) {
		return "Duplicate Title Found";
	}
		
	notes.push( {
		title: title,
		body: body
	} );

	saveNotes(notes);
	
	return "Note Added";
};

const removeNote = (title) => {
	const notes = loadnotes();
                                                                                                                                                                                                                                                  
	const keepNotes = notes.filter((note) => note.title !== title);
	
	saveNotes(keepNotes);
	
	if (keepNotes.length === notes.length) {
		return "No Note Found";
	} else {
		return "Note Removed";
	}
};

const listNotes = () => {
	const notes = loadnotes();

	return notes;

	// notes.forEach((note) => {
	// 	console.log(note.title + " : " + note.body);
	// });
};

const readNote = (title) => {
	const notes = loadnotes();
	const note = notes.find((note) => note.title === title);
	if (note) {
		return note;
	}
	else
		return "No Note Found";
};

const saveNotes = (notes)=> {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync("notes.json", dataJSON);
};

const loadnotes = () => {
	try {
		var dataBuffer = fs.readFileSync("notes.json");
		const dataJSON = dataBuffer.toString();
		const data = JSON.parse(dataJSON);
		return data;
	} catch (e) {
		return [];
	}
};

module.exports = {
	addNote: addNote,
	removeNote: removeNote,
	listNotes: listNotes,
	readNote: readNote,
};