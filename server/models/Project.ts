export class Project {
    private id!: number;
    private name!: string;
    private description!: string;
    private client!: string;
    private category!: string[];
    private images!: string[];
    private cover!: string;
    private hasNext!: boolean;
    private hasPrevious!: boolean;
    private link!: string;

    public Project(id: number, name: string, description: string, client:string, category:string[], images: string[]) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.client = client;
        this.category = category;
        this.images = images;
    }

    public setId(id: number) {
        this.id = id;
    }

    public getId() {
        return this.id;
    }

    public setName(name: string) {
        this.name = name;
    }

    public getName() {
        return this.name;
    }
    public setDescription(description: string) {
        this.description = description;
    }

    public getDescription() {
        return this.description;
    }
    public setClient(client: string) {
        this.client = client;
    }

    public getClient() {
        return this.client;
    }
    public setCategory(category: string[]) {
        this.category = category;
    }

    public getCategory() : string[] {
        return this.category;
    }
    public setImages(images: string[]) {
        this.images = images;
    }

    public getImages() : string[] {
        return this.images;
    }
    public setCover(cover: string) {
        this.cover = cover;
    }

    public getCover() : string {
        return this.cover;
    }

    public setHasNext(hasNext: boolean) {
        this.hasNext = hasNext;
    }

    public getHasNext() : boolean {
        return this.hasNext;
    }
    public setHasPrevious(hasPrevious: boolean) {
        this.hasPrevious = hasPrevious;
    }

    public getHasPrevious() : boolean {
        return this.hasPrevious;
    }

    private setLink(link: string) {
        this.link = link;
    }

    private getLink() : string {
        return this.link;
    }
}