import type { Component } from 'solid-js';
import {SimpleTable} from './simpletable/simpletable'
import logo from './logo.svg';
import styles from './App.module.css';

const table_header = [
  {"id": "email", "label": "email" },
  {"id": "gender", "label": "gender" },
  {"id": "part", "label": "part" }]

const table_data = [
    {"id": 1, "email": "jane1@gmail.com", "gender": "female",   "part": "web expert"},
    {"id": 2, "email": "jane2@gmail.com", "gender": "female",   "part": "android expert"},
    {"id": 3, "email": "jane3@gmail.com", "gender": "male",     "part": "c# expert"},
    {"id": 4, "email": "jane4@gmail.com", "gender": "male",     "part": "ai expert"},
    {"id": 5, "email": "jane5@gmail.com", "gender": "male",     "part": "blockchain expert"},
    {"id": 6, "email": "jane6@gmail.com", "gender": "female",   "part": "food expert"},
    {"id": 7, "email": "jane7@gmail.com", "gender": "male",     "part": "sports expert"},
    {"id": 8, "email": "jane8@gmail.com", "gender": "male",     "part": "art expert"}
]

const App: Component = () => {
  return (
    <div class={styles.App}>
      <SimpleTable rows={table_data } columns={table_header}></SimpleTable>
    </div>
  );
};

export default App;
