export class QuestionCategory {
    
    private _Id : string;
    public get Id() : string {
        return this._Id;
    }
    public set Id(v : string) {
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