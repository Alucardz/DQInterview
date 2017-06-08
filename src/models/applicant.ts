export class Applicant {
    constructor(parameters) {
        for (let f in parameters) {
            this[f] = parameters[f];
        }
    }


    private _Id: string;
    public get Id(): string {
        return this._Id;
    }
    public set Id(v: string) {
        this._Id = v;
    }

    private _Name: string;
    public get Name(): string {
        return this._Name;
    }
    public set Name(v: string) {
        this._Name = v;
    }

}