import React from "react";
import { Link, Route } from "react-router-dom";

import Notes from "./components/Notes/Notes";
import Note from "./components/Note/Note";
import AddFolder from "./components/AddFolder/AddFolder";
import AddNote from "./components/AddNote/AddNote";

import Context from "./Context";

import { API_ENDPOINT } from "./config";
import ErrorPage from "./components/ErrorBoundary/ErrorPage";
import "./App.css";

export default class App extends React.Component {
  state = {
    folders: [],

    notes: [],
    addFolder: (e, history) => {
      e.preventDefault();
      const newFolder = {
        name: e.target.folder_name.value,
      };

      fetch(`${API_ENDPOINT}/folders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newFolder),
      })
        .then((res) => res.json())
        .then((newFolder) => {
          this.setState(
            {
              folders: [...this.state.folders, newFolder],
            },

            () => {
              e.target.reset();
              history.push("/");
            }
          );
        })
        .catch((error) => {
          this.setState({
            error: error.message,
          });
        });
    },
    addNote: (e, history) => {
      e.preventDefault();

      let newNote = {
        name: e.target.note_name.value,
        modified: new Date(),
        folderId: e.target.folderId.value,
        content: e.target.note_content.value,
      };
      fetch(`${API_ENDPOINT}/notes`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newNote),
      })
        .then((res) => res.json())

        .then((newNote) => {
          this.setState(
            {
              notes: [...this.state.notes, newNote],
            },

            () => {
              e.target.reset();
              history.push("/");
            }
          );
        })
        .catch((error) => {
          this.setState({
            error: error.message,
          });
        });
    },
    deleteNote: (id, history) => {
      fetch(`${API_ENDPOINT}/notes/${id}`, {
        method: "DELETE",
      })
        .then((res) => {
          this.setState(
            {
              notes: this.state.notes.filter((n) => n.id !== id),
            },

            () => {
              history.push("/");
            }
          );
        })
        .catch((error) => {
          this.setState({
            error: error.message,
          });
        });
    },
  };

  componentDidMount() {
    fetch(`${API_ENDPOINT}/notes`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong please try again later.");
        }
        return response.json();
      })
      .then((notes) => {
        this.setState({
          notes,
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message,
        });
      });

    fetch(`${API_ENDPOINT}/folders`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong please try again later.");
        }
        return response.json();
      })
      .then((folders) => {
        this.setState({
          folders,
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message,
        });
      });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        <div className="App">
          <ErrorPage>
            <header>
              <h1>
                <Link to="/">Noteful</Link>
              </h1>
            </header>
            <main>
              <aside>
                <ul>
                  {this.state.folders.map((f) => (
                    <li key={f.id}>
                      <Link to={`/folders/${f.id}`}>{f.name}</Link>
                    </li>
                  ))}
                </ul>
                <Link to="/addfolder">
                  <button>Add Folder</button>
                </Link>
              </aside>
              <section>
                <Route exact path="/" component={Notes} />
                <Route path="/folders/:folderid" component={Notes} />
                <Route path="/notes/:noteid" component={Note} />
                <Route path="/addfolder" component={AddFolder} />
                <Route path="/addnote" component={AddNote} />
                <Link to="/addnote">
                  <button>Add Note</button>
                </Link>
              </section>
            </main>
          </ErrorPage>
        </div>
      </Context.Provider>
    );
  }
}
