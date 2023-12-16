export class Language {
    languageCode: string;
    name: string;
    description: string;
    lastUpdatedBy: string | null = null;
    lastUpdateDate: string | null = null;
    deleted: boolean = false;
    deletedBy: string | null = null;
    deletedDate: string | null = null; 
    createdBy: string;
    createdDate: string;

    constructor() {
        this.languageCode = '';
        this.name = '';
        this.description = '';
        this.createdBy = '';
        this.createdDate = '';
    }

}
