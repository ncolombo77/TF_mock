import { productsModel } from "../../models/products.model.js"

export class ProductManagerMongo {

    constructor() {
        this.model = productsModel;
    };


    // Obtener todos los productos
    async get() {
        try {
            const products = await this.model.find().lean();
            return products;
        }
        catch(error) {
            console.log(`Se produjo un error al leer todos los productos (método getAll()): ${ error.message }`);
            throw new error(`Se produjo un error al leer todos los productos.`);
        }
    };


    async getWithPaginate(query, options) {
        try {
            const result = await this.model.paginate(query, options);
            return result;
        } catch (error) {
            throw new error(`Se produjo un error al leer todos los productos paginados.`);
        }
    };


    // Obtener un procto por id.
    async getById(id) {
        try {
            const product = await this.model.findById(id);
            return product;
        }
        catch(error) {
            console.log(`Se produjo un error al leer el producto ${ id } (método getById()): ${ error.message }`);
            throw new error(`Se produjo un error al leer el producto.`);
        }
    };


    // Grabar un producto
    async save(productInfo) {
        try {
            const productCreated = await this.model.create(productInfo);
            return productCreated;
        }
        catch(error) {
            console.log(`Se produjo un error al grabar un producto (método save()): ${ error.message }`);
            throw new error(`Se produjo un error al crear el producto.`);
        }
    };


    // Actualizar un producto
    async updateProduct(productId, product) {
        try {
            const productUpdated = await this.model.findByIdAndUpdate(productId, product, {new: true});
            return productUpdated;
        }
        catch(error) {
            console.log(`Se produjo un error al actualizar un producto (método update()): ${ error.message }`);
            throw error;
        }
    };


    // Eliminar un producto
    async delete(id) {
        try {
            const productDeleted = await this.model.delete(id);
            return productDeleted;
        }
        catch(error) {
            console.log(`Se produjo un error al eliminar un producto (método delete()): ${ error.message }`);
            throw new error(`Se produjo un error al eliminar el producto.`);
        }
    };
    
    
}