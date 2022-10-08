export class Character {
    private character: string;
    private special: boolean;

    constructor(value: string | boolean) {
        if (typeof value === 'boolean') {
            if (!value) {
                throw 'boolean cannot be false';
            }
            
            this.special = true;
            return;
        }

        if (value.length !== 1) {
            throw 'string must have length of 1';
        }

        this.character = value;
        this.special = false;
    }

    isSpecial() {
        return this.special;
    }

    getCharacter() {
        return this.character;
    }
}