import { v4 as uuidv4 } from "uuid";

export default class Task {
    constructor(title, description, date, priority){
        this._title = title;
        this._description = description;
        this._date = date;
        this._priority = priority;
        this._id = uuidv4();
        // project must be here too;
    }

    get title() {
        return this._title;
    }
    set title(value) {
        // some validation here? or just on the frontend?
        this._title = value;
    }

    get description() {
        return this._description;
    }
    set description(value) {
        // some validation here? or just on the frontend?
        this._description = value;
    }

    get date() {
        return this._date;
    }
    set date(value) {
        // some validation here? or just on the frontend?
        this._date = value;
    }

    get priority() {
        return this._priority;
    }
    set priority(value) {
        // some validation here? or just on the frontend?
        this._priority = value;
    }
    
    get id() {
        return this._id;
    }
}