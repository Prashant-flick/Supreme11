import { PrismaClient } from '@prisma/client';
import { Prisma } from '@prisma/client';

class PrismaSingleton {
    private static instance: PrismaClient;

    private constructor() { }

    public static getInstance() {
        if (!this.instance) {
            this.instance = new PrismaClient();
        }

        return this.instance;
    }
}

export default PrismaSingleton.getInstance();