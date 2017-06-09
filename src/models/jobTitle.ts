export class JobTitle {
    constructor(private fields: any) {
        // Quick and dirty extend/assign fields to this model
        for (let f in fields) {
            this[f] = fields[f];
        }
    }

    
    private _Id : number;
    public get Id() : number {
        return this._Id;
    }
    public set Id(v : number) {
        this._Id = v;
    }
        
    private _Desc : string;
    public get Desc() : string {
        return this._Desc;
    }
    public set Desc(v : string) {
        this._Desc = v;
    }
    

}