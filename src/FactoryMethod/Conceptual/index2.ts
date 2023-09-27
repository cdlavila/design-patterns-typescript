((): void => {
    /**
     * How to implement Factory Method?
     *
     * 1. Declare base product class/interface, this will be returned by
     *  factory class and their subclasses.
     *
     * Base product:
     *  - BaseCar
     *
     * 2. Implement concrete products subclasses that inherit/implement
     *  the base product class/interface.
     *
     * Concrete products:
     *  - MastodonCar
     *  - RhinoCar
     *
     * 3. Declare base factory class/interface that returns objects that match
     *  the base product, not the concrete ones.
     *
     * Base factory:
     *  - CarFactory
     *
     * 4. Implement concrete factories subclasses that inherit/implement
     *  the base factory class/interface. These classes will return concrete
     *  products in their factory method.
     *
     * Concrete factories:
     *  - MastodonCarFactory
     *  - RhinoCarFactory
     *
     */

    /** STEP 1
     * Base product class
     */
    interface BaseProduct {
        someOperation(): void;
    }

    /** STEP 2
     * Concrete products
     */
    class ConcreteProductA implements BaseProduct {
        /** @implements */
        someOperation(): void {
            console.log('[PRODUCT A] operation');
        }
    }

    class ConcreteProductB implements BaseProduct {
        /** @implements */
        someOperation(): void {
            console.log('[PRODUCT B] operation');
        }
    }

    /** STEP 3
     * Base factory class
     */
    interface ProductFactory {
        createProduct(): BaseProduct;
    }

    /** STEP 4
     * Concrete factories
     */
    class ConcreteProduct1Factory implements ProductFactory {
        /** @implements */
        createProduct(): BaseProduct {
            return new ConcreteProductA();
        }
    }

    class ConcreteProduct2Factory implements ProductFactory {
        /** @implements */
        createProduct(): BaseProduct {
            return new ConcreteProductB();
        }
    }

    /**
     * Main function
     */
    function appFactory(factory: ProductFactory): void {
        const product: BaseProduct = factory.createProduct();
        product.someOperation();
    }

    appFactory(new ConcreteProduct1Factory());
    appFactory(new ConcreteProduct2Factory());
})();
