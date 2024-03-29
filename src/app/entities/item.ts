export interface Item {
    id: number;
    name: string;
    isRound: boolean;
    price: number;
}

export const items: Item[] = [
    {
        id: 1,
        name: "Basketball",
        isRound: true,
        price: 10.99
    },
    {
        id: 2,
        name: "Football",
        isRound: true,
        price: 20.99
    },
    {
        id: 3,
        name: "Baseball",
        isRound: true,
        price: 30.99
    },
    {
        id: 4,
        name: "Tennisball",
        isRound: true,
        price: 1.99
    }
]