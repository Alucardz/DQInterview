export class User {
    constructor(private fields?: any) {
        // Quick and dirty extend/assign fields to this model
        for (let f in fields) {
            this[f] = fields[f];
        }
    }
    
    private _Id: number;
    public get Id(): number {
        return this._Id;
    }
    public set Id(v: number) {
        this._Id = v;
    }

    private _Email: string;
    public get Email(): string {
        return this._Email;
    }
    public set Email(v: string) {
        this._Email = v;
    }


    private _DisplayName: string;
    public get DisplayName(): string {
        return this._DisplayName;
    }
    public set DisplayName(v: string) {
        this._DisplayName = v;
    }



}