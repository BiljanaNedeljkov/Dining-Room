export class Restaurant {
    name: string;
    cuisine: string;
    _id: number;
    description: string;
    location: string;
    price: number;
    days: Object;
    rating: number;

    constructor(obj?:any){
        this.name = obj && obj.name || null;
        this.cuisine = obj && obj.cuisine || null;
        this._id = obj && obj._id || null;
        this.description = obj && obj.description || null;
        this.location = obj && obj.location || null;
        this.price = obj && obj.price || null;
        this.days = obj && obj.days || null;
        this.rating = obj && obj.rating || null;
    }

}