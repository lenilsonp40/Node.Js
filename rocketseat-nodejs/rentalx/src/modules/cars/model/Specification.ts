import { v4 as uuidV4 } from "uuid";

class Specification {
    id?: string; // ? Depois do valor indica que é opcional lá na category.
    name: string;
    description: string;
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Specification }