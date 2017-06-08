export class QuestionCategory {
    
    private _Id : number;
    public get Id() : number {
        return this._Id;
    }
    public set Id(v : number) {
        this._Id = v;
    }

    
    private _categoryName : string;
    public get CategoryName() : string {
        return this._categoryName;
    }
    public set CategoryName(v : string) {
        this._categoryName = v;
    }
    
    
}