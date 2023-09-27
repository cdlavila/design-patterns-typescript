/**
 * Build an HTTP Adapter Factory that can create Express or Fastify adapters
 * for GET, POST, PUT, PATCH, and DELETE.
 */

// 1
interface HttpAdapter {
    get(): void;
    post(): void;
    put(): void;
    patch(): void;
    delete(): void;
}

// 2
class ExpressHttpAdapter implements HttpAdapter {
    /** @implements */
    get(): void {
        console.log('GET using Express');
    }

    /** @implements */
    post(): void {
        console.log('POST using Express');
    }

    /** @implements */
    put(): void {
        console.log('PUT using Express');
    }

    /** @implements */
    patch(): void {
        console.log('PATCH using Express');
    }

    /** @implements */
    delete(): void {
        console.log('DELETE using Express');
    }
}

class FastifyHttpAdapter implements HttpAdapter {
    /** @implements */
    get(): void {
        console.log('GET using Fastify');
    }

    /** @implements */
    post(): void {
        console.log('POST using Fastify');
    }

    /** @implements */
    put(): void {
        console.log('PUT using Fastify');
    }

    /** @implements */
    patch(): void {
        console.log('PATCH using Fastify');
    }

    /** @implements */
    delete(): void {
        console.log('DELETE using Fastify');
    }
}

// 3
interface HttpAdapterFactory {
    makeAdapter(): HttpAdapter;
}

// 4
class ExpressHttpAdapterFactory implements HttpAdapterFactory {
    /** @implements */
    makeAdapter(): HttpAdapter {
        return new ExpressHttpAdapter();
    }
}

class FastifyHttpAdapterFactory implements HttpAdapterFactory {
    /** @implements */
    makeAdapter(): HttpAdapter {
        return new FastifyHttpAdapter();
    }
}

// App
function appFactory(factory: HttpAdapterFactory): void {
    const httpAdapter: HttpAdapter = factory.makeAdapter();
    httpAdapter.get();
    httpAdapter.post();
    httpAdapter.put();
    httpAdapter.patch();
    httpAdapter.delete();
}

console.log('--- Express ---');
appFactory(new ExpressHttpAdapterFactory());
console.log('--- Fastify ---');
appFactory(new FastifyHttpAdapterFactory());
