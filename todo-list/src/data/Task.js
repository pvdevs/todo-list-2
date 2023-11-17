import { v4 as uuidv4 } from "uuid";

export default class Task {
    constructor(title, description, date, priority){
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.id = uuidv4();
        // project must be here too;
    }

    /*
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
    */
}