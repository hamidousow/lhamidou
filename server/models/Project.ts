class Project {
    private id!: number;
    private name!: string;
    private description!: string;
    private client!: string;
    private category!: string[];
    private images!: string[];

    public Project(name: string, description: string, client:string, category:string[], images: string[]) {
        this.name = name;
        this.description = description;
        this.client = client;
        this.category = category;
        this.images = images;
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
}